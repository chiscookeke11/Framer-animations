"use client"


import { motion } from "framer-motion";
import React, { ReactNode, useRef, useState } from "react"


type TabProps = {
    children: ReactNode;
};




const SlideTabs = () => {

    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0
    })

    return (
        <ul
        onMouseLeave={(e) => {
            setPosition({
                opacity: 0,
                width: 0,
                left: 0
            })
        }}
         className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1" >
            <Tab setPosition={setPosition} >Home</Tab>
            <Tab setPosition={setPosition}>Pricing</Tab>
            <Tab setPosition={setPosition}>Features</Tab>
            <Tab setPosition={setPosition}>Docs</Tab>
            <Tab setPosition={setPosition}>Blog</Tab>


            <Cursor position={position} />
        </ul>
    )
}


const Tab = ({ children, setPosition }: TabProps) => {
    const ref = useRef<HTMLLIElement>(null)

    return (
        <li ref={ref} onMouseEnter={(e) => {
            if (!ref.current) return
            const {width} = ref.current?.getBoundingClientRect()

            setPosition({
                width,
                opacity: 1,
                left: ref.current.offsetLeft,
            })

        }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base " >
            {children}
        </li>
    )
}

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={position}
            className="absolute z-0 h-7 rounded-full bg-black md:h-12 " />
    )
}



export default function Page() {
    return (
        <div className=" bg-white h-screen flex items-center justify-center text-black " >
            <SlideTabs />
        </div>
    )
}