import React,{Component,Fragment} from'react';
import {Link} from 'react-router-dom';
class SignIn extends Component{
    render(){
        return(
            <Fragment>
                <form>
                    <input type="text" name="" id="" placeholder="Email"/>
                    <input type="text" name="" id="" placeholder="Password"/>
                    <input type="submit"  value="Log In"/>
                </form>
                <div>
                <Link to="/register">Register</Link>
                </div>

            </Fragment>
        )
    }
}
export default SignIn;