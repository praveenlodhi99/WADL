import React from 'react';

function Student({ name }) {
  return <li>Student name is {name}</li>;
}

function Classroom({ students }) {
  return (
    <div>
      <h2>Who All are in Class?</h2>
      <ul>
        {students.map((student, index) => (
          <Student key={index} name={student} />
        ))}
      </ul>
    </div>
  );
}

// Usage
const studentsList = ["Divya", "Aditya", "Dev"];

function App() {
  return (
    <div>
      <Classroom students={studentsList} />
    </div>
  );
}

export default App;
