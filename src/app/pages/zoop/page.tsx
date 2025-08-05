"use client"


import { easeInOut, motion } from "framer-motion"




export default function page() {
    return (
        <div className=" grid h-screen place-content-center gap-2 bg-green-300 px-8  " >
            <FlipLink href="#" > Twitter </FlipLink>
            <FlipLink href="#" > FaceBook </FlipLink>
            <FlipLink href="#" > LinkedIn </FlipLink>
            <FlipLink href="#" > Instagram </FlipLink>
        </div>
    )


}


const DURATION = 0.25
const STAGGER = 0.025

const FlipLink = ({ children, href }: { children: string, href: string }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href} className=" relative block overflow-hidden  whitespace-nowrap  font-black uppercase text-4xl md:text-8xl lg:text-9xl bg-white  " style={{lineHeight: 0.8}}  >
            <div
                className="text-amber-400  "
            >
                {children.split("").map((letter, index) => (
                    <motion.span
                        className=" inline-block "
                        variants={{
                            intial: { y: 0 },
                            hovered: { y: "-100%" }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: easeInOut,
                            delay: STAGGER * index
                        }}
                        key={index} > {letter} </motion.span>
                ))}
            </div>

            <div
                className="absolute text-red-700">
                {children.split("").map((letter, index) => (
                    <motion.span
                        className=" inline-block "
                        variants={{
                            intial: { top: "100%", y: 0 },
                            hovered: { top: "100%", y: "-100%" }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: easeInOut,
                            delay: STAGGER * index
                        }}
                        key={index} > {letter} </motion.span>
                ))}
            </div>



        </motion.a>
    )

}