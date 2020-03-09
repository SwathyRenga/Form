import React,{Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            confirmpassword:''
        }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value  // i am using same handler to update the state for different inputs.
        })
    }
    submit=(event)=>{
        event.preventDefault();     // cancels the default action of the submit button.this is because we dont want to submit.
        console.log(this.state)
    }
    render(){
        return(<form className="new">
            
                <label>USERNAME</label>
             <input name="username" type="text" placeholder="enter your username"  value={this.state.username} onChange={this.handleChange}></input>
            <br/>
            <br/>
            <label>E-MAIL</label>
            <input name="email" type="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange}></input>
            <br/><br/>
            <label>PASSWORD          </label>
            <input name="password" type="password" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange}></input>
            <br/><br/>
            <label>CONFIRM PASSWORD  </label>
            <input name="confirmpassword" type="password" placeholder="Confirm your password" value={this.state.confirmpassword} onChange={this.handleChange}></input>
            <br/><br/><br/>
            <button onClick={this.submit}>Submit</button>
            </form>
        )
    }
}export default Form
