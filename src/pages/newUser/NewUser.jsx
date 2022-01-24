import React from "react";
import "./newUser.scss";
const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUser__title">New User</h1>
      <form className="newUser__form">
        <div className="newUser__form__item">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUser__form__item">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUser__form__item">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUser__form__item">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUser__form__item">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUser__form__item">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUser__form__item">
          <label>Gender</label>
          <div className="newUser__form__item__gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUser__form__item">
          <label>Active</label>
          <select
            className="newUser__form__item__select"
            name="active"
            id="active"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUser__form__button">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
