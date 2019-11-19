import React from 'react';

class Suma extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            "sumar" : this.props.numero
        }
    }

    sumando = (e) => {
        this.setState(
            {
               "sumar" : this.state.sumar + 1
            }
        )
    }

    render(){
        return(
            <div className="container">
                <h1>Lo que recibo por props</h1>
                <h2>{this.props.numero}</h2>
                <h1>Lo que tengo en el estado</h1>
                <h2>{this.state.sumar}</h2>
                <button type="button" onClick={this.sumando}> Sumar </button>
            </div>
        )
    }
}

export default Suma;