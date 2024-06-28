import "bootstrap/dist/css/bootstrap.min.css";
import Analytics from "../components/Analytics.jsx";
import css from "./Home.module.css";
import img1 from "../images/home.png";
import img2 from "../images/design.png";

const Home = () => {
  return (
    <>
      <main>
        <section className={`section-hero ${css.toshit6}`}>
          <div
            className={`container grid grid-two-cols ${css.toshit1} ${css.toshit2} ${css.toshit3}`}
          >
            <div className={`hero-content ${css.toshit7}`}>
              <p style={{ color: "white", fontSize: "large" }}>
                We are the World Best IT Company
              </p>
              <h1 style={{ color: "white", fontSize: "xx-large" }}>
                Welcome to Pant Industries Pvt. Lmt.
              </h1>
              <p style={{ color: "white", fontSize: "x-large" }}>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Pant Industries ,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className={`btn btn-group`}>
                <a href="/Contact">
                  <button
                    style={{ background: "white" }}
                    className={`btn  ${css.toshit4}`}
                  >
                    connect now
                  </button>
                </a>
                <a href="/Service">
                  <button
                    style={{ background: "white" }}
                    className={`btn secondary-btn  ${css.toshit4} ${css.toshit5}`}
                  >
                    learn more
                  </button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className={`hero-image ${css.toshit8}`}>
              <img src={img1} alt="coding together" width="400" height="500" />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className={`section-hero ${css.toshit6}`}>
        <div
          className={`container grid grid-two-cols ${css.toshit1} ${css.toshit2} ${css.toshit3}`}
        >
          {/* hero images */}
          <div className={`hero-image ${css.toshit8}`}>
            <img src={img2} alt="coding together" width="400" height="500" />
          </div>

          <div className={`hero-content ${css.toshit7}`}>
            <p style={{ color: "white", fontSize: "large" }}>
              We are here to help you
            </p>
            <h1 style={{ color: "white", fontSize: "xx-large" }}>
              Get Started Today
            </h1>
            <p style={{ color: "white", fontSize: "x-large" }}>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Pant Industries can help your business thrive in
              the digital age.
            </p>
            <div className={`btn btn-group`}>
              <a href="/Contact">
                <button
                  style={{ background: "white" }}
                  className={`btn  ${css.toshit4}`}
                >
                  connect now
                </button>
              </a>
              <a href="/Service">
                <button
                  style={{ background: "white" }}
                  className={`btn secondary-btn  ${css.toshit4} ${css.toshit5}`}
                >
                  learn more
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
