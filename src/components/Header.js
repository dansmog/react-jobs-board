import React, { Component } from 'react';


class Header extends Component{
  render(){
    return (
      <div>
        <div>
            <h4>React-JobBoard</h4>
            <a href="#" className="post-job-link">Post Job</a>
        </div> 
      </div>
    )
  }
}

export default Header;