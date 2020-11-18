import React from "react";

export default function CommentCard({ comment, onDeleteClick, onUpdateClick }) {
  //this is still to be fixed, see comment inside the function
  function toggleUpdateForm() {
    // toggle the style of update-form class
    //it will show or hide the update form
  }

  return (
    <div className="comment">
      <div className="comment">
        <p>{comment.body}</p>
        {/* <p>{comment.user.name}</p>
        <span>{comment.date}</span> */}
      </div>
      {/* <button onClick={toggleUpdateForm}>Edit</button> */}
      <button
        onClick={() => onUpdateClick({ ...comment, body: "updated comment" })}
      >
        edit
      </button>
      <button onClick={() => onDeleteClick(comment)}>Delete</button>
    </div>
  );
}
