import { AuthContext } from "context/context";
import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "router/routes";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(({ path, component, exact }, index) => (
            <Route key={index} exact={exact} element={component} path={path} />
          ))}
          <Route element={<Navigate to="/posts" />} path="*" />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, component, exact }, index) => (
            <Route key={index} exact={exact} element={component} path={path} />
          ))}
          <Route element={<Navigate to="/login" />} path="*" />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
