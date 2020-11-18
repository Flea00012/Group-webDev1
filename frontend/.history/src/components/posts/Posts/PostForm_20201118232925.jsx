//react core
import React, { useState,  } from 'react';

//styles
import '../../../CSS/styles.css';

export default function PostForm({ onCreateClick }) {
  const [body, setBody] = useState('');

  return (
    <article className="content">
      <h1>POST AREA</h1>
      <p>
        <div>
          <textarea
            value={body}
            placeholder="Enter a post"
            onChange={(e) => setBody(e.target.value)}
          />
          <hr />
          <button className="button" onClick={() => onCreateClick({ body })}>
            Create
          </button>
        </div>
      </p>
    </article>
  );
}
