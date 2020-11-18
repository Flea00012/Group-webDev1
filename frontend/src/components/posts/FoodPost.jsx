//react core
import React from 'react';

//styles
import '../../CSS/styles.css';

// import Components
import Post from './Post';
import Comment from './Comments';

export default function Front() {
  return (
    <div className="wrapper">
      <header className="main-head">Header for Food Forum site</header>
      <>
        <Post />
      </>
      <aside className="side">Sidebar Topics related to other foods</aside>
      <div className="ad">Advertising and External APIs</div>
      <Comment className="main-footer" />
    </div>
  );
}
