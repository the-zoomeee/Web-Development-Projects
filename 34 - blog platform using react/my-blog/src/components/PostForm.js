import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === '') return;
    addPost(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-control"
          placeholder="Write your post..."
          rows="4"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default PostForm;
