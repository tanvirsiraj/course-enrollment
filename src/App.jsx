import { useEffect, useState } from "react";
import CourseCart from "./components/CourseCart/CourseCart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  let [creditRemaining, setCreditRemaining] = useState(20);
  const [id, setId] = useState(0);
  const handledSelectedCourse = (course, id) => {
    // console.log("hello", id);
    const newCourses = [...selectedCourse, course];

    //   console.log(id);

    setSelectedCourse(newCourses);

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
      <main className="max-w-7xl mx-auto mt-8 flex justify-between gap-6">
        <Courses handledSelectedCourse={handledSelectedCourse}></Courses>
        <CourseCart
          creditRemaining={creditRemaining}
          selectedCourse={selectedCourse}
          id={id}
        ></CourseCart>
      </main>
    </div>
  );
}

export default App;
