"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import Navigation from "./resources/components/nav"
import Footer from "./resources/components/footer"

import Image from "next/image"

import logo from "./resources/svg/logo.svg"
import dibsy from "./resources/svg/dibsy.svg"

export default function Home() {
    const router = useRouter()

    const textArray = ["revolutionary", "open", "for you", "the future"]

    let toRender = Landscape(textArray)

    if (typeof window !== undefined) {
        let isLandscape = window.innerWidth >= window.innerHeight

        window.addEventListener("resize", () => {
            let isLandscapeNew = window.innerWidth >= window.innerHeight

            if (isLandscapeNew !== isLandscape) {
                isLandscape = isLandscapeNew

                router.refresh()
            }
        })

        toRender = isLandscape ? Landscape(textArray) : Portrait(textArray)
    }
    
    return toRender
}

function Landscape(textArray: string[]) {
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
}

function Portrait(textArray: string[]) {
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
            <div className="grid justify-items-center text-center bg-darkrainbow w-[100vw] px-[4vw] pt-[20vh] pb-[6vh]">
                <div className="grid justify-items-center font-black text-[150%] leading-tight">
                    <div className="flex items-center gap-[1.5vw]">
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
                <div className="text-[50%] pt-[2vh]">
                    <p>
                        We are an organization providing quality Free and Open Source solutions,
                    </p>
                    <p>
                        striving for a Free and Open Source world.
                    </p>
                </div>
            </div>
            <div className="grid justify-items-center text-center w-[100vw] px-[4vw] py-[10vh]">
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
                <Image src={dibsy} alt="dibsy logo" width={0} height={0} className="w-auto h-[20vh] mt-[2vh]" />
            </div>
            <Footer />
        </>
    )
}