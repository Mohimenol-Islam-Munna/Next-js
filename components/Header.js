import React from "react";

const Header = ({children}) => {
  return (
    <div className="header">
      <h2>Header</h2>
      <h6>{children}</h6>
    </div>
  );
};

export default Header;
