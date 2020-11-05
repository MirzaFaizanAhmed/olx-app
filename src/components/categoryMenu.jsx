import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import style from  '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

class Categories extends Component{
    render(){
        return(
            <div>
                <ul className="categories">
                    <li className="allCategories" >All Categories <FontAwesomeIcon icon={faChevronUp} /></li>
                    <li>Mobile Phones</li>
                    <li>Cars</li>
                    <li>Motorcycles</li>
                    <li>Houses</li>
                    <li>Tv-Video-Audio</li>
                    <li>Tablets</li>
                    <li>Land & Plots</li>
                </ul>
            </div>
        )
    }
} 

export default Categories;