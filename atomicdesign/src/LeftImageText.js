import girlImage from "./assets/images/girl-nature.jpg";
const LeftImageText = () => {
  return (
    <div className="left-image-post">
      <div className="row">
        <div className="col-md-4">
          <div className="left-image">
            <img src={girlImage} alt="Nature Girl" />
          </div>
        </div>

        <div className="col-md-8">
          <div className="right-text">
            <h4>Best Template for you!</h4>
            <p>
              Quisque feugiat nisl at lacus condimentum, eu suscipit odio
              fringilla. Mauris eu est vitae erat condimentum pellentesque.
              Fusce vehicula nunc at augue sagittis tristique.
            </p>
            <p>
              Ut imperdiet massa at enim tempus volutpat. Nullam gravida augue
              quis facilisis commodo. Interdum et malesuada fames ac ante ipsum
              primis in faucibus.
            </p>
            <div className="white-button">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImageText;
