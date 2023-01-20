import { useCallback, useContext, useRef, useState } from "react";

import DisplayContext from "../Store/display-context";

import SubmitMessage from "./SubmitMessage";
import classes from "./Modal.module.css";
import uniqueId from "../../functions/uniqueId";

const CourseForm = () => {
  const context = useContext(DisplayContext);
  const [displaySubmitMessage, setDisplaySubmitMessage] = useState(false);

  const titleInputRef = useRef();
  const courseNumberInputRef = useRef();
  const courseLengthInputRef = useRef();
  const coursestartInputRef = useRef();
  const descriptionInputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setDisplaySubmitMessage(true);

    const course = {
      id: uniqueId(),
      title: titleInputRef.current.value,
      courseNumber: courseNumberInputRef.current.value,
      length: courseLengthInputRef.current.value,
      start: coursestartInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    await fetch("http://localhost:3010/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
  };

  const onCloseHandler = () => {
    context.onHide();
    setDisplaySubmitMessage(false);
  };

  return (
    <div className={classes.modal}>
      {!displaySubmitMessage && (
        <>
          <header>
            <h2>Add Course</h2>
          </header>
          <main>
            <form onSubmit={onSubmitHandler}>
              <label htmlFor="titleInput">Course Title</label>
              <input
                type="text"
                name="titleInput"
                id="titleInput"
                ref={titleInputRef}
                required
              />
              <label htmlFor="courseNumberInput">Course Number</label>
              <input
                type="text"
                name="courseNumberInput"
                id="courseNumberInput"
                ref={courseNumberInputRef}
                required
              />
              <label htmlFor="courseLengthInput">Course Length</label>
              <input
                type="text"
                name="courseLengthInput"
                id="courseLengthInput"
                ref={courseLengthInputRef}
                required
              />
              <label htmlFor="courseStartInput">Start Date</label>
              <input
                type="text"
                name="coursestartInput"
                id="courseStartInput"
                ref={coursestartInputRef}
                required
              />
              <label htmlFor="descriptionInput">Description</label>
              <input
                type="text"
                name="descriptionInput"
                id="descriptionInput"
                ref={descriptionInputRef}
                required
              />
              <button className="btn">Add Course</button>
            </form>
          </main>
        </>
      )}
      {displaySubmitMessage && (
        <SubmitMessage message="Course has been added!" />
      )}
      <footer>
        <button
          className={`btn ${displaySubmitMessage ? "big-btn" : "close-btn"}`}
          onClick={onCloseHandler}
        >
          Close
        </button>
      </footer>
    </div>
  );
};

export default CourseForm;
