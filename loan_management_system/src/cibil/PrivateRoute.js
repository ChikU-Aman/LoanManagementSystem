import React from 'react'
import { Route, Redirect, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth()
    const navigate = useNavigate()
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <navigate to="/login" />
            }}
        >

        </Route>
    )
}
