import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
// import '../App.css'
import AOS from 'aos'
//import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    I embarked my journey as a B.Tech Computer Science & Engineering student at Swami Vivekananda Engineering College in 2019. Along the way, I delved into the world of cutting-edge technologies, such as Python, Cloud computing, React, Angular, and Firebase.
                </p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    In a constant pursuit of sharing knowledge and fostering growth, I've organized numerous technical workshops, imparting valuable insights on technologies like Mean and Mern, Google Cloud to aspiring learners. With a commitment to personal development and a drive for making a positive impact within the tech community.
                </p>
                <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    I've worked for my personal projects. and i'm  Developer <span className='animte-text text-orange-500 font-bolde '>(@rahulrathod),</span> Proficient in MERN Stack development, adept at building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in full-stack development, RESTful API integration, and modern front-end frameworks for creating dynamic user interfaces.
                </p>

                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>
                    <AiOutlineCloudDownload />
                    <a href="/" download>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About