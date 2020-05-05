import React, { useState } from 'react';
import { Form } from 'react-bootstrap';  

import axios from 'axios';

const CreatComment = props => {
    const { id } = props;
    const [newComment, setNewComment] = useState('')
    const  writeCommentStyle = {
        background: '#f2f3f5',
        borderRadius: '16px',
        fontSize: 'small'
    } 
    const AddNewComment = (e) => {
        e.preventDefault(); 
        console.log(`e value ${e.target.value}`)  
        
        const objComment = {
            postId: id,
            userId: localStorage.getItem('_id'), //"5e8744c232804b550472f632", //this is temporaty and should bebe comming from session in the future
            body: newComment
        }
        axios.post('http://localhost:3200/comment/create', objComment)
            .then(doc => {  
                setNewComment('') 
            }
        ) 
    } 
    return ( 
        <Form onSubmit={AddNewComment}>
            <Form.Group controlId="formBasicPassword" > 
                <Form.Control
                    type="text"
                    key={'com'+id}
                    name="newComment" 
                    autoComplete="off"
                    placeholder="Write a comment.."
                    style={writeCommentStyle}
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)}/> 
            </Form.Group>
        </Form>
     );
}
 
export default CreatComment;