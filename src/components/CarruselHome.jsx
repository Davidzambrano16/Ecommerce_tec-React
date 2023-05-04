import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarruselHome = () => {
    return (
        <div className='containerCarruselHome'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://blog.tiendasishop.com/wp-content/uploads/2022/07/12.-May-Productos-tecnolo%CC%81gicos-de-calidad-%C2%BFco%CC%81mo-identificarlos-1024x683.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.emprenderalia.com/wp-content/uploads/Crear-una-tienda-online-en-10-pasos-3-meses-y-sin-inversion.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://c8.alamy.com/compes/en92fd/tecnologia-en-una-tienda-dispay-brighthouse-en-swinton-salford-en92fd.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarruselHome;