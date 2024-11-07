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
                <Footer />
            </>
        )
    } else {
        return (
            <></>
        )
    }
}