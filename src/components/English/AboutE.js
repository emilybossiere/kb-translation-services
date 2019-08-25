import React from "react";
import kayImg from "../../media/kay.jpg";

export default class AboutE extends React.Component {
  render() {
    return (
      <div>
        <h2>Who We Are</h2>
        <hr />
        <div className="about">
          <img src={kayImg} alt="Kayoko Bossiere" />
          
            <h4>Kayoko Bossiere</h4>
            <p>
              After working for translation at{" "}
              <a href="http://www.shiningprince.com/" target="a">
                Shining Prince Entertainment
              </a>
              , a company run by three husbands in Los Angeles for 18 years,
              recently moved to Japan. Based on the experience we have
              cultivated in the United States, we are committed to providing
              services that will satisfy our customers. Toeic Score: 875
            </p>

            <h4>Geoffrey Bossiere</h4>
            <p>
              President of{" "}
              <a href="http://www.shiningprince.com/" target="a">
                Shining Prince Entertainment
              </a>
              , a consulting company related to movies and IT business, mainly
              for customers in North America . Japanese-English French
              trilingual. Graduated from UCLA Graduate School of Business
              Administration
            </p>
          
        </div>
      </div>
    );
  }
}
