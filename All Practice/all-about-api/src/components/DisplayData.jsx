import data from "../data.json";

const DisplayData = () => {
  // debugger
  console.log(data);
  return (
    <>
      <h1 className="text-center p-3 bg-dark text-white fw-bold mt-5 mb-5">
        :-Students Data:-
      </h1>
      <h2>
        {data.map((data) => (
          <div
            key={data.id}
            className="col border border-3 border-info px-4 py-4 text-center mb-3"
          >
            <h2>Student Name:-{data.name.toUpperCase()}</h2>
            <h2>Student Email:-{data.email}</h2>
            <h2>Student GRID:-{data.grid}</h2>
            <h2>
              Skills:-
              {data.skills.map((skill, id) => (
                <div
                  key={id}
                  className="d-flex flex-column border border-5 bg-info-subtle p-2 mt-3"
                >
                  <b>Language:-{skill.Language}</b> 
                </div>
              ))}
            </h2>
          </div>
        ))}
      </h2>
    </>
  );
};

export default DisplayData;
