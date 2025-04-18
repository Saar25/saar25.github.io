'use client';

import styles from './my-intro.module.scss';

export interface MyIntroProps {}

export const MyIntro = ({}: MyIntroProps) => {
    return (
        <article className={styles['my-intro-container']}>
            <span className={styles['my-intro-label-hello']}>Hi! 😄 My name is </span>
            <span className={styles['my-intro-label-name']}>Saar Jacob Tako</span>
            <span className={styles['my-intro-label-info']}>
                Hi! I'm Saar, a passionate and experienced Full-Stack Developer with years of hands-on work building and
                maintaining large-scale projects—both frontend and backend. I've worked with a wide range of
                technologies and enjoy optimizing systems using smart, efficient techniques.
            </span>
            <span className={styles['my-intro-label-info']}>
                I bring strong technical and interpersonal skills to the table. I'm a fast learner and creative problem
                solver, able to build fully featured systems quickly and with high quality. I also specialize in
                maintaining, developing, and optimizing existing platforms, elevating them to a professional,
                production-ready level.
            </span>
            <span className={styles['my-intro-label-info']}>
                I'm also deeply interested in other areas of the programming world, including 3D graphics, game
                development, low-level systems, and software design and architecture. You can check out some of the
                projects I've worked on over on my GitHub page.
            </span>
        </article>
    );
};
