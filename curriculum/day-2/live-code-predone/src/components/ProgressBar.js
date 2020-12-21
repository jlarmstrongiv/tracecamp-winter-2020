import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="relative bg-gray-200 w-52 h-3 rounded-xl overflow-hidden border-2 border-black">
      <div
        className="absolute h-full bg-red-500 transition-all"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

ProgressBar.defaultProps = {
  percentage: 50,
};
export default ProgressBar;
