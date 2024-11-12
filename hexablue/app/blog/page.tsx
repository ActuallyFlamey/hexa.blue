"use client"

import Navigation from "../resources/components/nav"
import Footer from "../resources/components/footer"

export default function Blog() {
    return (
        <>
            <Navigation />
            <div className="grid justify-items-center px-[4vw] md:pt-[10vh] pt-[20vh] pb-[3vh]">
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