//react core
import React from 'react';

//styles
import '../../CSS/styles.css';

// import Components

import PostForm from './Posts/PostForm';
import Post from './Posts';

export default function PostsPage() {
  return (
    <div className="wrapper">
      <header className="main-head">Header for Food Forum site</header>
      <>
        <PostForm />
        <Post />
      </>
      <aside className="side">Sidebar Topics related to other foods</aside>
      <div className="ad">Advertising and External APIs</div>
    </div>
  );
}
