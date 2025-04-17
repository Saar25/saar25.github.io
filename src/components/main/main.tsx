import wave0 from '../../assets/wave-0.svg';
import wave1 from '../../assets/wave-1.svg';
import { useCards } from '../../hooks/card.hooks';
import { CardPreviewList } from '../card-preview-list/card-preview-list';
import { ContactMe } from '../contact-me/contact-me';
import styles from './main.module.scss';

export const Main = () => {
    const cards = useCards();

    return (
        <div className={styles['main-container']}>
            <section className={styles['main-section']}>
                <article className={styles['main-section-title']}>
                    <span>About me</span>
                </article>
                <article className={`${styles['main-section-body']} ${styles['about-me']}`}>
                    <span>
                        Hi, I'm Saar, a passionate Full-Stack Developer with a deep love for crafting scalable,
                        efficient, and user-centric web applications. With expertise in both frontend and backend
                        technologies, I enjoy bridging the gap between beautiful, intuitive interfaces and robust,
                        high-performance server-side systems.
                    </span>
                    <span>
                        I thrive in collaborative environments and am always excited about learning new tools and
                        technologies to deliver impactful solutions. When I'm not coding, you'll find me exploring
                        open-source projects or learning about the latest in software development trends.
                    </span>
                    <span>Let's build something amazing together!</span>
                </article>
            </section>

            <img src={wave0.src} className={styles['main-wave-section']} />

            <section className={styles['main-section']}>
                <span className={styles['main-section-title']}>My Skills</span>
                <article className={styles['main-section-body']}>
                    <CardPreviewList cards={cards} />
                </article>
            </section>

            <img src={wave1.src} className={styles['main-wave-section']} />

            <section className={styles['main-section']}>
                <span className={styles['main-section-title']}>Contact me</span>
                <ContactMe showText />
            </section>
        </div>
    );
};
