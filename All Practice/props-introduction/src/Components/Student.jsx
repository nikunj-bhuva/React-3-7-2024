const Student = (props) => {
  const { student, name, email, password } = props;
  const commonClassNames = "text-center fs-4 mt-5 bg-info-subtle";
  return (
    <>
      <p className="text-center bg-success text-white fs-3 mt-5">{student}</p>
      <p className={commonClassNames}>Student Name: {name}</p>
      <p className={commonClassNames}>Student Email: {email}</p>
      <p className={commonClassNames}>Student Password: {password}</p>
    </>
  );
};

export default Student;