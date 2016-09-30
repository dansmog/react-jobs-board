import React, { Component } from 'react';

class JobList extends Component{
  render(){
    const jobs = this.props.jobs.map((job, i) => {
      return (
        <div key={i} className="job-item">
          <h2>{job.jobtitle}</h2>
          <p>{job.description}</p>
          <a className="apply-link" href="#">Apply</a>
        </div>
      )
    })
    return (
        <div className="job-board">
          { jobs }
        </div>        
    )
  }
}

export default JobList;
