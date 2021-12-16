import React from "react";
import './Nav.scss';
//import React from "react";
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <div className="topnav" >
                <NavLink to="/" activeClassName="active" exact={true} >
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todos
                </NavLink>
                <NavLink to="/form" activeClassName="active">
                    Form
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    Users
                </NavLink>
                {/* <Link class="active" to="/">Home</Link>
                <Link to="/todo">Todos</Link>
                <Link to="/form">Form</Link> */}



                {/* <a class="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/form">Form</a> */}
            </div >
        )
    }
}
export default Nav;