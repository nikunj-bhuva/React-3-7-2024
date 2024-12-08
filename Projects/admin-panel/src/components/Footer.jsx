const Footer = () => {
  return (
    <footer
      className="mt-5"
      style={{
        background: "linear-gradient(50deg, #0d6efd, #6610f2)",
        color: "white",
      }}
    >
      <div className="container pt-4 pb-4">
        <div className="row row-cols-4">
          <div className="col">
            <h3 className="">ABOUT US</h3>
            <p>Our Story</p>
            <p>Why Buy From Us</p>
            <p>Gokul Jewels</p>
            <p>Corporate Gifting</p>
            <p>Our Blogs</p>
            <p>Press Room</p>
          </div>
          <div className="col">
            <h3>JEWELLERY GUIDE</h3>
            <p>Buying & Price Guide</p>
            <p>Diamond Guide</p>
            <p>Jewellery Care Guide</p>
            <p>Cerification Guide</p>
          </div>
          <div className="col">
            <h3>OUR POLICIES</h3>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Shipping/Return Policy</p>
            <p>Buyback & Exchange Policy</p>
          </div>
          <div className="col">
            <h3>GET IN TOUCH</h3>
            <p>
              <i className="fa-solid fa-phone me-2"></i>+91 8976825413
            </p>
            <p>
              <i class="fa-solid fa-envelope me-2"></i>shop@kisna.com
            </p>
            <p>
              <i class="fa-solid fa-phone me-2"></i>(09:00AM to 06:00PM Mon to
              Sat)
            </p>
            <p>Contact Us</p>
            <b>
              <i class="fa-brands fa-square-instagram me-3 fs-4"></i>
              <i class="fa-brands fa-facebook me-3 fs-4"></i>
              <i class="fa-brands fa-twitter me-3 fs-4"></i>
            </b>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
