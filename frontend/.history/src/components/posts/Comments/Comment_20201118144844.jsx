
import React from 'react';

import Comments from '../Comments/Comment'

export default function Comment() {

    const functionNow = () => {
        console.log ("group");
    }

    return (

        <>
        <hr />
        <h1>Post that was submitted</h1>
        <hr />
        <label>{functionNow}</label>

        <Comments />
        </>
    );

}