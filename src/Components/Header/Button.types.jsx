const Button = ({ content }) => {
  return (
    <div className="header__content">
      <button className="header__selectAll">{content}</button>
      <span className="header__selection">selected 0 out of 274,157 products</span>
    </div>
  );
};

export default Button;
