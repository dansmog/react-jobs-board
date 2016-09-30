import React, { Component } from 'react';
import Header               from './components/Header';
import JobList              from './views/JobList';
import CreateJobs           from './components/create-new-jobs';
import Tabs                 from './components/Tabs';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = { 
      jobs: [
         {
          "id": "123456",
          "jobtitle": "React Native Developer",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor odio enim, a laoreet risus pellentesque eget. Integer finibus sapien at dolor interdum fringilla. Vivamus vestibulum enim sed dui vulputate, at finibus nisl dapibus. Nunc non bibendum libero. Donec vel gravida felis. Donec iaculis tortor justo, eu lobortis enim venenatis a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque aliquet porttitor urna ac pulvinar."
        },
        {
          "id": "123456",
          "jobtitle": "React-Redux and Apollo CLient",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor odio enim, a laoreet risus pellentesque eget. Integer finibus sapien at dolor interdum fringilla. Vivamus vestibulum enim sed dui vulputate, at finibus nisl dapibus. Nunc non bibendum libero. Donec vel gravida felis. Donec iaculis tortor justo, eu lobortis enim venenatis a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque aliquet porttitor urna ac pulvinar."
        },
        {
          "id": "123456",
          "jobtitle": "React Native Developer",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor odio enim, a laoreet risus pellentesque eget. Integer finibus sapien at dolor interdum fringilla. Vivamus vestibulum enim sed dui vulputate, at finibus nisl dapibus. Nunc non bibendum libero. Donec vel gravida felis. Donec iaculis tortor justo, eu lobortis enim venenatis a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque aliquet porttitor urna ac pulvinar."
        }
      ],

      visible: false
    }
  }
  render(){
    return (
      <div>
        <Header toggle={this.onToggleForm}/>
        <section className="main">
          <div className="container-md">
          <CreateJobs createJob={this.createJob.bind(this)} />
          <Tabs />
          <JobList  jobs={this.state.jobs} />
          </div>
        </section>
      </div>
    )
  }
  createJob(id, jobtitle, description){
    const recentJobs = this.state.jobs.concat({id, jobtitle, description});
    this.setState({jobs: recentJobs});
  }

  onToggleForm(){
    this.setState({
      visible: true
    })
  }
}


export default App;
