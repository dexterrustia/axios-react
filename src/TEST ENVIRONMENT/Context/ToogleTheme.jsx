import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'
import { AuthenticationContext } from './AuthenticationContext'

class ToogleTheme extends Component { 

    render() {
        return (
            <AuthenticationContext.Consumer>{(authContext) =>(
                <ThemeContext.Consumer>{(themeContext) => {   
                    const { changeTheme } = themeContext
                    const { isAuthenticated, toogleAuth }  = authContext
                    return (
                        <div>
                            <button onClick={changeTheme}>Change Theme</button>  
                            <button onClick={toogleAuth}>{isAuthenticated ? 'Log out':'Log in'}</button>  
                        </div>
                    ) 
                }}</ThemeContext.Consumer> 
            )}</AuthenticationContext.Consumer>
            
            
        )
    }
}

export default ToogleTheme 
