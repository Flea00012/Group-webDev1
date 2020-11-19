//react core
import React, { useEffect, useState } from 'react';
import Api from '../../api/Api';

// import Components

import Posts from "./Posts/Posts";


export default function PostsPage() {
  const [user, setUser] = useState([]);

  useEffect(
    () =>
      Api.get('/user/me').then((res) => {
        setUser(res.data);
      }),
    []
  );

  return (
    <div className="main">
      <Posts user={user} />
      <div className="ad">
        <span>Advertising and External APIs</span>
      </div>
    </div>
  );
}
