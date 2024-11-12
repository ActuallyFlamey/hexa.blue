import Image from "next/image"

import logow from "../svg/logow.svg"

export default function Footer() {
    return (
        <div className="grid justify-items-center text-center bottom-0 inherit px-[4vw] py-[5vh] gap-[1vh]">
            <div className="flex items-center md:gap-[0.5vw] gap-[1vw]">
                <Image src={logow} alt="HexaBlue logo" width={0} height={0} className="md:w-[3vw] w-[6vw] h-auto" />
                <h1 className="font-black">
                    HexaBlue
                </h1>
            </div>
            <p className="text-[50%] text-gray-300">
                All works are licensed under the GNU General Public License 3.0.
            </p>
        </div>
    )
}