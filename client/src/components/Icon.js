import React from 'react';

function Icon( props ){
    return (
        <i className={ `fa fa-${ props.icon }` }></i>
    );
}

export default Icon;