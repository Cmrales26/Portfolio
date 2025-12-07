import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ProfessionalExperience as ProfesionalData } from '../assets/data/professional';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ShowMoreHandler from '../utils/showMore';
import { Button, Stack } from '@mui/material';

const ProfessionalExperience = () => {
  const INITIAL_OFFSET = 3;
  const { t } = useTranslation(['info']);
  const [offSet, setOffSet] = useState(INITIAL_OFFSET);

  const handleLoadMore = () => {
    const showMoreHandler = new ShowMoreHandler(
      ProfesionalData.length,
      offSet,
      1
    );
    setOffSet(showMoreHandler.handleShowMore());
  };

  const sortedData = [...ProfesionalData].sort((a, b) => {
    if (a.to === 'present' && b.to !== 'present') return -1;
    if (a.to !== 'present' && b.to === 'present') return 1;

    const dateA = new Date(a.to === 'present' ? '9999-12-31' : a.to);
    const dateB = new Date(b.to === 'present' ? '9999-12-31' : b.to);

    return dateB.getTime() - dateA.getTime(); // Orden descendente por fecha
  });

  return (
    <section id='professional'>
      <h2>{t('professionalTitle')}</h2>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0
          }
        }}
      >
        {sortedData.slice(0, offSet).map((experience, key) => (
          <TimelineItem key={key}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className='timeline-content'>
              <h3>{experience.company}</h3>
              <div className='position-from'>
                <p>{t(experience.position)}</p>
                <p>
                  {experience.from} -{' '}
                  {experience.to === 'present' ? t('present') : experience.to}
                </p>
              </div>
              <p className='description'>{t(experience.description)}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Stack direction='row' spacing={2} className='load-more'>
        {offSet < ProfesionalData.length && (
          <Button onClick={handleLoadMore}>{t('loadMore')}</Button>
        )}
        {offSet > INITIAL_OFFSET && (
          <Button onClick={() => setOffSet(INITIAL_OFFSET)}>
            {t('loadLess')}
          </Button>
        )}
      </Stack>
    </section>
  );
};

export default ProfessionalExperience;
