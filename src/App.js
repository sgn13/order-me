import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./Layout/Header";
import { CartProvider } from "./store/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCarthandler = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      {
        showCart && <Cart onClose={hideCarthandler} />
      }
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
