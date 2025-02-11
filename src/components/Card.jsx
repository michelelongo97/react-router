export default function Card({ post }) {
  return (
    <div>
      <img src={`http://localhost:3000${post.image}`} alt={post.title} />
      <h2>{post.title}</h2> <h5> {post.tags}</h5> <p>{post.content}</p>
    </div>
  );
}
