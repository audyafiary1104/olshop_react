import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
class Register extends Component{
    state={
        form:{
            email:'',
            first_name:'',
            last_name:'',
            password:''
        }
     
    }
    render(){
        return(
            <Fragment>
                <form>
                    <input type="text"name="email" placeholder="email" onChange={this.RegisterFun}></input>
                    <input type="text" name="first_name" placeholder="First Name" onChange={this.RegisterFun}></input>
                    <input type="text" name="last_name" placeholder="Last Name"onChange={this.RegisterFun}></input>                    
                    <input type="password" name="password" placeholder="password" onChange={this.RegisterFun}></input>                
                </form>
                <button onClick={this.postRegister}>Register</button>
                <br></br>
            <Link to='/'>Do you have Account?</Link>
            </Fragment>
        )
    }
    RegisterFun = (event) => {
        let Register =  {...this.state.form};
        Register[event.target.name] =  event.target.value;  
        this.setState({
            form : Register
        })
    }
        postRegister=()=>{
            Axios.post('http://127.0.0.1:8000/api/register',this.state.form).then((res)=>{
                console.log(res);
            })
        }
}
export default Register;