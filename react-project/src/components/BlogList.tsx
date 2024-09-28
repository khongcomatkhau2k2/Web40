import BlogCard from './BlogCard';
import './BlogCard.css';
import './BlogList.css'; // Import tệp CSS cho BlogList



const posts = [
  {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others...",
    tags: ["history", "american", "crime"],
    reactions: { likes: 192, dislikes: 25 },
        views: 305,
     imageUrl: "https://product.hstatic.net/200000459373/product/mi-hao-hao-vi-tom-chua-cay-goi-75g-202110110919568290_eb7b81d74d5c4aa3b999d39ea0920724.jpg", // Liên kết hình ảnh
  },
  {
    id: 2,
    title: "He was an expert but not in a discipline",
    body: "He was an expert but not in a discipline that anyone could fully appreciate...",
    tags: ["french", "fiction", "english"],
    reactions: { likes: 859, dislikes: 32 },
      views: 4884,
     imageUrl: "https://product.hstatic.net/200000459373/product/mi-hao-hao-vi-tom-chua-cay-goi-75g-202110110919568290_eb7b81d74d5c4aa3b999d39ea0920724.jpg", // Liên kết hình ảnh
    },
   {
    id: 3,
    title: "The journey of a thousand miles begins with a single step",
    body: "This quote emphasizes the importance of taking the first step in any endeavor.",
    tags: ["inspiration", "motivational"],
    reactions: { likes: 500, dislikes: 15 },
    views: 1200,
      imageUrl: "https://product.hstatic.net/200000459373/product/mi-hao-hao-vi-tom-chua-cay-goi-75g-202110110919568290_eb7b81d74d5c4aa3b999d39ea0920724.jpg",
  },
  {
    id: 4,
    title: "Learning is a treasure that will follow its owner everywhere",
    body: "This saying highlights the value of knowledge and education.",
    tags: ["education", "wisdom"],
    reactions: { likes: 700, dislikes: 10 },
    views: 3000,
       imageUrl: "https://product.hstatic.net/200000459373/product/mi-hao-hao-vi-tom-chua-cay-goi-75g-202110110919568290_eb7b81d74d5c4aa3b999d39ea0920724.jpg",
  },
]



const BlogList = () => {
  return (
    <div className='blog-list' style={{ display: 'flex', flexWrap: 'wrap' }}>
      {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;

