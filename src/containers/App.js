import React from 'react';
import Layout from '../components/Layout.jsx';
import Main from '../components/Main';
import Login from '../components/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Layout>
                    <Route exact path="/main" component={Main} />
                </Layout>
                
            </Switch>

        </BrowserRouter>
    )
};

export default App;