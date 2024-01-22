import { useState } from 'react';
import styles from './App.module.scss';
import { PortfolioItem } from './components/portfolio-item/portfolio-item';
import { ListItem } from './components/list-item/list-item';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div className={styles.background}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1 className={styles['title-name']}>Ricardo Nieblas</h1>
                        <p className={styles['title-role']}>
                            Computer Science Student &amp; Software Developer
                        </p>
                        <p className={styles['title-description']}>
                            I&apos;m a 6th semester Computer Science student at CETYS University,
                            building the best version of myself, one step at a time. I love to learn
                            new things, always looking for new challenges to overcome and new ways
                            to improve my skills.
                        </p>
                        <div className={styles['title-links']}>
                            <a href="https://github.com/RicardoNieblas">
                                <i className="devicon-github-original colored"/>
                            </a>
                            <a href="https://www.linkedin.com/in/RicardoNieblas">
                                <i className="devicon-linkedin-plain colored"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.portfolio}>
                        <div className={styles.grid}>
                            <PortfolioItem />
                            <PortfolioItem />
                            <PortfolioItem />
                        </div>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles['timeline-list']}>
                            <h1 className={styles['timeline-title']}>Timeline</h1>
                            <ListItem />
                            <ListItem />
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles['contact-form']}>
                            <form className={styles.form} action="https://getform.io/f/56271e7b-d6fb-46b5-beb1-31ccd168a23d" method="POST">
                                <h1 className={styles['form-title']}>Contact</h1>
                                <input
                                    type="text"
                                    className={styles['form-name']}
                                    placeholder="Name"
                                    name={'name'}
                                />
                                <input
                                    type="text"
                                    className={styles['form-email']}
                                    name={'email'}
                                    placeholder={'Email'}
                                />
                                <textarea
                                    className={styles['form-message']}
                                    rows={10}
                                    placeholder="Message"
                                    name={"message"}
                                ></textarea>
                                <button className={styles['form-button']} type="submit">Work With Me</button>
                            </form>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <p className={styles['footer-copyright']}>
                            &copy; {new Date().getFullYear()} Ricardo Nieblas. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
