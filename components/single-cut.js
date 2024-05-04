import Image from "next/image"
import classes from "./single-cut.module.css"
import Link from "next/link"

export default function SingleCut(props){
    return <Link href="#">
        <div className={classes.cut}>
            <Image src={props.image} width={150} height={150}/>
            <h4>{props.cut}</h4>
            <p>{props.desc}</p>
        </div>
    </Link>
}