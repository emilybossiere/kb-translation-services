import React from "react";
import kayImg from "../../media/kay.jpg";

export default class AboutJ extends React.Component {
  render() {
    return (
      <div>
        <h1>Who We Are</h1>
        <hr />
        <img src={kayImg} alt="KB" />
        <h4>ボシエール 香代子</h4>
        <p>
          １８年間ロサンゼルスにて、三人の子育てをするかたわら夫の経営する会社
          <a href="http://www.shiningprince.com/">
            Shining Prince Entertainment
          </a>
          で翻訳などに携わった後、近年本拠を日本に移す。アメリカで培った経験をもとにお客様にご満足いただけるサービスを心掛けています。Toeic
          スコア：875
        </p>

        <h4>ボシエール ジェフリー</h4>
        <p>
          北米の顧客を中心に映画、ITビジネス関連のコンサルタント会社
          <a href="http://www.shiningprince.com/">
            Shining Prince Entertainment
          </a>
          社長。日英仏語のトライリンガル。UCLA 経営学大学院卒
        </p>
      </div>
    );
  }
}
