import React, { useState } from 'react';
import PostUpdateForm from './PostUpdateForm';

import '../../../CSS/styles.css';

export default function PostCard({ post, onDeleteClick, onUpdateClick }) {
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
    <div>
      <div>
        <h1>{post.name}</h1>
        <p>{post.description}</p>

        <div>
          <button
          className="button"
            onClick={() => onDeleteClick(post)}
          >
            Delete
          </button>

          <button className="button" onClick={handleUpdateClick}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
