
import React from 'react';



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