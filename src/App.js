import {Fragment, useState} from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";

function App() {
    const [cardShown, setCartShown] = useState(false)

    const showCartHandler = () => {
        setCartShown(true)
    }
    const hideCartHandler = () => {
        setCartShown(false)
    }

    return (
        <Fragment>
            {cardShown && <Cart onCloseClick={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}  />
            <main>
                <Meals/>
            </main>
        </Fragment>
    );
}

export default App;
