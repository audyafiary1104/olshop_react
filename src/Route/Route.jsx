import React,{Component,Fragment} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Register from '../pages/Register/register';
import SignIn from '../pages/Sign_in/sign_in';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    <Route path="/" exact component={SignIn}></Route>
                    <Route path="/register" component={Register}></Route>
                </Fragment>
            </BrowserRouter>
        )
    }
}
export default Router