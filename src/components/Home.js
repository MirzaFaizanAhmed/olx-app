import React ,{Component} from 'react';
import {Header , Slider} from './header'
import Categories from './categoryMenu';
import Product from './productCard';
import Advatisment from './advatisment'
import {Footer,Belowfooter} from './footer';




class Home extends Component{
    render(){
      return(
        <div>
            <Header />
            <Categories/>
            <Slider />
            <Product />
            <Advatisment />
            <Footer />
            <Belowfooter />
        </div>
        
        
      )
    }
  }
  
  export default Home;