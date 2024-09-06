import Productcard from "./Components/Productcard";
import Student from "./Components/Student";

function App() {
  return (
    <>
      <h1 className="text-center bg-dark-subtle">
        Introduction Of Props In React.
      </h1>
      <h1 className="text-center mt-5 bg-info-subtle">
        -- Student Details :--
      </h1>
      <Student
        student="First Student"
        name="Nikunj"
        email="nb@gmail.com"
        password="123"
      />
      <Student
        student="Second Student"
        name="Keyur"
        email="kc@gmail.com"
        password="456"
      />
      <Student
        student="Third Student"
        name="Rahul"
        email="rh@gmail.com"
        password="789"
      />
      <Student
        student="Fourth Student"
        name="Dip"
        email="dd@gmail.com"
        password="101112"
      />
      <h1 className="text-center mt-5 mb-5 bg-dark-subtle">-: Products :-</h1>
      <div className="container">
        <div className="d-flex gap-5">
          <Productcard
            imgSrc="men1"
            title="Men's New T-shirt"
            description="This is our new collection tshirts."
            price="599"
          ></Productcard>
          <Productcard
            imgSrc="men2"
            title="Men's Mickey Mouse T-shirt"
            description="this is our new stock tshirts for mens."
            price="349"
          ></Productcard>
          <Productcard
            imgSrc="men3"
            title="Men's Tom & Jerry T-shirt"
            description="this is our browm split grafic printed tshits."
            price="895"
          ></Productcard>
          <Productcard
            imgSrc="men4"
            title="Men's Black Minions T-shirt"
            description="Men's Black Minions Me Want Banana Graphic Printed Oversized T-shirt"
            price="1000"
          ></Productcard>
        </div>
      </div>
    </>
  );
}

export default App;
