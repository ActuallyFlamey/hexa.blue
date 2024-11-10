import { useEffect } from "react"
import { useRouter } from "next/navigation"

import Image from "next/image"

import logo from "../svg/logo.svg"

export default function Navigation() {
    const router = useRouter()

    let toRender

    if (typeof window !== undefined) {
        let isLandscape = window.innerWidth >= window.innerHeight

        window.addEventListener("resize", () => {
            let isLandscapeNew = window.innerWidth >= window.innerHeight

            if (isLandscapeNew !== isLandscape) {
                isLandscape = isLandscapeNew

                router.refresh()
            }
        })

        toRender = isLandscape ? Landscape() : Portrait()

        return toRender
    }
}

function Landscape() {
    return (
        <div id="nav" className="flex items-center fixed top-0 bg-darkrainbow w-[100vw] p-[0.5vw] gap-[0.5vw] text-[75%] font-semibold rounded-b-lg border-b-[0.15vh] border-white z-[99]">
            <Image src={logo} alt="HexaBlue logo" width={0} height={0} className="w-[4vw] h-auto cursor-pointer" onClick={() => {location.href = "/"}} />
            <h1 className="bg-clip-text text-transparent bg-textrainbow text-[175%] font-black">
                <a href="/">
                    HexaBlue
                </a>
            </h1>
            <p>
                <a href="/blog">
                    News
                </a>
            </p>
            <p>
                <a href="/projects">
                    Projects
                </a>
            </p>
            <p>
                <a href="/contact">
                    Contact
                </a>
            </p>
            <p className="text-[75%] absolute right-[1vw]">
                Get updates before everyone else: <a href="https://discord.gg/DsARcGwwdM" className="bg-clip-text text-transparent bg-textrainbow">
                    Join our Discord
                </a>!
            </p>
        </div>
    )
}

function Portrait() {
    return (
        <div id="nav" className="grid justify-items-center fixed top-0 bg-darkrainbow w-[100vw] p-[2vw] gap-[0.75vw] text-[75%] font-semibold rounded-b-lg border-b-[0.15vh] border-white z-[99]">
            <div className="flex items-center gap-[1vw]">
                <Image src={logo} alt="HexaBlue logo" width={0} height={0} className="w-[8vw] h-auto cursor-pointer" onClick={() => {location.href = "/"}} />
                <h1 className="bg-clip-text text-transparent bg-textrainbow text-[175%] font-black">
                    <a href="/">
                        HexaBlue
                    </a>
                </h1>
            </div>
            <div className="flex items-center gap-[2vw]">
                <p>
                    <a href="/blog">
                        News
                    </a>
                </p>
                <p>
                    <a href="/projects">
                        Projects
                    </a>
                </p>
                <p>
                    <a href="/contact">
                        Contact
                    </a>
                </p>
            </div>
            <p className="text-[75%]">
                Get updates before everyone else: <a href="https://discord.gg/DsARcGwwdM" className="bg-clip-text text-transparent bg-textrainbow">
                    Join our Discord
                </a>!
            </p>
        </div>
    )
}