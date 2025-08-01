"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"





export default function Page() {
    const [isVisible, setIsVisible] = useState(false)




    return (
        <div className="w-full h-screen flex items-center justify-center flex-col gap-5 " >
            <motion.button
            onClick={() => setIsVisible((prev) => !prev)}
            layout
            className=" w-[150px] p-4 rounded-lg bg-purple-800 text-white cursor-pointer " >Show/Hide</motion.button>


         <AnimatePresence mode="wait" >
              {isVisible && (
             <motion.div
             initial={{
                rotate: "0deg",
                scale: 0,
                y: 0
             }}
             animate={{
                rotate: "360deg",
                scale: 1,
                y: [0, 150, -150, -150, 0]
             }}
             exit={{
                rotate: "0deg",
                scale: 0,
                y: 0
             }}
             transition={{
               duration: 1,
               ease: "backInOut",
               times: [0, 0.25, 0.5, 0.85, 1]
             }}
              className=" w-sm flex items-center justify-center rounded-lg bg-purple-400 text-white h-[200px] " >
                The animated modal
            </motion.div>
           )}
         </AnimatePresence>
        </div>
    )
}