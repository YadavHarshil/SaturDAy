import imageFile from "./assets/images/aerobic-girls.jpg";
const IntroText = () => {
  return (
    <div>
      <div className="top-header">
        <img src={imageFile} alt="aerobic girls" />
      </div>
      <div className="section-heading">
        <h2>Introducing Blugoon</h2>
        <div className="line-dec"></div>
        <span>
          Blugoon is free HTML template for everyone. This is a Bootstrap v4.3.1
          layout which you can fully customize for your websites. Please tell
          your friends about Tooplate. Thank you.
        </span>
      </div>
    </div>
  );
};

export default IntroText;
