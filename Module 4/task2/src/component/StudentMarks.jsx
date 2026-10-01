import { useState } from "react";

function StudentMarks(props) {
  const [marks, setMarks] = useState(50);

  const increaseMarks = () => setMarks(marks + 1);
  const decreaseMarks = () => setMarks(marks - 1);

  return (
    <div>
      <p>Student Name: {props.name}</p>
      <p>Subject: {props.subject}</p>
      <br />
      <p>Marks: {marks}</p>
      <br />
      <button onClick={increaseMarks}>[ Increase Marks ]</button>
      <br /><br />
      <button onClick={decreaseMarks}>[ Decrease Marks ]</button>
    </div>
  );
}

export default StudentMarks;