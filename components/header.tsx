import Link from 'next/link';
import styles from '../styles/Header.module.css'
import { GithubLogo, LinkedinLogo, XCircle } from "phosphor-react";
import { List } from "phosphor-react";
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className={styles.header}>
                <img src="images/profileCropped.jpg" alt="Imagem minha" className={styles.imageProfile} />
                <div>
                    <div className='w-screen flex justify-end items-center mt-5'>
                        <Link href="#banner">
                            <h2 className='text-2xl mx-5'>Home</h2>
                        </Link>
                        <Link href="#skills">
                            <h2 className='text-2xl mx-5'>Skills</h2>
                        </Link>
                        <Link href="#projects">
                            <h2 className='text-2xl mr-10'>Projects</h2>
                        </Link>
                        <Link href="#about-me">
                            <h2 className='text-2xl mr-10'>Sobre</h2>
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
                <div className='w-full flex justify-end mr-3 mt-2'>
                    <List size={42} color="white" weight="fill" onClick={() => setIsOpen(!isOpen)} className={isOpen ? "bg-gray-700 p-2 rounded-t-md" : "" + " p-2"} />
                    <div id="dropdownDivider" className={!isOpen ? "hidden" : "visible" + "z-10 absolute divide-y top-9 rounded-lg rounded-tr-none w-fit bg-gray-700 divide-gray-600"}>
                        <ul className="p-2 text-md text-gray-200 cursor-pointer" aria-labelledby="dropdownDividerButton">
                            <li>
                                <Link href="#banner" className='block px-4 py-2' onClick={() => setIsOpen(!isOpen)}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#skills" className='block px-4 py-2' onClick={() => setIsOpen(!isOpen)}>
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className='block px-4 py-2' onClick={() => setIsOpen(!isOpen)}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#about-me" className='block px-4 py-2' onClick={() => setIsOpen(!isOpen)}>
                                    Sobre
                                </Link>
                            </li>
                            <li className='w-fit flex gap-2 mx-auto'>
                                <Link href="https://www.linkedin.com/in/igor-gabriel-martins-ramos/" target='_blank' className='block py-2' onClick={() => setIsOpen(!isOpen)}>
                                    <LinkedinLogo size={25} />
                                </Link>
                                <Link href="https://github.com/IgorGabrielM" target='_blank' className='block py-2' onClick={() => setIsOpen(!isOpen)}>
                                    <GithubLogo size={25} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}