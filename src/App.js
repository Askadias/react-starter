import React from 'react';
import {Route} from 'react-router-dom'
import {TransitionGroup} from 'react-transition-group'
import NavBar, {routes} from "./components/Navigation";
import './App.css';
import './index.css';
import {Fade} from "./animations/index";
import Switch from "react-router/es/Switch";
import Home from "./components/Home";
import Redirect from "react-router/es/Redirect";

const App = () => (
    <div className="App">
        <NavBar/>
        <TransitionGroup className='App-content'>
            <Fade>
                <Switch>
                    {routes.map((route) =>
                        <Route key={route.path} exact path={route.path} component={route.component}/>
                    )}
                    <Redirect component={Home} to='/'/>
                </Switch>
            </Fade>
        </TransitionGroup>
        {/*<Route component={Unknown404}/>*/}
    </div>
);

export default App;
