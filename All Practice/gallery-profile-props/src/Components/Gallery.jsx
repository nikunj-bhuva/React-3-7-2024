import GetImageUrl from "./Galleryimageurl";

const Gallery = ({
  name,
  profession,
  awardNumber,
  awardName,
  discovered,
  imgSrc,
}) => {
  console.log(name, profession, awardNumber, awardName, discovered, imgSrc);
  return (
    <div className="col-md-12 col-lg-6">
      <section
        className="profile bg-light shadow-lg rounded-5 p-3 mt-5 mb-5"
        style={{ height: "372px" }}
      >
        <h2>{name}</h2>
        <img
          className="avatar  rounded-5 mb-3"
          src={GetImageUrl(imgSrc)}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awardNumber} </b>
            {awardName}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Gallery;
