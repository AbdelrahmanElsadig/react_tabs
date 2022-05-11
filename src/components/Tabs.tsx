import React, { useEffect, useState } from 'react'
import { tabData } from '../types/types';
import { URL } from './Project';
const Tabs = () => {
    const [data, setData] = useState<tabData[]>([]);
    const [activeIndex, setActive] = useState(0);
    async function getData() {
        const req = await fetch(URL);
        const res: tabData[] = await req.json();
        setData(res)
        setActive(0)
    }
    function setActiveTab(i: number) {
        setActive(i)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='container mx-auto flex flex-col gap-4'>
            <TabButtons titles={data} activeIndex={activeIndex} clickHandler={setActiveTab} />
            <TabDetails details={data === [] ? null : data[activeIndex]} />
        </div>
    )
}

function TabButtons({ titles, activeIndex, clickHandler }: { titles: tabData[], activeIndex: number, clickHandler: any }) {

    return (
        <div className="flex gap-4 justify-center">
            {titles.map((title, i) => {
                return (
                    <button onClick={() => clickHandler(i)} key={title.id} className={`pb-2 px-1 text-lg uppercase relative
                    hover:text-cyan-600 after:absolute after:bottom-0 after:left-0
                    after:w-full after:h-[2px] after:bg-cyan-600 
                    hover:after:block ${i === activeIndex ? 'text-cyan-600 after:block' : 'after:hidden'}`}>{title.company}</button>
                )
            })}
        </div>
    )
}

function TabDetails({ details }: { details: tabData | null }) {
    if (details) {
        return (
            <>
                <div className="flex flex-col gap-4 max-w-[512px] w-[90%] mx-auto">
                    <h1 className="text-2xl">{details.title}</h1>
                    <h1 className="bg-slate-200 font-bold rounded-md w-fit text-slate-500 py-1 px-2">{details.company}</h1>
                    <h1 className="text-slate-500">{details.dates}</h1>
                    <div className="flex flex-col gap-4">
                        {details.duties.map(duty => {
                            return (
                                <div className="flex gap-4">
                                    <DoubleArrowSVG />
                                    <p className="">{duty}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
        )
    } return (<></>)

}

function DoubleArrowSVG() {
    return (
        <svg className='w-12 h-fit my-auto fill-cyan-600' viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
        </svg>
    );
}

export { Tabs } 
