import React, { useState } from "react";

function CommentUpdateForm({ oldComment, onUpdateClick }) {
  const [body, setBody] = useState(oldComment.body);

  return (
    <div className="update-form">
      <div className="card-body">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Edit comment"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={() => onUpdateClick({ ...oldComment, body })}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default CommentUpdateForm;
