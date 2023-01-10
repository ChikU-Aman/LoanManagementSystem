import React from 'react'
import Footer from './Footer'
import Header from './Header'





const Main = (props) => {
    return (

        <div >
            <Header />
           
            {props.children}
            <Footer />
        </div>

    )
}

export default Main