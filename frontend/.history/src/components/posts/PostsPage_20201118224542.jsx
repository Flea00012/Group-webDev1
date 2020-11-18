//react core
import React, { useState, useRef, useEffect } from 'react';

//styles
import '../../CSS/styles.css';

// import Components

import PostForm from './Posts/PostForm';
import Post from './Posts/Post';

import API from '../../api/PostsApi.js';

export default function PostsPage() {
  const [posts, setPosts] = useState('');
  // const userPost = useRef();

  const createPost = (postBody) => {
    API.createPost(postBody).then((res) => setPosts([...posts, res.data]));
  };

  const getAll = () => {
    API.getAllPosts().then((res) => setPosts(res.data));
  };

  useEffect(() => {
    getAll();
  }, []);

  const updatePost = (updatedPost) => {
    API.put(updatedPost).then((r) => getAll());
  };

  const deletePost = (product) => {
    API.delete(product.id).then((r) => getAll());
  };

  return (
    <div className="wrapper">
      <header className="main-head">Header for Food Forum site</header>
      <>
        <PostForm onCreateClick={createPost} />
        {
          posts.map(post => (<i))
        }

        <Post />
      </>
      <aside className="side">Sidebar Topics related to other foods</aside>
      <div className="ad">Advertising and External APIs</div>
    </div>
  );
}
