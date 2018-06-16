import React, { Component } from 'react';
import "./NavBar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar">
        <div className="row mx-auto container-fluid">
            <div className="nav-item col-6 my-auto text-center">
              Click each character only one time
            </div>
            <div className="nav-item col-6 my-auto text-center">
              Your score : {this.props.userScore} | High score : {this.props.highScore}
            </div>
        </div>
        </nav>
      </div>
    )
  }
}