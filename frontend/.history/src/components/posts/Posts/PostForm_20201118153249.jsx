//react core
import React, { useState, useRef, useEffect } from 'react';

//styles
import '../../../CSS/styles.css';

import API from '../../../api/PostsApi.js'

export default function PostForm({ onSubmit }) {
  const [post, setPost] = useState('');
  const userPost = useRef();

  useEffect(() => {
    API.createPost(userPost);
   
  }, [post]);

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
          la
        </div>
      </p>
    </article>
  );
}
