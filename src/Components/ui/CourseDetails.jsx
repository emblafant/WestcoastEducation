import { useContext, useState, useEffect } from "react";

import DisplayContext from "../Store/display-context";

import classes from "./Modal.module.css";

const CourseDetails = () => {
  const context = useContext(DisplayContext);
  const [course, setCourse] = useState({});
  const courseId = context.activeModalId;

  useEffect(() => {
    fetch(`http://localhost:3010/courses/${courseId}`)
      .then((response) => response.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div className={classes.modal}>
      <header>
        <h2 className="big-title">{course.title}</h2>
      </header>
      <main className="details-padding">
        <div className="space-between">
          <p className="bold">Course Number:</p>
          <p className="bold">{course.courseNumber}</p>
        </div>
        <div className="space-between">
          <p className="bold">Course Length:</p>
          <p className="bold">{course.length}</p>
        </div>
        <div className="space-between">
          <p className="bold">Start Date:</p>
          <p className="bold">{course.start}</p>
        </div>
        <hr />
        <p>{course.description}</p>
      </main>
      <footer>
        <button
          className="btn close-btn"
          onClick={() => {
            context.onHide();
          }}
        >
          Close
        </button>
      </footer>
    </div>
  );
};

export default CourseDetails;
