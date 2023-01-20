import React from "react";
import { useState } from "react";

const DisplayContext = React.createContext({
  displayCourseDetails: false,
  displayCourseForm: false,
  displayTeacherDetails: false,
  displayTeacherForm: false,
  activeModalId: "",
  onDisplay: () => {},
  onHide: () => {},
  onUpdateModalId: () => {},
});

export const DisplayContextProvider = ({ children }) => {
  const [displayCourseDetails, setDisplayCourseDetails] = useState(false);
  const [displayCourseForm, setDisplayCourseForm] = useState(false);
  const [displayTeacherDetails, setDisplayTeacherDetails] = useState(false);
  const [displayTeacherForm, setDisplayTeacherForm] = useState(false);
  const [activeModalId, setActiveModalId] = useState("");

  const setFunctions = {
    CourseDetails: setDisplayCourseDetails,
    CourseForm: setDisplayCourseForm,
    TeacherDetails: setDisplayTeacherDetails,
    TeacherForm: setDisplayTeacherForm,
  };

  const resetDisplayStates = () => {
    setDisplayCourseDetails(false);
    setDisplayCourseForm(false);
    setDisplayTeacherDetails(false);
    setDisplayTeacherForm(false);
  };

  const onDisplayHandler = (modal) => {
    resetDisplayStates();

    setFunctions[modal](true);
  };

  const onHideHandler = () => {
    resetDisplayStates();
  };

  const onUpdateModalId = (id) => {
    setActiveModalId(id);
  };

  return (
    <DisplayContext.Provider
      value={{
        displayCourseDetails: displayCourseDetails,
        displayCourseForm: displayCourseForm,
        displayTeacherDetails: displayTeacherDetails,
        displayTeacherForm: displayTeacherForm,
        activeModalId: activeModalId,
        onDisplay: onDisplayHandler,
        onHide: onHideHandler,
        onUpdateModalId: onUpdateModalId,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export default DisplayContext;
