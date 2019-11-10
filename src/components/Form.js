import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            fname:'',
            lname:'',
            age:'',
            gender:'',
            city:'',
            hobbies:[]
        }
    this.handleChange=this.handleChange.bind(this)    
    }
    handleChange(event){
     const {name,value}=event.target;
     this.setState({
         [name]:value
     })  
    }
    render(){
        const widthstyle={
            width:'100%'
        };
        return(
        <div className="container my-5 border border-primary py-5">
            <div>
            <label>First Name </label><br/><input type="text" name="fname"  style={widthstyle} onChange={this.handleChange}/> <br/>
            <label>Last Name </label><br/><input type="text" name="lname"  style={widthstyle} onChange={this.handleChange}/> <br/>
            <label>Age </label><br/><input type="text" name="age"  style={widthstyle} onChange={this.handleChange} /> <br/>
            <label>Gender </label><br/><input type="radio" name="gender" value="Male" onChange={this.handleChange}/> Male  <input type="radio" name="gender" value="Female" onChange={this.handleChange}/> Female<br/>
            <lable>City</lable><br/>
            <select name="city" style={widthstyle} onChange={this.handleChange}>
                <option value="">--Select Your City--</option>
                <option value="riyadh">Riyadh</option>
                <option value="makkah">Makkah</option>
                <option value="medinah">Medinah</option>
                <option value="jeddah">Jeddah</option>
                <option value="dammam">Dammam</option>
            </select><br/>
            <label>Hobbies </label><br/><input type="checkbox" name="hobbies" value="Cricket" onChange={this.handleChange}/> Cricket  <input type="checkbox" name="hobbies" value="Football" onChange={this.handleChange}/> Football<br/>
            <label>Description</label><br/> <textarea rows="5" style={{width:'100%'}} name="description" onChange={this.handleChange}></textarea>
            </div>
            <hr className="border-primary"/>
            <div className="pl-4">
                <p className="h4">Entered Information:</p>
                <p>Your name is: {this.state.fname} {this.state.lname}</p>
                <p>Your Age is: {this.state.age} Years</p>
                <p>You are: {this.state.gender}</p>
                <p>You are belog to: {this.state.city}</p>
                <p>Your habbies are: {this.state.hobbies}</p>
                <p>Description:</p>
                <p>{this.state.description}</p>
            </div>
        </div>
        )
    }

}
export default Form;