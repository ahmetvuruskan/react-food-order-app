import React from "react";
import classes from "./Styles/Input.module.css"


const Input = React.forwardRef((props, ref) => {

    return <React.Fragment>
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    </React.Fragment>
})

export default Input