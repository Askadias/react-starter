import React from 'react';
import TransitionGroup from "react-transition-group/TransitionGroup";
import {Fade} from "./animations";
import NavBar from "./components/Navigation";
import Routes from "./Routes";
import './App.css';

const App = () => (
    <div className="App">
        <NavBar/>
        <TransitionGroup className='App-content'>
            <Fade>
                <Routes/>
            </Fade>
        </TransitionGroup>
    </div>
);

export default App;
