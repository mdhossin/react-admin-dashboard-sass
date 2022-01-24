import React from "react";
import "./user.scss";
import { Link } from "react-router-dom";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Button } from "@mui/material";

const User = () => {
  // const { userId } = useParams();

  return (
    <div className="user">
      <div className="user__titleContainer">
        <h1 className="user__titleContainer__editUser">Edit User</h1>
        <Link to="/newUser">
          <button className="user__titleContainer__createUser">
            Create User
          </button>
        </Link>
      </div>

      <div className="user__userContainer">
        <div className="user__userContainer__profile">
          <div className="user__userContainer__profile__top">
            <img
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80"
              alt=""
              className="user__userContainer__profile__top__img"
            />
            <div className="user__userContainer__profile__top__fullTitle">
              <span className="user__userContainer__profile__top__fullTitle__name">
                Jhon Doe
              </span>
              <span className="user__userContainer__profile__top__fullTitle__title">
                Software Engineer
              </span>
            </div>
          </div>
          <div className="user__userContainer__profile__accountDetail">
            <span className="user__userContainer__profile__accountDetail__title">
              Account Details
            </span>
            <div className="user__userContainer__profile__accountDetail__info">
              <PermIdentity className="user__userContainer__profile__accountDetail__info-icon" />
              <span className="user__userContainer__profile__accountDetail__info-title">
                Johon Doe
              </span>
            </div>
            <div className="user__userContainer__profile__accountDetail__info">
              <CalendarToday className="user__userContainer__profile__accountDetail__info-icon" />
              <span className="user__userContainer__profile__accountDetail__info-title">
                10.12.2020
              </span>
            </div>
            <span className="user__userContainer__profile__accountDetail__title">
              Contact Details
            </span>
            <div className="user__userContainer__profile__accountDetail__info">
              <PhoneAndroid className="user__userContainer__profile__accountDetail__info-icon" />
              <span className="user__userContainer__profile__accountDetail__info-title">
                +8801836855666
              </span>
            </div>
            <div className="user__userContainer__profile__accountDetail__info">
              <MailOutline className="user__userContainer__profile__accountDetail__info-icon" />
              <span className="user__userContainer__profile__accountDetail__info-title">
                example99@gmail.com
              </span>
            </div>
            <div className="user__userContainer__profile__accountDetail__info">
              <LocationSearching className="user__userContainer__profile__accountDetail__info-icon" />
              <span className="user__userContainer__profile__accountDetail__info-title">
                New York | USA
              </span>
            </div>
          </div>
        </div>
        <div className="user__userContainer__updateUser">
          <span className="user__userContainer__updateUser__title">Edit</span>

          <form className="user__userContainer__updateUser__form">
            <div className="user__userContainer__updateUser__form__left">
              <div className="user__userContainer__updateUser__form__left__item">
                <label>Username</label>

                <input
                  type="text"
                  placeholder="username"
                  className="user__userContainer__updateUser__form__left__item__input"
                />
              </div>
              <div className="user__userContainer__updateUser__form__left__item">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="fullname"
                  className="user__userContainer__updateUser__form__left__item__input"
                />
              </div>
              <div className="user__userContainer__updateUser__form__left__item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="user__userContainer__updateUser__form__left__item__input"
                />
              </div>
              <div className="user__userContainer__updateUser__form__left__item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="phone number"
                  className="user__userContainer__updateUser__form__left__item__input"
                />
              </div>
              <div className="user__userContainer__updateUser__form__left__item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="address"
                  className="user__userContainer__updateUser__form__left__item__input"
                />
              </div>
            </div>
            <div className="user__userContainer__updateUser__form__right">
              <div className="user__userContainer__updateUser__form__right__fileUpload">
                <img
                  className="user__userContainer__updateUser__form__right__fileUpload__img"
                  src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80"
                  alt=""
                />
                <label htmlFor="file">
                  <span className="user__userContainer__updateUser__form__right__fileUpload__file">
                    <Publish sx={{ mr: 1 }} /> Upload
                  </span>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <Button variant="contained">Update</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
