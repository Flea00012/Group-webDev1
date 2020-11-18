import React, { useState } from "react";


export default function PostUpdateForm({ oldProduct, onUpdateClick }) {
    const [ti, setName] = useState(oldProduct.name);
    const [description, setDescription] = useState(oldProduct.description);

    return (
        <div >
            <div >
                <h1>Update product</h1>

                <div >
                    <input type="text"  placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
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

