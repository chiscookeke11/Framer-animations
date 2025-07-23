"use client"

import { motion, useAnimationControls } from "framer-motion"




export default function Page() {
    const controls = useAnimationControls()


    const handleClick = async () => {
    await controls.start("flip");
    await controls.start("initial");
};



    return (
        <div className="w-full h-screen flex items-center justify-center gap-10 flex-col" >


            <button onClick={handleClick} className="px-10 py-4 flex items-center justify-center rounded-md bg-purple-900 cursor-pointer "
            >Flip it </button>



            <motion.div
                variants={{
                    initial: {
                        rotate: "0deg"
                    },
                    flip: {
                        rotate: "360deg"
                    }
                }}
                initial="initial"
                animate={controls}
                className=" w-[300px] h-[300px] bg-amber-500  " >

            </motion.div>
        </div>
    )
}