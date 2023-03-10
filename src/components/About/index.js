import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faFlask } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>Highly driven and enthusiastic Full-Stack Developer with a passion for cutting-edge technologies and a hunger for tackling diverse and complex projects. My unwavering confidence in my abilities allows me to approach challenges with optimism and a can-do attitude, always striving to push myself to new heights.</p>
                    <p>My current skillset includes: JavaScript, HTML, CSS, React.js, Python, Flask, Ruby, Git, JSON/REST, and SQLAlchemy. Continual learning is a top priority for me, and I am always working to expand my skillset and stay up to date with the latest advancements in the field.</p>
                    <p>My self-assured nature stems from my deep understanding and experience in the field, as well as my eagerness to continue learning and growing as a developer.</p>
                    <p>To describe myself, I am a fun and personable individual who possesses a unique blend of determination, confidence, and optimism, making me an ideal candidate for any team.</p>

                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faFlask} color="#EC4D28" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faPython} color="#DD0031" />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About