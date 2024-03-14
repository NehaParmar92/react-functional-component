import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '.././component/component-style.css';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const history = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => res.json())
        .then(product => {
            setProduct(product);
        })
    }, [params.id]);


    return (
        <div className="container mx-auto mt-12 box-container">
            <button className="mb-12 font-bold" onClick={ () => { history.goBack() } }>Back</button>
            <div className="flex card content">
                <img src={ product.image } alt="pizza" style={{width:"10%"}}/>
                <div className="ml-16 card-body">
                    <h1 className="text-xl font-bold card-title">{ product.category }</h1>
                    <div className="text-md">{ product.description }</div>
                    <div className="font-bold mt-2">₹ { product.price }</div>
                    <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
