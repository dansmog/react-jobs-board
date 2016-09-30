import React, { Component } from 'react';

class JobList extends Component{
  render(){
    const jobs = this.props.jobs.map((job, i) => {
      return (
        <div key={i} className="job-item">
          <h2>{job.jobtitle}</h2>
            <div className="info">
              <span className="tag">Available As: {job.availability}</span>
              <span className="company">Company: {job.company}</span>
            </div>
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
