import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function addCouseAction(title) {
  return { type: 'ADD_COURSE', title: 'GraphQL' }
}

export default function CourseList() {
  const [qty, setQty] = useState(2);


  const courses = useSelector(state => state.data.slice(0, qty), [qty]);
  const allCourses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCouseAction('GraphQL'))
  }

  function addQty() {
    setQty(qty + 1)
  }

  return (
    <>
      <button type="button" onClick={addCourse}>Add Course</button>
      <br/>
      <button type="button" onClick={addQty}>Add Qty</button>
      <br/>

      Max qty: {qty}
      <br/>
      Qty courses: {allCourses.length}

      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </>
  );
}
