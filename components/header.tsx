import styles from '../styles/Header.module.css'
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { List } from "phosphor-react";

export default function Header() {
    return (
        <div>
            <div className={styles.header}>
                <img src="images/profileCropped.jpg" alt="Imagem minha" className={styles.imageProfile} />
                <div>
                    <div className='w-screen flex justify-end items-center mt-5'>
                        <h2 className='text-4xl mx-5'>Home</h2>
                        <h2 className='text-4xl mx-5'>Skills</h2>
                        <h2 className='text-4xl mr-10'>Projects</h2>
                        <a href="https://www.linkedin.com/in/igor-gabriel-martins-ramos/">
                            <LinkedinLogo size={80} />
                        </a>
                        <a href="https://github.com/IgorGabrielM">
                            <GithubLogo size={80} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.headerCompact}>
                <div className={styles.headerItem}>
                    <div className={styles.headerBox}>
                        <List size={32} color="white" weight="fill" className={styles.headerItemIcon} />
                    </div>
                </div>
            </div>
        </div>

    )
}