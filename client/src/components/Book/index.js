import React, { useState } from 'react';
import Button from '../Button';

import API from '../../utils/API.js';

function Book( props ){
    let [ bookData, setBookData ] = useState( {
        _id: props._id,
        title: props.title || '',
        authors: props.authors || [],
        description: props.description || '',
        image: props.image || '',
        link: props.link || ''
    } );

    function isBookSaved(){
        return !!bookData._id;
    }
    function saveBook(){
        if ( !isBookSaved() ){
            API.saveBook( bookData )
                .then( ( response ) => {
                    if ( response.status === 200 ){
                        setBookData( response.data );
                        if ( props.afterSave ){
                            props.afterSave();
                        }
                    }
                } );
        }
    }
    function deleteBook(){
        if ( isBookSaved() ){
            API.deleteBook( bookData._id )
                .then( ( response ) => {
                    if ( response.status === 200 ){
                        let newBookData = { ...bookData };
                        delete newBookData._id;

                        setBookData( newBookData );
                        if ( props.afterDelete ){
                            props.afterDelete();
                        }
                    }
                } );
        }
    }

    function unavailableIfFalsy( value ){
        return value ? value : <em className="muted">Unavailable</em>
    }

    function renderButtons(){
        let viewButton = <Button href={ bookData.link } type="primary" icon="eye">View</Button>;

        if ( isBookSaved() ){
            return (
                <>
                    { viewButton }
                    <Button className="ml-2" type="danger" icon="trash" onClick={ deleteBook }>Delete</Button>
                </>
            );
        } else {
            return (
                <>
                    { viewButton }
                    <Button className="ml-2" type="primary" icon="save" onClick={ saveBook }>Save</Button>
                </>
            );
        }
    }

    return (
        <div className="row mt-4">
            <div className="col">
                <div className="card shadow bg-secondary text-white">
                    <div className="card-header bg-dark">
                        <div className="row align-items-center">
                            <div className="col">
                                <a href={ bookData.link }>
                                    <h5 className="text-white m-0">
                                        { bookData.title }
                                    </h5>
                                </a>
                                <p className="m-0">
                                    <small>{ unavailableIfFalsy( bookData.authors.join( ', ' ) ) }</small>
                                </p>
                            </div>
                            <div className="col-auto">
                                { renderButtons() }
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12 col-sm-4">
                            <img className="card-img rounded-0" style={{ height: '100%', objectFit: 'cover' }} src={ bookData.image } alt={ bookData.title } />
                        </div>
                        <div className="col-12 col-sm">
                            <div className="card-body">
                                <p className="card-text">
                                    { unavailableIfFalsy( bookData.description ) }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;
