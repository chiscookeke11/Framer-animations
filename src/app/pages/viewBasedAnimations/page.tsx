"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"






export default function Page() {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        console.log("Is in view ->", isInView)
    }, [isInView])




    return (
        <>
            <div className="w-full h-[150vh] flex items-center justify-center gap-10 flex-col" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-screen bg-red-600" >
                hello
            </motion.div>


            <div ref={ref} className={`h-screen  transition duration-150 ease-in-out w-full ${isInView ? "bg-amber-500" : "bg-green-500"} `}  >

            </div>




        </>


    )
}