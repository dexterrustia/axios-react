import React, { Component, Fragment } from 'react'
//Bootstrap components
import Card from 'react-bootstrap/Card'; 
import { Row, Col, Dropdown, Form } from 'react-bootstrap';  
import axios from 'axios';

//React icons
import { IoIosShareAlt,IoIosThumbsUp, IoIosStats, IoIosMore } from "react-icons/io";
import Comment from './Comment';

import Pusher from 'pusher-js';


class Post extends Component { 
    state = {
        comments: [],
        newComment: ''
    } 
    constructor(props) { 
        super(props);
        axios.get(`http://localhost:3200/comment/${this.props.post._id}`,{ crossdomain: true })
       // axios.get('RestAPIs/comments.json')
            .then(res => { 
                console.log(res)
                this.setState({
                    comments: [...res.data.filter(com => com.postId === this.props.post._id)]
                })
                console.log(`POST ID : ${this.props.post._id}`);
                console.table(res.data)
            })
            .catch(err => { 
                console.log(`Error: ${err}`)
            })
        
    } 
    handleTextChange = (e) => { 
        this.setState(
            {newComment: e.target.value}
        )
    }
    AddNewComment = (e) => {
        e.preventDefault(); 
        console.log(`e value ${e.target.value}`)  
        
        const newComment = {
            postId: this.props.post._id,
            userId: localStorage.getItem('_id'), //"5e8744c232804b550472f632", //this is temporaty and should bebe comming from session in the future
            body: this.state.newComment
        }
        axios.post('http://localhost:3200/comment/create', newComment)
            .then(doc => {  
                this.setState( { 
                    newComment: ''
                })  
            }) 
    } 

    deletePost = () => { 
        console.log('this is click!!!')
        console.log(`posted ID:${this.props.post._id}`)
        axios.delete(`http://localhost:3200/post/${this.props.post._id}`)
        .then(doc => {  
            console.log(`Post delete : ${doc}`)
            console.dir(doc)
        }) 

    }

    componentDidMount = () => {
         const pusher = new Pusher('7cf8ab01384a020e60c7', {
                cluster: 'ap1',
                forceTLS: true
            });
            console.log(`pusher: Comment${this.props._id}`)
            const channel = pusher.subscribe(`Comment`);
            channel.bind('create', function (data) {  
                console.log(`posts`)

                if (data.postId == this.props.post._id) { 
                    /*
                    *   This is temporary and should not be this way.
                        This implementation is pulling comments to that is not belong to a post.
                    *   Corrent post should only be the one to fire request to server
                    */ 
                    this.setState({ comments: [...this.state.comments, data] })
                }
                console.log(`pusher`)
                console.log(data) 
            }.bind(this));  
        

    }
    render() {
        const { _id, userId,postdate, body } = this.props.post;
        const comStyle = {
            btnLikeComment: {
                marginTop: '15px',
                border: '1px solid #00000026',
                padding: '5px 0px'

            },
            btnReactions: {
                marginRight: '5px',
                marginTop: '-3px',
                fontSize: '20px'
            },
            ProfileInAddComment: { 
                maxWidth: '50px'
            },
            writeComment: {
                background: '#f2f3f5',
                borderRadius: '16px',
                fontSize: 'small'
            }
        };  
        return (
            <Fragment>
                <Card className="post"> 
                    <Card.Body>
                        <Row className="show-grid">   
                            <Col xs={2} md={2}>  
                                <img src="RestAPIs/samplePP.png" alt="Smiley face" height="100%" width="100%"></img>
                            </Col>
                            <Col xs={10} md={10} className="profile"> 
                                <Card.Title className="name">{userId.firstName + ' ' + userId.lastName}</Card.Title> 
                                <span className="postdate">{postdate}</span>
                                <div>
                                <Dropdown>
                                <Dropdown.Toggle variant="outline-primary" id="dropdown-basic"> 
                                    <IoIosMore />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                            <Dropdown.Item onClick={this.deletePost}>Remove</Dropdown.Item>
                                        <Dropdown.Item>Edit</Dropdown.Item> 
                                </Dropdown.Menu>
                                </Dropdown>
                                </div>
                            </Col> 
                        </Row>
                        <Row className="show-grid">  
                            <Col xs={12} md={12}>  
                                <Card.Text>
                                    {body}
                                </Card.Text>  
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Col> 
                        </Row> 
                        <Row className="show-grid btnLikeComment" style={comStyle.btnLikeComment}>  
                            <Col xs={4} md={4}>  
                                <Card.Text> 
                                    <IoIosThumbsUp style={comStyle.btnReactions}/>
                                    Like
                                </Card.Text>   
                            </Col> 
                            <Col xs={4} md={4}>  
                                <Card.Text> 
                                    <IoIosStats style={comStyle.btnReactions}/>
                                    Comment
                                </Card.Text>   
                            </Col> 
                            <Col xs={4} md={4}>  
                                <Card.Text> 
                                    <IoIosShareAlt style={comStyle.btnReactions}/>
                                    Share
                                </Card.Text>   
                            </Col> 
                        </Row> 

                        
                        {/* COMMENT SECTION BELOW */}
                        {
                            this.state.comments.map(comment => (
                                <Comment comment={comment} key={comment._id}/>
                            ))
                        }


                        {/* ADD NEW COMMENT */}
                        <Row style={{marginTop: '10px'}}>
                            <Col xm={2} md={2} className="ProfileInComment" style={comStyle.ProfileInAddComment}> 
                                <img src="RestAPIs/samplePP.png" alt="Smiley face" height="40" width="40" style={{borderRadius:'20px'}}></img>
                            </Col>  
                            <Col xm={10} md={10}>
                                <Form onSubmit={this.AddNewComment}>
                                    <Form.Group controlId="formBasicPassword" > 
                                        <Form.Control
                                            type="text"
                                            key={'com'+_id}
                                            name="newComment" 
                                            autoComplete="off"
                                            placeholder="Write a comment.."
                                            style={comStyle.writeComment}
                                            value={this.state.newComment } 
                                            onChange={this.handleTextChange}/> 
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>


                    </Card.Body> 
                    
                </Card>
            </Fragment>
        )
    }
}

export default Post
