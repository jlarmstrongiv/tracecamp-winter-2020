// puts all of the child elements in a vertical stack
const Stack = ({ children }) => {
  return (
    <div className="flex flex-col text-center items-center">{children}</div>
  );
};

export default Stack;
