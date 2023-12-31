import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";
const Courses = ({ handledSelectedCourse }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="lg:w-2/3 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Course
          handledSelectedCourse={handledSelectedCourse}
          key={course.id}
          course={course}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handledSelectedCourse: PropTypes.func,
};

export default Courses;
