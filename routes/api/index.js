  
const router = require( 'express' ).Router();
const bookRoutes = require( './books' );
const searchRoutes = require( './googleBooks' );

// Book routes
router.use( '/books', bookRoutes );

router.use( '/googleBooks', searchRoutes );

module.exports = router;