import React, { useState } from "react";

export default function PostCreateForm({ onCreateClick, user }) {
  const [body, setBody] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <h1>Create post</h1>

        <div className="input-group mb-3">
          <textarea
            className="form-control"
            placeholder="Enter post"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={() => onCreateClick({ body, user })}
        >
          Post
        </button>
      </div>
    </div>
  );
}
