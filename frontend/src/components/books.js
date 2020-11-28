import React, { Component } from 'react'
import axios from 'axios';

export class books extends Component {

    state={
       books: [],
       isLoaded: false 
    }

    componentDidMount() {
        axios.get('http://localhost:8000/wp-json/wp/v2/books')
            .then(res => this.setState({
                books: res.data,
                isLoaded:true
            }))
            .catch(err => console.log(err));
    }

    render() {
        const { books, isLoaded } = this.state;
        console.log(books);
        if (isLoaded) {
             return (
            <div>
               <h1>Teste</h1>
                { books.map(book => {
                    <p>{book.link}</p>
                    {console.log(book.link)}
                })}
            </div>
        )
        }
       
        return <h3>Loading...</h3>
    }
}

export default books
