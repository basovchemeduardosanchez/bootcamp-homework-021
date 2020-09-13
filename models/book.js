const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    authors: {
        type: Array,
        required: false,
        // Google Books not always have authors
        trim: true
    },
    description: {
        type: String,
        // Google books not always have description
        required: false,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true,
        trim: true
    }
} );

const Book = mongoose.model( 'Book', bookSchema );

module.exports = Book;