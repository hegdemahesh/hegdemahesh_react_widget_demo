import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';
import MaximizeIcon from '@material-ui/icons/Fullscreen';
import WidgetHomeComponent from './widgetHomeComponent.jsx';
import WidgetWelcomeComponent from './WidgetWelcomeComponent.jsx';
import WidgetGoogleSignInComponent from './WidgetGoogleSignInComponent.jsx';
import './widgetContainer.css';

export default class WidgetContainer extends React.Component {
    constructor(props) {
        super(props);
        let that = this;
        window.ReactWidgetElement = that;
        this.state = { pageState: 1 , viewState: 2 };
        this.connectClick = this.connectClick.bind(this);
        this.signInClicked = this.signInClicked.bind(this);
        this.closeClick = this.closeClick.bind(this);
        this.maximize = this.maximize.bind(this);
        this.minimize = this.minimize.bind(this);
        this.removeElement = this.removeElement.bind(this);
    }

    componentDidMount() {
        if( sessionStorage.getItem('pageState') !== null) {
            let pageStateInt = parseInt(sessionStorage.getItem('pageState'));
            this.setState({ pageState: pageStateInt });
        }
        
        
    }

    removeElement() {
        let container = document.getElementById('widgetHolder');
        ReactDOM.unmountComponentAtNode(container)
    }

    connectClick(){
        this.setState({ pageState: 2 } );
        sessionStorage.setItem('pageState', 2);
    }

    signInClicked() {
        this.setState({ pageState: 3 } );
        sessionStorage.setItem('pageState', 3)
    }

    closeClick() {
        this.setState({ pageState: 2 } );
        sessionStorage.setItem('pageState', 2)
    }

    maximize() {
        this.setState({ viewState: 2 });
    }

    minimize() {
        this.setState({ viewState: 1});
    }

    render() {

        let controlElement;
        if( this.state.viewState === 1){
            controlElement = 
            <Fab onClick={this.maximize} className="fabIcons" color="primary" aria-label="maximize">
                <MaximizeIcon />
            </Fab>
            
        }
        else {
            controlElement = 
            <Fab onClick={this.minimize} className="fabIcons" color="primary" aria-label="minimize">
                <MinimizeIcon />
            </Fab>
        }

        let widgetElement;
        if( this.state.pageState === 1 ) {
            widgetElement = <WidgetHomeComponent connectClick={this.connectClick}/>
        }
        else if( this.state.pageState === 2){
            widgetElement = <WidgetWelcomeComponent signInClicked={this.signInClicked}></WidgetWelcomeComponent>
        }
        else {
            widgetElement = <WidgetGoogleSignInComponent closeClick={this.closeClick}></WidgetGoogleSignInComponent>
        }

        let widgetBody;
        if( this.state.viewState === 2){
            widgetBody = 
            <Card className="widgetBody">
                {widgetElement}
            </Card>
        }
        else {
            widgetBody = 
            <Card className="widgetBody">
                Hidden widget Content
            </Card>
        }

        let widget =
            <div className="widgetContainer">
                {widgetBody}
                <div className="spacer1">

                </div>
                <div className="widgetControls">
                    {controlElement}
                    <div className='spacerh'></div>
                    <Fab onClick={this.removeElement} className="fabIcons" color="primary" aria-label="add">
                        <CloseIcon />
                    </Fab>
                    
                    
                </div>
            </div>;
        return widget;
    }
    
}