import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from  '../App.css';
import { faArrowLeft, faMobile , faArrowRight, faChevronUp, faChevronRight, faBus, faCar, faHouseUser, faHome, faMotorcycle, faLaptop, faBusinessTime, faConciergeBell, faSuitcase, faDog, faBed, faTable, faChair, faTshirt, faGuitar, faBabyCarriage } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/olxlogo.png'
import {Link } from 'react-router-dom';
import {Footer , Belowfooter} from './footer';


class FormHeader extends Component {
    render(){
        return(
            <div className="container-fluid formHeader">
               <div className="row">
                   <Link to="/"><span><FontAwesomeIcon icon ={faArrowLeft}/></span></Link> 
                   <img src={logo} alt=""/>
               </div>
            </div>
        )
    }
}


class Form extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">       
                    <div className="col postAddHeading">
                        <h4>POST YOUR AD</h4>  
                    </div>
                </div>

                <div className="row AddForm">       
                    <div className="col categoryHeading">
                        <h5>CHOOSE A CATEGORY</h5>
                    </div>

                       <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faMobile} /></span>
                            <span className="categoryName">Mobile</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faCar} /></span>
                            <span className="categoryName">Vehicles</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faHouseUser} /></span>
                            <span className="categoryName">Property for Sale</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faHome} /></span>
                            <span className="categoryName">Property for Rent</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faLaptop} /></span>
                            <span className="categoryName">Electronics & Home Appliances</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faMotorcycle} /></span>
                            <span className="categoryName">Bikes</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faBusinessTime} /></span>
                            <span className="categoryName">Business Industrial & Agrculture</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faConciergeBell} /></span>
                            <span className="categoryName">Services</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faSuitcase} /></span>
                            <span className="categoryName">Jobs</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faDog} /></span>
                            <span className="categoryName">Animals</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faChair} /></span>
                            <span className="categoryName">Furniture & Home Decor</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faTshirt} /></span>
                            <span className="categoryName">Fashion & Beauty</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faGuitar} /></span>
                            <span className="categoryName">Books , Sports & Hobbies</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                        <Link to="/productDetailForm"><div className = "categoryDiv">
                            <span className="categoryIcon"><FontAwesomeIcon icon={faBabyCarriage} /></span>
                            <span className="categoryName">Kids</span>
                            <span className="subcategoryIcon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div></Link>

                </div>
                <Belowfooter />
            </div>
            


        )
    }
}


export {
    FormHeader , 
    Form
};