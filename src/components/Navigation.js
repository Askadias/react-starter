import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconHome from 'material-ui/svg-icons/action/home';
import IconUsers from 'material-ui/svg-icons/social/people';
import IconTasks from 'material-ui/svg-icons/av/playlist-add-check';
import Link from "react-router-dom/es/Link";
import Route from "react-router-dom/es/Route";
import Loadable from 'react-loadable'
import Loading from "./Loading";

const AsyncHome = Loadable({loader: () => import("./Home"), loading: Loading});
const AsyncUserManager = Loadable({loader: () => import("./user"), loading: Loading});
const AsyncTaskManager = Loadable({loader: () => import("./tasks"), loading: Loading});

export const routes = [{
    path: '/',
    exact: true,
    label: 'Home',
    icon: <IconHome/>,
    component: () => <AsyncHome/>
}, {
    path: '/users',
    exact: true,
    label: 'Users',
    icon: <IconUsers/>,
    component: () => <AsyncUserManager/>
}, {
    path: '/tasks',
    exact: true,
    label: 'Tasks',
    icon: <IconTasks/>,
    component: () => <AsyncTaskManager/>
}];

const NavBar = () => <header>
    <Paper zDepth={1}>
        <BottomNavigation>
            {routes.map((route) => <NavLink
                key={route.path}
                label={route.label}
                icon={route.icon}
                to={route.path}
                activeOnlyWhenExact={route.exact}/>)}
        </BottomNavigation>
    </Paper>
</header>;

export const NavLink = ({label, icon, to, activeOnlyWhenExact}) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => <Link to={to}>
        <BottomNavigationItem
            label={label}
            icon={icon}
            selected={match !== null}
        />
    </Link>
    }/>
);

export default NavBar;
