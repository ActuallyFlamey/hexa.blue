"use client"

import { useEffect } from "react"

import Navigation from "./resources/components/nav"
import Footer from "./resources/components/footer"

import Image from "next/image"

import logo from "./resources/svg/logo.svg"
import dibsy from "./resources/svg/dibsy.svg"

export default function Home() {
    if (!window) {return}

    const textArray = ["revolutionary", "open", "for you", "the future"]

    let whatishb: HTMLHeadingElement

    useEffect(() => {
        let i = 0
        setInterval(() => {
            whatishb.innerHTML = textArray[i]
            i = i < 3 ? i + 1 : 0
        }, 2000)
    })

    if (window.innerWidth >= window.innerHeight) {
        return (
            <>
                <Navigation />
                <div className="flex items-center bg-darkrainbow w-[100vw] px-[4vw] py-[30vh]">
                    <div className="z-20">
                        <div className="flex items-center gap-[0.75vw] font-black text-[200%]">
                            <h1 className="bg-clip-text text-transparent bg-textrainbow">
                                HexaBlue
                            </h1>
                            <h1>
                                is
                            </h1>
                            <h1 id="whatishb" className="bg-clip-text text-transparent bg-textrainbow animate-fade" ref={(item) => {
                                if (!item) {return}

                                whatishb = item
                            }}>
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
                    <Image src={logo} alt="HexaBlue logo" width={0} height={0} className="w-[30%] h-auto absolute right-[4vw] z-10" />
                </div>
                <div className="flex items-center w-[100vw] px-[4vw] py-[20vh]">
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
                    <Image src={dibsy} alt="dibsy logo" width={0} height={0} className="w-[20%] h-auto absolute right-[4vw] -z-10" />
                </div>
                <Footer />
            </>
        )
    } else {
        return (
            <></>
        )
    }
}