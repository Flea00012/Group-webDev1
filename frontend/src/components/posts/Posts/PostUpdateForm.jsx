import React, { useState } from "react";

export default function PostUpdateForm({ oldPost, onUpdateClick }) {
  const [body, setBody] = useState(oldPost.body);

  return (
    <div className="card">
      <div className="card-body">
        <h1>Update post</h1>

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
          onClick={() => onUpdateClick({ ...oldPost, body })}
        >
          Update
        </button>
      </div>
    </div>
  );
}
