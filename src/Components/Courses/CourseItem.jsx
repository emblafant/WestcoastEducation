const CourseItem = ({ courseData }) => {
  return (
    <div>
      <h3 className="small-title">{courseData.title}</h3>
      <p>{courseData.courseNumber}</p>
      <p>{courseData.length}</p>
      <p>{courseData.start}</p>
    </div>
  );
};

export default CourseItem;
