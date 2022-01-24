import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";
import Chart from "../../components/chart/Chart";
import { productData } from "../../configs/fakedata";
import { Publish } from "@mui/icons-material";
const Product = () => {
  return (
    <div className="product">
      <div className="product__titleContainer">
        <h1 className="product__titleContainer__title">Product</h1>
        <Link to="/newproduct">
          <button className="product__titleContainer__button">Create</button>
        </Link>
      </div>
      <div className="product__productTop">
        <div className="product__productTop__left">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="product__productTop__right">
          <div className="product__productTop__right__top">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="product__productTop__right__top__img"
            />
            <span className="product__productTop__right__top__name">
              Apple Airpods
            </span>
          </div>
          <div className="product__productTop__right__info">
            <div className="product__productTop__right__info__item">
              <span className="product__productTop__right__info__item__key">
                id:
              </span>
              <span className="product__productTop__right__info__item__value">
                123
              </span>
            </div>
            <div className="product__productTop__right__info__item">
              <span className="product__productTop__right__info__item__key">
                sales:
              </span>
              <span className="product__productTop__right__info__item__value">
                5123
              </span>
            </div>
            <div className="product__productTop__right__info__item">
              <span className="product__productTop__right__info__item__key">
                active:
              </span>
              <span className="product__productTop__right__info__item__value">
                yes
              </span>
            </div>
            <div className="product__productTop__right__info__item">
              <span className="product__productTop__right__info__item__key">
                in stock:
              </span>
              <span className="product__productTop__right__info__item__value">
                no
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__productBottom">
        <form className="product__productBottom__form">
          <div className="product__productBottom__form__left">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label style={{ marginTop: "10px" }}>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product__productBottom__form__right">
            <div className="product__productBottom__form__right__productUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="product__productBottom__form__right__productUpload__img"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product__productBottom__form__right__update">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
