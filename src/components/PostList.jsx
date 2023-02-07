import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        {title}
      </h1>
      {posts &&
        posts.map((post, index) => (
          <PostItem
            remove={remove}
            number={index + 1}
            key={post.id}
            post={post}
          />
        ))}
    </>
  );
};

export default PostList;
