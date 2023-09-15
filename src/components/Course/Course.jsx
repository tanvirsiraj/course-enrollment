import PropTypes from "prop-types";
import { BiDollar } from "react-icons/bi";
import { HiOutlineBookOpen } from "react-icons/hi";
const Course = ({ course, handledSelectedCourse }) => {
  const { id, img, course_name, course_details, credit, price } = course;
  return (
    <div className="card bg-white rounded-xl p-4 shadow-lg">
      <figure>
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title text-black text-base mt-4">{course_name}</h2>
        <p className="text-left text-sm text-[#1C1B1B99] ">{course_details}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <BiDollar className="text-black" />
            <p className="ml-2 text-[#1C1B1B] ">Price : {price}</p>
          </div>
          <div className="flex items-center">
            <HiOutlineBookOpen className="text-black" />
            <p className="ml-2 text-[#1C1B1B]">Credit : {credit}hr</p>
          </div>
        </div>
        <div className="card-actions">
          <button
            onClick={() => handledSelectedCourse(course, id)}
            className="btn bg-[#2F80ED] border-0 text-white w-full capitalize text-lg"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handledSelectedCourse: PropTypes.func,
};

export default Course;
