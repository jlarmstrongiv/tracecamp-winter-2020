import React from "react";

const Lives = ({ current, max }) => {
  return (
    <div>
      {"❤".repeat(current)}
      {"🖤".repeat(max - current)}
    </div>
  );
};

export default Lives;
