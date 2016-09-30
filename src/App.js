import React, { Component } from 'react';
//import Firebase             from 'firebase';
import Header               from './components/Header';
import JobList              from './views/JobList';
import CreateJobs           from './components/create-new-jobs';
import Tabs                 from './components/Tabs';
import './App.css';


class App extends Component{
 
  constructor(props){
    super(props);
    this.state = { 
      jobs: props.jobs,
      formDisplayed: false,
    }
  }

 createJob(id, jobtitle, description, availability, company){
    const recentJobs = this.state.jobs.concat({id, jobtitle, description, availability, company});
    this.setState({jobs: recentJobs});
  }

  onToggleForm(){
    this.setState({
      formDisplayed: !this.state.formDisplayed
    })
    console.log(this.state.formDisplayed)
  }

  render(){
    return (
      <div>
        <Header displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm.bind(this)}/>
        <section className="main">
          <div className="container-md">
          <CreateJobs displayed={this.state.formDisplayed} createJob={this.createJob.bind(this)} />
          <Tabs />
          <JobList  jobs={this.state.jobs} />
          </div>
        </section>
      </div>
    )
  }
 
} 

export default App