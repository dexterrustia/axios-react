import React, { Component,Fragment } from 'react'
import { Row, Form, Col, Button} from 'react-bootstrap' 
import Axios from 'axios'

class CreatePost extends Component {
    state = { 
        post: {
            userId: "5e8744c232804b550472f632",
            body: ''
        }
    }
    handleChange = (e) => { 
        const post = { ...this.state.post }
        post.body = e.target.value
        this.setState({ post })
    }
    CreatePost = () => { 
        console.log('SUBMIT IS FIRE!!!')
        Axios.post('http://localhost:3200/post/create', this.state.post)
            .then(doc => { 
                console.dir(doc)
                this.setState({ body : '' })
                
            }).catch(err => {  console.log(`err : ${err}`) })
    }
    render() {
        return (
            <Fragment>
                <div className="CreatePost">
                    <Row>
                        <Col xs={2} md={2}>  
                            <img src="RestAPIs/samplePP.png" className="imgProfile" alt="Smiley face"></img>
                        </Col>
                        <Col xs={10} md={10}> 
                            <textarea 
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="2"
                                name="post"
                                value={this.state.body}
                                onChange={this.handleChange}
                            />
                            <Button variant="primary" onClick={this.CreatePost}>Post</Button>
                             
                        </Col> 
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default CreatePost
