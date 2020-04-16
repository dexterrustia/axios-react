import React, { Fragment } from 'react';
import Navbar from './Navbar'
import BookList from './BookList';
import './test-default.scss' 
import ThemeContextProvider from './ThemeContext';
import ToogleTheme from './ToogleTheme';
import AuthenticationContextProvider from './AuthenticationContext';

function TestApp() { 
    return (
        <Fragment>  
            <div className="testContainer"> 
                <ThemeContextProvider> 
                    <AuthenticationContextProvider>  
                        <Navbar />
                        <BookList /> 
                        <ToogleTheme /> 
                    </AuthenticationContextProvider>
                </ThemeContextProvider>
            </div>

        </Fragment>
    )
}

export default TestApp;