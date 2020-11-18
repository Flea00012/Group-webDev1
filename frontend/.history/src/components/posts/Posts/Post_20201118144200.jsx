
import React from 'react';

import Comments from '../Comments/Comments'

export default function Post() {

    functionNow(){
        console.log ()
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