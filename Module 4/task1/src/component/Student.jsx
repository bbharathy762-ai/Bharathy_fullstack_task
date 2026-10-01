function Student(props) {
  return (
    <div>
      <h3>Student Profile</h3>
      <p>---------------------------</p>
      <p>Name : {props.name}</p>
      <p>Roll No : {props.rollNo}</p>
      <p>Course : {props.course}</p>
      <p>College : {props.college}</p>
      <p>---------------------------</p>
    </div>
  );
}

export default Student;