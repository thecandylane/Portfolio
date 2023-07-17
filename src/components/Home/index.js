import './index.scss'
// import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = 'chliewe'.split('')
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span className={`${letterClass} _15`}> </span> 
                <span className={`${letterClass} _16`}>J</span> 
                <span className={`${letterClass} _17`}>a</span> 
                <span className={`${letterClass} _18`}>c</span> 
                <span className={`${letterClass} _19`}>k</span> 
                <span className={`${letterClass} _20`}> </span> 
                <span className={`${letterClass} _21`}>S</span> 

                {/* <img src={LogoTitle} alt='developer' /> */}
                <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                </h1>
                <h2>FullStack Software Engineer | Technology Enthusiast</h2>
                <Link to="/contact" className='flat-button'>
                    CONTACT ME
                </Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
        </>
    )
}


export default Home