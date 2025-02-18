import { useTranslation } from 'react-i18next';
import { projects } from '../assets/data/projects';
import { useState } from 'react';
import { Button, Stack } from '@mui/material';
import ShowMoreHandler from '../utils/showMore';

const Projects = () => {
  const INITIAL_OFFSET = 6;
  const { t } = useTranslation(['info']);
  const [offSet, setOffSet] = useState(INITIAL_OFFSET);

  const handleLoadMore = () => {
    const showMoreHandler = new ShowMoreHandler(projects.length, offSet, 3);
    setOffSet(showMoreHandler.handleShowMore());
  };

  return (
    <section id='Projects'>
      <h2>{t('projectTitle')}</h2>
      <div className='projects'>
        {projects.slice(0, offSet).map(project => (
          <a
            className='project'
            href={project.status === 'active' ? project.link : null}
            target='_blank'
            rel='noreferrer'
            key={project.id}
            style={{ textDecoration: 'none' }}
            title={t('SeePage')}
          >
            <div>
              <div className='titleandlink'>
                <h3>{project.title}</h3>
              </div>
              <div className='pageinfo'>
                <p>{t(project.info)}</p>
              </div>

              <div className='techs'>
                {project.tech.map((tech, index) => (
                  <div key={index} className='techs'>
                    {Object.values(tech).map((value, index) => (
                      <div className='tech' key={index}>
                        <p>{value}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <Stack direction='row' spacing={2} className='load-more'>
        {offSet < projects.length && (
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

export default Projects;
