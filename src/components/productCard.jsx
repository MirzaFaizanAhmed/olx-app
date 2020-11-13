import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import style from  '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import car from '../images/car.webp';
import firebase from '../config/firebase';
import {Link } from 'react-router-dom';


class Productcard extends Component{

    constructor(){
        super()
        this.state = {

            product : []

         }
    }

    componentDidMount(){
        firebase.database().ref("post").on("value" , data => {
            let product = [];
            data.forEach(list =>{
                product.push(list.val());
            });
            this.setState({product : product});
        })
    }
   
    
    render(){
        var rs = "RS ";
        return(

            
                <div className="col">
                    <div className="row">
                    {this.state.product.map((v,i)=>(
               <Link to = "/productMoreInfo"> <div className="card">
                    <div className="cardImage">
                        <img src={v.productImg} alt=""/>
                    </div>
                    <div className="cardContent">
                        <div className="prductDetails">
                            <span className="ProductPrice">Rs {v.productPrice}</span>
                            <span className="ProductName">{v.productTitle}</span>
                        </div>
                        <div className="cardfooter">
                            <span className="ProductLocation">{v.location}</span>
                            <span className="UploadDate">{v.date}</span>
                        </div>
                        
                    </div>
                </div></Link>
              ))}   
              </div> 
            </div>
            
           
        )
    }
}
export default Productcard;