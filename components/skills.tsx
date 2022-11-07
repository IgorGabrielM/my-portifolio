import styles from '../styles/skill.module.css'
import {useEffect, useState} from "react";

export default function Skills(){
    const [backGroundColor, setBackGroundColor] = useState('#a550ff')
    const [nameSkill, setNameSkill] = useState('Angular')
    const [skills, handleSkills] = useState([
        {
            id: 1,
            title: 'Angular',
            description: 'Desenvolvo aplicações profissionais com angular com dashboards complexos',
            color: '#a550ff',
            image: 'https://www.svgrepo.com/show/327335/logo-angular.svg'
        },
        {
            id: 2,
            title: 'Ionic',
            description: 'Desenvolvo apps mobilefirst completos usando o ionc',
            color: '#55ffa4',
            image: 'https://www.svgrepo.com/show/327369/logo-ionic.svg'
        },
        {
            id: 3,
            title: 'Next',
            description: 'Desenvolvo aplicações pro hobbiie pois é uma linguagem mt funcional e divertida',
            color: '#4C87E0',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        }
    ])

    function getInformation(title:string, color: string){
        setNameSkill(title)
        setBackGroundColor(color);
    }

    useEffect(() => {
    }, [backGroundColor, nameSkill])


    return(
        <div className={styles.cardContainer}>
            <h2 className='text-6xl mt-2'>Habilidades</h2>
            <div className="flex justify-center">
                <div className={styles.selectorSkill}>
                    { skills !== null ? skills.map((skill) => {
                        return  (
                            <div onClick={() => getInformation(skill.title ,skill.color)} className={styles.styleSelected} style={{backgroundColor: skill.color, padding: '20px'}}>
                                <img src={skill.image} alt={skill.title} className={styles.imageIcon}/>
                            </div>
                        )
                    }): <h1>Erro no sistema</h1> }
                </div>
            </div>
            <div className={styles.containerSkill}>
                <div className={styles.cardDescriptionSkill} style={{backgroundColor: backGroundColor}}>
                    <h1 className='text-5xl mt-5 text-black'>{nameSkill}</h1>
                    <div className={styles.barColored}/>
                </div>
            </div>
        </div>
    )
}