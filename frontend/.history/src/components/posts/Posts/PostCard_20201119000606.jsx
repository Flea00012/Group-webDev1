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
            
            onClick={() => onDeleteClick(post)}
          >
            Delete
          </button>

          <button className="b" onClick={handleUpdateClick}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
