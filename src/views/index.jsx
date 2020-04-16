import React, { Component } from 'react'
//Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  

import SginUp from '../components/SginUp';
import Login from '../components/Login'; 

class IndexPage extends Component { 

    render() { 
        return ( 
                
                <div className="indexPage">
                    <div className="Header">
                        
                        <Row>
                            <Col xm={3} md={3} /> 
                            <Col xm={3} md={3} >
                                FACEBOOk
                            </Col> 
                            <Col xm={3} md={3} >
                                <Login />
                            </Col> 
                            <Col xm={3} md={3} /> 
                        </Row>
                        
                    </div>
                    <Row style={{marginTop: '10px'}}>
                        <Col xm={3} md={3} /> 
                        
                        <Col xm={3} md={3} >
                            <h2>
                                Connect with friends and the world around you on Facebook.
                            </h2>
                        </Col> 
                        <Col xm={3} md={3}> 
                            <SginUp/>
                        </Col>
                            
                        <Col xm={3} md={3} /> 
                    </Row>
                </div>  
        )
    }
}

export default IndexPage
