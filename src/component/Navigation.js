import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useSelector } from 'react-redux';
import  './component-style.css'

const Navigation = () => {
    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px'
    }
    const items = useSelector((state) => state.cart);

    return (
        <>
           <nav className="navbar container mx-auto flex items-center justify-between py-4">
    <ul className="flex items-center">
        <li><Link to="/">Home</Link></li>
        <li className="ml-6"><Link to="/blogs">Blogs</Link></li>
        <li className="ml-6"><Link to="/products">Products</Link></li>
        <li className="ml-6"><Link to="/cart"> Cart 
                <div className="cartStyle">
                    <span>{items.length ? items.length : 0}</span>
                    <img className="height-auto" src="./cart.png" alt="cart-icon" />
                </div>
            </Link>
        </li>
    </ul>
</nav>

        </>
    )
}

export default Navigation;
