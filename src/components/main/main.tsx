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
                        Hi! I'm Saar, a passionate and experienced Full-Stack Developer with years of hands-on work
                        building and maintaining large-scale projects—both frontend and backend. I've worked with a wide
                        range of technologies and enjoy optimizing systems using smart, efficient techniques.
                    </span>
                    <span>
                        I bring strong technical and interpersonal skills to the table. I'm a fast learner and creative
                        problem solver, able to build fully featured systems quickly and with high quality. I also
                        specialize in maintaining, developing, and optimizing existing platforms, elevating them to a
                        professional, production-ready level.
                    </span>
                    <span>
                        I'm also deeply interested in other areas of the programming world, including 3D graphics, game
                        development, low-level systems, and software design and architecture. You can check out some of
                        the projects I've worked on over on my GitHub page.
                    </span>
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
