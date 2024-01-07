import Link from 'next/link';
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
                        <Link href="#banner">
                            <h2 className='text-3xl mx-5'>Home</h2>
                        </Link>
                        <Link href="#skills">
                            <h2 className='text-3xl mx-5'>Skills</h2>
                        </Link>
                        <Link href="#projects">
                            <h2 className='text-3xl mr-10'>Projects</h2>
                        </Link>
                        <Link href="#about-me">
                            <h2 className='text-3xl mr-10'>Sobre</h2>
                        </Link>
                        <Link href="https://www.linkedin.com/in/igor-gabriel-martins-ramos/" target='_blank'>
                            <LinkedinLogo size={80} />
                        </Link>
                        <Link href="https://github.com/IgorGabrielM" target='_blank'>
                            <GithubLogo size={80} />
                        </Link>
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