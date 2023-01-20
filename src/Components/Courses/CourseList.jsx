import { useEffect, useState, useContext, useCallback } from "react";

import CourseItem from "./CourseItem";
import DisplayContext from "../Store/display-context";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  const context = useContext(DisplayContext);

  useEffect(() => {
    fetch("http://localhost:3010/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  const showDetailsHandler = useCallback(
    (id) => {
      context.onUpdateModalId(id);
      context.onDisplay("CourseDetails");
    },
    [context]
  );

  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <CourseItem courseData={course} />
            <button
              className="btn"
              onClick={() => {
                showDetailsHandler(course.id);
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

export default CourseList;
