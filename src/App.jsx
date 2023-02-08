import Navbar from "components/UI/Navbar/Navbar";
import Posts from "components/pages/Posts";
import About from "components/pages/About";
import Error from "components/pages/Error";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Posts />} path="/posts" />
        <Route element={<About />} path="/about" />
        <Route element={<Error />} path="/error" />
        <Route element={<Navigate to="/error" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
