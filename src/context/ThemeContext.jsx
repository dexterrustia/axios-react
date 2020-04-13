import React, { Component, createContext } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { color: 'white' },
        dark: { color: 'black'} 
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={{...this.state}}>
                    {this.props.children}
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default ThemeContextProvider
