import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ShowMoreHandler from '../utils/showMore';
import { research_and_presentations } from '../assets/data/researchs';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';

const Research = () => {
  const { t } = useTranslation(['info']);
  const INITIAL_OFFSET = 3;
  const [offSet, setOffSet] = useState(INITIAL_OFFSET);

  const handleLoadMore = () => {
    const showMoreHandler = new ShowMoreHandler(
      research_and_presentations.length,
      offSet,
      1
    );
    setOffSet(showMoreHandler.handleShowMore());
  };
  return (
    <section id='Research'>
      <h2>{t('research_and_presentationsTitle')}</h2>
      <div className='researches'>
        {research_and_presentations.slice(0, offSet).map(research => (
          <div className='research' key={research.title}>
            <div className='title'>
              <a
                href={research.link ? research.link : ''}
                target='_blank'
                rel='noreferrer'
                style={{
                  textDecoration: 'none'
                }}
              >
                <h3>{research.title}</h3>
              </a>
            </div>
            <div
              className='authors'
              style={{
                display: 'flex'
              }}
            >
              <p>{research.authors.join('; ')}</p>
            </div>
            <div className='publicationInfo'>
              <div className='event'>
                <p>
                  {research.publication.title}
                  {research.publication.pages &&
                    `, ${research.publication.pages}`}
                  {research.publication.event &&
                    `, ${research.publication.event}`}
                </p>
              </div>
              <div className='ISBN'>
                {research.publication.isbn && (
                  <p>
                    <span className='title'> ISBN: </span>
                    <span className='id'>{research.publication.isbn}</span>
                  </p>
                )}
              </div>
              {research.publication.publisher && (
                <p>
                  <span className='title'>{t('publisher')}:</span>{' '}
                  {research.publication.publisher}
                </p>
              )}
              <div className='eventPlace'>
                {research.publication.date && (
                  <p>{research.publication.date}</p>
                )}
                {research.publication.location && (
                  <p> - {research.publication.location}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Stack direction='row' spacing={2} className='load-more'>
        {offSet < research_and_presentations.length && (
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

export default Research;
