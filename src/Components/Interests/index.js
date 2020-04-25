import React ,{Component} from 'react';
import './Interests.css';

class Interests extends Component{
    check=() =>{
                this.props.history.push('/dashboard')
            }
    // idcheck=(e) =>{
    //     e
    // }
    render(){
        return(
            <div className="back-container">
                <div className="title-head">
                    <div className="name">
                        <div className="logo-name">Artiso</div>
                        <div className="choose">Choose Your Interests</div>
                    </div>
                </div>
            <div className="middle-part">
                <div className="gallery">
                    <div className="gall">
                        <div className="box-one" id="1" onClick={this.idcheck}>
                            <div className="pic-box abstract"></div>
                            <div className="name-box"></div>
                        </div>
                        <div className="box-one">
                        <div className="pic-box art"></div>
                            <div className="name-box"></div>
                        </div>
                        <div className="box-one">
                        <div className="pic-box chinese"></div>
                            <div className="name-box"></div>
                        </div>
                        <div className="box-one">
                        <div className="pic-box cubism"></div>
                            <div className="name-box"></div>
                        </div>
                        <div className="box-one">
                        <div className="pic-box figurative"></div>
                            <div className="name-box"></div>
                        </div>
                        <div className="box-one">
                        <div className="pic-box impressionism"></div>
                            <div className="name-box"></div>
                        </div>
                    </div>
                    <div className="gall">
                    <div className="box-one">
                    <div className="pic-box indian"></div>
                            <div className="name-box"></div>
                    </div>
                        <div className="box-one">
                        <div className="pic-box japanese"></div>
                            <div className="name-box"></div>
                        </div>
                        <div className="box-one">
                        <div className="pic-box korean"></div>
                            <div className="name-box"></div>
                        </div>
                        <div className="box-one">
                        <div className="pic-box modernism"></div>
                            <div className="name-box"></div>
                        </div>
                        <div className="box-one">
                        <div className="pic-box pop"></div>
                            <div className="name-box"></div>
                        </div>
                        <div className="box-one">
                        <div className="pic-box surrealism"></div>
                            <div className="name-box"></div>
                        </div>
                    </div>
                </div>
                 <div className="checkbox">
                     <div className="tik" onClick={this.check}>  

                     </div>
                   
                 </div>
                </div>   
            </div>
        );
    }
}
export default Interests;