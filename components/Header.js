import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store/actions/name";

const Header = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.nameReducer);

  const nameChangeHandler = () => {
    dispatch(changeName());
  };

  return (
    <div className="header">
      <h2>Header</h2>
      <h6>ENV Variables : {process.env.NEXT_PUBLIC_SHOPNAME}</h6>
      <div>
        <h3>{name}</h3>
      </div>
      <button onClick={nameChangeHandler}>Change Name</button>
    </div>
  );
};

export default Header;
