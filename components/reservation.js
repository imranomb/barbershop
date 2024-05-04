import Image from "next/image"
import classes from "./reservation.module.css"
import {Leckerli_One} from "@next/font/google"

const leckeri = Leckerli_One({
    subsets: ["latin"],
    weight: ["400"]
})


export default function Reservation()
{
    return <div className={classes.reservation}>
        <div className={classes.info}>
            <Image src="/images/imran.jpeg" width={300} height={400}/>
            <div className={classes.person}>
                <span>instagram / </span>
                <span>frizura</span>
            </div>
        </div>
        <div>
            <span className={`${classes.naslov} ${leckeri.className}`}>Nema loših dana sa <br></br> dobrim frizerom!</span>
            <form className={classes.form}>
                <label htmlFor="dan">Dan</label>
                <input type="text" id="dan"/>
                <label htmlFor="dan">Vrijeme</label>
                <input type="text" id="vrijeme"/>
                <button>Zakazi</button>
            </form>
        </div>
    </div>
}