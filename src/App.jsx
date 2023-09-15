import CourseCart from "./components/CourseCart/CourseCart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="mb-20">
      <Header></Header>
      <main className="max-w-7xl mx-auto mt-8 flex justify-between gap-6">
        <Courses></Courses>
        <CourseCart></CourseCart>
      </main>
    </div>
  );
}

export default App;
