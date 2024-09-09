const ProductCard = ({ imgSrc, title, description, price }) => {
  const imgUrl = `src/assets/${imgSrc}.webp`;
  console.log(imgUrl);
  return (
    <div
      className="bg-yellow-100 p-3 text-center rounded-5"
      style={{ width: "18rem" }}
    >
      <img
        src={imgUrl}
        className="card-img-top rounded-5 p-2"
        alt={imgUrl}
        style={{ height: "250px", objectFit: "contain" }}
      />
      <div className="card-body mt-4">
        <h5 className="text-1xl font-bold underline">{title}</h5>
        <p className="card-text text-sm">{description}</p>
        <button className="text-slate-950 bg-cyan-500 hover:bg-cyan-600 p-2 rounded border-teal-300 font-medium">
          {price}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
