import React from "react";

const Center = ({ children }) => {
  return (
    <div className="flex flex-col justify-center h-screen">{children}</div>
  );
};

export default Center;
