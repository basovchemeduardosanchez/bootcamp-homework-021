const router = require( 'express' ).Router();
const axios = require( 'axios' );

const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

router
    .route( '/' )
    .get( ( req, res ) => {
        if ( req.query.q ){
            axios.get( `https://www.googleapis.com/books/v1/volumes?${ GOOGLE_BOOKS_API_KEY ? `key=${ GOOGLE_BOOKS_API_KEY }&` : '' }projection=full&orderBy=relevance&q=${ encodeURIComponent( req.query.q ) }` )
                .then( ( response ) => {
                    if ( response.data && response.data.items ){
                        res.json( response.data.items.map( ( item ) => {
                            let info = item.volumeInfo;

                            return {
                                googleBooksId: item.id,
                                authors: info.authors,
                                title: info.title,
                                description: info.description,
                                image: info.imageLinks.thumbnail,
                                link: info.infoLink
                            }
                        } ) );
                    }
                } )
                .catch( ( error ) => {
                    // https://stackoverflow.com/a/51768316
                    if ( error.response ){
                        res.status( error.response.status ).json( error.response.data );
                    } else if ( error.request ){
                        res.status( 500 ).json( {
                            error: "An error ocurred while requesting data"
                        } );
                    } else {
                        res.status( 500 ).json( {
                            error: "An unknown error occurred"
                        } );
                    }
                } );
        } else {
            res.status( 400 ).json( {
                error: "Search query must not be empty"
            } );
        }
    } );

module.exports = router;
