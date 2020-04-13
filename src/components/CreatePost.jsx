import React, { Component,Fragment } from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap' 

import TextareaAutosize from 'react-textarea-autosize';
import Axios from 'axios'

class CreatePost extends Component {
    state = { 
        post: {
            userId: "5e8744c232804b550472f632",
            body: ''
        },
        textActive: 'none', //Hide and show Post button
        zIndex: '-1', // Hide and show modal functionalify
        textFontSize : '24px'
    }
    handleChange = (e) => { 
        const post = { ...this.state.post }
        post.body = e.target.value
        //console.log(`post.body : ${}`)
        if (post.body.length > 65)
            this.setState({ textFontSize: '14px' })
        else if ( this.state.textFontSize == '14px' )
            this.setState({ textFontSize: '24px' })
        this.setState({ post })
    }
    CreatePost = () => { 
        Axios.post('http://localhost:3200/post', this.state.post)
            .then(doc => { 
                console.dir(doc)
                const post = { ...this.state.post }
                post.body = ''
                this.setState({
                    post,
                    textActive: 'none',
                    zIndex: '-1'
                })
                
            }).catch(err => {  console.log(`err : ${err}`) })
    }
    handleTextEvent = (strEvent) => {  
        let value = strEvent == 'show' ? 'inline' : 'none'
        let zIndex = strEvent == 'show' ? '1' : '-1'
        this.setState({
            textActive: value,
            zIndex
        })
    }
    render() { 
        return (
            <Fragment>   
                <div className="createPost" onClick={() => this.handleTextEvent('show')}>
                    <Row> 
                        <Col xs={2} md={2} style={{ marginLeft: '0'}}>  
                            <img src="RestAPIs/samplePP.png" className="imgProfile" alt="Smiley face"></img>
                        </Col>
                        <Col xs={10} md={10}  style={{ marginLeft: '-32px'}}> 
                            <TextareaAutosize  
                                className="form-control newCommentBox"
                                id="exampleFormControlTextarea1"
                                rows="2"
                                name="post"
                                placeholder="Whats on your mind, Dexter's?"
                                style={{ width: '107%',fontSize:this.state.textFontSize}}
                                onClick={() => this.handleTextEvent('click')} 
                                value={this.state.post.body}
                                onChange={this.handleChange}
                            />
                            
                        </Col>  
                    </Row>
                    <hr/>
                    <span className="postActions">Photo/Video</span>
                    <span className="postActions">Tag a Friends</span>
                    <span className="postActions">Play with Fri..</span> 
                    <span className="postActions">...</span>
                    
                    <div className="createPostControls" style={{ display: this.state.textActive }} >
                        <Button
                            variant="primary"
                            disabled={!this.state.post.body}
                            style={{ width: '100%', height: '35px',marginTop:'10px'}}
                            onClick={this.CreatePost} > 
                            
                            Post
                        </Button> 
                    </div>
                </div> 
                <div className='createPostContainer' onClick={() => this.handleTextEvent('hide')} style={{ zIndex: this.state.zIndex}}/>
            </Fragment>
        )
    }
}

export default CreatePost
