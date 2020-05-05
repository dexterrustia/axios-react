import React, { createContext, Component } from 'react'
import Axios from 'axios';

export const CommentContext = createContext();

class CommentContextProvider extends Component {  
    state = {
        comment : []
    }

    constructor(props) { 
        super(props);
        Axios

    }
    render() { 
        return (
            <CommentContext.Provider>
                {this.props.children}
            </CommentContext.Provider>
        )
    }
}

export default CommentContextProvider