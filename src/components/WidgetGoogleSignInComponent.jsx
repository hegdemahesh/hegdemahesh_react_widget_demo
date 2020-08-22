import React from 'react';
import bg from '../assets/bgImage01.png';
import './widgetGoogleSignInComponent.css';
import CloseIcon from '@material-ui/icons/Close';
import googleLogo from '../assets/googleLogo.png';
import Card from '@material-ui/core/Card';

export default function WidgetGoogleSignInComponent(props) {
    

    function closeClick(e) {
        props.closeClick();       
    }

    let widgetElement = 
        <div className='widgetWelcomeHolder'>
            <div className='widgetBg'>
                <img className="bgImage" src={bg} />
            </div>
            <div className="spacerv"></div>
            <div className="welcomeWidgetContent">
                <div className="hholder">
                    <h5 className="whiteText elevatedText topLabel">Latest Changes</h5>
                    <p className="whiteText elevatedText pointedCursor" onClick={closeClick}>X</p>
                </div>
                <div className="vholder whitebg elevatedText alignedText">
                    <h4 className="elevatedText">Google Sign In</h4>
                    <div className="hholder">
                        14 days ago
                    </div>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                     aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                     aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h4>Log in with</h4>
                    <Card>
                        <div className="hholder">
                            <img src={googleLogo} alt='googlelogo' />
                            <p>Login with your google account</p>
                        </div>
                        
                        
                    </Card>
                    
                </div>

            </div>
        </div>
    return widgetElement;
    
}