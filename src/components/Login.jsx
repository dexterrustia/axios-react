import React, { Component, Fragment } from 'react'
import { Redirect } from "react-router-dom";

//Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Form from 'react-bootstrap/Form'; 

import axios from 'axios'

class Login extends Component {

    state = {
        numberOrEmail: '',
        password: '',
        route: ''
    } 
    
    handleStateChanges = (e) => {    
        this.setState({ [e.target.name]: e.target.value });
    } 
    OnLogin = (e) => { 
        e.preventDefault();
        const user = {
            numberOrEmail: this.state.numberOrEmail,
            password: this.state.password
        }
        console.log(`user : ${user}`)
        axios.post('http://localhost:3200/user/login', user)
            .then(res => { 
                console.dir(res.data);
                console.log(`len : ${res.data.length}`)
                if(res.data.length == 1)
                    this.setState({route:'/home'})
            })
            .catch(err => { 
                console.log(`err : ${err}`)
            })
    }

    render() {
        if (this.state.route != '') {
            return <Redirect to={this.state.route} />
        }
        return (
            <Fragment>
                <Form className="LoginForm" onSubmit={this.OnLogin}>
                    <Row>
                        <Col xm={5} md={5} >
                            <span>Email or Phone</span>
                            <input type="text" name="numberOrEmail" onChange={this.handleStateChanges}/>
                        </Col>    
                        <Col xm={5} md={5} >
                            <span>Password</span>
                            <input type="password" name="password" onChange={this.handleStateChanges} />
                            <span>Forgot account?</span>
                        </Col>   
                        <Col xm={2} md={2} > 
                            <input type="submit" value="Login" className="LoginBtn"/>
                        </Col>
                    </Row>
                </Form>
            </Fragment>
        )
    }
}

export default Login
