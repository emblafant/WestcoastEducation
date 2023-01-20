import { useContext, useState, useEffect } from "react";

import DisplayContext from "../Store/display-context";

import classes from "./Modal.module.css";

const TeacherDetails = () => {
  const context = useContext(DisplayContext);
  const [teacher, setTeacher] = useState({});
  const teacherId = context.activeModalId;

  useEffect(() => {
    fetch(`http://localhost:3010/teachers/${teacherId}`)
      .then((response) => response.json())
      .then((data) => setTeacher(data));
  }, []);

  return (
    <div className={classes.modal}>
      <header>
        <h2 className="big-title">
          {teacher.firstName} {teacher.lastName}
        </h2>
      </header>
      <main className="details-padding">
        <div className="space-between">
          <p className="bold">Social Security number: </p>
          <p className="bold">{teacher.ssNumber}</p>
        </div>
        <div className="space-between">
          <p className="bold">Email:</p>
          <p className="bold">{teacher.email}</p>
        </div>
        <div className="space-between">
          <p className="bold">Phone Number:</p>
          <p className="bold">{teacher.phoneNumber}</p>
        </div>
        <hr />
        <p className="bold">Qualifications:</p>
        <p>{teacher.qualifications}</p>
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

export default TeacherDetails;
