import Image from "next/image"

import logo from "../svg/logo.svg"

export default function Navigation() {
    return (
        <div id="nav" className="md:flex grid md:items-center justify-items-center fixed top-0 bg-darkrainbow w-[100vw] md:gap-[0.5vw] p-[0.5vw] text-[75%] font-semibold rounded-b-lg border-b-[0.15vh] border-white z-[99]">
            <div className="flex items-center md:gap-[0.5vw] gap-[1vw]">
                <Image src={logo} alt="HexaBlue logo" width={0} height={0} className="md:w-[3vw] w-[4vw] h-auto cursor-pointer" onClick={() => {location.href = "/"}} />
                <h1 className="bg-clip-text text-transparent bg-textrainbow text-[150%] font-black">
                    <a href="/">
                        HexaBlue
                    </a>
                </h1>
            </div>
            <div className="flex items-center md:gap-[0.5vw] gap-[1vw]">
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
            <p className="text-[75%] md:absolute md:right-[1vw]">
                Get updates before everyone else: <a href="https://discord.gg/DsARcGwwdM" className="bg-clip-text text-transparent bg-textrainbow">
                    Join our Discord
                </a>!
            </p>
        </div>
    )
}