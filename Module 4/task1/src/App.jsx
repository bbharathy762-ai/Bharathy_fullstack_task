import Student from "./component/Student";

function App() {
  return (
    <div>
      <Student 
        name="Rahul" 
        rollNo={101} 
        course="BCA" 
        college="ABC College" 
      />
    </div>
  );
}

export default App;