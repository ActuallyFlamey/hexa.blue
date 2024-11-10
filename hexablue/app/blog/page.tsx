"use client"

import { useRouter } from "next/navigation"

import Navigation from "../resources/components/nav"
import Footer from "../resources/components/footer"

export default function Blog() {
    if (!window) {return}

    const router = useRouter()

    let isLandscape: boolean = window.innerWidth >= window.innerHeight

    window.addEventListener("resize", () => {
        let isLandscapeNew = window.innerWidth >= window.innerHeight

        if (isLandscapeNew != isLandscape) {
            isLandscape = isLandscapeNew

            router.refresh()
        }
    })

    return isLandscape ? Landscape() : Portrait()
}

function Landscape() {
    return (
        <>
            <Navigation />
            <div className="grid justify-items-center px-[4vw] pt-[12vh] pb-[3vh]">
                <h1 className="font-black text-[150%]">
                    News
                </h1>
                <h3 className="font-semibold pt-[2vh]">
                    No news so far...
                </h3>
            </div>
            <Footer />
        </>
    )
}

function Portrait() {
    return (
        <>
            <Navigation />
                <div className="grid justify-items-center px-[4vw] pt-[20vh] pb-[3vh]">
                   <h1 className="font-black text-[150%]">
                        News
                    </h1>
                    <h3 className="font-semibold pt-[2vh]">
                        No news so far...
                    </h3>
            </div>
            <Footer />
        </>
    )
}