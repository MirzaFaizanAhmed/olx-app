import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import style from  '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Productcard from './productCard'


class Product extends Component{
    render(){
        return(
            <div className="container-fluid productMain">

                <div className="row" >
                    <div className="col">
                    <Productcard />
                    </div>
                    <div className="col">
                    <Productcard />
                    </div>
                    <div className="col">
                    <Productcard />
                    </div>
                    <div className="col">
                    <Productcard />
                    </div>
                    
                </div>

                <div className="row" >
                    <div className="col">
                    <Productcard />
                    </div>
                    <div className="col">
                    <Productcard />
                    </div>
                    <div className="col">
                    <Productcard />
                    </div>
                    <div className="col">
                    <Productcard />
                    </div>
                    
                </div>

            </div>
        )
    }
}
export default Product;