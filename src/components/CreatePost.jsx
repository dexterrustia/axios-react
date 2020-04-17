import React, { useState,Fragment } from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap' 

import TextareaAutosize from 'react-textarea-autosize';
import Axios from 'axios'


const CreatePost = () => { 
    const [textActive, setTextActive] = useState('none');
    const [zIndex, setZIndex] = useState('-1');
    const [textFontSize, setTextFontSize] = useState('24px')
     
    const [post, setPost] = useState({
        userId: localStorage.getItem('_id'),
        body: ''
    })

    const handleChange = (e) => { 
        const tempPost = { ...post }
        tempPost.body = e.target.value
        //console.log(`post.body : ${}`)
        if (tempPost.body.length > 65)
            setTextFontSize('14px')
        else if (textFontSize == '14px')
            setTextFontSize('24px');
        setPost(tempPost);
    }

    const CreatePost = () => { 
        Axios.post('http://localhost:3200/post', post)
            .then(doc => { 
                console.dir(doc)
                const tempPost = { ...post }
                tempPost.body = '' 
                setTextActive('none');
                setZIndex('-1'); 
                setPost({
                    userId: "5e8744c232804b550472f632",
                    body: ''
                })
                
            }).catch(err => {  console.log(`err : ${err}`) })
    }

    const handleTextEvent = (strEvent) => {   
        let value = strEvent == 'show' ? 'inline' : 'none'
        let zIndex = strEvent == 'show' ? '1' : '-1'
        setTextActive(value)
        setZIndex(zIndex)
    }

    return (
        <Fragment>   
            <div className="createPost" onClick={() => handleTextEvent('show')}>
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
                            style={{ width: '107%',fontSize:textFontSize}}
                            onClick={() => handleTextEvent('click')} 
                            value={post.body}
                            onChange={handleChange}
                        />
                        
                    </Col>  
                </Row>
                <hr/>
                <span className="postActions">Photo/Video</span>
                <span className="postActions">Tag a Friends</span>
                <span className="postActions">Play with Fri..</span> 
                <span className="postActions">...</span>
                
                <div className="createPostControls" style={{ display: textActive }} >
                    <Button
                        variant="primary"
                        disabled={!post.body}
                        style={{ width: '100%', height: '35px',marginTop:'10px'}}
                        onClick={CreatePost} > 
                        
                        Post
                    </Button> 
                </div>
            </div> 
            <div className='createPostContainer' onClick={() => handleTextEvent('hide')} style={{ zIndex: zIndex}}/>
        </Fragment>
    )


} 
export default CreatePost
