
import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const addressRef = useRef();
    const mobilenoRef = useRef();
    const dateOfBirthRef = useRef();
    const adharCardRef =useRef();
    const panCardRef =useRef();

    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(
                emailRef.current.value,
                passwordRef.current.value,
                addressRef.current.value,
                mobilenoRef.current.value,
                dateOfBirthRef.current.value,
                panCardRef.current.value,
                adharCardRef.current.value,

            );
            console.log(addressRef.current.value);
            navigate("/")

        } catch {
            setError("Failed to create an account");
        }
        setLoading(false);
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {/* {currentUser.email} */}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="emaild">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>

                        <h2>Additonal Information</h2>

                        <Form.Group id="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="textarea" ref={addressRef} required />
                        </Form.Group>
                        <Form.Group id="mobile-no">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="number" ref={mobilenoRef} required />
                        </Form.Group>
                        <Form.Group id="date-of-birth">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" ref={dateOfBirthRef} required />
                        </Form.Group>
                        <Form.Group id="adharcard">
                            <Form.Label>Adhar card</Form.Label>
                            <Form.Control type="text" ref={adharCardRef} required />
                        </Form.Group>
                        <Form.Group id="pan-card">
                            <Form.Label>Pan Card</Form.Label>
                            <Form.Control type="text" ref={panCardRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    );
}


