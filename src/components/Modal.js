const Modal = ({ showModal, setShowModal }) => {
  //function to  close Modal
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div className="modal" onClick={handleClick}>
      <div className="modal-message">
        <p>Votre panier est confirmé. </p>
        <p>Cette démo est terminée.</p>
      </div>
    </div>
  );
};

export default Modal;
