import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
const Login = () => {
  const { loginUserAPI, isLoggedIn, loginError } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "workintech", password: "wecandoit" },
  });
  const history = useHistory();
  const submitHandler = (data) => {
    console.log("sent data", data);
    loginUserAPI(data);
  };
  useEffect(() => {
    if (isLoggedIn()) {
      history.push("/friends");
    }
  }, [isLoggedIn()]);
  return (
    <div>
      <h2>LOGIN</h2>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="inputs">
            <label htmlFor="username">USERNAME</label>
            <input
              id="username"
              type="text"
              placeholder="workintech"
              {...register("username", {
                required: "This field is required",
              })}
            ></input>
            {errors.username && (
              <div className="error">{errors.username.message}</div>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="password">PASSWORD </label>
            <input
              id="password"
              type="text"
              placeholder="wecandoit"
              {...register("password", {
                required: "This field is required",
              })}
            ></input>
            {errors.password && (
              <div className="error">{errors.password.message}</div>
            )}
          </div>
          {loginError && <div className="error">{loginError}</div>}
          <button className="submit-button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
