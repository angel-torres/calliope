import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
        <nav className="nav">
                {/* <img className="logo" src="" alt="logo"></img> */}
                <h2 className="logo">Song Manager</h2>
                <div className="link-container">
                    <a className="link">Blog</a>
                    <a className="link">Learn</a>
                    <a className="link">About Us</a>
                </div>
                <div className="cta-container">
                    <a className="nav-cta">Sign up</a>
                    <a className="nav-cta">Log in</a>
                </div>
        </nav>
        )
    }
}
export default Nav;
