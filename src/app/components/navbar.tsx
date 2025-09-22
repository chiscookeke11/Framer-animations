import { TransitionLink } from "@/utils/TransitionLink";
import Link from "next/link";


export const  FlipNav = () => {
    return (
        <Navbar/>
    )
}

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full px-20 py-10 " >
           <Link href={"/"} >Logo</Link>


           <ul className="w-fit flex items-center gap-3" >
            <TransitionLink href="/pages/GridHeroSection" >Page 1</TransitionLink>
            <TransitionLink href="/pages/zoop" >Page 2</TransitionLink>
           </ul>

        </nav>
    )
}