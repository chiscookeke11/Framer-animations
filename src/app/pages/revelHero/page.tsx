"use client"

import {motion} from "framer-motion"

export default function Page () {
    return (
        <div className="w-full h-screen flex items-center flex-col gap-10 justify-center  ">





  <h1 className="font-bold text-4xl relative p-3 " >
             Hello, I am Okeke Chinedu

             <motion.span
             initial={{width: "100%"}}
             animate={{width: 0}}
             transition={{duration: 0.3, ease: "easeInOut", delay: 0.2}}
              className="  h-full bg-black absolute top-0 left-0 " >

             </motion.span>
       </h1>



       <h1 className="font-bold text-4xl relative p-3 " >
             I am a Frontend Developer

             <motion.span
             initial={{width: "100%"}}
             animate={{width: 0}}
             transition={{duration: 0.3, ease: "easeInOut", delay: 0.4}}
              className="  h-full bg-black absolute top-0 left-0 " >

             </motion.span>
       </h1>


        </div>
    )
}