import styles from '../styles/Projects.module.css'
import {useState} from "react";
import {ProjectsModel} from "../models/Projects.model";

export default function Projects(){
    const [projects, setProjects]: [ProjectsModel[], any] = useState([
        {
            name: 'Pokedex',
            description: 'Com a ideia de fazer uma pokedex em mente bastava executar, comecei buscando várias APIs com dados de vários pokemons, então decidi usar a mais famosa, a PokeAPI',
            image: 'https://github.com/IgorGabrielM/my-pokedex/raw/main/src/assets/page.png',
            link: 'https://github.com/IgorGabrielM/my-pokedex'
        },
        {
            name: 'Pokedex',
            description: 'Com a ideia de fazer uma pokedex em mente bastava executar, comecei buscando várias APIs com dados de vários pokemons, então decidi usar a mais famosa, a PokeAPI',
            image: 'https://github.com/IgorGabrielM/my-pokedex/raw/main/src/assets/page.png',
            link: 'https://github.com/IgorGabrielM/my-pokedex'
        },
        {
            name: 'Pokedex',
            description: 'Com a ideia de fazer uma pokedex em mente bastava executar, comecei buscando várias APIs com dados de vários pokemons, então decidi usar a mais famosa, a PokeAPI',
            image: 'https://github.com/IgorGabrielM/my-pokedex/raw/main/src/assets/page.png',
            link: 'https://github.com/IgorGabrielM/my-pokedex'
        },
        {
            name: 'Pokedex',
            description: 'Com a ideia de fazer uma pokedex em mente bastava executar, comecei buscando várias APIs com dados de vários pokemons, então decidi usar a mais famosa, a PokeAPI',
            image: 'https://github.com/IgorGabrielM/my-pokedex/raw/main/src/assets/page.png',
            link: 'https://github.com/IgorGabrielM/my-pokedex'
        },
        {
            name: 'Pokedex',
            description: 'Com a ideia de fazer uma pokedex em mente bastava executar, comecei buscando várias APIs com dados de vários pokemons, então decidi usar a mais famosa, a PokeAPI',
            image: 'https://github.com/IgorGabrielM/my-pokedex/raw/main/src/assets/page.png',
            link: 'https://github.com/IgorGabrielM/my-pokedex'
        }
    ])

    return(
        <div>
            <h2 className='text-6xl mb-10 flex justify-center'>Projetos</h2>
            <div className={styles.listProjects}>
                <div className={styles.scrollCard}>
                {
                    projects !== null ? projects.map((project) => {
                        return(
                                <div className={styles.cardProject}>
                                    <h3>{project.name}</h3>
                                    <img src={project.image} alt=""/>
                                    <p className={styles.projectDescription}>{project.description}</p>
                                </div>
                        )}) : 'Nenhum projeto encontrado'
                }
                </div>
            </div>
        </div>
    )
}