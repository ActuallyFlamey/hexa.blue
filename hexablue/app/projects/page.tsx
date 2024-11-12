"use client"

import Navigation from "../resources/components/nav"
import Footer from "../resources/components/footer"

import Image from "next/image"

import dibsy from "../resources/svg/dibsy.svg"

export default function Projects() {
    return (
        <>
            <Navigation />
            <div className="grid justify-items-center px-[4vw] md:pt-[10vh] pt-[20vh] pb-[3vh]">
                <h1 className="font-black text-[150%]">
                    Our Projects
                </h1>
            </div>
            <div className="md:flex grid md:items-center justify-items-center md:text-left text-center gap-[3vw] px-[4vw] py-[4vw] bg-zinc-700">
                <Image src={dibsy} alt="dibsy logo" width={0} height={0} className="w-[20vw] h-auto" />
                <div className="grid md:justify-items-start gap-[2vh]">
                    <div>
                        <h1 className="font-bold text-[125%]">
                            dibsy
                        </h1>
                        <div className="md:text-[75%] text-[50%]">
                            <p>
                                <b>dibsy</b> is the future of social media. It's an all-in-one social network where content is <i>not</i> stored on a server.
                                Instead, content is shared in peer-to-peer between online users.
                            </p>
                            <p >
                                This allows for maximum privacy for the user, as it is impossible for us (or governments) to see what you do.
                            </p>
                        </div>
                    </div>
                    <h2 className="font-semibold">
                        Coming soon...
                    </h2>
                </div>
            </div>
            <Footer />
        </>
    )
}