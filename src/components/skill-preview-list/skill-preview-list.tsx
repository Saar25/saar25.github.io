'use client';

import { Skill } from '../../types';
import { SkillPreview } from '../skill-preview/skill-preview';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './skill-preview-list.module.scss';

export interface SkillPreviewListProps {
    skills: readonly Readonly<Skill>[];
}

export const SkillPreviewList = ({ skills }: SkillPreviewListProps) => {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

    return (
        <div className={styles['skill-preview-list-container']}>
            <span className={styles['skill-preview-list-label']}>
                I am skilled in a wide range of technologies that enable me to build dynamic, interactive, and scalable
                web applications.
                <br />
                Below are some of the core tools and concepts I use to create efficient, high-quality systems:
            </span>
            <div ref={ref} className={styles['skill-preview-list-items']}>
                {skills.map((skill, index) => (
                    <div
                        key={skill}
                        className={`${styles['skill-preview-list-item']} ${isVisible ? styles['skill-preview-list-item--visible'] : ''}`}
                        style={{ transitionDelay: `${index * 50}ms` }}
                    >
                        <SkillPreview skill={skill} />
                    </div>
                ))}
            </div>
            <span className={styles['skill-preview-list-label']}>
                I&apos;m a quick and curious learner, and I love diving into new tools, frameworks, and ideas
            </span>
        </div>
    );
};
