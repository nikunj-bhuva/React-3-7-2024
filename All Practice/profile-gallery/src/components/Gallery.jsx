import GalleryImgUrl from "./GalleryImgUrl";

const Gallery = ({
  name,
  imgId,
  profession,
  award,
  awardNumber,
  discovered,
}) => {
  return (
    <div className="col-lg-6 border-5 border border-dark-subtle bg-primary-subtle p-4 rounded-5" style={{width:"47%"}}>
      <section className="profile fw-medium">
        <h2>{name}</h2>
        <img
          className="avatar  rounded-5 mt-3"
          src={GalleryImgUrl(imgId)}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul className="list-unstyled mt-3">
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awardNumber} </b>
            {award}
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
