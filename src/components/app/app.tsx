import { ContactMe } from '../contact-me/contact-me';
import { Main } from '../main/main';
import styles from './app.module.scss';

export const App = () => {
    return (
        <div className={styles['app-container']}>
            <header className={styles['app-header']}>
                <section className={styles['app-header-section']}></section>
                <section className={styles['app-header-section']}>
                    <ContactMe />
                </section>
            </header>
            <main className={styles['app-main']}>
                <Main />
            </main>
            <footer className={styles['app-footer']}>
                <span>footer</span>
            </footer>
        </div>
    );
};
