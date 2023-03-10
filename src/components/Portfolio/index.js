import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const renderPortfolio = (portfolio) => {
        return(
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box'>
                                <img
                                key={idx}
                                src={port.image}
                                alt="portfolio"
                                className='portfolio-image' />
                                <div className='content'>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <button
                                    className='btn'
                                    onClick={() => window.open(port.url)}
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
        <div className='container portfolio-page'>
            <h1 className='page-title'>
            <AnimatedLetters
            idx={15}
            strArray={'Portfolio'.split('')}
            letterClass={letterClass}
            />
            </h1>
            <div>
                {renderPortfolio(portfolioData.portfolio)}
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Portfolio