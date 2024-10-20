const TodoAppTitle = ({ imgSrc }) => {
  return (
    <h1 className="flex justify-center items-center mx-8 text-4xl mb-16 mt-4 bg-zinc-500 text-white font-bold p-3 rounded-full">
      Todo App <img src={imgSrc} className="w-16 ms-4" />
    </h1>
  );
};

export default TodoAppTitle;
