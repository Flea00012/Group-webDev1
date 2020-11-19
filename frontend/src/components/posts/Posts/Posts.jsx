import React, { useEffect, useState } from "react";
import api from "../../../api/PostsApi";
import PostCard from "./PostCard";
import PostCreateForm from "./PostCreateForm";


export default function Posts() {
    const [posts, setPosts] = useState([]);

    const createPost = (postData) => {
        api.createPost(postData)
        //Api.post("/products", productData)
            .then((res) => setPosts([...posts, res.data]));
    };

    const getAll = () => {
        api.getAllPosts()
        //Api.get("/products")
            .then(res => setPosts(res.data));
    };

    const updatePost = (updatedPost) => {
        api.updatePost(updatedPost)
        //Api.put("/products/", updatedProduct)
            .then(r => getAll());
    };

    const deletePost = (post) => {
        api.deletePost(post.id)
        //Api.delete("/products/" + product.id)
            .then(r => getAll());
    }

    useEffect(() => {
        getAll();
    }, []);

    return <div>
        <PostCreateForm onCreateClick={createPost} />

        {
            posts.map(post => (<PostCard
                key={post.id}
                post={post}
                onUpdateClick={updatePost}
                onDeleteClick={deletePost} />))
        }
    </div>
}


