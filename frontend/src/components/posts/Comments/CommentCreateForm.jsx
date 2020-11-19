import React, { useState } from "react";

export default function CommentForm({ onCreateClick }) {
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
            onCreateClick({ body: comment }); //add a timestamp here
          }}
        >
          Comment
        </button>
      </div>
    </div>
  );
}
