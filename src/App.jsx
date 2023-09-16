import { useEffect, useState } from "react";
import CourseCart from "./components/CourseCart/CourseCart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  let [creditRemaining, setCreditRemaining] = useState(20);
  const [id, setId] = useState(0);
  const handledSelectedCourse = (course, id) => {
    // console.log("hello", id);

    const duplicateSelected = selectedCourse.find(
      (selectedCourse) => selectedCourse.id === course.id
    );
    if (duplicateSelected) {
      toast.warn("Already Selected", {
        theme: "dark",
      });
    } else {
      const newSelected = [...selectedCourse, course];
      setSelectedCourse(newSelected);
    }

    /*  const newCourses = [...selectedCourse, course];
    setSelectedCourse(newCourses); */

    setId(id);
  };

  useEffect(() => {
    if (selectedCourse.length > 0) {
      const currentCredit = selectedCourse.find((c) => c.id === id);
      // console.log(currentCredit, selectedCourse);
      const r = creditRemaining - currentCredit.credit;
      setCreditRemaining(r);
    }
  }, [selectedCourse]);

  return (
    <div className="mb-20">
      <Header></Header>
      <main className="lg:max-w-7xl p-2 lg:p-0 mx-auto mt-8 lg:flex justify-between gap-6 ">
        <Courses handledSelectedCourse={handledSelectedCourse}></Courses>

        <CourseCart
          creditRemaining={creditRemaining}
          selectedCourse={selectedCourse}
          id={id}
        ></CourseCart>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
