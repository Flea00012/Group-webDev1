import React, { useState } from "react";


export default function PostUpdateForm({ oldProduct, onUpdateClick }) {
    const [name, setName] = useState(oldProduct.name);
    const [description, setDescription] = useState(oldProduct.description);

    return (
        <div >
            <div className="card-body">
                <h1>Update product</h1>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </div>

                <div class="input-group mb-3">
                    <textarea class="form-control" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                <button className="btn btn-primary" onClick={() => onUpdateClick({ ...oldProduct, name, description })}>
                    Update
                </button>
            </div>
        </div>
    );
}

