import classes from "./Styles/Modal.module.css";
import {Fragment} from "react";
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div onClick={props.onClose} className={classes.backdrop}></div>
}

const Overlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portal = document.getElementById("overlays")

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop  onClose={props.onClose}/>, portal)}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portal)}
    </Fragment>
}

export default Modal