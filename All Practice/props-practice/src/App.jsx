import Student from "./Components/Student";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center bg-success text-white rounded-5 p-2 mt-5 mb-5">
        Student Data
      </h1>
      <Student
        value="First Student"
        name="Nikunj"
        email="nb@gmail.com"
        password="1234"
      />
      <Student
        value="Second Student"
        name="Keyur"
        email="kc@gmail.com"
        password="5678"
      />
      <Student
        value="Third Student"
        name="Dip"
        email="dp@gmail.com"
        password="9101"
      />
      <Student
        value="Forth Student"
        name="Vishal"
        email="vs@gmail.com"
        password="1213"
      />
    </div>
  );
};

export default App;
