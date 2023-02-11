import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "API/PostService";
import { useFetching } from "hooks/useFetching";
import Loader from "components/UI/Loader/Loader";

const PostId = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(id);
    fetchComments(id);
  }, []);
  return (
    <div>
      <h1>Number {id} page</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <p>
          Id: {post.id}, Title: {post.title}
        </p>
      )}
      <h2>Comments</h2>
      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map(({ id, email, body }) => (
            <div key={id} style={{ marginTop: 15 }}>
              <h5>{email}</h5>
              <p>{body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostId;
