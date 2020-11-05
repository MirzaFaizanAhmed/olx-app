import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import style from  '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import car from '../images/car.webp';

class Productcard extends Component{
    render(){
        return(
            <div className="col">
                <div className="card">
                    <div className="cardImage">
                        <img src={car} alt=""/>
                    </div>
                    <div className="cardContent">
                        <div className="prductDetails">
                            <span className="ProductPrice">Rs 9,999</span>
                            <span className="ProductName">Samsung Galaxy</span>
                        </div>
                        <div className="cardfooter">
                            <span className="ProductLocation">Karachi Saddar</span>
                            <span className="UploadTime">oct6</span>
                        </div>
        
                    </div>
                </div>
            </div>
        )
    }
}
export default Productcard;