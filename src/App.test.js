import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MemoryRouter from "react-router-dom/es/MemoryRouter";

it('renders without crashing', () => {
    shallow(<MemoryRouter initialEntries={['/home']}><MuiThemeProvider><App/></MuiThemeProvider></MemoryRouter>);
});
