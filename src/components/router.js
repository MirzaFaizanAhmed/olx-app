import { Divider } from '@material-ui/core';
import React , {Component} from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './Home';
import PostYourAdd from './PostYourAdd';
import DetailForm from './productDetailForm';
import ProductInfo from './productMoreInfo';

class AppRouter extends Component {
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} / >
                <Route path="/PostYourAdd" component={PostYourAdd} />
                <Route path="/productDetailForm" component={DetailForm} />
                <Route path="/productMoreInfo" component={ProductInfo} />
            </Router>
        )
    }
}

export default AppRouter;