import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginData } from "./actions/actions";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  async function postEvent(e) {
    e.preventDefault();
    let result = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          setError(true);
          throw new Error(response.status);
        } else {
          setError(false);
          return response.json();
        }
      })
      .then((json) => {
        // let items = { id: json.id, token: json.token };
        // console.log(items);
        // localStorage.setItem("items", JSON.stringify(items));
        // console.log("json is", json);

        dispatch(LoginData(json));
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="form-container">
      <div className="box">
        <form onSubmit={postEvent}>
          <div className="inputField">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label htmlFor="Password">Password</label>
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <p className={error ? "error" : " "}>
              Please Enter valid Email and Password(404 bad request)
            </p>
          )}
          <input className="btn" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
