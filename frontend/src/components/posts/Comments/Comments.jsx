//react core
import React, { useEffect, useState } from "react";
import Api from "../../../api/Api";

// import Components
import CommentCreateForm from "./CommentCreateForm";
import CommentCard from "./CommentCard";

export default function Comments({ user }) {
  const [comments, setComments] = useState([]);

  const createComment = (commentData) => {
    Api.post("/comments", commentData).then((res) =>
      setComments([...comments, res.data])
    );
  };

  const getAll = () => {
    Api.get("/comments").then((res) => setComments(res.data));
  };

  useEffect(() => {
    getAll();
  }, []);

  const updateComment = (updatedComment) => {
    Api.put("/comments/", updatedComment).then((r) => getAll());
  };

  const deleteComment = (comment) => {
    if (comment.user.email === user.email) {
      Api.delete("/comments/" + comment.id).then((r) => getAll());
    } else {
      console.log("Only user who created the comment can delete it");
    }
  };

  return (
    <>
        <CommentCreateForm onCreateClick={createComment} user={user} />
        <div>
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              onUpdateClick={updateComment}
              onDeleteClick={deleteComment}
            />
          ))}
        </div>
      </>
  );
}
