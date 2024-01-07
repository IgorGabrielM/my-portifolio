import styles from '../styles/Projects.module.css'
import { useState } from "react";
import { ProjectsModel } from "../models/Projects.model";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Pagination } from 'swiper';

export default function Projects({ id }: { id: string }) {
    const [projects, setProjects]: [ProjectsModel[], any] = useState([
        {
            id: 1,
            name: 'Cine Explore',
            description: `Apresento com entusiasmo o Cine-Explore, meu mais recente projeto desenvolvido com Next.js! 🚀 Este catálogo de filmes permite a busca por títulos, acesso ao elenco e informações detalhadas sobre suas produções favoritas. 🌟
            ✨ Principais Recursos:
            🔍 Busca de Filmes
            🌐 Detalhes do Elenco
            📱 Totalmente Responsivo
            
            🛠️ Tecnologias Utilizadas:
            Next.js
            Jest (Testes Unitários)
            Cypress (Testes E2E)
            Tailwind CSS
            Consumo de api externa(TMDB) via axios
            Arquitetura DDD (Domain-Driven Design)
            
            👩‍💻 Desenvolvimento Sólido:
            Testes Unitários com Jest para robustez
            Testes End-to-End com Cypress para integridade
            Layout responsivo com Tailwind CSS
            Estrutura modular seguindo Domain-Driven Design
            
            🚀 Como Experimentar:
            Link do repositório GitHub: https://lnkd.in/dh3H2EZT
            Link de acesso ao site: https://lnkd.in/d--gTePg
            
            Explore o mundo do cinema com o Cine-Explore! 🎉🍿
            `,
            images: [
                'cine-explore/home-lg.png',
            ],
            link: 'https://github.com/IgorGabrielM/cine-explore',
            language: {
                title: 'Next',
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            },
        },
        {
            id: 2,
            name: 'Rent App',
            description: `
                Após um longo período de planejamento e desenvolvimento, estou animado em compartilhar o resultado final deste projeto.
                Bem-vindo ao RentApp, um aplicativo completo para facilitar o gerenciamento de locações de equipamentos.
                O RentApp é uma aplicação dedicada a simplificar o processo e gerenciamento de locações, oferecendo funcionalidades robustas para criar contratos, exibir equipamentos associados a eles e permitir a assinatura digital. Além disso, o aplicativo inclui um filtro de calendário intuitivo que destaca os contratos próximos ao vencimento em datas específicas. 
            
                🛠️ Tecnologias Utilizadas:
                Ionic Angular
                Cypress (Testes E2E)
                Tailwind CSS
                Armazenamento de dados via Firebase(Adotado para gerenciar a autenticação, armazenamento de dados e imagens, garantindo segurança e eficiência no backend)
                Arquitetura DDD (Domain-Driven Design)
                
                Para mais informações, segue o link do repositório: https://lnkd.in/da5xp6M6
            `,
            images: [
                'rent-app/banner-rent-app.png',
            ],
            link: 'https://github.com/IgorGabrielM/rent-app',
            language: {
                title: 'Ionic',
                image: 'https://www.svgrepo.com/show/327369/logo-ionic.svg',
            },
        },
        /* {
            id: 3,
            name: 'Cine-explore',
            description: 'Com a ideia de fazer uma pokedex em mente bastava executar, comecei buscando várias APIs com dados de vários pokemons, então decidi usar a mais famosa, a PokeAPI',
            image: 'https://github.com/IgorGabrielM/my-pokedex/raw/main/src/assets/page.png',
            link: 'https://github.com/IgorGabrielM/my-pokedex',
            language: {
                title: 'Angular',
                image: 'https://www.svgrepo.com/show/327335/logo-angular.svg',
            },
        } */
    ])

    return (
        <div id={id}>
            <div className={styles.title}>
                <h2 className='mb-5 flex justify-center text-4xl'>Projetos</h2>
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
                                            <strong className='text-4xl text-black font-extrabold my-2'>{project.name}</strong>
                                            <div className='p-2 bg-slate-300 rounded-full'>
                                                <img src={project.language.image} alt={project.language.title} className='w-12' />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-center'>
                                            <img className='w-80 h-48 object-cover rounded-lg mt-3' src={'/images/projects/' + project.images[0]} alt={project.name + ' image'} />
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
                                            <img className='w-80 h-48 object-cover rounded-lg mt-3' src={'/images/projects/' + project.images[0]} alt={project.name + ' image'} />
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
                                            <img className='w-80 h-48 object-cover rounded-lg mt-3' src={'/images/projects/' + project.images[0]} alt={project.name + ' image'} />
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