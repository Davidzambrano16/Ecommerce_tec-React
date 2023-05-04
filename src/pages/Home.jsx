import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "../styles/homeStyle.css"
import { Card, Container, Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { setFilterProducts } from "../store/slices/filterSlice";
import CarruselHome from "../components/CarruselHome";

const Home = () => {

    const productsList = useSelector(state => state.products);
    const filterProducts = useSelector(state => state.filterProducts);

    const [categories, setCategories] = useState([]);
    const [inputFilter, setInputFilter] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
            .then(res => {
                setCategories(res.data.data.categories)
                dispatch(setFilterProducts(productsList));
            });
    }, [productsList])

    const filterCategories = (categoryId) => {
        dispatch(setFilterProducts(productsList.filter(product => product.category.id === categoryId)))
    }

    const filterName = () => {
        const filtered = productsList.filter(
            product => product.title.toLocaleLowerCase().includes(inputFilter.toLocaleLowerCase()));
        dispatch(setFilterProducts(filtered))
    }

    return (
        <div className="conteinerHome">
            <CarruselHome/>
            <div className="conteinerFilter">

                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-categories">
                        Filter<i className="fa-solid fa-filter" style={{margin: "0rem 0.5rem"}} ></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {categories.map(category => (
                            <Dropdown.Item
                                key={category.id}
                                onClick={() => filterCategories(category.id)}
                            >
                                {category.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="conteinerCard">
                {filterProducts.map(product => (
                    <Card className="card"
                        key={product.id}
                        onClick={() => navigate(`/product/${product.id}`)}>
                        <Container className="card--containerImg">
                            <Card.Img variant="top" src={product.productImgs[0]} />
                        </Container>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                price : {product.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Home;