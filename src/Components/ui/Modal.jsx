import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const ModalContent = ({ content }) => {
  return (
    <div className="center">
      <div className={classes.overlay}></div>
      {content}
    </div>
  );
};

const Modal = ({ content }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalContent content={content} />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default Modal;
