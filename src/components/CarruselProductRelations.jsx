import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarruselProductRelations = ({ category }) => {

    return (
        <div>
            <Carousel fade>
                {category.map(product => (
                    <Carousel.Item key={product.id}>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{product.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default CarruselProductRelations;