import React, { Component,Fragment } from 'react'
//Bootstrap components
import { Row, Col, Dropdown} from 'react-bootstrap'; 

//React icons
import { IoIosMore} from "react-icons/io";

class Comment extends Component {
    // state = {
    //     newComment: '',
    //     action : true
    // }
    // GetComment = () => { 
    //     const { userId, body } = this.props.comment;
    //     const commentContrainer = {
    //         background: '#f2f3f5',
    //         borderRadius: '29px',
    //         padding: '10px',
    //         fontSize: 'smaller',
    //         marginBottom: '5px',
    //         width: 'fit-content',
    //     }
    //     const commentName= {
    //         fontWeight: '700',
    //         marginRight: '10px',
    //         color: '#6161ff'
    //     }

    //     return (
    //         <div style={commentContrainer}>
    //             <span className="commentName" style={commentName}>{userId.firstName + ' ' + userId.lastName}</span>
    //             {body}
    //         </div> 
    //     )
    // } 
    // EditComment = () => {  
    //     return ( 
    //         <div>
    //             <input type="text" value={this.state.newComment}/>
    //         </div> 
            
    //     )   

    // }
    // handleAction = (action, textcomment) => { 
    //     if (action == 'edit') { 
    //         this.setState( {newComment : textcomment} ) 
    //         this.setState({ action:true})
    //     }
    
    // }
    render() {
        
        const { userId, body } = this.props.comment;

        const comStyle = { 
            commentName: {
                fontWeight: '700',
                marginRight: '10px',
                color: '#6161ff'
            },
            commentContrainer: {
                background: '#f2f3f5',
                borderRadius: '29px',
                padding: '10px',
                fontSize: 'smaller',
                marginBottom: '5px',
                width: 'fit-content',
            },
            ProfileInComment: { 
                maxWidth: '50px'
            }
        }
        return (  
            <Fragment>
                <Row style={{marginTop: '10px'}} className="commentComponent">
                    <Col xm={2} md={2} className="ProfileInComment" style={comStyle.ProfileInComment}>
                        <img src="RestAPIs/samplePP.png" className="profilePicture" alt="Smiley face" height="40" width="40" style={{borderRadius:'20px'}}></img>
                    </Col>
                    <Col xm={10} md={10} style={{display:'inline-flex'}}>
                        <div style={comStyle.commentContrainer}>
                            <span className="commentName" style={comStyle.commentName}>{userId.firstName + ' ' + userId.lastName}</span>
                            {body}
                        </div> 
                        <Dropdown>
                        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic"> 
                            <IoIosMore />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Remove</Dropdown.Item>
                                <Dropdown.Item>Edit</Dropdown.Item> 
                        </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Fragment> 
        )
    }
}

export default Comment