import styles from '../styles/skill.module.css'
import { useState } from "react";
import { SkillModel } from "../models/Skill.model";

export default function Skills() {
    const [levelNames, handleLevelNames]: [{ title: string, value: number }[], any] = useState([
        {
            title: "Iniciante",
            value: 1,
        },
        {
            title: "Iniante avançado",
            value: 2,
        },
        {
            title: "Intermediário",
            value: 3,
        },
        {
            title: "Confortável",
            value: 4,
        },
        {
            title: "Avançado",
            value: 5,
        },
    ])

    const [skills, handleSkills]: [SkillModel[], any] = useState([
        {
            id: 1,
            title: 'Angular',
            description: 'Desenvolvo aplicações profissionais com angular com dashboards complexos',
            image: 'https://www.svgrepo.com/show/327335/logo-angular.svg',
            level: 4
        },
        {
            id: 2,
            title: 'Ionic',
            description: 'Desenvolvo apps mobilefirst completos usando o ionc',
            image: 'https://www.svgrepo.com/show/327369/logo-ionic.svg',
            level: 5,
        },
        {
            id: 3,
            title: 'Next',
            description: 'Desenvolvo aplicações pro hobbiie pois é uma linguagem mt funcional e divertida',
            color: '#00CCC0',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            level: 3,
        }
    ])

    return (
        <div className='h-fit p-20 m-10 rounded-md max-[550px]:w-screen max-[550px]:m-0 text-center shadow-[#d79bff69]'>
            <div className={styles.title}>
                <h2 >Habilidades</h2>
            </div>
            <div className="flex justify-center">
                <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 shadow-[#d79bff69] '>
                    {skills !== null ? skills.map((skill) => {
                        return (
                            <div className='w-64 h-fit p-5 bg-zinc-300 rounded-md text-[#181718] shadow-lg shadow-[#d79bff69]'>
                                <div className='text-3xl flex justify-between items-center mx-5'>
                                    <h1>{skill.title}</h1>
                                    <img src={skill.image} className='w-12'></img>
                                </div>
                                <hr className='my-2 border-2 border-gray-400' />
                                <div className='text-2xl  text-left'>
                                    <p>{skill.description}</p>
                                </div>
                                <div className='footer'>
                                    <ol className={styles.progressBar}>

                                        {levelNames !== null ? levelNames.map((levelName, index) => {
                                            return (
                                                <li className={skill.level >= index + 1 ? styles.isComplete : undefined}><span>{levelName.title}</span></li>
                                            )
                                        }) : <h1>Erro no sistema</h1>}
                                    </ol>
                                </div>
                            </div>
                        )
                    }) : <h1>Erro no sistema</h1>}
                </div>
            </div>
        </div >
    )
}