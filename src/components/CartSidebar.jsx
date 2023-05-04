import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addPurchasedThunk } from '../store/slices/purchasedSlice';
import "../styles/cartSideBar.css"

const CartSidebar = ({ show, handleClose }) => {

    const dispatch = useDispatch();
    const productsCart = useSelector(state => state.cart)

    const purchased = () => {
        dispatch(addPurchasedThunk())
    }

    return (
        <div>
            <Offcanvas show={show} onHide={handleClose} placement={`end`}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='title'> my cart </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='containerBody'>
                    <Container className='containerCard'>
                    {productsCart.map(productCart => (
                        <Card className='containerCard--card' key={productCart.id}>
                            <Card.Header> {productCart.title} </Card.Header>
                            <Card.Body>
                                <Card.Title> {productCart.title}</Card.Title>
                                <Card.Text>
                                    quantity : {productCart.productsInCart.quantity}
                                </Card.Text>
                                <Button variant="primary">bash</Button>
                            </Card.Body>
                        </Card>
                    ))}
                    </Container>
                    <Button variant="primary" onClick={purchased} >buy cart</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default CartSidebar;