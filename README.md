# Course Enrollment

### Project Features:

- It is a simple static page named registration course build with react.
- There's 9 card card showing in the page. In Each card there's a course picture, course title, course description , course price, course credit and button named select
- By clicking select button there will be shown total credit hour and remaing credit hour , selected course name and total price in a course cart.

### Discuss how you managed the state in your assignment project?

- Firstly, I declared a state (useState) in Courses component and loaded data inside useEffect with fetch then set the data with setter function setCourses() and passing the state variable courses as a props in Course component.
- There's three other state (useState) in common parent component named App to store selected course id, remaning credit and selected course object. From that common parent component I can easily share state to any other child component.
