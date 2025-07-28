import { motion } from "framer-motion"

export default function Tile() {
    return (
        <motion.div
            initial={{
                backgroundColor: "transparent",
                zIndex: 10,
            }}
            whileHover={{
                backgroundColor: "#7c3aed",
                zIndex: 10,
            }}
            transition={{
                duration: 0.3,  // Faster hover in
                ease: "easeOut"
            }}
            className="aspect-square bg-neutral-950 border border-neutral-900 relative"
        />
    )
}