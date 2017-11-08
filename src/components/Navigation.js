import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconHome from 'material-ui/svg-icons/action/home';
import IconUsers from 'material-ui/svg-icons/social/people';
import IconTasks from 'material-ui/svg-icons/av/playlist-add-check';
import Link from "react-router-dom/es/Link";
import Route from "react-router-dom/es/Route";

const NavBar = () => <header>
    <Paper zDepth={1}>
        <BottomNavigation>
            <NavLink
                label='Home'
                to='/'
                icon={<IconHome/>}
                activeOnlyWhenExact={true}/>
            <NavLink
                label='Users'
                to='/users'
                icon={<IconUsers/>}
                activeOnlyWhenExact={true}/>
            <NavLink
                label='Tasks'
                to='/tasks'
                icon={<IconTasks/>}
                activeOnlyWhenExact={true}/>
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
