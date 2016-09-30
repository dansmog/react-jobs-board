import React, { Component } from 'react';

class CreateJobs extends Component{
    render(){
        var display = this.props.displayed ? 'block' : 'none';
        var styles = {display: display}
        return(
            <form style={styles} onSubmit={this.handleCreate.bind(this)} id="jobsform">
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
    this.refs.title.value = "";
    this.refs.description.value = "";

  }
}

export default CreateJobs