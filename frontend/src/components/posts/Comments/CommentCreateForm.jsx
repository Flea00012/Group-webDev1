import React, { useState } from "react";

export default function CommentCreateForm({ onCreateClick, user, post }) {
  const [comment, setComment] = useState("");
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
    <div className="comment-area">
      <textarea
        className="textarea"
        placeholder="Enter a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          onCreateClick({
            body: comment,
            user: user,
            post: post,
            date: sortTime.toString(),
          });
          setComment("");
        }}
      >
        Comment
      </button>
    </div>
  );
}
