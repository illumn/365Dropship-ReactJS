import "./button.css";
const Button = ({ content, handleClick }) => {
  return <button onClick={handleClick} className="mainButton">{content}</button>;
};

export default Button;
