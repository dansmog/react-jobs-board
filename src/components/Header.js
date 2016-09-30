import React, { Component } from 'react';
import Logoimage from '../logo.svg';

class Header extends Component{
  render(){
    let classString;

    if(this.props.visible){
      classString = "post-job-link";
    }else{
      classString = "post-job-link";
    }
    return (
        <div className="header">
          <div className="container">
             <img src={Logoimage} className="logo" alt="logo"/>
            <a href="#" className={classString}  onClick={this.props.onToggleForm.bind(this)}>Post Job</a>
          </div>
        </div> 
    )
  }
}

export default Header;