import React, { Component } from 'react';
import {setState} from 'react';
import {useState} from 'react';
 
class Form extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            email: '',
            job: '',
            YOF: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })

    }

    handleEmailChange = (event) => {
        this.setState({
            email : event.target.value
        })
    }

    handleJobChange = (event) => {
        this.setState({
            job : event.target.value
        })
    }

    handleYOFChange = (event) => {
        this.setState({
            YOF : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.email} ${this.state.job} ${this.state.YOF}`)
        event.preventDefault()
    }
    handleReset = (event) => {
        this.setState({
            username: '',
            email: '',
            job: '',
            YOF: ''
        })
    }
    
    render() {
        return (
            <form className='main-form' >
                <div className='username-input-label'>
                <label className='label-field'>Username</label>
                <input placeholder='name' className='input-fields' type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div className='email-input-label'>
                <label className='label-field'>Email</label>
                <input placeholder='example@example.com' className='input-fields' type="text" value={this.state.email} onChange={this.handleEmailChange}/>
                </div>
                <div className='job-input-label'>
                <label className='label-field'>Current job</label>
                <input placeholder='ex. Programmer' className='input-fields' type="text" value={this.state.job} onChange={this.handleJobChange}/>
                </div>
                <div className='yof-input-label'>
                <label className='label-field'>Experience</label>
                <select placeholder='years' className='yof-input' value={this.state.YOF} onChange={this.handleYOFChange}>
                    <option value='1'>1 year</option>
                    <option value='2'>2 years</option>
                    <option value='3'>3 years</option>
                    <option value='4'>4+ years</option>
                </select>
                </div>
                <button className='submit-btn' type='submit' onClick={this.handleSubmit}>Submit</button>
                <button className='submit-btn' onClick={this.handleReset}>Reset</button>
                
            </form>
        );
    }
}

export default Form;