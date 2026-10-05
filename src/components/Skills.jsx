import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useIcons } from '../context/Icons';
import { ActivateAnomation } from '../Animations/ScrollAnimation';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';

const Skills = ({ theme }) => {
  const { iconsdark, iconslight } = useIcons();
  const [skills, setSkills] = useState([]);
  const { t } = useTranslation(['info']);

  useEffect(() => {
    const icons = theme === 'dark' ? iconsdark : iconslight;
    setSkills(Object.entries(icons).map(([name, icon]) => ({ name, icon })));
    ActivateAnomation();
  }, [theme, iconsdark, iconslight]);

  const renderSkill = (skill, index) => (
    <Tooltip key={index} title={t(`skillTooltip_${skill.name}`)} arrow>
      <img src={skill.icon} alt={skill.name} />
    </Tooltip>
  );

  return (
    <section id='Skills'>
      <h2>{t('skillsTitle')}</h2>
      <div className='scroller'>
        {ActivateAnomation() ? (
          <div className='scroller__inner'>
            {skills.map(renderSkill)}
            {skills.map((skill, index) => renderSkill(skill, `dup-${index}`))}
          </div>
        ) : (
          <div className='scroller__inner'>{skills.map(renderSkill)}</div>
        )}
      </div>
    </section>
  );
};

Skills.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Skills;
