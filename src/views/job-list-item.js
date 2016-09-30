import React, { Component } from 'react';

class JobListItem extends Component{
    render(){
        return(
            <form onSubmit={this.handleCreate}>
                <div className="input-group">
                    <input type="text" ref="title" placeholder="Job Title"/>
                </div>
                <div className="input-group">
                    <input type="text" ref="description" placeholder="Description"/>
                </div>
                <div className="input-group">
                    <button>Post Job</button>
                </div>
            </form>
        )
    }
handleCreate(event){
    event.preventDefault();

    const title = this.refs.title.value;
    const description = this.refs.description.value;
    const id = Math.floor((Math.random() * 100) + 1);

    if(title === '' || description === ''){
        alert('please enter a job and description');
    }else{
        this.props.createJob(id, title, description);
    }
  }
}

export default JobListItem