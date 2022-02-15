import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditHomeForm from "../EditHomeForm/edithomeform";


function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="single-spot-button" onClick={() => setShowModal(true)}>
        <i className="far fa-edit"></i>Edit Home
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditHomeForm />
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
