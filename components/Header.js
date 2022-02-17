import React from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../store/actions/name";

const Header = ({ children }) => {
  const dispatch = useDispatch();

  const nameChangeHandler = () => {
    const newName = "Munna 1601";
    console.log("name change handler ::: M");
    dispatch(changeName());
  };

  return (
    <div className="header">
      <h2>Header</h2>
      <h6>{children}</h6>
      <button onClick={nameChangeHandler}>Change Name</button>
    </div>
  );
};

export default Header;
