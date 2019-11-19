import React from 'react';

class Pricing extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.dataPricing);
        return (
            this.props.dataPricing.map(pricing => {
                return(
                    <div key= {pricing.id} className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">{pricing.tipo}</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">${pricing.precio} <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>{pricing.usuarios}</li>
                                <li>{pricing.capacidad}</li>
                                <li>{pricing.soporte}</li>
                                <li>{pricing.ayuda}</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                        </div>
                    </div>
                )
            })
          
        )
    }
}

export default Pricing;