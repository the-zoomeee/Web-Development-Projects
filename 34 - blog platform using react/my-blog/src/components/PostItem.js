import React, { useState } from 'react';

const PostItem = ({ post, editPost, deletePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(post.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editPost(post.id, editedContent);
    setIsEditing(false);
  };

  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <div className="card-body">
          {isEditing ? (
            <>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="form-control mb-2"
              />
              <button
                className="btn btn-primary mr-2"
                onClick={handleSave}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p className="card-text">{post.content}</p>
              <button
                className="btn btn-secondary mr-2"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
