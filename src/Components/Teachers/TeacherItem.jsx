const CourseItem = ({ teacherData }) => {
  return (
    <div>
      <h3 className="small-title">
        {teacherData.firstName} {teacherData.lastName}
      </h3>
      <p>{teacherData.ssNumber}</p>
      <p>{teacherData.email}</p>
      <p>{teacherData.phoneNumber}</p>
      <p>{teacherData.qualifications}</p>
    </div>
  );
};

export default CourseItem;
