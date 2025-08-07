"use client"


import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"








export default function Page() {

    const ref = useRef(null)


    const IsInView = useInView(ref, {
        amount: "all",
        once: true,
    })


    const DURATION = 0.3


    useEffect(() => {
        console.log(IsInView ? "Yes" : "No")
    }, [IsInView])







    // for the advanced scroll
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end center"]
    })


    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"])




    // Scroll X
    const containerRef = useRef(null)
    const targetX = useRef(null)
    const { scrollXProgress } = useScroll({
        container: containerRef,
        target: targetX,
        axis: "x",
        offset: ["end start", "start start"]
    })





    return (
        <div className="w-full h-fit  " >
            <div className="w-full h-[200vh]  bg-purple-300  " ></div>
            <div className="w-full h-[200vh]  bg-red-300  " ></div>
            <div className="w-full h-[200vh]  bg-orange-300  " ></div>
            <div className="w-full h-[200vh]  bg-pink-300  " ></div>


            <div className="w-full h-[200vh]  bg-green-300 flex items-center justify-center  " >



                <div ref={ref} className="w-fit  flex items-center justify-center gap-3 relative " >
                    <motion.div
                        animate={{
                            y: IsInView ? "-100%" : "0"
                        }}
                        transition={{
                            duration: DURATION
                        }}
                        className=" w-full min-w-sm max-w-xl h-[300px] bg-amber-950 z-20  " >
                        I am in the viewport
                    </motion.div>

                    <motion.div
                        animate={{
                            y: IsInView ? "100%" : "0"
                        }}
                        transition={{
                            duration: DURATION
                        }}
                        className=" w-full min-w-sm max-w-xl h-[300px] bg-amber-950 z-20 " >
                        I am in the viewport
                    </motion.div>

                    <motion.div
                        animate={{
                            y: IsInView ? "-100%" : "0"
                        }}
                        transition={{
                            duration: DURATION
                        }}
                        className=" w-full min-w-sm max-w-xl h-[300px] bg-amber-950 z-20 " >
                        I am in the viewport
                    </motion.div>


                    <motion.h1
                        animate={{
                            opacity: IsInView ? "1" : "0"
                        }}
                        transition={{
                            duration: DURATION
                        }}
                        className=" text-9xl font-bold text-white absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] " >I am here</motion.h1>
                </div>


            </div>




            {/* advanced scroll  */}
            <div className="w-full h-[200vh]  bg-pink-300 flex items-center justify-center  " >



                <motion.div ref={targetRef} style={{ rotate }} className=" w-[300px] h-[300px] bg-amber-700 " ></motion.div>

            </div>



            {/* scroll X progress */}


            <div ref={containerRef} className="w-full overflow-x-auto bg-orange-500 py-10 " >


                <motion.div ref={targetX} className=" h-[300px] w-[300px] mx-[200%] bg-amber-700 " style={{ opacity: scrollXProgress }} ></motion.div>

            </div>


        </div>
    )
}