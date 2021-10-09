import mountainImage from "./assets/images/mountain-reflection.jpg";
const RightImagetext = () => {
  return (
    <div className="right-image-post">
      <div className="row">
        <div className="col-md-8">
          <div className="left-text">
            <h4>Modern Web Design</h4>
            <p>
              You are allowed to use this template for commercial or personal
              websites. You are NOT allowed to redistribute this on template
              collection website. You can feature this template on your blog
              post.
            </p>
            <p>
              All photos in this template are from{" "}
              <a rel="nofollow" href="https://www.pexels.com">
                Pexels
              </a>{" "}
              website. Blugoon HTML Template is provided by Tooplate. className
              aptent taciti sociosqu ad litora torquent per conubia nostra.
            </p>
            <div className="white-button">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="right-image">
            <img src={mountainImage} alt="Mountain Reflection" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImagetext;
