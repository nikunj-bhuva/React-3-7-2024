const EventPropagation = () => {
  const handleGrandParentDiv = () =>
    console.log("you are click on grand parent div successfully!");

  const handleParentDiv = (e) => {
    console.log("you are click on parent div successfully!");
    e.stopPropagation();
  };

  const handleChildDiv = (e) => {
    console.log("you are click on a child div successfully!");
    e.stopPropagation();
  };

  return (
    <section className="main-div">
      <div className="g-div" onClickCapture={handleGrandParentDiv}>
        <div className="p-div" onClickCapture={handleParentDiv}>
          <div className="c-div" onClickCapture={handleChildDiv}>
            <p>child Div</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPropagation;
