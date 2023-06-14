import styles from '../styles/Projects.module.css'
import { useState } from "react";
import { ProjectsModel } from "../models/Projects.model";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Projects() {
    const [projects, setProjects]: [ProjectsModel[], any] = useState([
        {
            name: 'Pokedex',
            description: 'Com a ideia de fazer uma pokedex em mente bastava executar, comecei buscando várias APIs com dados de vários pokemons, então decidi usar a mais famosa, a PokeAPI',
            image: 'https://github.com/IgorGabrielM/my-pokedex/raw/main/src/assets/page.png',
            link: 'https://github.com/IgorGabrielM/my-pokedex',
            language: {
                title: 'Angular',
                image: 'https://www.svgrepo.com/show/327335/logo-angular.svg',
            },
        },
        {
            name: 'Pokedex',
            description: 'Com a ideia de fazer uma pokedex em mente bastava executar, comecei buscando várias APIs com dados de vários pokemons, então decidi usar a mais famosa, a PokeAPI',
            image: 'https://github.com/IgorGabrielM/my-pokedex/raw/main/src/assets/page.png',
            link: 'https://github.com/IgorGabrielM/my-pokedex',
            language: {
                title: 'Ionic',
                image: 'https://www.svgrepo.com/show/327369/logo-ionic.svg'
            },
        },
        {
            name: 'Pokedex',
            description: 'Com a ideia de fazer uma pokedex em mente bastava executar, comecei buscando várias APIs com dados de vários pokemons, então decidi usar a mais famosa, a PokeAPI',
            image: 'https://github.com/IgorGabrielM/my-pokedex/raw/main/src/assets/page.png',
            link: 'https://github.com/IgorGabrielM/my-pokedex',
            language: {
                title: 'Next',
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            },
        },
        {
            name: 'Pokedex',
            description: 'Com a ideia de fazer uma pokedex em mente bastava executar, comecei buscando várias APIs com dados de vários pokemons, então decidi usar a mais famosa, a PokeAPI',
            image: 'https://github.com/IgorGabrielM/my-pokedex/raw/main/src/assets/page.png',
            link: 'https://github.com/IgorGabrielM/my-pokedex',
            language: {
                title: 'Next',
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            },
        },
        {
            name: 'Pokedex',
            description: 'Com a ideia de fazer uma pokedex em mente bastava executar, comecei buscando várias APIs com dados de vários pokemons, então decidi usar a mais famosa, a PokeAPI',
            image: 'https://github.com/IgorGabrielM/my-pokedex/raw/main/src/assets/page.png',
            link: 'https://github.com/IgorGabrielM/my-pokedex',
            language: {
                title: 'Next',
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            },
        }
    ])

    return (
        <div>
            <h2 className='text-6xl mb-10 flex justify-center'>Projetos</h2>
            <div className='ml-5'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3.5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        projects !== null ? projects.map((project) => {
                            return (
                                <SwiperSlide>
                                    <div className={styles.cardProjectItem}>
                                        <div className="flex justify-between px-5 my-2">
                                            <strong className='text-4xl text-black my-2'>{project.name}</strong>
                                            <img src={project.language.image} alt={project.language.title} className='w-12' />
                                        </div>
                                        <img className='w-80 rounded-lg mt-3' src={project.image} alt={project.name + 'image'} />
                                    </div>
                                </SwiperSlide>
                            )
                        }) : 'Nenhum projeto encontrado'
                    }

                </Swiper>
            </div>

        </div>
    )
}