import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

const Layout = (props) => {
    return(
        <>
            <NavBar 
                companyName="Poli"
                features="Caracteristicas"
                pricing="Precios"
                support="Soporte"
                enterprise="Mis Productos"
            />
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout;