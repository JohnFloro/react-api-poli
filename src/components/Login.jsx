import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../static/indeportes.png';
import './styles/Login.css'
class Login extends React.Component{


    render(){
        return(
            <div className="container">
                <form className="form-signin">
                    <div className="Logo_container">
                        <img className="mb-4" src={logo} alt="" width="450" height="250" />
                    </div>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <Link to="/main">
                        <button className="btn btn-lg btn-success btn-block" type="button">Sign in</button>
                    </Link>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                </form>
            </div>
        );
    }

}

export default Login;