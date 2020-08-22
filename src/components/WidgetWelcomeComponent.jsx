import React from 'react';
import bg from '../assets/bgImage01.png';
import './WidgetWelcomeComponent.css';
import HLogoSmall from '../assets/HLogo_small.png';
import MLogo from '../assets/Mlogo.png';
import changeLogo from '../assets/changeLogo.png';
import handIcon from '../assets/handIcon.png';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';

export default class WidgetWelcomeComponent extends React.Component {
    constructor(props){
        super(props);
        this.signInClicked = this.signInClicked.bind(this);
    }

    signInClicked() {
        //alert('hello');
        this.props.signInClicked();
    }

    render() {
        let widgetElement = 
        <div className='widgetWelcomeHolder'>
            <div className='widgetBg'>
                <img className="bgImage" src={bg} />
            </div>
            <div className="spacerv"></div>
            <div className="welcomeWidgetContent">
                <div className="contentItems">
                    <img src={HLogoSmall} alt='smalHlogo' />
                </div>
                <div className="contentItems" >
                    <div className="headerTexts">
                        <h3>Hi there</h3>
                        <img src={handIcon} alt="wave icon" />
                    </div>
                    <p className="whiteText">
                        Ask us anything, or share your feedback.
                    </p>
                </div>
                <Card className="higherIndex conversationItem">
                    <CardContent className="higherIndex CardContent">
                        <h5 className="higherIndex">Start a conversation</h5>
                        <p>Back tomorrow</p>
                            <div className="actionDiv">
                                <img src={MLogo} alt="MLogo" />
                                <div className="spacerh"></div>
                                <Fab
                                    variant="extended"
                                    color="primary"
                                    aria-label="add"
                                    
                                >
                                    <NavigationIcon  />
                                Extended
                                </Fab>
                            </div>
                        <h6>See Previous</h6>
                    </CardContent>
                        
                </Card>
                <div className='spacerV'>

                </div>
                <Card className="higherIndex conversationItem">
                    <div className="signInHolder CardContent">
                        <div className="holderh linkText">
                            <h5 className="boldText">Latest changes</h5>
                            <img src={changeLogo} alt='changeLogo'/>
                        </div>
                        <Divider/>
                        <div className="linkText" onClick={this.signInClicked}>
                            <h5>Google Sign-In</h5>
                        </div>
                        <Divider/>
                        <div className="linkText">
                            <h5>Delay in publishing changelogs</h5>
                        </div>
                        <Divider/>
                        <div className="linkText">
                            <h5>Changing the author</h5>
                        </div>
                        <Divider/>
                    </div>
                </Card>
            </div>
        </div>;
        return widgetElement;
    }
}