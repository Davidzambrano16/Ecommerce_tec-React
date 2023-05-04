import axios from 'axios';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import CreateUserModal from '../components/CreateUserModal';
import { useState } from 'react';
import "../styles/loginStyle.css"
import SucessModal from '../components/SucessModal';

const Login = () => {

    const [loginSuccessful, setLoginSuccessful] = useState(false); // Agregar el estado loginSuccessful
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate();

    const submit = (data) => {
        setLoginSuccessful(false)
        axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
            .then(res => {
                localStorage.setItem("token", res.data.data.token)
                setLoginSuccessful(true);
            })
            .catch(error => {
                console.log(error.response)
                if (error.response.status === 404) {
                    <Alert variant={"danger"}> invalid credentials </Alert>
                }
            })
    }

    return (
        <div className='containerFormLogin'>
            <Form className='containerFormLogin--FormLogin' onSubmit={handleSubmit(submit)} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password")} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            <Link className='containerFormLogin--linkCreateUser' variant="primary" onClick={handleShow}>
                Create user
            </Link>
            <CreateUserModal show={show} handleClose={handleClose} />

            {loginSuccessful && <SucessModal message={"you have successfully logged in!"} />}

        </div>
    );
};

export default Login;