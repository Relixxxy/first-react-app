import { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JS",
      body: "It is very interesting  programming language",
    },
    {
      id: 2,
      title: "C#",
      body: "It is very extremely  programming language",
    },
    {
      id: 3,
      title: "PHP",
      body: "It is interesting  programming language",
    },
  ]);

  const [filter, setFilter] = useState([{ sortValue: "", query: "" }]);

  const sortedPosts = useMemo(() => {
    if (filter.sortValue) {
      return [...posts].sort((a, b) =>
        a[filter.sortValue].localeCompare(b[filter.sortValue])
      );
    }

    return posts;
  }, [filter.sortValue, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((item) =>
      item.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Post list"
        />
      ) : (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          There are no posts !
        </h1>
      )}
    </div>
  );
}

export default App;
