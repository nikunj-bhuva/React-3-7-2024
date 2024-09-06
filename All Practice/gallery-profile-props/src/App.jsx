import Gallery from "./Components/Gallery";

const App = () => {
  return (
    <div className="container">
      <h1 className="col-sm-12 col-md-12 text-center bg-dark-subtle p-1 mt-5 mb-5 rounded-5">
        Notable Scientists
      </h1>
      <div className="d-flex justify-content-center column-gap-5">
        <div className="row">
          <Gallery
            name="Maria Skłodowska-Curie"
            profession="physicist and chemist"
            awardNumber="4"
            awardName="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
            discovered="polonium (chemical element)"
            imgSrc="szV5sdG"
          />
          <Gallery
            name="Katsuko Saruhashi"
            profession="geochemist"
            awardNumber="2"
            awardName="(Miyake Prize for geochemistry, Tanaka Prize)"
            discovered="a method for measuring carbon dioxide in seawater"
            imgSrc="YfeOqp2"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
