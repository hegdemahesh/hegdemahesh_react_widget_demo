import ReactDOM from 'react-dom';
import App from './App.jsx';

export function initializeWidget() {
    ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('widgetHolder')
    );
}

export function unloadWidget() {

    let container = document.getElementById('widgetHolder');
    ReactDOM.unmountComponentAtNode(container)
}