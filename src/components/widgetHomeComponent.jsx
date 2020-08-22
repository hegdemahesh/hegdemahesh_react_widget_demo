import React from 'react';
import './widgetHomeComponent.css';
import hlogo from '../assets/HLogo.png';
import plusLogo from '../assets/plusLogo.png';
import otheLogo from '../assets/otheLogo.png';
import SelectableCard from './selectableCard.jsx';
import hlogoVSmall from '../assets/HLogo_very_small.png';
import otheLogoVSmall from '../assets/otheLogo_vsmall.png';
import Fab from '@material-ui/core/Fab';


function WidgetHomeComponent(props) {

    function connectClick(e) {
        e.preventDefault();
        props.connectClick();
    }
    
    let divElement = 
        <div className="HomeWidgetBox">
            <div className="LogoBox">
                <img alt='hlogo'
                 src={hlogo} />
                 <img alt='pluslogo'
                 src={plusLogo} />
                 <img alt='otheLogo'
                 src={otheLogo} />
            </div>
            <div className="headerTextBox">
                <h4>Connect with Intercom</h4>
                <p>Choose the account you want to connect with</p>
            </div>
            <div className="selectionBox">
                <SelectableCard title='headway' checked={true} titleIcon='headway icon' icon={hlogoVSmall}></SelectableCard>
                <SelectableCard title='other' checked={false} titleIcon='other icon' icon={otheLogoVSmall}></SelectableCard>
            </div>
            <div className="spacer1">

            </div>
                <div className="connectButtonBox">
                    <Fab onClick={connectClick} variant="extended" color="primary" aria-label="Connect">
                        
                            Connect
                    </Fab>
                </div>
        </div>;
        return divElement;
}

export default WidgetHomeComponent;
