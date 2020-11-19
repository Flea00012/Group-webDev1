import React, { useState } from "react";

export default function CommentCreateForm({ onCreateClick, user, post }) {
  const [comment, setComment] = useState("");

  return (
    <div className="form-group">
      <div>
        <input
          type="text"
          placeholder="enter a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <hr />
        <button
          className="button"
          onClick={() => {
            onCreateClick({ body: comment, user: user, post: post }); //add a timestamp here
          }}
        >
          Comment
        </button>
      </div>
    </div>
  );
}
