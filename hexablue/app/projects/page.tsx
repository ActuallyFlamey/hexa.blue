"use client"

import Navigation from "../resources/components/nav"
import Footer from "../resources/components/footer"

import Image from "next/image"

import dibsy from "../resources/svg/dibsy.svg"

export default function Projects() {
    if (!visualViewport) {return}

    if (visualViewport.width >= visualViewport.height) {
        return (
            <>
                <Navigation />
                <div className="grid justify-items-center px-[4vw] pt-[12vh] pb-[3vh]">
                    <h1 className="font-black text-[150%]">
                        Our Projects
                    </h1>
                </div>
                <div className="flex items-center gap-[3vw] px-[4vw] py-[4vw] bg-zinc-700">
                    <Image src={dibsy} alt="dibsy logo" width={0} height={0} className="w-[20vw] h-auto" />
                    <div className="grid justify-items-start gap-[2vh]">
                        <div>
                            <h1 className="font-bold text-[125%]">
                                dibsy
                            </h1>
                            <p className="text-[75%]">
                                <b>dibsy</b> is the future of social media. It's an all-in-one social network where content is <i>not</i> stored on a server.
                                Instead, content is shared in peer-to-peer between online users.
                            </p>
                            <p className="text-[75%]">
                                This allows for maximum privacy for the user, as it is impossible for us (or governments) to see what you do.
                            </p>
                        </div>
                        <h2 className="font-semibold">
                            Coming soon...
                        </h2>
                        {/*
                        <button className="bg-orange-500 p-[1%] rounded-lg font-bold text-[75%]">
                            Check it out!
                        </button>
                        */}
                    </div>
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