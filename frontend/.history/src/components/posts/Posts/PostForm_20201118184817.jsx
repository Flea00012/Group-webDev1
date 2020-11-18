//react core
import React, { useState, useRef, useEffect } from 'react';

//styles
import '../../../CSS/styles.css';

import API from '../../../api/PostsApi.js';

export default function PostForm({ onSubmit }) {
  const [body, setBody] = useState('');
  const userPost = useRef();

  const createPost = () => {
    const post = { body };
    API.createPost(post).then(() => alert('done added'));
  };

const getAll =() => {
  const post = {body};
  API.getAllPosts().then(() => alert('got all posts'))
}


  return (
    <article className="content">
      <h1>POST AREA</h1>
      <p>
        <div>
          <textarea
            value={body}
            placeholder="enter a post"
            onChange={(e) => setBody(e.target.value)}
          />
          <hr />
          <button className="button" onClick={createPost}>
            Post Button
          </button>
        </div>
      </p>
    </article>
  );
}
