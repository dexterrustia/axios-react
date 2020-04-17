import React, { useState, useEffect ,Fragment } from 'react'
import { Redirect } from "react-router-dom";

//Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Form from 'react-bootstrap/Form'; 

import axios from 'axios'

const Login = () => { 

    const [numberOrEmail, setNumberOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [route, setRoute] = useState('');
    
    const handleStateChanges = (e) => {    
        console.dir(e.target);
        const { name, value } = { ...e.target };
        console.log(`name : ${e.target.name}`);
        console.log(`value : ${value}`);
        
        (e.target.name == "password") ? setPassword(value) : setNumberOrEmail(value) 
    } 
    const OnLogin = (e) => { 
        e.preventDefault();
        const user = {
            numberOrEmail: numberOrEmail,
            password: password
        };
        console.log(`user : ${user}`)
        axios.post('http://localhost:3200/user/login', user)
            .then(res => {  
                const { length } = res.data 
                localStorage.setItem('_id',res.data[0]._id)
                if(length == 1) 
                    setRoute('/home')
            })
            .catch(err => { 
                console.log(`err : ${err}`);
            })
    } 
    if (route == "/home") {  
        console.log(`route22 : ${route}`)
        return  (<Redirect to='/home' />)
    }
    return (
        <Fragment>
            <Form className="LoginForm" onSubmit={OnLogin}>
                <Row>
                    <Col xm={5} md={5} >
                        <span>Email or Phone</span>
                        <input type="text" name="numberOrEmail" onChange={handleStateChanges}/>
                    </Col>    
                    <Col xm={5} md={5} >
                        <span>Password</span>
                        <input type="password" name="password" onChange={handleStateChanges} />
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

export default Login
