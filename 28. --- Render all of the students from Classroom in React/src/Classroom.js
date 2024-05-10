// Classroom.js
import React from 'react';
import Student from './student';

const Classroom = () => {
  const students = ["Divya", "Aditya", "Dev"];

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
};

export default Classroom;
