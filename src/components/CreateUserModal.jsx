import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const CreateUserModal = ({ show, handleClose }) => {

    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        axios.post('https://e-commerce-api.academlo.tech/api/v1/users', data)
            .then(res => console.log(res))
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(submit)} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="juan"
                                autoFocus
                                required
                                {...register("firstName")}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>last name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="lopez"
                                autoFocus
                                required
                                {...register("lastName")}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                required
                                {...register("email")}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                type="password"
                                autoFocus
                                required
                                minLength={8}
                                {...register("password")}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>phone</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="number phone"
                                autoFocus
                                required
                                min={10}
                                max={10}
                                {...register("phone")}
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                            Create User
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CreateUserModal;