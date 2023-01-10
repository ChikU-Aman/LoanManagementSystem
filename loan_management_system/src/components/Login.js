import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'

const Login = (props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({ username: '', password: '' })
    const [success, setSuccess] = useState(true);
    const [message, setMessage] = useState('');

    const clickHandler = (e) => {
        e.preventDefault();
        if (user.username === 'Monali' && user.password === '2023') {
            props.login(user.username)
            setSuccess(true);
            navigate('/customerdetails', { state: { name: user.username, message: 'Hi This is Welcome Page' } });
        }
        else {

            setSuccess(false);
            setTimeout(() => {
                setSuccess(true)
            }, 3000)
        }
    }

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const Clear = (e) => {
        console.log("clear")
        setMessage('');
    }
    return (
        <div className='container  col-xs-12 block2 center' style={{ width: '50%' }} >
            <Form>
                <h4 style={{ padding: '10px' }}>Login Here</h4>
                {!success && <Alert color="danger">Login Fail</Alert>}
                <FormGroup>
                    <Label for="exampleUsername">
                        Email
                    </Label>
                    <Input
                        id="exampleUsername"
                        name="username"
                        placeholder="with a placeholder"
                        type="text"
                        value={user.username}
                        onChange={changeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                        value={user.password}
                        onChange={changeHandler}
                    />
                </FormGroup>
                {/* <Button color="success" onClick={clickHandler}> */}
                <Button color="success" onClick={(e) => { clickHandler(e) }}>
                    Login
                </Button><>{'   '}</>
                <Button color="danger" onClick={(e) => { Clear(e) }}>
                    Cancel
                </Button>
            </Form>
        </div>
    )
}

export default Login