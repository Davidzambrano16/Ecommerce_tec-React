import { useState } from 'react';
import { Container, Nav, Navbar, Form, Button, Figure } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setFilterProducts } from '../store/slices/filterSlice';
import CartSidebar from './CartSidebar';
import logo from "../assets/logo.jpg";

const MyNavBar = () => {

    const [inputFilter, setInputFilter] = useState("");
    const productsList = useSelector(state => state.products);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const filterName = () => {
        const filtered = productsList.filter(
            product => product.title.toLocaleLowerCase().includes(inputFilter.toLocaleLowerCase()));
        dispatch(setFilterProducts(filtered))
    }

    const Logout = () => {
        localStorage.setItem("token", "")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container className='containerNavBar'>
                    <Nav.Link onClick={handleShow} className='containerNavBar--cartButton' >
                         <i className="fa-solid fa-cart-shopping"></i> </Nav.Link>
                        <Navbar.Brand to={"/"} as={Link} > <img src={logo}/> ecommerce_Tec</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Form className="d-flex">
                                    <Form.Control
                                        placeholder="search product"
                                        onChange={e => setInputFilter(e.target.value)}
                                        value={inputFilter}
                                    />
                                    <Button variant="outline-success" onClick={filterName}><i className="fa-solid fa-magnifying-glass"></i></Button>
                                </Form>
                                <Nav.Link to={"/purchased"} as={Link} >Purchased <i className="fa-solid fa-money-bill"></i></Nav.Link>
                                <Nav.Link to="/login" as={Link} > Login <i className="fa-solid fa-right-to-bracket"></i> </Nav.Link>
                                <Nav.Link onClick={Logout}> Logout <i className="fa-solid fa-right-from-bracket"></i> </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
            <CartSidebar show={show} handleClose={handleClose} placement={"top"} />
        </div>
    );
};

export default MyNavBar;