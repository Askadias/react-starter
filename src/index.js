import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {deepPurple400, deepPurple500, deepPurple700, indigo100, indigo500, indigoA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: deepPurple500,
        primary2Color: deepPurple700,
        primary3Color: deepPurple400,
        accent1Color: indigoA200,
        accent2Color: indigo100,
        accent3Color: indigo500,
        textColor: deepPurple500
    },
    appBar: {
        height: 40,
    }
});

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
            <App/>
        </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
