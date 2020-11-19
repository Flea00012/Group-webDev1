//react core
import React, { useEffect, useState } from "react";
import Api from "../../api/Api";

//styles
// import "../../CSS/styles.css";

// import Components

import PostForm from "./Posts/PostForm";
import Post from "./Posts/Post";

export default function PostsPage() {
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
    console.log(comment);
    Api.delete("/comments/" + comment.id).then((r) => getAll());
  };

  return (
    <div className="wrapper">
      <header className="main-head">Header for Food Forum site</header>
      <>
        <PostForm />
        <Post onCreateClick={createComment} />

        {/* The code below can be used for integrating comments in Post component. 
      Please mind the props needed by CommentCard and CommentForm components */}

        {/* <CommentForm onCreateClick={createComment} />
        <div>
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              onUpdateClick={updateComment}
              onDeleteClick={deleteComment}
            />
          ))}
        </div> */}
      </>
      <aside className="side">Sidebar Topics related to other foods</aside>
      <div className="ad">Advertising and External APIs</div>
    </div>
  );
}
