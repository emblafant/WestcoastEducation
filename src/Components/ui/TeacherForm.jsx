import { useCallback, useContext, useRef, useState } from "react";

import DisplayContext from "../Store/display-context";

import SubmitMessage from "./SubmitMessage";
import classes from "./Modal.module.css";
import uniqueId from "../../functions/uniqueId";

const TeacherForm = () => {
  const context = useContext(DisplayContext);
  const [displaySubmitMessage, setDisplaySubmitMessage] = useState(false);

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const ssNumberInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const qualificationsInputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setDisplaySubmitMessage(true);

    const teacher = {
      id: uniqueId(),
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      ssNumber: ssNumberInputRef.current.value,
      email: emailInputRef.current.value,
      phoneNumber: phoneNumberInputRef.current.value,
      qualifications: qualificationsInputRef.current.value,
    };

    await fetch("http://localhost:3010/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacher),
    });
  };

  const onCloseHandler = useCallback(() => {
    context.onHide();
    setDisplaySubmitMessage(false);
  }, [context, setDisplaySubmitMessage]);

  return (
    <div className={classes.modal}>
      {!displaySubmitMessage && (
        <>
          <header>
            <h2>Add Teacher</h2>
          </header>
          <main>
            <form onSubmit={onSubmitHandler}>
              <label htmlFor="firstNameInput">First Name</label>
              <input
                type="text"
                name="firstNanmeInput"
                id="firstNameInput"
                ref={firstNameInputRef}
                required
              />
              <label htmlFor="lastNameInput">Last Name</label>
              <input
                type="text"
                name="lastNanmeInput"
                id="lastNameInput"
                ref={lastNameInputRef}
                required
              />
              <label htmlFor="ssNumberInput">Social Security Number</label>
              <input
                type="text"
                name="ssNumberInput"
                id="ssNumberInput"
                ref={ssNumberInputRef}
                required
              />
              <label htmlFor="emailInput">Email</label>
              <input
                type="text"
                name="emailhInput"
                id="emailInput"
                ref={emailInputRef}
                required
              />
              <label htmlFor="phoneNumberInput">Phone Number</label>
              <input
                type="text"
                name="phoneNumberInput"
                id="phoneNumberInput"
                ref={phoneNumberInputRef}
                required
              />
              <label htmlFor="qualificationsInput">Qualifications</label>
              <input
                type="text"
                name="qualificationsInput"
                id="qualificationsInput"
                ref={qualificationsInputRef}
                required
              />
              <button className="btn">Add Teacher</button>
            </form>
          </main>
        </>
      )}
      {displaySubmitMessage && (
        <SubmitMessage message="Teacher has been added!" />
      )}
      <footer>
        <button
          className={`btn ${displaySubmitMessage ? "big-btn" : "close-btn"}`}
          onClick={() => {
            onCloseHandler();
          }}
        >
          Close
        </button>
      </footer>
    </div>
  );
};

export default TeacherForm;
