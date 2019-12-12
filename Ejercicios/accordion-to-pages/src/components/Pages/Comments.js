import React from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';

const Comments = (props) => {
    const { id } = useParams();
    return (
    <div>
        <Link to="/">Home</Link>
        <h1>{id}</h1>
    </div>
    
    )
}

export default Comments; 