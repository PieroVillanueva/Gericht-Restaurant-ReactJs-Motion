import { SubHeading } from "../../components";

import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />

        <h1 className="headtext__cormorant">Subscribe to our newsletter</h1>
        <p className="p__opensans">And never miss latest updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your Email Address" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
