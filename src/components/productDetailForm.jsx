import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from  '../App.css';
import {FormHeader , Form} from './postAdd';
import {Footer , Belowfooter} from './footer';
import user from '../images/user.png'

class DetailForm extends Component {
    render(){
        return(
            <div>
                <FormHeader />
                <div className="container">
                    <div className="row addHeading">
                        <h5>POST YOUR AD</h5>
                    </div>
                    <div className="row Form">
                        <div className="Details">
                            <h5>ENTER CETOGARY</h5>
                            <input type="text"/>
                        </div>
                        <div className="Details">
                            <h5>INCLUDE SOME DETAILS</h5>
                            <span>Condition *</span>
                            <button className="conditionBtn">New</button>
                            <button className="conditionBtn">Used</button>
                            <div>
                                <span>Add Title</span>
                                <input type="text"/>
                            </div>
                            <div>
                                <span>Description</span>
                                <textarea name="" id="" cols="30" rows="4"></textarea>
                            </div>
                        </div>

                        <div className="Details">
                            <h5>SET PRICE</h5>
                            <span>Price *</span>
                            <input type="text"/>
                        </div>

                        <div className="Details">
                            <h5>UPLOAD PICTURE</h5>
                            <span>Enter URL of Picture *</span>
                            <input type="text"/>
                        </div>

                        <div className="Details">
                            <h5>CONFORMATION YOUR LOCATION</h5>
                            <input type="text"/>
                        </div>

                        <div className="Details">
                            <h5>ENTER YOUR DETAILS</h5>
                            <div>
                                <img src={user} alt=""/>
                                <span>Name *</span>
                                <input type="text"/>
                            </div>
                            <h5>VARIFY YOUR ACCOUNT</h5>
                            <span>Mobile Phone Number *</span>
                            <input type="text"/>
                        </div>

                        <div className="Details">
                            <button className="postNowBtn">Post Now</button>
                        </div>


                    </div>
                </div>
                <Belowfooter />
            </div>
        )
    }
}


export default DetailForm;


