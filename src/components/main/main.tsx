import { useCards } from '../../hooks/card.hooks';
import { CardPreviewList } from '../card-preview-list/card-preview-list';
import styles from './main.module.scss';

export const Main = () => {
    const cards = useCards();

    return (
        <div className={styles['main-container']}>
            <section className={styles['main-section']}>
                <article className={styles['main-section-title']}>
                    <span>About me</span>
                </article>
                <article className={styles['main-section-body']}>
                    <span>
                        I am a full stack web developer, with experience in sprint-boot, nodejs, angular and vue.
                    </span>
                    <span>
                        I like using Opengl and Lwjgl as a hobby, I have created 2 engines using Lwjgl, the most recent
                        one is still under development.
                    </span>
                </article>
            </section>

            <section className={styles['main-section']}>
                <span className={styles['main-section-title']}>My Skills</span>
                <article className={styles['main-section-body']}>
                    <CardPreviewList cards={cards} />
                </article>
            </section>
        </div>
    );
};
