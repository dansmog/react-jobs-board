import React, { Component } from 'react';

class CreateJobs extends Component{
    render(){
        return(
            <form>
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
}

export default CreateJobs