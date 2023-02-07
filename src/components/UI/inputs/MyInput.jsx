import classes from "./MyInput.module.css";

const MyInput = (props) => {
  return <input {...props} className={classes.myInput} />;
};

export default MyInput;
