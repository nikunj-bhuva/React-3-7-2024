const Student = ({ value, name, email, password }) => {
  return (
    <>
      <h1 className="text-center mb-5 mt-5 bg-dark-subtle rounded-5">
        :- {value} :-
      </h1>
      <h3 className="text-center bg-info-subtle p-2 rounded-5 mb-3">
        Name: {name}
      </h3>
      <h3 className="text-center bg-info-subtle p-2 rounded-5 mb-3">
        Email: {email}
      </h3>
      <h3 className="text-center bg-info-subtle p-2 rounded-5 mb-3">
        Password: {password}
      </h3>
    </>
  );
};

export default Student;
