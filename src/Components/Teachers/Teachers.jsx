import { useContext } from "react";

import TeacherList from "./TeacherList";
import TeacherDetails from "../ui/TeacherDetails";
import TeacherForm from "../ui/TeacherForm";
import Modal from "../ui/Modal";
import DisplayContext from "../Store/display-context";

const Teachers = () => {
  const context = useContext(DisplayContext);

  return (
    <section className="container" data-testid="teachersPage">
      {context.displayTeacherDetails && <Modal content={<TeacherDetails />} />}
      {context.displayTeacherForm && <Modal content={<TeacherForm />} />}
      <h2 className="page-title">Teachers</h2>
      <TeacherList />
      <button
        className="btn big-btn"
        onClick={() => {
          context.onDisplay("TeacherForm");
        }}
      >
        Add Teacher
      </button>
    </section>
  );
};

export default Teachers;
