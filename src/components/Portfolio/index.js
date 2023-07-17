// import Loader from 'react-loaders'
// import './index.scss'
// import AnimatedLetters from '../AnimatedLetters'
// import { useEffect, useState } from 'react'
// import portfolioData from '../../data/portfolio.json';

// const Portfolio = () => {
//     const [letterClass, setLetterClass] = useState('text-animate')
    
//     useEffect(() => {
//         setTimeout(() => {
//             setLetterClass('text-animate-hover')
//         }, 3000)
//     }, [])
    
//     const renderPortfolio = (portfolio) => {
//         return(
//             <div className="images-container">
//                 {
//                     portfolio.map((port, idx) => {
//                         console.log(port.image)
//                         return (
//                             <div className='image-box'>
//                                 <img
//                                 key={idx}
//                                 src={port.image}
//                                 alt="portfolio"
//                                 className='portfolio-image' />
//                                 <div className='content'>
//                                     <p className='title'>{port.title}</p>
//                                     <h4 className='description'>{port.description}</h4>
//                                     <button
//                                     className='btn'
//                                     onClick={() => window.open(port.url)}
//                                     >
//                                         View
//                                     </button>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }

//     return (
//         <>
//         <div className='container portfolio-page'>
//             <h1 className='page-title'>
//             <AnimatedLetters
//             idx={15}
//             strArray={'Portfolio'.split('')}
//             letterClass={letterClass}
//             />
//             </h1>
//             <div>
//                 {renderPortfolio(portfolioData.portfolio)}
//             </div>
//         </div>
//         <Loader type='pacman' />
//         </>
//     )
// }

// export default Portfolio
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const portfolioData = [
        {
            "image": "../assets/images/Candiboard.jfif",
            "title": "Candiboard",
            "description":"Platform that allows you to customize a personal advertising and affiliate marketing program for the products of your choice. Currently built using React and Flask, But I am remaking it with next.js for the commercializing platform I am considering.",
            "url":"https://github.com/thecandylane/Candiboard-capstone"
        },
        {
            "image": "../assets/images/Phase 4 project.png",
            "title": "Issue and Project Tracking Software",
            "description":"Projecting managing application that works similar to Jira or Workfront. Built as a Team of 4 Bootcamp classmates, using React and Flask.",
            "url":"https://github.com/thecandylane/P4-Project-Jack-ChrisC-Jacob-ChrisW"
        },
        {
            "image":"../assets/images/minesweeper.png",
            "title": "Minesweeper CLI game",
            "description":"Created a custom minesweeper game played in the terminal. Has a full backend for Users and highscores. Built with Python.",
            "url":"https://github.com/thecandylane/phase3-Jack-Eshwar-cli-project"
        },
        {
            "image":"src/assets/images/instagram mock.png",
            "title":"ScrapBook",
            "description":"Mock rudimentary instagram version created using React and json-server. No github contributions due to computer problems, only backseat coding.",
            "url":"https://github.com/ianstrom/ScrapBook"
        },
        {
            "image":"",
            "title":"SeeSEC",
            "description":"Site that fetches from an API and returns ~100,000 employees SEC Filings from ~8000 major Companies.",
            "url":"https://github.com/ianstrom/See-SEC"
        },
        {
            "image": "pongSS.png",
            "title": "Pong",
            "description":"Simple pong game I made with python, not sure how to make it playable in browser just yet",
            "url":"https://www.instagram.com/thecandylane/"
        }
    ]

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
                        console.log(port.image)
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
                {renderPortfolio(portfolioData)}
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Portfolio  
