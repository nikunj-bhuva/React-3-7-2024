const NetFlixCard = () => {
  let userAge = +prompt("enter your Age:");

  // conditional rendering with if else statement //

  const canWatch = (age) => {
    if (age >= 18) return "Watch Now";
    else return "Not Avaliable";
  };

  return (
    <div
      className="card bg-dark-subtle text-center rounded-5"
      style={{ width: "16rem" }}
    >
      <img
        src="/public/movie1.avif"
        className="card-img-top rounded-5 p-3"
        alt="..."
        style={{ width: "250px", height: "300px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title mb-3">Movie Name:-Devara-Part 1</h5>
        <p className="card-text mb-3">
          <strong>Description</strong>: -
          {"The film`s backdrop is centered around the far and forgotten coastal lands of India.The people,or  rather the villains,in the film neither fear death nor god and there is no sense of humanity among them. Devara changes this scenario in his inimitable style.".slice(
            0,
            70
          )}
        </p>
        <p>
          <strong>Ratings:-8.2</strong>
        </p>
        <a href="#" className="btn btn-danger fw-bolder">
          {/* conditional rendering with ternary operator */}
          {/* {userAge >= 18 ? "Watch Now" : "Not Avaliable"} */}
          {/* conditional with if else statement */}
          {canWatch(userAge)}
        </a>
      </div>
    </div>
  );
};

export default NetFlixCard;
