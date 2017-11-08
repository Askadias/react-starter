import React from 'react';
import Route from "react-router-dom/es/Route";
import Redirect from "react-router/es/Redirect";
import Switch from "react-router/es/Switch";
import Loadable from 'react-loadable'
import Loading from "./components/Loading";

const AsyncHome = Loadable({loader: () => import("./components/Home"), loading: Loading});
const AsyncUserManager = Loadable({loader: () => import("./components/user"), loading: Loading});
const AsyncTaskManager = Loadable({loader: () => import("./components/tasks"), loading: Loading});

const Routes = () => (
    <Switch>
        <Route exact path='/' component={() => <AsyncHome/>}/>
        <Route exact path='/users' component={() => <AsyncUserManager/>}/>
        <Route exact path='/tasks' component={() => <AsyncTaskManager/>}/>
        <Redirect component={AsyncHome} to='/'/>
    </Switch>
);

export default Routes;
