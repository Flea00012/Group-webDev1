import React, { useState } from "react";
import ProductUpdateForm from "./ProductUpdateForm";

function ProductCard({ product, onDeleteClick, onUpdateClick }) {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdateClick = () => {
        setIsUpdating(true);
    };


    return isUpdating ?
        <ProductUpdateForm oldProduct={product} onUpdateClick={(updatedProduct) => { setIsUpdating(false); onUpdateClick(updatedProduct); }} />
        :
        <div className="card mt-4">
            <div className="card-body">
                <h1>{product.name}</h1>
                <p>{product.description}</p>

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

export default ProductCard;

