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

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'

// Import your images here
import CandiboardImage from '../../assets/images/Candiboard.png'
import Phase4ProjectImage from '../../assets/images/Phase_4_project.png'
import MinesweeperImage from '../../assets/images/minesweeper.png'
import InstagramMockImage from '../../assets/images/instagram_mock.png'
import PongSSImage from '../../assets/images/pongSS.png'
// Add more image imports as needed

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const containerRef = useRef(null)
    const projectRefs = useRef([])
    const positionsRef = useRef([])

    // Add new projects to this array - they'll automatically appear
    const portfolioData = [
        {
            image: CandiboardImage,
            title: "Candiboard",
            description: "Platform that allows you to customize a personal advertising and affiliate marketing program for the products of your choice. Currently built using React and Flask, But I am remaking it with next.js for the commercializing platform I am considering.",
            url: "https://github.com/thecandylane/Candiboard-capstone"
        },
        {
            image: Phase4ProjectImage,
            title: "Issue and Project Tracking Software",
            description: "Full Stack Projecting managing application that works similar to Jira/Workfront/DevOps. Built as a Team of 4 Bootcamp classmates, using React and Flask.",
            url: "https://github.com/thecandylane/P4-Project-Jack-ChrisC-Jacob-ChrisW"
        },
        {
            image: MinesweeperImage,
            title: "Minesweeper CLI game",
            description: "Made a custom full-stack minesweeper game played in the terminal.",
            url: "https://github.com/thecandylane/phase3-Jack-Eshwar-cli-project"
        },
        {
            image: InstagramMockImage,
            title: "ScrapBook",
            description: "Mock rudimentary instagram version created using React and json-server.",
            url: "https://github.com/ianstrom/ScrapBook"
        },
        {
            image: null,
            title: "SeeSEC",
            description: "Site that fetches from an API and returns ~100,000 employees SEC Filings from ~8000 major Companies.",
            url: "https://github.com/ianstrom/See-SEC"
        },
        {
            image: PongSSImage,
            title: "Pong",
            description: "Simple pong game I made with python, not sure how to make it playable in browser just yet",
            url: "https://www.instagram.com/thecandylane/"
        },
        {
            image: null,
            title: "SaferHydrocleaning",
            description: "In-progress website for my friend's powerwashing business",
            url: "https://www.saferhydrocleaning.com"
        },
        {
            image: null,
            title: "ImJustABill",
            description: "Hackathon project built using OpenAI API. Created so that we could input large pdfs, such as a pending Bill, and have chatgpt locally search through it.",
            url: "https://github.com/thecandylane/ImJustABill"
        },
        {
            image: null,
            title: "Spotify Scraper",
            description: "Scraper in python that takes all songs on a spotify playlist and download them as mp3s.",
            url: "https://github.com/thecandylane/Spotify-scraper"
        },
        {
            image: null,
            title: "RISC-V Disassembler",
            description: "Very Rudimentary disassembler built in C++ that takes in a set of RISC-V instructions in binary and returns their human-readable mnemonic counterpart",
            url: "https://github.com/thecandylane/RISC-V_Disassembler"
        }
    ]

    const CARD_WIDTH = 200
    const CARD_HEIGHT = 250
    const MOUSE_REPEL_DISTANCE = 150
    const MOUSE_REPEL_STRENGTH = 10

    // Initialize random positions
    useEffect(() => {
        const initPositions = () => {
            const container = containerRef.current
            if (!container) return

            const maxX = container.offsetWidth - CARD_WIDTH
            const maxY = container.offsetHeight - CARD_HEIGHT

            positionsRef.current = portfolioData.map(() => ({
                left: Math.random() * Math.max(maxX, 0),
                top: Math.random() * Math.max(maxY, 0)
            }))

            // Apply initial positions
            projectRefs.current.forEach((ref, i) => {
                if (ref && positionsRef.current[i]) {
                    ref.style.left = positionsRef.current[i].left + 'px'
                    ref.style.top = positionsRef.current[i].top + 'px'
                }
            })

            // Run collision detection a few times to separate overlapping cards
            for (let i = 0; i < 10; i++) {
                detectCollision()
            }
        }

        initPositions()
        window.addEventListener('resize', initPositions)
        return () => window.removeEventListener('resize', initPositions)
    }, [])

    // Animated letters effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    const detectCollision = () => {
        const container = containerRef.current
        if (!container) return

        const maxX = container.offsetWidth - CARD_WIDTH
        const maxY = container.offsetHeight - CARD_HEIGHT

        projectRefs.current.forEach((project1, i) => {
            projectRefs.current.forEach((project2, j) => {
                if (i !== j && project1 && project2) {
                    const rect1 = project1.getBoundingClientRect()
                    const rect2 = project2.getBoundingClientRect()

                    if (
                        rect1.left < rect2.right &&
                        rect1.right > rect2.left &&
                        rect1.top < rect2.bottom &&
                        rect1.bottom > rect2.top
                    ) {
                        const moveX = (rect1.left - rect2.left) / 2
                        const moveY = (rect1.top - rect2.top) / 2

                        const pos1 = positionsRef.current[i]
                        const pos2 = positionsRef.current[j]

                        pos1.left = Math.min(Math.max(pos1.left + moveX, 0), maxX)
                        pos1.top = Math.min(Math.max(pos1.top + moveY, 0), maxY)
                        pos2.left = Math.min(Math.max(pos2.left - moveX, 0), maxX)
                        pos2.top = Math.min(Math.max(pos2.top - moveY, 0), maxY)

                        project1.style.left = pos1.left + 'px'
                        project1.style.top = pos1.top + 'px'
                        project2.style.left = pos2.left + 'px'
                        project2.style.top = pos2.top + 'px'
                    }
                }
            })
        })
    }

    const handleMouseMove = (e) => {
        const container = containerRef.current
        if (!container) return

        const containerRect = container.getBoundingClientRect()
        const mouseX = e.clientX - containerRect.left
        const mouseY = e.clientY - containerRect.top

        const maxX = container.offsetWidth - CARD_WIDTH
        const maxY = container.offsetHeight - CARD_HEIGHT

        projectRefs.current.forEach((project, i) => {
            if (!project) return

            const pos = positionsRef.current[i]
            const cardCenterX = pos.left + CARD_WIDTH / 2
            const cardCenterY = pos.top + CARD_HEIGHT / 2

            const distX = cardCenterX - mouseX
            const distY = cardCenterY - mouseY
            const distance = Math.sqrt(distX * distX + distY * distY)

            if (distance < MOUSE_REPEL_DISTANCE && distance > 0) {
                const moveX = (distX / distance) * MOUSE_REPEL_STRENGTH
                const moveY = (distY / distance) * MOUSE_REPEL_STRENGTH

                pos.left = Math.min(Math.max(pos.left + moveX, 0), maxX)
                pos.top = Math.min(Math.max(pos.top + moveY, 0), maxY)

                project.style.left = pos.left + 'px'
                project.style.top = pos.top + 'px'
            }
        })

        detectCollision()
    }

    // Styles
    const styles = {
        container: {
            position: 'relative',
            width: '100%',
            height: 'calc(100vh - 100px)',
            overflow: 'hidden',
            marginTop: '20px'
        },
        project: {
            width: CARD_WIDTH + 'px',
            height: CARD_HEIGHT + 'px',
            backgroundColor: '#3498db',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            borderRadius: '15px',
            padding: '10px',
            boxSizing: 'border-box',
            willChange: 'transform',
            cursor: 'pointer',
            transition: 'box-shadow 0.2s ease'
        },
        projectImage: {
            maxWidth: '100%',
            maxHeight: '80px',
            borderRadius: '10px',
            objectFit: 'cover'
        },
        projectTitle: {
            margin: '10px 0 5px 0',
            fontSize: '14px',
            textAlign: 'center'
        },
        projectDescription: {
            fontSize: '11px',
            textAlign: 'center',
            overflow: 'hidden',
            flex: 1
        },
        projectLink: {
            color: '#fff',
            textDecoration: 'underline',
            fontSize: '12px',
            marginTop: '5px'
        }
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
                <div
                    ref={containerRef}
                    style={styles.container}
                    onMouseMove={handleMouseMove}
                >
                    {portfolioData.map((project, idx) => (
                        <div
                            key={idx}
                            ref={el => projectRefs.current[idx] = el}
                            style={styles.project}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                        >
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={styles.projectImage}
                                />
                            )}
                            <h3 style={styles.projectTitle}>{project.title}</h3>
                            <p style={styles.projectDescription}>{project.description}</p>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.projectLink}
                                onClick={e => e.stopPropagation()}
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Portfolio