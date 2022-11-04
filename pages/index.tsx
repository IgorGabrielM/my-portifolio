import Header from "../components/header";
import Banner from "../components/banner";
import styles from "../styles/Home.module.css";
import Skills from "../components/skills";

export default function Home() {
  return (
    <div className={styles.container}>
        <Header></Header>
        <Banner></Banner>
        <Skills></Skills>
    </div>
  )
}
