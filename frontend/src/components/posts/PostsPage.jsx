//react core
import React, { useEffect, useState } from "react";
import Api from "../../api/Api";

// import Components
import Posts from "./Posts/Posts";
import Comments from "./Comments/Comments";

export default function PostsPage() {
  const [user, setUser] = useState([]);

  useEffect(
    () =>
      Api.get("/user/me").then((res) => {
        setUser(res.data);
      }),
    []
  );

  return (
    <div className="wrapper">
      <header className="main-head">Header for Food Forum site</header>
      <>
        <Posts user={user} />

        {/* The code below can be used for integrating comments in Post component. 
      Please mind the props needed by CommentCard and CommentForm components */}
      </>
      <aside className="side">Sidebar Topics related to other foods</aside>
      <div className="ad">Advertising and External APIs</div>
    </div>
  );
}
