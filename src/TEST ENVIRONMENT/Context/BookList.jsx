import React, { Component } from 'react' 
import { ThemeContext } from './ThemeContext'

export default class BookList extends Component {  
    state = {
        books: [{
            id: 1,
            title: "C# WPF",
            author: "Dexter Rustia"
        }, {
            id: 2,
            title: "Node JS",
            author: "Dexter Rustia"
        },{
            id: 3,
            title: "Angular Frameword",
            author: "Dexter Rustia"
        }]
    }

    render() {
        return (
            <ThemeContext.Consumer>{(context) => {  
                const { isLigthTheme, light, dark } = context
                const { syntax, ui, bg } = isLigthTheme ? light : dark
                return (
                    <div style={{ background: ui, color: syntax }}>
                    {
                        this.state.books.map(book => 
                            (
                                <div key={book.id}> 
                                    <div>{book.title}</div>
                                    <div>{book.author}</div>
                                    <br/>
                                </div>
                            )
                        )
                    }
                    </div>
                )
            }}</ThemeContext.Consumer>
            
        )
    }
}
