import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(['info']);
  return (
    <section id='Aboutme'>
      <h2>{t('aboutTitle')}</h2>
      <p>
        {t('aboutInfo_1')}
        <span className='accenttext'>{t('aboutInfo_1_span')}</span>
        {t('aboutInfo_2')}
        {t('aboutInfo_3')}
        <span className='accenttext'>{t('aboutInfo_3_span')}</span>{' '}
        {t('aboutInfo_4')}
      </p>
    </section>
  );
};

export default About;
