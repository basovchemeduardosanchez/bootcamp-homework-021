import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Book from '../components/Book';
import API from '../utils/API.js';

function Saved() {
    const [ books, setBooks ] = useState( [] );

    function renderBooks(){
        if ( books.length > 0 ){
            return books.map( ( book ) => {
                return (
                    <Book key={ book._id } { ...book } afterDelete={ () => {
                        let index = books.findIndex( ( value ) => {
                            return value._id === book._id;
                        } );
                        let newBooks = [ ...books ];
                        newBooks.splice( index, 1 );
                        setBooks( newBooks );
                    } } />
                );
            } );
        } else {
            return (
                <p>
                    No books have been saved, go to the <Link to="/search">Search</Link> page to look for new books
                </p>
            );
        }
    }

    useEffect(
        () => {
            API.getBooks().then( ( response ) => {
                setBooks( response.data || [] );
            } );
        },
        []
    );

    return (
        <div className="container mt-4 overflow-auto">
            <h4>Saved Books</h4>
            <div className="mb-4">
                { renderBooks() }
            </div>
        </div>
    );
}
export default Saved;
