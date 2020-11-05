import React ,{Component} from 'react';
import {Header , Slider} from '../src/components/header'
import Categories from '../src/components/categoryMenu';
import Product from '../src/components/product';
import Advatisment from './components/advatisment'
import {Footer,Belowfooter} from './components/footer';
import postAdd from './components/postAdd';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';
import AppRouter from './components/router';


class App extends Component{
  render(){
    return(
      <div>
        <AppRouter/>
      </div>
      
      
    )
  }
}

export default App;
