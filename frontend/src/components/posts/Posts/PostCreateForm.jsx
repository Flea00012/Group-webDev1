import React, { useState } from "react";


export default function PostCreateForm({ onCreateClick }) {
    const [body, setBody] = useState("");

    return (
        <div className="card">
            <div className="card-body">
                <h1>Create post</h1>

                <div class="input-group mb-3">
                    <textarea class="form-control" placeholder="Enter post" value={body} onChange={e => setBody(e.target.value)} />
                </div>

                <button className="btn btn-primary" onClick={() => onCreateClick({ body })}>
                    Post
                </button>
            </div>
        </div>
    );
}

