import React, { useState, Fragment, useContext } from 'react';
import { Redirect } from "react-router-dom";

//Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 

import axios from 'axios'
import { UserContext } from '../context/AuthContext';

const SginUp = () => {  
    const { user, handleStateChanges2, OnSignUp,route } = useContext(UserContext);
    if (route == "/home") {  
        console.log(`route22 : ${route}`)
        return  (<Redirect to='/home' />)
    }
    return (
        <Fragment> 
            <div>
            <h1>Sign Up</h1>
            <span>It’s quick and easy.</span>
            </div>
            <Form className='SignForm'>
                <Row>
                    <Col xm={6} md={6}> 
                        <Form.Control type="text" name="firstName" onChange={handleStateChanges2} placeholder="First name" />
                    </Col>
                    <Col xm={6} md={6}> 
                        <Form.Control type="text" name="lastName" onChange={handleStateChanges2} placeholder="Last name" />
                    </Col>
                </Row> 
                <Row>
                    <Col xm={12} md={12}>
                        <Form.Control type="text" name="numberOrEmail" onChange={handleStateChanges2} placeholder="Mobile number or email" />
                    </Col>
                    <Col xm={12} md={12}>
                        <Form.Control type="password" name="password" onChange={handleStateChanges2} placeholder="New password" />
                    </Col>
                </Row>
                <Row>  
                    <Col xm={12} md={12}> 
                        <Form.Label><h5>Birthday</h5></Form.Label> 
                    </Col>
                    <Col xm={2} md={2} className="BirthdayCol" style={{display: 'inline-flex'}}>
                        <select as="select" name="month" onChange={handleStateChanges2}> 
                        {
                            [
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                'Jul',
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec'
                            ].map(month => (<option key={month} value={month}>{month}</option>))
                        }
                    </select>
                    <select as="select" name="day" onChange={handleStateChanges2}>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
                                .map(day => (<option key={day} value={day}>{day}</option>))
                        }
                    </select>
                    <select as="select" name="year" onChange={handleStateChanges2}>
                        {
                            ['Year', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1979', '1978', '1977', '1976', '1975', '1974', '1973', '1972', '1971', '1970', '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960', '1959', '1958', '1957', '1956', '1955', '1954', '1953', '1952', '1951', '1950', '1949', '1948', '1947', '1946', '1945', '1944', '1943', '1942', '1941', '1940', '1939', '1938', '1937', '1936', '1935', '1934', '1933', '1932', '1931', '1930', '1929', '1928', '1927', '1926', '1925', '1924', '1923', '1922', '1921', '1920', '1919', '1918', '1917', '1916', '1915', '1914', '1913', '1912', '1911', '1910', '1909', '1908', '1907', '1906', '1905']
                                .map(year => (<option key={year} value={year}>{year}</option>))
                        }
                    </select>
                </Col>  
                </Row>
                <Form.Group as={Row}>
                    <Col xm={12} md={12}> 
                        <Form.Label><h5>Gender</h5></Form.Label> 
                    </Col>
                    <Col xm={3} md={3} className="genderColumn">
                        <Form.Check
                            onChange={handleStateChanges2}
                            type="radio"
                            label="Female"
                            value="Female"
                            name="gender" 
                        />
                            <Form.Check
                            onChange={handleStateChanges2}
                            type="radio"
                            label="Male"
                            value="Male"
                            name="gender" 
                        />
                        <Form.Check
                            onChange={handleStateChanges2}
                            type="radio"
                            label="Custom"
                            value="Custom"
                            name="gender" 
                            />
                    </Col> 
                </Form.Group>
                <Row>
                    <p className="policyRights">
                        By clicking Sign Up, you agree to our <a href="#">Terms</a>, <a href="#">Data Policy</a> and <a href="#">Cookies Policy</a>. You may receive SMS Notifications from us and 
                        can opt out any time.
                    </p>
                </Row>
                <Row> 
                    <Button variant="success" type="submit" size="lg" style={{ width: '235px' }} onClick={OnSignUp}>Sign Up</Button>
                </Row> 


            </Form> 
        </Fragment>
    ) 
}

export default SginUp
