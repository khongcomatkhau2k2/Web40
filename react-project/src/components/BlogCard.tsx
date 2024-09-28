import React from 'react';

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
      likes: number;
      dislikes: number;
    };
    views: number;
    imageUrl: string; // Thêm thuộc tính imageUrl vào đây
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="blog-card" style={{ border: '1px solid #ddd', margin: '20px', padding: '15px', display: 'flex' }}>
      <img src={post.imageUrl} alt={post.title} style={{ width: '100px', height: '100px', marginRight: '15px' }} />
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <div>
          <strong>Tags:</strong> {post.tags.join(', ')}
        </div>
        <div>
          <strong>Likes:</strong> {post.reactions.likes} | <strong>Dislikes:</strong> {post.reactions.dislikes} | <strong>Views:</strong> {post.views}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
