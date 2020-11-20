import React, { useState } from "react";
import CommentUpdateForm from "./CommentUpdateForm";

export default function CommentCard({ comment, onDeleteClick, onUpdateClick }) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  return isUpdating ? (
    <CommentUpdateForm
      oldComment={comment}
      onUpdateClick={(updatedComment) => {
        setIsUpdating(false);
        onUpdateClick(updatedComment);
      }}
    />
  ) : (
    <div className="comment">
      <div className="comment">
        <div className="signature">
          <span className="user-name-comment">{comment.user.name}</span>
          <span className="timestamp">{comment.date}</span>
        </div>
        <p className="comment-text text">{comment.body}</p>
      </div>
      <button className="btn btn-warning" onClick={handleUpdateClick}>
        <i className="far fa-edit"></i>
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          onDeleteClick(comment);
        }}
      >
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
}
