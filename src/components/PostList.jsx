import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1
        style={{
          textAlign: "center",
        }}
      >
        There are no posts !
      </h1>
    );
  }

  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        {title}
      </h1>
      <TransitionGroup>
        {posts &&
          posts.map((post, index) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem remove={remove} post={post} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </>
  );
};

export default PostList;
