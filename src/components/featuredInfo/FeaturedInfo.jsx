import React from "react";
import { data } from "../../configs/fakedata";
import "./featuredInfo.scss";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      {data.map((item, index) => (
        <div key={`item-${index}`} className="featured__item">
          <span className="featured__item__title">{item.title}</span>
          <div className="featured__item__container">
            <span className="featured__item__container__money">
              ${item.money}
            </span>
            <span className="featured__item__container__rate">
              {item.rate}
              {item.icon}
            </span>
          </div>
          <span className="featured__item__subTitle">{item.subTitle}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturedInfo;
