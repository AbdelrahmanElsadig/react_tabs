import React from 'react'
import { Tabs } from './Tabs';

const URL: string = "https://course-api.com/react-tabs-project";

const Project = () => {
    return (
        <div className='container flex flex-col items-center mt-16 mx-auto gap-8'>
            <h1 className="text-4xl font-bold text-center relative pb-3
            after:absolute after:h-1 after:w-1/2 after:left-1/4 after:bottom-0 after:bg-cyan-600">
                Our Experience</h1>
            <Tabs />
        </div>
    )
}

export { Project, URL }
