import styles from '../styles/Home.module.css'

import Header from '../components/header';
import Banner from '../components/banner';
import Skills from '../components/skills';
import Projects from '../components/projects';
import AboutMe from '../components/aboutMe';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <AboutMe></AboutMe>
    </div>
  )
}
