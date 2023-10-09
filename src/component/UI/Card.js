import classes from "./Styles/Card.module.css"

export const Card = (props)=>{
    return <div className={classes.card}>{props.children}</div>
}


export default Card