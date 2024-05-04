import Image from "next/image"
import classes from "./main-header.module.css" 
import {Leckerli_One} from "@next/font/google"

const leckeri = Leckerli_One({
    subsets: ["latin"],
    weight: ["400"]
})

export default function MainHeader()
{
    return <div className={classes.header}>
        <div className={classes.header_content}>
            <Image src="/images/beard.png" width={50} height={50}/>
            <h2 className={leckeri.className}>Crazy Barber</h2>
        </div>
    </div>
}