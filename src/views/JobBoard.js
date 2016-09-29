import React, { Component } from 'react';
import CreateJobs           from '../components/create-new-jobs';

class JobBoard extends Component{
  render(){
    return (
        <div className="job-board">
          <CreateJobs /> 
        </div>        
    )
  }
}

export default JobBoard;
