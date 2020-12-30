const ProgressBar = (props) => {
  return (
    <div className="relative w-52 h-4 border-2 border-gray-200 rounded-xl overflow-hidden">
      <div
        className="absolute bg-red-500 h-full"
        style={{ width: props.percentage + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
