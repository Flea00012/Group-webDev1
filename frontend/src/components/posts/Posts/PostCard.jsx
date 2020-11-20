import React, { useState } from "react";
import PostUpdateForm from "./PostUpdateForm";
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
        <div className="card-data">
          <div className="signature">
            <span className="user-name-post">{post.user.name}</span>
            <span className="timestamp">{post.date}</span>
          </div>
          <p className="post-text text">{post.body}</p>
        </div>

        <button className="btn btn-warning" onClick={handleUpdateClick}>
          <i className="far fa-edit"></i>
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            onDeleteClick(post);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>

        <Comments post={post} user={user} />
      </div>
    </div>
  );
}
