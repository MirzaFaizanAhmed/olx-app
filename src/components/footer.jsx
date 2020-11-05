import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import style from  '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import playstore from '../images/playstore.png';
import googleplay from '../images/googleplay.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

class Footer extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row footer">
                    <div className="col footer1">
                        <h5>POPULAR CATEGORIES</h5>
                        <ul>
                            <li>Cars</li>
                            <li>Flat for rent</li>
                            <li>Jobs</li>
                            <li>Mobile Phones</li>
                        </ul>
                    </div>
                    <div className="col footer2">
                        <h5>TRENDING SEARCHES</h5>
                        <ul>
                            <li>Bikes</li>
                            <li>Watches</li>
                            <li>Books</li>
                            <li>Dogs</li>
                        </ul>
                    </div>
                    <div className="col footer3">
                        <h5>ABOUT US</h5>
                        <ul>
                            <li>About OLX Groups</li>
                            <li>OLX Blogs</li>
                            <li>Contact Us</li>
                            <li>OLX for Businesses</li>
                        </ul>
                    </div>
                    <div className="col footer4">
                        <h5>OLX</h5>
                        <ul>
                            <li>Help</li>
                            <li>Sitemap</li>
                            <li>Legal & Privacy information</li>
                        </ul>
                    </div>
                    <div className="col footer5">
                        <h5>FOLLOW US</h5>
                        <ul>
                            <li><FacebookIcon /></li>
                            <li><TwitterIcon /></li>
                            <li><PlayCircleOutlineIcon /></li>
                            <li><InstagramIcon /></li>
                            
                        </ul>
                        <img src={playstore} alt=""/>
                        <img src={googleplay} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

class Belowfooter extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row belowFooter">
                    <div className="col left">
                        <span className="belowFooterBold">Other Countries</span>
                        <span>India - South Africa - Indonesia</span>
                    </div>
                    <div className="col"></div>
                    <div className="col right">
                        <span className="belowFooterBold">Free Classifieds in Pakistan</span>
                        <span>. © 2006-2020 OLX</span>
                    </div>
                </div>
                

            </div>
        )
    }
}

export {
    Footer,
    Belowfooter};