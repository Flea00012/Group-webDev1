import React, { useState } from "react";
import PostUpdateForm from "./PostUpdateForm";

export default function PostCard({ post, onDeleteClick, onUpdateClick }) {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdateClick = () => {
        setIsUpdating(true);
    };


    return isUpdating ?
        <UpdateForm oldProduct={post} onUpdateClick={(updatedProduct) => { setIsUpdating(false); onUpdateClick(updatedProduct); }} />
        :
        <div className="card mt-4">
            <div className="card-body">
                <h1>{post.name}</h1>
                <p>{post.description}</p>

                <div>
                    <button className="btn btn-danger" onClick={() => onDeleteClick(product)}>
                        Delete
                </button>

                    <button className="btn btn-warning" onClick={handleUpdateClick}>
                        Update
                    </button>
                </div>
            </div>
        </div>
}



