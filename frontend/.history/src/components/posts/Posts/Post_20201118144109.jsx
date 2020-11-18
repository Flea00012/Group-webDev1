
import React from 'react';

import Comments from '../Comments/Comments'

export default function Post() {

    return (

        <>
        <hr />
        <h1>Post that was submitted</h1>
        <hr />
        <label>{post}</label>

        <Comments />
        </>
    );

}