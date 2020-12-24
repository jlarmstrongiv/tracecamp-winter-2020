// centers all of the child elements on the page
const Center = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
};

export default Center;
