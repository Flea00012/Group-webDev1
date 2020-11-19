import React, { useEffect, useState } from "react";
import api from "../../../api/PostsApi";
import PostCard from "./PostCard";
import PostCreateForm from "./PostCreateForm";

export default function Posts({ user }) {
  const [posts, setPosts] = useState([]);
  

  const createPost = (postData) => {
    api
      .createPost(postData)
      //Api.post("/products", productData)
      .then((res) => setPosts([...posts, res.data]));
  };

  const getAll = () => {
    api
      .getAllPosts()
      //Api.get("/products")
      .then((res) => setPosts(res.data));
  };

  const updatePost = (updatedPost) => {
    if (updatedPost.user.email === user.email) {
      api
        .updatePost(updatedPost)
        //Api.put("/products/", updatedProduct)
        .then((r) => getAll());
    } else {
      window.alert("Only the user who created the post can edit it");
    }
  };

  const deletePost = (post) => {
    if (post.user.email === user.email) {
      api
        .deletePost(post.id)
        //Api.delete("/products/" + product.id)
        .then((r) => getAll());
    } else {
      window.alert("Only the user who created the post can delete it");
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <PostCreateForm onCreateClick={createPost} user={user} />

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onUpdateClick={updatePost}
          onDeleteClick={deletePost}
          user={user}
        />
      ))}
    </div>
  );
}
