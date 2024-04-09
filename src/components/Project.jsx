import React,{useEffect} from 'react'
import ecommerce from  "../assets/projects/ecommerce.jpeg"
import analog from "../assets/projects/analog.jpeg"
import ochidesign from "../assets/projects/ochidesign.png"

import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: ecommerce,
      desc: "Ecommerce  is a shopping platform made using ReactJS  + Bootstrap + CSS + JavaScript...",
    },
    {
      id: 2,
      src: analog,
      desc: "This analog Clock is developed by using only Html + CSS + JavaScript....",
    },
    {
      id: 3,
      src: ochidesign,
      desc: "This is a formal Clone Website of OchiDesign made by using ReactJs + JavaScript + Tailwind Css...",
    }
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-900 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc}) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="website" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-orange-900 to-orange-600 rounded-md'>
                    <a href="#">Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
