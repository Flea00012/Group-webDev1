//react core
import React from 'react';

//styles
import '../../CSS/styles.css';

// import Components

import PostForm from './Posts/PostForm';
import Post from './Posts/Post';

import API from '../../api/PostsApi';

export default function PostsPage() {


  const [body, setBody] = useState('');
  // const userPost = useRef();

  const createPost = () => {
    const post = { body };
    API.createPost(post).then(() => alert('done added'));
  };

  const getAll = () => {
    API.getAllPosts().then((res) => setBody(res.data));
  };

  useEffect(() => {
    getAll();
  }, []);

  // const getPostById = () => {
  //   API.getPostById()

  // };

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
