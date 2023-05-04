import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchasedThunk } from '../store/slices/purchasedSlice';
import { Card } from "react-bootstrap"
import "../styles/purchased.css"

const Purchased = () => {

    const purchases = useSelector(state => state.purchased);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(purchasedThunk());
    }, [])

    return (
        <div className='purchased'>
            <h2>Your Purchases</h2>
            {purchases.map(purchased => (
                <Card key={purchased.id}>
                    <Card.Header>{purchased.createdAt}</Card.Header>
                    {purchased.cart.products.map(product => (
                        <Card.Body key={product.id}>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                 brand : {product.brand} price : {product.price} quantity: {product.productsInCart.quantity}
                            </Card.Text>
                        </Card.Body>
                    ))}
                </Card>
            ))}
        </div>
    );
};

export default Purchased;