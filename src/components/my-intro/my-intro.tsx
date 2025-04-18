'use client';

import TypewriterComponent from 'typewriter-effect';
import styles from './my-intro.module.scss';

export interface MyIntroProps {}

export const MyIntro = ({}: MyIntroProps) => {
    return (
        <article className={styles['my-intro-container']}>
            <span className={styles['my-intro-label-hello']}>Hi! 😄 My name is </span>
            <span className={styles['my-intro-label-name']}>Saar Jacob Tako</span>
            <TypewriterComponent
                options={{
                    strings: ['< Software Engineer \\>', '< Full stack developer \\>', '< Tech Enthusiast \\>'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: styles['my-intro-label-typing'],
                }}
            />{' '}
            <span className={styles['my-intro-label-info']}>
                I'm a passionate and experienced Full-Stack Developer with hands-on expertise in building and
                maintaining large-scale projects — both frontend and backend. I enjoy working across the stack and
                thrive on solving complex problems with clean, efficient code.
            </span>
            <span className={styles['my-intro-label-info']}>
                I bring strong technical and interpersonal skills to the table. I'm a fast learner and creative
                problem-solver, able to build complete systems quickly and at high quality. I also specialize in
                optimizing, maintaining, and elevating existing platforms to production-ready standards.
            </span>
            <span className={styles['my-intro-label-info']}>
                Beyond full-stack development, I'm deeply interested in 3D graphics, game development, low-level
                systems, and software architecture. You can explore some of my projects on my GitHub page.
            </span>
        </article>
    );
};
