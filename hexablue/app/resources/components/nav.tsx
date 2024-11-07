import Image from "next/image"

import logo from "../svg/logo.svg"

export default function Navigation() {
    if (!visualViewport) {return}

    if (visualViewport.width >= visualViewport.height) {
        return (
            <div id="nav" className="flex items-center fixed top-0 bg-darkrainbow w-[100vw] p-[0.5vw] gap-[0.75%] text-[75%] font-semibold rounded-b-lg border-b-[0.15vh] border-white z-[99]">
                <Image src={logo} alt="HexaBlue logo" width={0} height={0} className="w-[4%] h-auto cursor-pointer" onClick={() => {location.href = "/"}} />
                <h1 className="bg-clip-text text-transparent bg-textrainbow text-[175%] font-black ml-[-0.5vw]">
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
    } else {
        return (
            <></>
        )
    }
}