import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()


        emailjs
            .sendForm(
                'outlook',
                'contact_form',
                refForm.current,
                'dqz5EL7aw_FzN8QNB'
            )
            .then(
                () => {
                    alert('Message Succesfully Sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )

    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ' ,'M','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in any opportunities available to me, especially large and challenging projects. If you have a request or question,
                        dont hesitate to contact me using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Jack Schliewe,
                    <br/>
                    United States,
                    <br />
                    55 Clark Street, 11201 <br />
                    New York <br />
                    <span>jack.schliewe@outlook.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[40.6977644, -73.9935969]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[40.6977644, -73.9935969]}>
                            <Popup>Hey yo !!!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact