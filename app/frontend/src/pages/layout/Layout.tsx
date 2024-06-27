import { Outlet, NavLink, Link } from "react-router-dom";

import BKI from "../../assets/bendigoKanganTogether.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>BKInsight</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li className={styles.headerNavLeftMargin}>
                                <a href="https://www.kangan.edu.au/" target={"_blank"} title="BKI link">
                                    <img src={BKI} alt="BKI logo" aria-label="Link to BKI Website" width="400px" height="200x" className={styles.githubLogo} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <div className={styles.mainContent}>
                <Outlet />
            </div>

            <div className={styles.footer}>
                BKInsight can make mistakes. Always check important information.
            </div>
        </div>
    );
};

export default Layout;
