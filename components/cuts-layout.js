import SingleCut from "./single-cut";
import classes from "./cuts-layout.module.css"


export default function Haircuts()
{
    return <div className={classes.haircuts}>
        <div className={classes.layout}>
            <SingleCut image="/images/cuts/buzzcut.jpg" cut="buzzcut" desc="Cool looking haircut for everyone!"/>
            <SingleCut image="/images/cuts/buzzcut.jpg" cut="buzzcut" desc="Cool looking haircut for everyone!"/>
        </div>
    </div>
}