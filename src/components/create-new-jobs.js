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
                    <input type="text" ref="company" placeholder="Company Name"/>
                </div>
                <div className="input-group">
                    <textarea ref="description" placeholder="Description"></textarea>
                </div>
                <div className="input-group float-left">
                    <button>Post Job</button>
                </div>
                <div className="input-group float-left">
                    <select ref="select">
                        <option value="remote">Remote</option>
                        <option value="full-time">Full-Time</option>
                        <option value="part-time">Part-Time</option>
                    </select>
                </div>
            </form>
        )
    }

 handleCreate(event){
    event.preventDefault();
    const jobtitle = this.refs.title.value;
    const description = this.refs.description.value;
    const availability = this.refs.select.value;
    const company = this.refs.company.value;
    const id = Math.floor((Math.random() * 100) + 1);

    if(jobtitle === "" || description === "" || availability === "" || company === ""){
        alert("Provide all details for the job");
    }else{
        this.props.createJob(id, jobtitle, description, availability, company);
    }
    this.refs.title.value = "";
    this.refs.description.value = "";
    this.refs.company.value = "";

  }
}

export default CreateJobs