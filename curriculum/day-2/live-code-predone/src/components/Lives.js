import React from "react";

const Lives = ({ current, max }) => {
  return (
    <div className="text-3xl">
      <span className="text-blue-500">{"❤".repeat(current)}</span>
      <span className="text-grey-200">{"🖤".repeat(max - current)}</span>
    </div>
  );
};

Lives.defaultProps = {
  current: 2,
  max: 4,
};

export default Lives;
