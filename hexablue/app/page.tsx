"use client"

import { useEffect } from "react"

import Navigation from "./resources/components/nav"
import Footer from "./resources/components/footer"

import Image from "next/image"

import logo from "./resources/svg/logo.svg"
import dibsy from "./resources/svg/dibsy.svg"

export default function Home() {
    const textArray = ["revolutionary", "open", "for you", "the future"]
    let whatishb: HTMLHeadingElement

    useEffect(() => {
        let i = 0
        setInterval(() => {
            whatishb.innerHTML = textArray[i]
            i = i < (textArray.length - 1) ? i + 1 : 0
        }, 2000)
    })

    return (
        <>
            <Navigation />
            <div className="md:flex grid md:items-center justify-items-center md:text-left text-center bg-darkrainbow w-[100vw] px-[4vw] md:py-[30vh] pt-[20vh] pb-[6vh]">
                <div className="md:z-20">
                    <div className="md:flex grid md:items-center justify-items-center gap-[0.75vw] font-black md:text-[200%] text-[150%] md:leading-normal leading-none">
                        <div className="flex items-center md:gap-[0.75vw] gap-[1.5vw]">
                            <h1 className="bg-clip-text text-transparent bg-textrainbow">
                                HexaBlue
                            </h1>
                            <h1>
                                is
                            </h1>
                        </div>
                        <h1 id="whatishb" className="bg-clip-text text-transparent bg-textrainbow animate-fade" ref={(item) => {
                            if (!item) {return}
                            whatishb = item
                        }}>
                            the future
                        </h1>
                    </div>
                    <div className="md:text-[75%] text-[50%] md:pt-0 pt-[2vh]">
                        <p>
                            We are an organization providing quality Free and Open Source solutions,
                        </p>
                        <p>
                            striving for a Free and Open Source world.
                        </p>
                    </div>
                </div>
                <Image src={logo} alt="HexaBlue logo" width={0} height={0} className="md:w-[30%] w-0 h-auto absolute right-[4vw] z-10" />
            </div>
            <div className="md:flex grid md:items-center justify-items-center md:text-left text-center w-[100vw] px-[4vw] md:py-[20vh] py-[10vh]">
                <div className="z-20">
                    <h1 className="font-bold text-[150%]">
                        What we're working on
                    </h1>
                    <p className="text-[60%]">
                        We're currently building the future of social media.
                    </p>
                    <p className="text-[60%] xl:max-w-full max-w-[70vw]">
                        <b>dibsy</b> is a peer-to-peer all-in-one content network. This means content does not go on a server, giving you more privacy.
                    </p>
                </div>
                <Image src={dibsy} alt="dibsy logo" width={0} height={0} className="md:w-[20%] w-auto md:h-auto h-[20vh] md:absolute md:right-[4vw] md:-z-10 md:mt-0 mt-[2vh]" />
            </div>
            <Footer />
        </>
    )
}