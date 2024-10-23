"use client"

import Image from "next/image"

import logo from "./svg/logo.svg"
import dibsy from "./svg/dibsy.svg"

export default function Home() {
    if (!visualViewport) {return}

    if (visualViewport.width >= visualViewport.height) {
        return (
            <>
                <div>
                    <div id="nav" className="flex p-[0.5vw] items-center gap-[0.75vw] fixed top-0 bg-darkrainbow w-[100vw] rounded-br-lg rounded-bl-lg border-white  border-b-[0.1vh]">
                        <Image src={logo} alt="HexaBlue logo" width={0} height={0} style={{width: "3vw", height: "auto"}} />
                        <h1 className="bg-clip-text text-transparent bg-textrainbow font-black text-[175%] ml-[-0.5%]">
                            <a href="/">
                                HexaBlue
                            </a>
                        </h1>
                        <p className="font-semibold">
                            <a href="/about">
                                About
                            </a>
                        </p>
                        <p className="font-semibold">
                            <a href="/projects">
                                Projects
                            </a>
                        </p>
                        <p className="font-semibold">
                            <a href="/contact">
                                Contact
                            </a>
                        </p>
                    </div>
                    <div className="mt-[20vh] ml-[4vw]">
                        <div className="flex items-center gap-3">
                            <h1 className="bg-clip-text text-transparent bg-textrainbow font-black text-[500%]">
                                HexaBlue
                            </h1>
                            <h1 className="font-black text-[500%]">
                                is
                            </h1>
                            <h1 id="whatishb" className="bg-clip-text text-transparent bg-textrainbow font-black text-[500%]">
                                the future
                            </h1>
                        </div>
                        <p className="mt-[-0.5%] text-[150%]">
                            We are an organization providing quality open-source solutions, striving for a free future.
                        </p>
                    </div>
                    <Image src={logo} alt="HexaBlue logo" width={0} height={0} style={{width: "40vw", height: "auto"}} className="absolute right-[4vw] mt-[-25vh] z-[-99]" />
                </div>
                <div className="bg-zinc-800 mt-[20vh] pt-[16vh] h-[100vh]">
                    <div className="flex items-center">
                        <div>
                            <div className="ml-[4vw] w-[70vw]">
                                <h1 className="font-bold text-[250%]">
                                    What we're working on
                                </h1>
                                <p>
                                    Right now, we're building the next generation of social media:
                                    <b> dibsy</b> is an all-in-one p2p social, meaning content does not go on a server.
                                </p>
                                <p>
                                    Instead, content is shared between online users, granting higher privacy and untrackability.
                                </p>
                            </div>
                        </div>
                        <Image src={dibsy} alt="dibsy logo" width={0} height={0} style={{width: "15vw", height: "auto"}} className="absolute right-[8vw]" />
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
