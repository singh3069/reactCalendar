import React from 'react'
import "./style.css";


function Modal({ showModal, setShowModal }) {
  const closeModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {showModal ? (
        <div className="modalContainer">
          <u>
            <h1>Add Your Task </h1>
          </u>
          <div className="container">
            <p className="closeModal" onClick={closeModal}>
              +
            </p>
            <input
              type="text"
              placeholder="Task Heading"
              className="taskHeading"
            ></input>
            <textarea
              className="taskText"
              placeholder="Write in Detail"
            ></textarea>
            <div className="buttonDiv">
              <button className="addTaskButton Button">Add Task</button>
              <button onClick={closeModal} className="cancelTaskButton Button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal
