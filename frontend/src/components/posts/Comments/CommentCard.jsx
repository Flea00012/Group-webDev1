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
        <p>{comment.body}</p>
        <span>{comment.user.name}</span>
        <span>{comment.date}</span> 
      </div>
      <button onClick={handleUpdateClick}>edit</button>
      <button onClick={() => onDeleteClick(comment)}>Delete</button>
    </div>
  );
}
