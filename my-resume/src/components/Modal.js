import styleClass from "../components/Modal.css";

function Modal() {

  function handleOkayButton() {
    return;
  }

  return (
    <div>
      <div>
        <h2></h2>
        <div>
          <button onClick={handleOkayButton}> I UNDERSTAND! </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
