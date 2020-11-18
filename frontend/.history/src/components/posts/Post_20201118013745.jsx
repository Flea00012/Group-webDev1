//react core
import React, { useState, useRef } from 'react';

//styles
import '../../CSS/';

export default function Post({ onSubmit }) {
  const [post, setPost] = useState('');
  const userPost = useRef();

  return (
    <article className="content">
      <h1>POST AREA</h1>
      <p>
        <div>
          <input ref={userPost} placeholder="enter a post" />
          <hr />
          <button
            className="button"
            onClick={() => {
              setPost(userPost.current.value);
            }}
          >
            Post Button 
          </button>
        </div>
        <hr />
        <h1>Post that was submitted</h1>
        <hr />
        <label>{post}</label>
      </p>
    </article>
  );
}
