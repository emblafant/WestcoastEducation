import { useCallback, useContext, useState } from "react";

import CourseList from "./Courses/CourseList";
import CourseDetails from "./ui/CourseDetails";
import InquiryFrom from "./ui/InquiryForm";

import Modal from "./ui/Modal";
import DisplayContext from "./Store/display-context";

const Public = () => {
  const context = useContext(DisplayContext);
  const [displayForm, setDisplayForm] = useState(false);

  const onHandleInquiry = useCallback(() => {
    setDisplayForm(true);
  }, [setDisplayForm]);

  return (
    <section data-testid="publicPage" className="container">
      {displayForm && (
        <Modal content={<InquiryFrom setDisplayForm={setDisplayForm} />} />
      )}
      {context.displayCourseDetails && <Modal content={<CourseDetails />} />}
      <h2 className="page-title">Available Courses</h2>
      <CourseList />
      <button className="btn big-btn" onClick={onHandleInquiry}>
        Inquiry
      </button>
    </section>
  );
};

export default Public;
