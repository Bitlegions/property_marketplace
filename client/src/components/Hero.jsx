// import CountUp from "react-countup";
import Search from '../components/Search'
const Hero = () => {
  return (
    <section className="hero-wrapper">

      <div style={{ position: "relative", textAlign: "center" }}>
        <div style={{ position: "relative", display: "inline-block", width: "85%", marginBottom: "30px", paddingTop: '10px' }}>
          <img src="../../public/contact.jpg" style={{ width: "100%", borderRadius: '7px' }} alt="" />
          <div style={{ position: "absolute", top: "7%", right: "5%", width: "100%", maxWidth: "360px" }}>
            <nav className="navbar navbar-light bg-light" style={{ borderRadius: '7px' }}>
              <form className="form-inline">
                <Search />
              </form>
            </nav>
          </div>

          {/* <div style={{ position: "absolute", top: "80%", right: "60%", width: "100%", maxWidth: "360px", backgroundColor:'#ffffff' }}>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
                </span>
                <span className="secondaryText">Premium Product</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
                </span>
                <span className="secondaryText">Happy Customer</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} /> <span>+</span>
                </span>
                <span className="secondaryText">Awards Winning</span>
              </div>
            </div>
          </div> */}

        </div>
      </div>

    </section>
  );
};

export default Hero;
