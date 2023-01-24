import styles from '../styles/skill.module.css'
import {useEffect, useState} from "react";
import {SkillModel} from "../models/Skill.model";

export default function Skills(){
    const [selectedSkill, setSelectedSkill]: [SkillModel, any] = useState(
        {
            id: 1,
            title: 'Angular',
            description: 'Desenvolvo aplicações profissionais com angular com dashboards complexos',
            color: '#6236E3',
            image: 'https://www.svgrepo.com/show/327335/logo-angular.svg',
        }
    )
    const [backGroundColor, setBackGroundColor] = useState('#6236E3')
    const [nameSkill, setNameSkill] = useState('Angular')
    const [skills, handleSkills]: [SkillModel[], any] = useState([
        {
            id: 1,
            title: 'Angular',
            description: 'Desenvolvo aplicações profissionais com angular com dashboards complexos',
            color: '#6236E3',
            image: 'https://www.svgrepo.com/show/327335/logo-angular.svg',
        },
        {
            id: 2,
            title: 'Ionic',
            description: 'Desenvolvo apps mobilefirst completos usando o ionc',
            color: '#FF4858',
            image: 'https://www.svgrepo.com/show/327369/logo-ionic.svg'
        },
        {
            id: 3,
            title: 'Next',
            description: 'Desenvolvo aplicações pro hobbiie pois é uma linguagem mt funcional e divertida',
            color: '#00CCC0',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        }
    ])

    const [projects, handleProjects] = useState([])

    function getSkillSelected(skill: SkillModel){
        setSelectedSkill(skill);
    }

    function getInformation(title:string, color: string, skill: SkillModel){
        setNameSkill(title)
        setBackGroundColor(color);
        getSkillSelected(skill)
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
                            <div onClick={() => getInformation(skill.title ,skill.color, skill)} className={styles.styleSelected} style={{backgroundColor: skill.color, padding: '20px'}}>
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
                    <div className='flex'>
                        <div className={styles.description}>
                            <p>
                                { selectedSkill.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}