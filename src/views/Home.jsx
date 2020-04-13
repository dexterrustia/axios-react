import React, { Component,Fragment } from 'react'
import axios from 'axios'
import Post from '../components/Post' 
import CreatePost from '../components/CreatePost';
import { Row, Col } from 'react-bootstrap'; 

import Pusher from 'pusher-js';

class Home extends Component {
    
    state = {
        posts : []
    }

    constructor(props) { 
        super(props);
        
        axios.get(`http://localhost:3200/post`) 
        //axios.get('RestAPIs/posts.json')
            .then(res => { 
                console.table([...res.data])
                this.setState({
                    posts:[...res.data]
                })

            }).catch(err => { 
                console.log(`Error: ${err}`)
            }) 
    }

    componentDidMount = () => { 
        const pusher = new Pusher('7cf8ab01384a020e60c7', {
            cluster: 'ap1',
            forceTLS: true
        });
    
        const channel = pusher.subscribe('Post');
        channel.bind('create', function (data) {  
            console.log(`posts`)
            this.setState({ posts:[data, ...this.state.posts] })
            console.log(`pusher`)
            console.log(data)
            
        }.bind(this)); 

    }
     
    
    render() {
        return (
            <Fragment>   
                <div style={{ background: '#e9ebee', minHeight: '100vh' }}>
                    <Row>
                        <Col xm={4} md={4} />
                        <Col xm={4} md={4} >
                        <CreatePost />
                        <div style={{margin:'0 auto',background:'#f2f3f5'}}> 
                            {
                                this.state.posts.map(post => (
                                    <Post key={post._id} post={post} />
                                ))
                            }
                        </div> 

                        </Col>
                        <Col xm={4} md={4} />
                    </Row>
                </div>
            </Fragment>
        )
    }
}
export default Home
