import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (content) => {
    const newPost = { id: uuidv4(), content };
    setPosts([...posts, newPost]);
  };

  const editPost = (id, updatedContent) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, content: updatedContent } : post
    );
    setPosts(updatedPosts);
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Blog</h1>
      <PostForm addPost={addPost} />
      <PostList
        posts={posts}
        editPost={editPost}
        deletePost={deletePost}
      />
    </div>
  );
};

export default App;
