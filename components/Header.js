import React from "react";

const Header = ({children}) => {
  return (
    <div className="header">
      <h2>Header: {children}</h2>
    </div>
  );
};

export default Header;
