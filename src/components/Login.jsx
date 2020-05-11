import React, { useState, useEffect ,Fragment, useContext } from 'react' 

//Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Form from 'react-bootstrap/Form'; 
  
import { UserContext } from '../context/AuthContext';

const Login = () => {  
    const { numberOrEmail, password, route, handleStateChanges, OnLogin } = useContext(UserContext);
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
