import React from 'react'

const Items = (props) => {
    return (
        
            <li>
                 <a href={props.url}>{props.title}</a>
            </li>
        
    );
};

export default Items
