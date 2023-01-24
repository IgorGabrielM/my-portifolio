import styles from "../styles/Banner.module.css";
import TrackVisibility from "react-on-screen";
import { useEffect, useState } from "react";
import 'animate.css'

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["frontend", "mobile"];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <div className="bg-[url('/banner-bg.png')]">
            <div className={styles.bannerPage}>
                <TrackVisibility className={styles.boxTextBanner}>
                    {({ isVisible }) =>
                        <div className={isVisible ? 'animate__animated animate__fadeIn' : ""}>
                            <h1 className="ml-5">{`Olá sou o Igor`}</h1>
                            <h1 className="ml-5">Desenvolvedor <span data-rotate='[ "frontend", "mobile" ]'><span className="wrap">{text}</span></span> </h1>
                        </div>
                    }
                </TrackVisibility>
                <div className={styles.circleFromImage}>
                    <img src='/images/programingBro.png' alt="Pessoa programando" className={styles.programingBro} />
                </div>
            </div>
        </div>
    )
}