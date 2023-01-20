import { useContext } from "react";

import CourseList from "./CourseList";
import CourseDetails from "../ui/CourseDetails";
import CourseForm from "../ui/CourseForm";
import Modal from "../ui/Modal";
import DisplayContext from "../Store/display-context";

const Courses = () => {
  const context = useContext(DisplayContext);

  return (
    <section data-testid="coursesPage" className="container">
      {context.displayCourseDetails && <Modal content={<CourseDetails />} />}
      {context.displayCourseForm && <Modal content={<CourseForm />} />}
      <h2 className="page-title">Courses</h2>
      <CourseList />
      <button
        className="btn big-btn"
        onClick={() => {
          context.onDisplay("CourseForm");
        }}
      >
        Add Course
      </button>
    </section>
  );
};

export default Courses;
