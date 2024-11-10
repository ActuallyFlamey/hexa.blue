import { useEffect } from "react"
import { useRouter } from "next/navigation"

import Image from "next/image"

import logow from "../svg/logow.svg"

export default function Footer() {
    const router = useRouter()

    let isLandscape = true
    let isClient = typeof window !== undefined

    if (isClient) {
        useEffect(() => {
            isLandscape = window.innerWidth >= window.innerHeight

            window.addEventListener("resize", () => {
                let isLandscapeNew = window.innerWidth >= window.innerHeight

                if (isLandscapeNew !== isLandscape) {
                    isLandscape = isLandscapeNew

                    router.refresh()
                }
            })
        })

        return isLandscape ? Landscape() : Portrait()
    }
}

function Landscape() {
    return (
        <div className="grid justify-items-center bottom-0 inherit px-[4vw] py-[5vh] gap-[1vh]">
            <div className="flex items-center gap-[0.5vw]">
                <Image src={logow} alt="HexaBlue logo" width={0} height={0} className="w-[4vw] h-auto" />
                <h1 className="font-black text-[125%]">
                    HexaBlue
                </h1>
            </div>
            <p className="text-[50%] text-gray-300">
                All works are licensed under the GNU General Public License 3.0.
            </p>
        </div>
    )
}

function Portrait() {
    return (
        <div className="grid justify-items-center bottom-0 inherit px-[4vw] py-[5vh] gap-[1vh]">
            <div className="flex items-center gap-[0.5vw]">
                <Image src={logow} alt="HexaBlue logo" width={0} height={0} className="w-[8vw] h-auto" />
                <h1 className="font-black text-[125%]">
                    HexaBlue
                </h1>
            </div>
            <p className="text-[50%] text-gray-300">
                All works are licensed under the GNU General Public License 3.0.
            </p>
        </div>
    )
}