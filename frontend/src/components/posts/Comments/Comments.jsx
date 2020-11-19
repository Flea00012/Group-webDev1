//react core
import React, { useEffect, useState } from "react";
import Api from "../../../api/Api";

// import Components
import CommentCreateForm from "./CommentCreateForm";
import CommentCard from "./CommentCard";

export default function Comments({ post, user }) {
  const [comments, setComments] = useState([]);

  const createComment = (commentData) => {
    Api.post("/comments", commentData).then((res) =>
      setComments([...comments, res.data])
    );
  };

  const getAllByPost = () => {
    Api.get(`/comments?postId=${post.id}`).then((res) => setComments(res.data));
  };

  useEffect(() => {
    getAllByPost();
  }, []);

  const updateComment = (updatedComment) => {
    if (updatedComment.user.email === user.email) {
      Api.put("/comments/", updatedComment).then((r) => getAllByPost());
    } else {
      window.alert("Only the user who created the comment can edit it");
    }
  };

  const deleteComment = (comment) => {
    if (comment.user.email === user.email) {
      Api.delete("/comments/" + comment.id).then((r) => getAllByPost());
    } else {
      window.alert("Only the user who created the comment can delete it");
    }
  };

  return (
    <div className="comments">
      <div>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            onUpdateClick={updateComment}
            onDeleteClick={deleteComment}
          />
        ))}
      </div>
      <CommentCreateForm
        onCreateClick={createComment}
        user={user}
        post={post}
      />
    </div>
  );
}
