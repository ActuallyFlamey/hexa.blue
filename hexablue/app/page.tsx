"use client"

import Image from "next/image"

import logo from "./svg/logo.svg"
import dibsy from "./svg/dibsy.svg"

export default function Home() {
    if (!visualViewport) {return}

    if (visualViewport.width >= visualViewport.height) {
        return (
            <>
                <div id="nav" className="flex items-center fixed top-0 bg-darkrainbow w-[100vw] p-[0.5vw] gap-[0.75%] text-[125%] font-semibold rounded-b-lg border-b-[0.15vh] border-white z-[99]">
                    <Image src={logo} alt="HexaBlue logo" width={0} height={0} className="w-[4%] h-auto" />
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
                <div className="flex items-center bg-darkrainbow w-[100vw] h-[75vh] px-[4vw] text-[175%]">
                    <div className="z-20">
                        <div className="flex items-center gap-[0.75vw] font-black text-[200%]">
                            <h1 className="bg-clip-text text-transparent bg-textrainbow">
                                HexaBlue
                            </h1>
                            <h1>
                                is
                            </h1>
                            <h1 id="whatishb" className="bg-clip-text text-transparent bg-textrainbow">
                                the future
                            </h1>
                        </div>
                        <p className="text-[75%]">
                            We are an organization providing quality Free and Open Source solutions,
                        </p>
                        <p className="text-[75%]">
                            striving for a Free and Open Source world.
                        </p>
                    </div>
                    <Image src={logo} alt="HexaBlue logo" width={0} height={0} className="w-[30vw] h-auto absolute right-[4vw] z-10" />
                </div>
                <div className="flex items-center w-[100vw] h-[40vh] px-[4vw] text-[175%]">
                    <div className="z-20">
                        <h1 className="font-bold text-[150%]">
                            What we're working on
                        </h1>
                        <p className="text-[60%]">
                            We're currently building the future of social media.
                        </p>
                        <p className="text-[60%]">
                            <b>dibsy</b> is a peer-to-peer all-in-one content network. This means content does not go on a server, giving you more privacy.
                        </p>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}
