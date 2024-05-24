import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, editPost, deletePost }) => {
  return (
    <div className="row">
      {posts.map(post => (
        <PostItem
          key={post.id}
          post={post}
          editPost={editPost}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
};

export default PostList;
