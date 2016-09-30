import React, { Component } from 'react';
import Header               from './components/Header';
import JobList              from './views/JobList';
import CreateJobs           from './components/create-new-jobs';
import './App.css';


const jobs = [
  {
    "id": "123456",
    "jobtitle": "React Native Developer",
    "description": "welcome to the best job board for react developers"
  },
  {
    "id": "123456",
    "jobtitle": "React Native Developer",
    "description": "welcome to the best job board for react developers"
  },
  {
    "id": "123456",
    "jobtitle": "React Native Developer",
    "description": "welcome to the best job board for react developers"
  }
]

class App extends Component{
  constructor(props){
    super(props);
    this.state = { jobs }
  }
  render(){
    return (
      <div>
        <Header />
        <section className="main">
          <div className="container-md">
          <CreateJobs createJob={this.createJob.bind(this)}/>
          <JobList  jobs={this.state.jobs} />
          </div>
        </section>
      </div>
    )
  }
  createJob(title, description, id){
    this.state.jobs.push({
      id, 
      title, 
      description
    });
    this.setState({jobs: this.state.jobs});
  }

}


export default App;
