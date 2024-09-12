const TodoUsersCount = ({ addItems }) => {
  return (
    <div className="bg-dark text-white p-5 mb-5 text-center fs-3">
      Todo Users Count :- {addItems.length}
    </div>
  );
};

export default TodoUsersCount;
