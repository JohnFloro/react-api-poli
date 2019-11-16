import React from 'react';
import Layout from '../components/Layout';
import AlbumsContent from '../containers/AlbumsContent';
import Login from '../components/Login';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
const App = () => {
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Layout>
                        <Route exact path="/album" component={AlbumsContent} />
                    </Layout>
                </Switch>
            
            </BrowserRouter>
            
        </>
    )
};

export default App;