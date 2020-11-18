//react core
import React, { useState, useRef } from 'react';

//styles
import '../::';

export default function Post({ onSubmit }) {
  const [comment, setComment] = useState('');
  const userComment = useRef();

  return (
    <article className="footer">
      <h1>COMMENT AREA</h1>
      <p>
        <div>
          <input ref={userComment} placeholder="enter a comment" />
          <hr />
          <button
            className="button"
            onClick={() => {
              setComment(userComment.current.value);
            }}
          >
            Comment
          </button>
        </div>
        <hr />
        <h1>Comment that was submitted</h1>
        <hr />
        <label>{comment}</label>
      </p>
    </article>
  );
}
