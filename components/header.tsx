import styles from '../styles/Header.module.css'
import {GithubLogo, LinkedinLogo} from "phosphor-react";

export default function Header(){
    return(
        <div className={styles.header}>
            <img src="images/profileCropped.jpg" alt="Imagem minha" className={styles.imageProfile}/>
            <div>
                <div className='w-screen flex justify-end items-center mt-5'>
                    <h1 className='text-5xl mx-5'>Home</h1>
                    <h1 className='text-5xl mx-5'>Skills</h1>
                    <h1 className='text-5xl mr-5 mr-10'>Projects</h1>
                    <a href="https://www.linkedin.com/in/igor-gabriel-martins-ramos/">
                        <LinkedinLogo size={80}/>
                    </a>
                    <a href="https://github.com/IgorGabrielM">
                        <GithubLogo size={80} />
                    </a>
                </div>
            </div>
        </div>
    )
}