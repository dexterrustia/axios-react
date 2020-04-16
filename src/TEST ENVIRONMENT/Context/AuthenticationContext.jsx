import React, { Component, createContext } from 'react'

export const AuthenticationContext = createContext();

class AuthenticationContextProvider extends Component {
    state = {
        isAuthenticated : false
    }
    toogleAuth = () => { 
        this.setState({ isAuthenticated: !this.state.isAuthenticated }) 
    }
    render() {
        return (
            <div>
                <AuthenticationContext.Provider value={{...this.state, toogleAuth: this.toogleAuth}}>
                    {this.props.children}
                 </AuthenticationContext.Provider>
            </div>
        )
    }
}

export default  AuthenticationContextProvider
