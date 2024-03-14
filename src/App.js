import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './component/Navbar';
import Blog from './component/Blog';
import { useEffect, useState } from 'react';
import { getCart, storeCart } from './helpers';
import Navigation from './component/Navigation';
import Products from './component/Products';
const App = () => {
    const [cart, setCart] = useState({});
    // Fetch cart from local storage
    useEffect(() => {
        getCart().then(cart => {
            console.log("helpers", cart);
            setCart(cart)

            // setCart(JSON.parse(cart));
        });
    }, []);

    useEffect(() => {
        console.log("SET helpers", cart)
        storeCart(cart)
        // storeCart(JSON.stringify(cart));
    }, [cart]);

    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/products" element={<Products />}></Route>

                        <Route exact element={<Blog />} path="/blogs"></Route>
                    </Routes>
                </Router>
            </Provider>
        </div>
    )
}

export default App;