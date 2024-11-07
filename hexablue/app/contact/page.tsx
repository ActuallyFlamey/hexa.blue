"use client"

import Navigation from "../resources/components/nav"
import Footer from "../resources/components/footer"

import Image from "next/image"

export default function Contact() {
    if (!visualViewport) {return}

    if (visualViewport.width >= visualViewport.height) {
        return (
            <>
                <Navigation />
                <div className="grid justify-items-center px-[4vw] pt-[12vh] pb-[3vh]">
                    <h1 className="font-black text-[150%]">
                        Contact Us
                    </h1>
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