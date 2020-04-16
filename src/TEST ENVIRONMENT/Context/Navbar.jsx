import React,{ Component }  from 'react';
import { ThemeContext } from './ThemeContext' 
import { AuthenticationContext } from './AuthenticationContext';

class Navbar extends Component { 

    render() { 
        return ( 
            <AuthenticationContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {  
                    const { isLigthTheme, light, dark } = themeContext;
                    const { syntax, ui, bg } = isLigthTheme ? light : dark;
                    const { isAuthenticated } = authContext
                    return (
                        <div className="navBar" style={{ background: ui, color: syntax }}> 
                            <h3>This is the test App</h3>
                            Successfully { isAuthenticated ? 'Log in!' : 'Log out!'}
                            <br />
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Career</li>
                            </ul>
                        </div> 
                    )
                }}</ThemeContext.Consumer> 
            )}</AuthenticationContext.Consumer>    
         );
    }
}
 
export default Navbar;