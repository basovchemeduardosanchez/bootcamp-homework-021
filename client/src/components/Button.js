import React from 'react';
import Icon from './Icon';

function getIcon( icon ){
    if ( icon ){
        return ( 
            <>
                <Icon icon={ icon } />&nbsp;
            </>
        );
    }
}

function Button( props ){
    if ( props.href ){
        return (
            <a className={ `btn btn-${ props.type }${ props.disabled ? ' disabled' : '' }${ props.className ? ' ' + props.className : '' }` } href={ props.href } target={ props.target } rel="noreferrer" rel="noopener" role="button" aria-disabled={ props.disabled ? 'true' : undefined } >
                { getIcon( props.icon ) }{ props.children || props.text }
            </a>
        );
    } else {
        return (
            <button className={ `btn btn-${ props.type }${ props.className ? ' ' + props.className : '' }` } disabled={ props.disabled } onClick={ props.onClick }>
                { getIcon( props.icon ) }{ props.children || props.text }
            </button>
        );
    }
}

export default Button;