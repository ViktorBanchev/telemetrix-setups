import styles from "./navbar.module.css"

export default function NavBar() {
    return (
        <nav>
            <div className="logo-container">
                Logo
            </div>
            <div className={styles.searchContainer}>
                <input type="text" placeholder="search... " />
            </div>
            <div className={styles.navBtnContainer}>
                <ul>
                    <li>Repository</li>
                    <li>Telemetry</li>
                    <li>Leaderboard</li>
                    <li>Toolbox</li>
                    <div className={`${styles.userBtnContainer} ${styles.userBtns}`}>
                        <li>Upload setup</li>
                        <li>My setups</li>
                        <li>Logout</li>
                    </div>
                    <div className={styles.userBtnContainer}>
                        <li>Login</li>
                        <li>Register</li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}