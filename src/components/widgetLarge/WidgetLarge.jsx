import React from "react";
import "./widgetlarge.scss";
import { transactions } from "../../configs/fakedata";

const WidgetLarge = () => {
  return (
    <div className="widgetLarge">
      <h3 className="widgetLarge__title">Latest transactions</h3>
      <table className="widgetLarge__table">
        <thead>
          <tr className="widgetLarge__table__row">
            <th className="widgetLarge__table__row__head">Customer</th>
            <th className="widgetLarge__table__row__head">Date</th>
            <th className="widgetLarge__table__row__head">Amount</th>
            <th className="widgetLarge__table__row__head">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((user, index) => (
            <tr key={`user-${index}`} className="widgetLarge__table__row">
              <td className="widgetLarge__table__row__user">
                <img
                  src={user.userImg}
                  alt=""
                  className="widgetLarge__table__row__user__img"
                />
                <span className="widgetLarge__table__row__user__name">
                  {user.userName}
                </span>
              </td>
              <td className="widgetLarge__table__row__date">
                {user.transDate}
              </td>
              <td className="widgetLarge__table__row__amount">
                ${user.transAmount}
              </td>
              <td className="widgetLarge__table__row__status">
                <Button type={user.transType} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLarge;

const Button = ({ type }) => {
  return (
    <button className={`widgetLarge__table__row__status__button  ${type}`}>
      {type}
    </button>
  );
};
