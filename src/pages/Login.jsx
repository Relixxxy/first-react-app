import MyButton from "components/UI/buttons/MyButton";
import MyInput from "components/UI/inputs/MyInput";
import { AuthContext } from "context/context";
import { useContext } from "react";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const submit = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h2>Login page</h2>
      <form onSubmit={submit}>
        <MyInput type="text" placeholder="Login" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;
