import { skillLogoDictionary, skillNameDictionary } from '../../constants';
import { Skill } from '../../types';
import styles from './skill-preview.module.scss';

export interface SkillPreviewProps {
    skill: Skill;
}

export const SkillPreview = ({ skill }: SkillPreviewProps) => {
    const name = skillNameDictionary[skill];
    const logo = skillLogoDictionary[skill];

    return (
        <div className={styles['skill-preview-container']}>
            <div className={styles['skill-preview-floating']}>
                <div className={styles['skill-preview-logo-container']}>
                    <img className={styles['skill-preview-logo']} src={logo} alt={skill} />
                </div>
                <span className={styles['skill-preview-title']}>{name}</span>
            </div>
        </div>
    );
};
