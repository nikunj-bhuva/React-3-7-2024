const TodoAppTitle = ({ imgSrc }) => {
  return (
    <h1 className="flex justify-center items-center mx-8 text-4xl mb-16 mt-4 text-white font-extrabold p-6 rounded-lg bg-gradient-to-r from-[#7cb9e8] to-[#dbe2f1] border-2 border-[#4b87c1] shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
      Todo App <img src={imgSrc} className="w-16 ms-4" />
    </h1>
  );
};

export default TodoAppTitle;