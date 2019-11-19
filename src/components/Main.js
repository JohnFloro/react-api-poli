import React, {Component} from 'react';
import Pricing from './Pricing.jsx';

const data = [
    {
        "id": 1,
        "tipo": "Free",
        "precio" : 0,
        "usuarios": "10 users included",
        "capacidad": "2 GB of storage",
        "soporte": "Email support",
        "ayuda":"Help center access"
    },
    {
        "id": 2,
        "tipo": "Pro",
        "precio" : 15,
        "usuarios": "20 users included",
        "capacidad": "10 GB of storage",
        "soporte": "Priority email support",
        "ayuda":"Help center access"
    },
    {
        "id": 3,
        "tipo": "Enterprise",
        "precio" : 29,
        "usuarios": "30 users included",
        "capacidad": "15 GB of storage",
        "soporte": "Phone and email support",
        "ayuda":"Help center access"
    },

]

class Main extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">Pricing</h1>
                    <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
                </div>

                <div className="container">
                    <div className="card-deck mb-3 text-center">
                            <Pricing dataPricing = {data} />
                    </div>
                </div>
            </>
        )
    }
}

export default Main;