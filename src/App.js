import React, { Component } from 'react';
import Header               from './components/Header';
import JobBoard             from './views/JobBoard';
import './App.css';


class App extends Component{
  render(){
    return (
      <div>
        <Header />
        <JobBoard />
      </div>
    )
  }
}

export default App;
