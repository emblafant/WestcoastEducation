import { useEffect, useState, useContext, useCallback } from "react";

import TeacherItem from "./TeacherItem";
import DisplayContext from "../Store/display-context";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  const context = useContext(DisplayContext);

  useEffect(() => {
    fetch("http://localhost:3010/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data));
  }, []);

  const showDetailsHandler = useCallback(
    (id) => {
      context.onUpdateModalId(id);
      context.onDisplay("TeacherDetails");
    },
    [context]
  );

  return (
    <>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <TeacherItem teacherData={teacher} />
            <button
              className="btn"
              onClick={() => {
                showDetailsHandler(teacher.id);
              }}
            >
              Read More
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeacherList;
