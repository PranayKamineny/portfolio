import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import {experience} from '../resources/experience'

function Experience() {
    const [selectedExp, setSelectedExp] = useState(0);

    return (
        <div className='py-10'>
            <SectionTitle title="Experience"/>
            <div className='flex py-10 gap-20 sm:gap-10 sm:flex-col'>
                <div className='flex flex-col justify-between gap-10 w-96 sm:gap-5 border-l-2 border-secondary sm:border-l-0 sm:border-t-2 sm:flex-row sm:overflow-scroll sm:w-full'>
                    {experience.map((elem, idx) => (
                        <div onClick={() => setSelectedExp(idx)} className='cursor-pointer'>
                            <h1 className={`text-xl sm:text-base px-5 ${selectedExp === idx 
                                ? 'text-primary border-primary border-l-4 -ml-[2px] sm:border-l-0 sm:border-t-4' 
                                : 'text-tertiary'}`
                                }>{elem.company}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-primary text-2xl sm:text-base'>{experience[selectedExp].title}</h1>
                    <h1 className='text-secondary text-xl sm:text-base'>{experience[selectedExp].period}</h1>
                    <p className='text-xl py-5 sm:py-2 sm:text-base'>{experience[selectedExp].description}</p>
                </div>
            </div>
        </div>

    )
}

export default Experience