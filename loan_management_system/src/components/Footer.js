import React from 'react'
import { FaFacebookSquare, FaSkype, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    const style = {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: 'green'

    }
    const css={
        float: 'right'
    }
    return (
        <footer className='footer' style={style}>
            <div className='container' style={{ margin: "10px" }}>
                <span className="text-light">&copy;2023  YASH Technologies Pvt Ltd. All Rights Reserved</span>

                <span style={css}>
                    <span style={{ padding: "5px" }}> <FaFacebookSquare color='white' size={25}></FaFacebookSquare></span>
                    <span style={{ padding: "5px" }}> <FaSkype color='white' size={25}></FaSkype></span>
                    <span style={{ padding: "5px" }}> <FaTwitterSquare color='white' size={25}></FaTwitterSquare></span>
                </span>
            </div>

        </footer>
    )
}

export default Footer