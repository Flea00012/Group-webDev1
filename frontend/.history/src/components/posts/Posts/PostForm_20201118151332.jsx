//react core
import React, { useState, useRef } from 'react';

//styles
import '../../CSS/styles.css';

export default function PostForm({ onSubmit }) {
  const [post, setPost] = useState('');
  const userPost = useRef();

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

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
      </p>
    </article>
  );
}
