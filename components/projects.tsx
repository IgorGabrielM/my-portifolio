import styles from '../styles/Projects.module.css'
import { useState } from "react";
import { ProjectsModel } from "../models/Projects.model";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Pagination } from 'swiper';

export default function Projects() {
    const [projects, setProjects]: [ProjectsModel[], any] = useState([
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            <div className={styles.title}>
                <h2 className='mb-5 flex justify-center'>Projetos</h2>
            </div>
            <div className='ml-5'>
                <Swiper
                    className={styles.swiperScreenLarge}
                    spaceBetween={70}
                    slidesPerView={3.5}
                >
                    {
                        projects !== null ? projects.map((project) => {
                            return (
                                <SwiperSlide key={project.id}>
                                    <div className={styles.cardProjectItem}>
                                        <div className="flex justify-between px-5 my-2">
                                            <strong className='text-4xl text-black my-2'>{project.name}</strong>
                                            <img src={project.language.image} alt={project.language.title} className='w-12' />
                                        </div>
                                        <div className='w-full flex justify-center'>
                                            <img className='w-80 rounded-lg mt-3' src={project.image} alt={project.name + 'image'} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }) : 'Nenhum projeto encontrado'
                    }
                </Swiper>
                <Swiper
                    className={styles.swiperScreenMid}
                    spaceBetween={200}
                    slidesPerView={2}
                >
                    {
                        projects !== null ? projects.map((project) => {
                            return (
                                <SwiperSlide key={project.id}>
                                    <div className={styles.cardProjectItem}>
                                        <div className="flex justify-between px-5 my-2">
                                            <strong className='text-4xl text-black my-2'>{project.name}</strong>
                                            <img src={project.language.image} alt={project.language.title} className='w-12' />
                                        </div>
                                        <div className='w-full flex justify-center'>
                                            <img className='w-80 rounded-lg mt-3' src={project.image} alt={project.name + 'image'} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }) : 'Nenhum projeto encontrado'
                    }
                </Swiper>
                <Swiper
                    className={styles.swiperScreenSmall}
                    slidesPerView={1.2}
                    spaceBetween={150}
                    modules={[Pagination]}
                >
                    {
                        projects !== null ? projects.map((project) => {
                            return (
                                <SwiperSlide key={project.id}>
                                    <div className={styles.cardProjectItem}>
                                        <div className="flex justify-between px-5 my-2">
                                            <strong className='text-4xl text-black my-2'>{project.name}</strong>
                                            <img src={project.language.image} alt={project.language.title} className='w-12' />
                                        </div>
                                        <div className='w-full flex justify-center'>
                                            <img className='w-80 rounded-lg mt-3' src={project.image} alt={project.name + 'image'} />
                                        </div>
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