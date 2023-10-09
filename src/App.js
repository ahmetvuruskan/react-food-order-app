import {useState} from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CardProvider from "./store/CardProvider";

function App() {
    const [cardShown, setCartShown] = useState(false)

    const showCartHandler = () => {
        setCartShown(true)
    }
    const hideCartHandler = () => {
        setCartShown(false)
    }

    return (
        <CardProvider>
            {cardShown && <Cart onCloseClick={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}  />
            <main>
                <Meals/>
            </main>
        </CardProvider>
    );
}

export default App;
