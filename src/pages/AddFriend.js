import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

const AddFriend = () => {
  const { axioWithAuthInstance } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    axioWithAuthInstance
      .post("friends", data)
      .then((res) => {
        console.log("add friends res", res);
      })
      .catch((err) => {
        console.error("add friends err", err);
      });
  };
  return (
    <div>
      <h2>ADD FRIEND</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="inputs">
          <label htmlFor="name">NAME</label>
          <input
            id="name"
            type="text"
            placeholder="Golden"
            {...register("name", { required: "This field is required" })}
          />
        </div>
        <div className="inputs">
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            type="email"
            placeholder="friend@workintech.com.tr"
            {...register("email", { required: "This field is required" })}
          />
        </div>
        <button className="submit-button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
export default AddFriend;
