import Reservation from "./reservation";
import classes from "./hero.module.css"
import Haircuts from "./cuts-layout";
export default function Hero()
{
    return <div className={classes.hero}>
        <Reservation/>
        <div className={classes.split}>
            <div className={classes.line}></div>
        </div>
        <Haircuts/>
    </div>
}