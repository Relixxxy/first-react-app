import { useState } from "react";
import MyButton from "../components/UI/buttons/MyButton";
import MyInput from "../components/UI/inputs/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Post title"
        value={post.title}
        onChange={({ target: { value } }) => setPost({ ...post, title: value })}
      />
      <MyInput
        type="text"
        placeholder="Post body"
        value={post.body}
        onChange={({ target: { value } }) => setPost({ ...post, body: value })}
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>
    </form>
  );
};

export default PostForm;
