const StudentData = () => {
  const students = [];
  console.log(students.length);
  console.log(Boolean(students.length));

  return (
    <>
      {/* 1st technique */}
      {/* <h3>{students.length === 0 && "No Students Found"}</h3> */}
      {/* 2nd technique */}
      {/* <h3>{!students.length && "No Students Found"}</h3> */}
      {/* 3rd technique */}
      <h3>{!Boolean(students.length) && "No Students Found"}</h3>
      <p>Students Data:-{students.length === 0 ? "0" : students.length}</p>
    </>
  );
};

export default StudentData;
