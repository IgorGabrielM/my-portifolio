import styles from '../styles/skill.module.css'
import {useEffect, useState} from "react";

export default function Skills(){
    const [skills, handleSkills] = useState([
        {
            id: 1,
            title: 'Angular',
            description: 'Desenvolvo aplicações profissionais com angular com dashboards complexos'
        },
        {
            id: 2,
            title: 'Ionic',
            description: 'Desenvolvo apps mobilefirst completos usando o ionc'
        },
        {
            id: 3,
            title: 'Next',
            description: 'Desenvolvo aplicações pro hobbiie pois é uma linguagem mt funcional e divertida'
        }
    ])

    useEffect(() => {
        console.log(skills);
    }, [])


    return(
        <div className={styles.cardContainer}>
            <h1 className='text-8xl'>Habilisdades</h1>
            <div className="flex justify-center">
                <div className={styles.selectorSkill}>
                    { skills !== null ? skills.map((skill) => {
                        return  <h1 className={styles.optionSkill} key={skill.id}> {skill.title} </h1>
                    }): <h1>Erro no sistema</h1> }
                </div>
            </div>
        </div>
    )
}