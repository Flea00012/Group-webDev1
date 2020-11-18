import React, { useState } from "react";


function ProductCreateForm({ onCreateClick }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="card">
            <div className="card-body">
                <h1>Create product</h1>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </div>

                <div class="input-group mb-3">
                    <textarea class="form-control" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                <button className="btn btn-primary" onClick={() => onCreateClick({ name, description })}>
                    Create
                </button>
            </div>
        </div>
    );
}

export default ProductCreateForm;