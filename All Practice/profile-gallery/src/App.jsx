import Gallery from "./components/Gallery";
const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5 bg-success-subtle p-2 rounded-5">
        Notable Scientists
      </h1>
      <div className="row gap-5">
        <Gallery
          profileId={
            <div className="mb-2">
              <strong>ProfileId : 1</strong>
            </div>
          }
          name="Maria Skłodowska-Curie"
          imgId="szV5sdG"
          profession="physicist and chemist"
          award="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
          awardNumber={4}
          discovered="polonium (chemical element)"
        >
          <p className="fw-medium">Thank You</p>
          <button className="btn btn-dark">More Details</button>
        </Gallery>
        <Gallery
          profileId={
            <div className="mb-2">
              <strong>ProfileId : 2</strong>
            </div>
          }
          name="Katsuko Saruhashi"
          imgId="YfeOqp2"
          profession="geochemist"
          award="(Miyake Prize for geochemistry, Tanaka Prize)"
          awardNumber={2}
          discovered="a method for measuring carbon dioxide in seawater"
        >
          <p className="fw-medium">Thank You</p>
          <button className="btn btn-dark">More Details</button>
        </Gallery>
      </div>
    </div>
  );
};

export default App;
