import {Fragment} from "react";
import mealImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Styles/Header.module.css"
const Header = (props)=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt=""/>
        </div>
    </Fragment>
}


export default Header