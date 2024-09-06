const GradeSystem = ({ Mark, Grade, icon }) => {
  return (
    <>
      <h1 className="text-center mt-5 p-2 mb-5 bg-info-subtle rounded-5">
        Grade System
      </h1>
      <h3 className="text-center mt-4 mb-4 bg-success rounded-5 p-3 text-light">
        Your Mark Is {Mark}. Your Grade Is {Grade} {icon}.
      </h3>
    </>
  );
};

export default GradeSystem;
