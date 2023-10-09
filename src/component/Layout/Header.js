import {Fragment} from "react";
import mealImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
const Header = (props)=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Card</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="Main Image"/>
        </div>
    </Fragment>
}


export default Header