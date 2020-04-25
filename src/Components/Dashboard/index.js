import React ,{Component} from 'react';
import './Dashboard.css';

class Dashboard extends Component{
    render(){
        return(
            <div className="back-cont">
                <div className ="head-start">
                </div>
                <div className="sidebar">
                    <div className="portion-one">
                        <div className="logo-box"></div>
                        <div className="logo-text">Artiso</div>
                    </div>
                    <div className="portion-two">
                        <div className="cover">
                            <div className="backbox">
                                <div className="icon-box"><i className="fa fa-compass"></i></div>
                                <div className="icon-name">Explore</div>
                            </div>
                        </div>
                        <div className="cover">
                            <div className="backbox">
                                <div className="icon-box"><i className="fa fa-chart-bar"></i></div>
                                <div className="icon-name">Recommended</div>
                            </div>
                        </div>
                        <div className="cover">
                            <div className="backbox">
                                <div className="icon-box"><i className="fa fa-smile"></i></div>
                                <div className="icon-name">Interests</div>
                            </div>
                        </div>
                        <div className="cover">
                            <div className="backbox">
                                <div className="icon-box"><i className="fa fa-user-circle"></i></div>
                                <div className="icon-name">Profile</div>
                            </div>
                        </div>
                        <div className="cover">
                            <div className="backbox">
                                <div className="icon-box"><i className="fa fa-plus"></i></div>
                                <div className="icon-name">Add Post</div>
                            </div>
                        </div>
                        <div className="cover">
                            <div className="backbox">
                                <div className="icon-box"><i className="fa fa-shopping-cart"></i></div>
                                <div className="icon-name">My Cart</div>
                            </div>
                        </div>
                        <div className="cover">
                            <div className="backbox">
                                <div className="icon-box"><i className="fa fa-sign-out"></i></div>
                                <div className="icon-name">Logout</div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    }

}
export default Dashboard;