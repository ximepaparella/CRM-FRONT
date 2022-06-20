const Button = ({ text, onClick, className, icon }) => {
  return (
    <>
      <button onClick={onClick} className={className} type="button">
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button;
