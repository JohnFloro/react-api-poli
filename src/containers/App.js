import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Main from '../components/Main'
const App = () => {
    return(
        <>
            <NavBar 
                companyName="PopoPoli"
                features="Caracteristicas"
                pricing="Precios"
                support="Soporte"
                enterprise="Mis Productos"
            />
            <Main main="Venecosis"/>
            <Footer char="SOSPoli"/>
        </>
    )
};

export default App;