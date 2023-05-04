import React, { useEffect, useState } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../styles/productDetailStyle.css"
import { addProductCartThunk } from '../store/slices/cartSlice';
import CarruselProductRelations from '../components/CarruselProductRelations';
import SucessModal from '../components/SucessModal';

const ProductDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    
    const [quantity, setQuantity] = useState(1);
    const [productList, setProductList] = useState(useSelector(state => state.products))
    const productDetail = productList.find((product) => product.id === Number(id))
    const [categories, setCategories] = useState((productList.filter(product => product.category.id === productDetail.category.id)));    const [productSucessFul, setProductSucessFul] = useState(false); // Agregar el estado para modal product

    const addProduct = () => {
        setProductSucessFul(false)
        const cart = {
            id: id,
            quantity: quantity
        }
        dispatch(addProductCartThunk(cart))
        setProductSucessFul(true)
    }

    return (
        <div className='detail'>
            {productDetail && (<>
                <div className='cardDetail'>
                    <h1>{productDetail.title}</h1>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={productDetail.productImgs[0]}
                                alt="First slide"
                                width={"100px"}
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={productDetail.productImgs[1]}
                                alt="Second slide"
                                width={"100px"}
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={productDetail.productImgs[2]}
                                alt="Third slide"
                                width={"100px"}
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='articleDetail'>
                    <p>{productDetail.description}</p>
                    <h3> price : {productDetail.price} </h3>
                    <div className='conteinerQuantity'>
                        <Button onClick={() => setQuantity(quantity + 1)} >+</Button>
                        <p>{quantity}</p>
                        <Button onClick={() => {
                            if (quantity !== 1) {
                                setQuantity(quantity - 1)
                            }
                        }} >-</Button>
                        <Button className='addButton' onClick={addProduct} >add to cart <i className="fa-solid fa-cart-shopping"></i></Button>
                    </div>
                </div>
                <div>
                    {
                        categories.map(productCategory => (
                            <h2 key={productCategory.id} >{productCategory.title}</h2>
                        ))
                    }
                </div>
            </>)}
            {productSucessFul && <SucessModal message={"your product has been added successfully"} />}
        </div>
    );
};

export default ProductDetail;