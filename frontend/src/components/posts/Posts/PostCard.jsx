import React, { useState } from "react";
import PostUpdateForm from "./PostUpdateForm";
import CommentCreateForm from "../Comments/CommentCreateForm";
import Comments from "../Comments/Comments";

export default function PostCard({ post, onDeleteClick, onUpdateClick, user }) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  return isUpdating ? (
    <PostUpdateForm
      oldPost={post}
      onUpdateClick={(updatedPost) => {
        setIsUpdating(false);
        onUpdateClick(updatedPost);
      }}
    />
  ) : (
    <div className="card mt-4">
      <div className="card-body">
        <p>{post.body}</p>
        <span>{post.user.name}</span>
        <span>{post.date}</span> 
        <div>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteClick(post)}
          >
            Delete
          </button>

          <button className="btn btn-warning" onClick={handleUpdateClick}>
            Update
          </button>
          <Comments post={post} user={user} />
        </div>
      </div>
    </div>
  );
}
