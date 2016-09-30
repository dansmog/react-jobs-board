import React, { Component } from 'react';

class CreateJobs extends Component{
    render(){
        return(
            <form onSubmit={this.handleCreate.bind(this)} id="jobsform">
                <div className="input-group">
                    <input type="text" ref="title" placeholder="Job Title"/>
                </div>
                <div className="input-group">
                    <textarea ref="description" placeholder="Description"></textarea>
                </div>
                <div className="input-group">
                    <button>Post Job</button>
                </div>
            </form>
        )
    }

 handleCreate(event){
    event.preventDefault();
    const jobtitle = this.refs.title.value;
    const description = this.refs.description.value;
    const id = Math.floor((Math.random() * 100) + 1);

    this.props.createJob(id, jobtitle, description);
  }
}

export default CreateJobs