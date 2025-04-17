'use client';

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import styles from './contact-me.module.scss';

export interface ContactMeProps {
    showText?: boolean;
}

export const ContactMe = ({ showText }: ContactMeProps) => {
    return (
        <div className={styles['contact-me-container']}>
            <a href="mailto:saartako25@gmail.com" className={styles['contact-me-href']}>
                <FaEnvelope size={28} />
                {showText && <span>saartako25@gmail.com</span>}
            </a>
            <a href="https://github.com/Saar25" className={styles['contact-me-href']}>
                <FaGithub size={28} />
                {showText && <span>Saar25</span>}
            </a>
            <a href="https://www.linkedin.com/in/saar-tako-304b67215" className={styles['contact-me-href']}>
                <FaLinkedin size={28} />
                {showText && <span>saar-tako-304b67215</span>}
            </a>
        </div>
    );
};
