import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import style from  '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import advatismentImage from '../images/advatisment.png'
import playstore from '../images/playstore.png';
import googleplay from '../images/googleplay.png';

class Advatisment extends Component{
    render(){
        return(
            <div className="container-fluid advatisment">
                <div className="row">

                    <div className="col">
                        <img src={advatismentImage} alt=""/>
                    </div>
                    <div className="col advatisment1">
                        <h2>TRY THE OLX APP</h2>
                        <p>Buy, sell and find just about anything using the app on your mobile.</p>
                    </div>
                    <div className="col advatisment2">
                        <h4>GET YOUR APP TODAY</h4>
                        <img src={playstore} alt=""/>
                        <img src={googleplay} alt=""/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Advatisment ;