import wave0 from '../../assets/wave-0.svg';
import wave1 from '../../assets/wave-1.svg';
import { skills } from '../../constants';
import { ContactMe } from '../contact-me/contact-me';
import { MyIntro } from '../my-intro/my-intro';
import { SkillPreviewList } from '../skill-preview-list/skill-preview-list';
import styles from './main.module.scss';

export const Main = () => {
    return (
        <div className={styles['main-container']}>
            <section className={styles['main-section']}>
                <MyIntro />

                <img src={wave0.src} className={styles['main-wave']} />
            </section>

            <section className={styles['main-section']}>
                <article className={styles['main-section-content']}>
                    <span className={styles['main-section-title']}>My Skills</span>
                    <article className={`${styles['main-section-body']} ${styles['my-skills']}`}>
                        <SkillPreviewList skills={skills} />
                    </article>
                </article>

                <img src={wave1.src} className={styles['main-wave']} />
            </section>

            <section className={`${styles['main-section']} ${styles['contact-me']}`}>
                <article className={styles['main-section-content']}>
                    <span className={styles['main-section-title']}>Contact me</span>
                    <ContactMe showText />
                </article>
            </section>
        </div>
    );
};
