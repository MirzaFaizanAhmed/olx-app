import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from  '../App.css';
import {Header ,slider } from './header';
import { faChevronRight, faHeart, faShare, faShareAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Footer, Belowfooter} from './footer';


class ProductInfo extends Component {
    render(){
        return(
            <div>
                <Header />

               <div className="container">
                   <div className="row add">
                       <div className="col">
                           <img src="https://www.whatmobile.com.pk/control/news/assets/01102019/52a6190def443b3c9ebc9f4c80fa5456_feat.jpg" alt=""/>
                       </div>
                   </div>
                   <div className="row"></div>
               </div>

                <div className="container-fluid productDdtailsDiv">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            
                            <div className="row">
                                <div className = "col productImg">
                                    <img src="https://i.gadgets360cdn.com/large/samsung_galaxy_a51_a50_a50s_image_1576156906933.jpg" alt=""/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col Description">
                                    <h4>Description</h4>
                                    <p>samsung A50 128gb with all accessories imei match box boxdual sim pta approved. no fault. 10/10
                                        white colour everything is perfect.</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 detailsProduct">
                            <div className="row PriceDetails">
                                
                                <div className="col">

                                     <div className="row">
                                        <div className="col-lg-9 col-md-9 col-sm-9 price">
                                            <h4>Rs 50,000</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 float-right icon">
                                            <FontAwesomeIcon className="share" icon={faShareAlt} />
                                            <FontAwesomeIcon className="heart" icon={faHeart}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col title">
                                            <p>samsung A50 in excellent condition</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-10 col-md-10 col-sm-10 location">
                                            <p>Gulshan-E-Iqbal Block 8, Karachi, Sindh</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-2 day">
                                            <p>Today</p>
                                        </div>
                                    </div>

                                </div>
                        
                            </div>
                            <div className="row SellerDescription">
                                <div className="col">
                                    
                                    <div className="row">
                                        <div className="col SDHeading">
                                            <p>Seller description</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-2">
                                            <FontAwesomeIcon className="SellerImg" icon={faUserCircle} />
                                        </div>
                                        <div className="col-lg-10 SellerName">
                                            <p>Olx User</p>
                                        </div>
                                    
                                    </div>

                                    <div className="row">
                                        <div className="col LiveChatBtn">
                                            <button>Chat with seller</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row PostedLocation">
                                
                                <div className="col">

                                    <div className="row">
                                        <div className="col PLHeading">
                                            <p>Posted in</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col PLLocation">
                                            <p>Gulshan-E-Iqbal Block 8, Karachi, Sindh</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col PLMap">
                                            <img src="https://maps.googleapis.com/maps/api/staticmap?center=24.905%2C67.085&language=en&size=640x256&zoom=15&scale=1&channel=olx-latam-ar-web-dev&key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&signature=VbNFgMSECUP7Ozy_ZKjIa-elURk=" alt=""/>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
            <Belowfooter/>
            </div>
        )
    }
}

export default ProductInfo;