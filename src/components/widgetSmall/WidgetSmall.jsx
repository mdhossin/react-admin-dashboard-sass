import { Visibility } from "@mui/icons-material";
import React from "react";
import { newMember } from "../../configs/fakedata";
import "./widgetsmall.scss";

const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
      <span className="widgetSmall__title">New Join Members</span>
      <ul className="widgetSmall__list">
        {newMember.map((user, index) => (
          <li key={`user-${index}`} className="widgetSmall__list__item">
            <img
              src={user.img}
              alt="User"
              className="widgetSmall__list__item__img"
            />
            <div className="widgetSmall__list__item__user">
              <span className="widgetSmall__list__item__user__name">
                {user.userName}
              </span>
              <span className="widgetSmall__list__item__user__title">
                {user.userTitle}
              </span>
            </div>
            <button className="widgetSmall__list__item__button">
              <Visibility className="widgetSmall__list__item__button__icon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
