"use client"
import { easeInOut, motion, MotionConfig } from "framer-motion"





export default function Page() {
    return (
        <div className="w-full h-screen flex items-center justify-center gap-10 flex-col">


            <MotionConfig
                transition={{
                    duration: 0.125,
                    ease: easeInOut
                }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, rotate: "2.5deg" }}
                    className="px-10 py-4 flex items-center justify-center rounded-md bg-purple-900 cursor-pointer "
                >Click 1</motion.button>





                <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
                    className="px-10 py-4 flex items-center justify-center rounded-md bg-purple-900 cursor-pointer "
                >Click 2</motion.button>
            </MotionConfig>



        </div>
    )
}