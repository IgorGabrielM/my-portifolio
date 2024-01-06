import styles from '../styles/AboutMe.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import { useState } from 'react';


export default function AboutMe() {
    const [professionalXp, setProfessionalXp] = useState<{ id: number, role: string, company: string, duration: string }[]>([
        {
            id: 1,
            role: "Desenvolvedor web",
            company: "Ekaizen Digital",
            duration: "2022 - 2023"
        },
        {
            id: 2,
            role: "Desenvolvedor mobile júnior",
            company: "Ekaizen Digital",
            duration: "2023 - Atual"
        }
    ])

    const [courses, setCourses] = useState<{ id: number, title: string, image: string, duration: string }[]>([
        {
            id: 1,
            title: "Boas Práticas de Desenvolvimento com Angular",
            image: "course-1.png",
            duration: "8 horas"
        }
    ])

    const [formations, setFormations] = useState<{ id: number, title: string, level: string, institution: string, duration: string }[]>([
        {
            id: 1,
            title: "Informatica",
            institution: "FIEC",
            level: "Técnico",
            duration: "jan/2021 - jun/2022"
        },
        {
            id: 2,
            title: "Sistemas para internet",
            institution: "FIAP",
            level: "Tecnólogo",
            duration: "ago/2023 - ago/2025"
        }
    ])



    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='w-10/12 h-fit mx-5 py-8 flex justify-between gap-4'>
                    <div className='w-full border-r-2 border-gray-700'>
                        <div>
                            <h2 className='text-2xl'>Sobre mim</h2>
                            <p className='mx-10 mt-2'>
                                Eu sou Igor Gabriel, um desenvolvedor de software com três anos de experiência,
                                focado principalmente no desenvolvimento de aplicativos utilizando Ionic e com habilidades sólidas em Angular.
                                Minha jornada profissional começou há dois anos, durante os quais contribuí para projetos significativos,
                                priorizando não apenas a funcionalidade, mas também aprimorando a experiência do usuário.
                            </p>
                        </div>
                        <div>
                            <h2 className='text-2xl mt-5 mb-2'>Formação</h2>
                            <Swiper
                                className={styles.swiperScreenLarge}
                                spaceBetween={15}
                                slidesPerView={3.5}
                            >
                                {
                                    formations && formations.length ? formations.map((formation) => {
                                        return (
                                            <SwiperSlide key={formation.id}>
                                                <div className='h-32 px-5 py-2 border-2 border-gray-700 rounded-lg flex flex-col justify-center'>
                                                    <h4 className='font-extrabold text-lg'>{formation.title} - {formation.institution}</h4>
                                                    <p className='text-md'>{formation.level}</p>
                                                    <span className='text-gray-400'>{formation.duration}</span>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }) : 'Nenhuma experiencia profissional'
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className='w-full ml-5'>
                        <div>
                            <h2 className='text-2xl mb-2'>Experiencia profissional</h2>
                            <Swiper
                                className={styles.swiperScreenLarge}
                                spaceBetween={15}
                                slidesPerView={3.5}
                            >
                                {
                                    professionalXp && professionalXp.length ? professionalXp.map((profXp) => {
                                        return (
                                            <SwiperSlide key={profXp.id}>
                                                <div className='h-32 px-5 py-2 border-2 border-gray-700 rounded-lg flex flex-col justify-center'>
                                                    <h4 className='font-extrabold text-lg'>{profXp.role}</h4>
                                                    <p className='text-md'>{profXp.company}</p>
                                                    <span className='text-gray-400'>{profXp.duration}</span>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }) : 'Nenhuma experiencia profissional'
                                }
                            </Swiper>
                        </div>
                        <div className='mt-5'>
                            <h2 className='text-xl mb-2'>Cursos</h2>
                            <Swiper
                                className={styles.swiperScreenLarge}
                                spaceBetween={15}
                                slidesPerView={3.5}
                            >
                                {
                                    courses && courses.length ? courses.map((courses) => {
                                        return (
                                            <SwiperSlide key={courses.id}>
                                                <div className='w-96 h-fit p-5 border-2 border-gray-700 rounded-lg flex flex-col justify-center'>
                                                    <img src={`/images/courses/${courses.image}`} alt='Imagem do certificado do curso' className='w-80 h-fit object-cover rounded-xl' />
                                                    <h4 className='font-extrabold text-lg mt-2'>{courses.title}</h4>
                                                    <span className='text-gray-400'>{courses.duration}</span>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }) : 'Nenhum curso encontrado'
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}