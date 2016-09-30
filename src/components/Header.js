import React, { Component } from 'react';


class Header extends Component{
  render(){
    return (
        <div className="header">
          <div className="container">
            <img src={require("../logo.svg")} className="logo" role="presentation"/>
            <a href="#" className="post-job-link" onClick={this.toggle}>Post Job</a>
          </div>
        </div> 
    )
  }
}

export default Header;