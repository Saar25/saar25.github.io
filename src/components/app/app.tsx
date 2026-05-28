'use client';

import { useState, useEffect } from 'react';
import { Main } from '../main/main';
import styles from './app.module.scss';

const NAV_ITEMS = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

export const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={styles['app-container']}>
            <header
                className={`${styles['app-header']} ${scrolled ? styles['app-header--scrolled'] : ''}`}
            >
                <div className={styles['app-header-inner']}>
                    <nav className={styles['app-nav']}>
                        {NAV_ITEMS.map(item => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={styles['app-nav-link']}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <button
                        className={`${styles['app-menu-btn']} ${menuOpen ? styles['app-menu-btn--open'] : ''}`}
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
                <div
                    className={`${styles['app-mobile-nav']} ${menuOpen ? styles['app-mobile-nav--open'] : ''}`}
                >
                    {NAV_ITEMS.map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={styles['app-mobile-nav-link']}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </header>
            <main className={styles['app-main']}>
                <Main />
            </main>
        </div>
    );
};
