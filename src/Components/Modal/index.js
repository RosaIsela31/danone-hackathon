import React from "react"
import Modal from "react-modal"
import Close from "../Icons/Close"

import "./styles.css"

const ModalComponent = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      className="modal-component"
      contentLabel="Example Modal"
      data-cy='ModalComponent'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button 
        className="modal-component__close-button"
        type="button"
        onClick={onRequestClose}
        aria-label="Close Modal"
      >
        <Close />
      </button>
      {children}
    </Modal>
  )
}

export default ModalComponent
