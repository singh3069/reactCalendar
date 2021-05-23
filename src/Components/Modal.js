import React from 'react'
import "./style.css";


function Modal({ showModal, setShowModal,  }) {
  const closeModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {showModal ? (
        <div className="modalContainer">
          <div className="container">
            <h1>hello Modal</h1>
            <h1>You want to add task on </h1>
            <button>Add Task</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal
