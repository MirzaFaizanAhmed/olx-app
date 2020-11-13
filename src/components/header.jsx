import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faArrowUp , faBullseye, faComment, faBell, faFileImage, faChevronDown, faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/olxlogo.png';
import user from '../images/user.png';
import slider from '../images/slider.jpg';
import style from  '../App.css';
import {Link } from 'react-router-dom';
import firebase from '../config/firebase'
import { AlternateEmail } from '@material-ui/icons';



class Header extends Component{

    constructor(){
        super()
        this.state = {
            isLogin : false,
            name : "",
            photo: ""
        }
    }
    onSubmit = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
    
            var token = result.credential.accessToken;
            
            var user = result.user;
            
          })
          .catch(function(error) {
           console.log(error)
          });
    }

    componentDidMount = () =>{
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log(user.displayName + "   " + user.email + '   '+ user.photoURL);
            }
            else {
                console.log("not signin")
            }
        })
    }
    render(){
        return(
            <div className = "container-fluid header">
                <div className="row">
                    <div className = "olxlogo">
                        <img src={logo} alt=""/>
                    </div>

                    <div className="locationSearch">
                        <span><FontAwesomeIcon className="locationSearchIcon" icon={faSearch} /></span>
                        <span><input className="locationInput" type="text"/></span>
                        <span><FontAwesomeIcon className="locationSearchIcon" icon={faChevronUp}/></span>
                    </div>

                    <div className="search">
                        <span><input className="searchInput" type="text"/></span>
                        <span className="searchIconsearch"><FontAwesomeIcon className="searchIcon" icon={faSearch} /></span>
                    </div>

                    <div className="headerIcons">
                        <span><FontAwesomeIcon className="Hicon" icon={faComment} /></span>
                        <span><FontAwesomeIcon className="Hicon" icon={faBell} /></span>
                        <span className="userImage"><img src={this.state.photo} alt=""/></span> 
                        
                        <span><FontAwesomeIcon className="Hicon" icon={faChevronDown} /></span>
                    </div>
                    <div className="sell">
                    <a href="#" class="sellBtn">
                        
                        <Link to="/PostYourAdd"><span onClick={this.onSubmit}><FontAwesomeIcon className="sellIcon" icon={faPlus} />SELL</span></Link>
                    </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

class Slider extends Component{
    render(){
        return(
            <div className="slider">
                <img src={slider} alt=""/>
            </div>
        )
    }
}
export {
    Header,
    Slider};