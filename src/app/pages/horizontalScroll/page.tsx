"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


export default function Page() {
    const targetRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target:  targetRef
    })

 const x =   useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

    return (


        <div>

            <div className="w-full h-[400vh] " />



            <div ref={targetRef} className="w-full h-[300vh] bg-neutral-900 relative " >
                <div className="h-screen bg-purple-700 sticky top-0 flex items-center overflow-hidden " >



                    <motion.div className=" flex gap-4 " style={{x}} >


                        <div className="w-2xl h-[400px] bg-red-600" />
                        <div className="w-2xl h-[400px] bg-red-600" />
                        <div className="w-2xl h-[400px] bg-red-600" />
                        <div className="w-2xl h-[400px] bg-red-600" />
                        <div className="w-2xl h-[400px] bg-red-600" />
                        <div className="w-2xl h-[400px] bg-red-600" />
                        <div className="w-2xl h-[400px] bg-red-600" />

                    </motion.div>


                </div>


                <div className="w-full h-[400vh] " />
            </div>
        </div>
    )
}