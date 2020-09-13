import React, { useEffect, useState } from 'react';

import Book from '../components/Book';

import API from '../utils/API';

function Search() {
    const [ books, setBooks ] = useState( [] );
    const [ search, setSearch ] = useState( '' );

    function renderBooks(){
        if ( books.length > 0 ){
            return books.map( ( book ) => {
                return (
                    <Book key={ book.googleBooksId } { ...book } afterSave={ () => {
                        
                    } } />
                );
            } );
        } else {
            return (
                <p className="mt-4">
                    No books matched with your search, try with different search terms
                </p>
            );
        }
    }

    useEffect(
        () => {
            API.searchBooks( search )
                .then( ( response ) => {
                    setBooks( response.data || [] );
                } );
        },
        [ search ]
    );

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control form-control-lg" placeholder="Search" value={ search } onChange={ ( event ) => { setSearch( event.target.value ); } }></input>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="mb-4">
                        { renderBooks() }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
