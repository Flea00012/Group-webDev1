import React, { useState } from "react";

export default function PostCreateForm({ onCreateClick, user }) {
  const [body, setBody] = useState("");
  var date = new Date();
  var timestamp = date.getTime();
  const sortTime = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(timestamp);

  return (
    <div className="card">
      <div className="card-body create-post">
        <h2>Create post</h2>

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
          onClick={() => {
            onCreateClick({ body, user, date: sortTime.toString() });
            setBody("");
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}
