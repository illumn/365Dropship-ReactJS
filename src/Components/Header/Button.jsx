const Button = ({ content }) => {
  return (
    <div className="header__content">
      <button className="header__selectAll">{content}</button>
    </div>
  );
};

export default Button;
