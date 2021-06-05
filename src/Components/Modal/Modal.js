import "./modal.css";
const Modal = ({ modal, closeModal }) => {
  return (
    <div className={"Modal"}>
      <div className={"Modal__container"}>
        <div className={"Modal__Wrapper"}>
          <div className={"modal__left-side"}>
            <div className={"modal__left-header"}>
              <div>
                <p>$20</p>
                <p>RRP</p>
              </div>
              <div>
                <p>{modal[0].price}</p>
                <p>COST</p>
              </div>
              <div className={"modal__profit"}>
                <p>20%($6)</p>
                <p>PROFIT</p>
              </div>
            </div>
            <div className={"modal__image"}>
              <img src={modal[0].image} alt="image" />
            </div>
          </div>

          <div className={"modal__right-side"}>
            <div className={"modal__supplier"}>
              <p>SKU# bgb-s0724578 COPY</p>
              <p className={"modal__supplier-details"}>
                <span>Supplier:</span> <span>SP-Supplier115</span>
              </p>
            </div>
            <p className={"modal__title"}>{modal[0].title}</p>
            <button className={"modal__add"}>Add to Inventory</button>
            <div className={"modal__details"}>
              <div className={"modal__details-header"}>
                <div className={"modal__details--active"}>Product Details</div>
                <div>Shopping Rates</div>
              </div>
              <div className={"modal__description"}>
                <p>{modal[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"Modal_Background"} onClick={closeModal}></div>
    </div>
  );
};

export default Modal;
