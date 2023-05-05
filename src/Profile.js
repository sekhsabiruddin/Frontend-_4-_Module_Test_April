import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allUserDetails } from "./actions/actions";
const Profile = () => {
  const data = useSelector((state) => state.data);

  const { id, token, useLoginData, userAllDetails } = data;
  const { image } = userAllDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch(allUserDetails(data)));
  }, [id]);

  // const myObject = useSelector((state) => state.myObject);
  //this is render function start here because
  function renderData(data) {
    return Object.keys(data).map((key) => {
      const value = data[key];

      if (typeof value === "object") {
        // If the value is an object, recursively call the renderData function
        return (
          <div key={key}>
            <h3 className="nested">{key}</h3>
            {renderData(value)}
          </div>
        );
      }

      // If the value is not an object, simply render the key-value pair
      return (
        <div key={key} className="text-content">
          <span className="textbox-title">{key} : </span>
          {key === "image" ? (
            <a href={value}>{value}</a>
          ) : (
            <span className="textbox-content">{value}</span>
          )}
        </div>
      );
    });
  }
  //this is end here
  return (
    <>
      <h2 className="title">Profile</h2>
      <div className="img-box">
        <img src={userAllDetails.image} alt="" />
      </div>
      <div className="text-box-main">{renderData(userAllDetails)}</div>
    </>
  );
};

export default Profile;
