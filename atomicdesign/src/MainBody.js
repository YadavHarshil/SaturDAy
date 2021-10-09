import Navbar from "./Navbar.js";
import IntroText from "./IntroText.js";
import RightImagetext from "./RightImagetext.js";
import LeftImageText from "./LeftImageText.js";
const MainBody = () => {
  let imageName = require("./assets/images/aerobic-girls.jpg");
  return (
    <div>
      <Navbar />
      <section className="section about-me" data-section="section1">
        <div className="container">
          <IntroText />
          <RightImagetext />
          <LeftImageText />
        </div>
      </section>
    </div>
  );
};

export default MainBody;
