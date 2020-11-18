//react core
import React, { useState, useRef, useEffect } from 'react';

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
            placeholder="enter a post"
            onChange={(e) => setBody(e.target.value)}
          />
          <hr />
          <button className="button" onClick={() => onCreateClick({ name, description })}>
          Create
      </button>

          <div >
          <textarea  placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      </div>

     



        </div>
      </p>
    </article>
  );
}
