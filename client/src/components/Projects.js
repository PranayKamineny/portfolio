import React, {useState} from 'react'
import SectionTitle from './SectionTitle'
import {projects} from '../resources/projects'


function Projects() {
    const [selectedProj, setSelectedProj] = useState(0);

    return (
        <div>
            <SectionTitle title="Projects"/>
            <div className='flex py-10 gap-20 sm:gap-10 sm:flex-col sm:items-center'>
                    <div className='flex flex-col justify-between gap-10 sm:gap-5 border-l-2 border-secondary sm:border-l-0 sm:border-t-2 sm:flex-row sm:overflow-scroll sm:w-full'>
                        {projects.map((elem, idx) => (
                            <div onClick={() => setSelectedProj(idx)} className='cursor-pointer'>
                                <h1 className={`text-xl px-5 sm:text-base ${selectedProj === idx 
                                    ? 'text-primary border-primary border-l-4 -ml-[2px] sm:border-l-0 sm:border-t-4' 
                                    : 'text-tertiary'}`
                                    }>{elem.title}</h1>
                            </div>
                        ))}
                    </div>
                    <img src={projects[selectedProj].image} alt='' className='h-60 w-72'/>
                    <div className='flex flex-col gap-5 w-full'>
                        <h1 className='text-primary text-2xl sm:text-base'>{projects[selectedProj].title}</h1>
                        <h1 className='text-secondary text-xl sm:text-base'>{projects[selectedProj].skills.map(
                            (elem, idx) => idx < projects[selectedProj].skills.length - 1 ? elem + ", ": elem)}</h1>
                        <p className='text-xl py-5 sm:py-2 sm:text-base'>{projects[selectedProj].description}</p>
                        <a href={projects[selectedProj].link} target="_blank" rel="noopener noreferrer">
                            <i class="ri-external-link-line text-gray-500 text-3xl cursor-pointer hover:text-blue-600"></i>
                        </a>
                    </div>
                </div>
        </div>
  )
}

export default Projects