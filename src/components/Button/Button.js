import "./Button.css";

const Button = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      CONTINUE
    </button>
  );
};
export default Button;
