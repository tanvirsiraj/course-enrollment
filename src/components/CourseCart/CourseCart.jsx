import PropTypes from "prop-types";
const CourseCart = ({ selectedCourse, creditRemaining }) => {
  //   console.log(currentCredit);

  let totalCredit = 0;
  let totalPrice = 0;
  for (const course of selectedCourse) {
    // console.log(course.credit);
    totalCredit = totalCredit + course.credit;
    totalPrice = totalPrice + course.price;
    // creditRemaining = creditRemaining - currentCredit.credit;
    // setCreditRemaining(creditRemaining);
  }

  return (
    <div className="lg:w-1/3 mt-10 lg:mt-0">
      <div className="card bg-white rounded-xl p-4 shadow-lg">
        <h2 className="text-[#2F80ED] font-bold text-lg ">
          Credit Hour Remaining{" "}
          {creditRemaining < 0 ? (
            <div className="toast toast-top toast-center">
              <div className="alert alert-info">
                <span>Remaining Credit can not be negative</span>
              </div>
            </div>
          ) : (
            creditRemaining
          )}{" "}
          hr
        </h2>
        <div className="border-b border-b-gray-300 my-4"></div>
        <h2 className="text-black font-bold text-xl">Course Name</h2>
        <div className="mt-4">
          {selectedCourse.map((singleCourse, idx) => (
            <p className="text-black text-base" key={idx}>
              {idx + 1}. {singleCourse.course_name}
            </p>
          ))}
        </div>
        <div className="border-b border-b-gray-300 my-4"></div>
        <h3 className="text-black font-[500]">
          Total Credit Hour:{" "}
          {totalCredit > 20 ? (
            <div className="toast toast-top toast-right">
              <div className="alert alert-info">
                <span>You can not take more than 20 credit</span>
              </div>
            </div>
          ) : (
            totalCredit
          )}
        </h3>
        <div className="border-b border-b-gray-300 my-4"></div>
        <h3 className="text-black font-[500]">
          Total Price : {creditRemaining < 0 ? 0 : totalPrice} USD
        </h3>
      </div>
    </div>
  );
};

CourseCart.propTypes = {
  selectedCourse: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  creditRemaining: PropTypes.number.isRequired,
};

export default CourseCart;
