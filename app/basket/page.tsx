"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Click from "@/public/images/click.png";
import Payme from "@/public/images/payme.png";
import DeleteIcon from "@mui/icons-material/Delete";
import CartItemImg1 from "@/public/images/gantels.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "Гантель виниловая, 2 x 3 кг",
      category: "Гантель",
      quantity: 1,
      price: 300000,
    },
    {
      name: "Гантель виниловая, 2 x 3 кг",
      category: "Гантель",
      quantity: 1,
      price: 220000,
    },
    {
      name: "Гантель виниловая, 2 x 3 кг",
      category: "Гантель",
      quantity: 1,
      price: 1500000,
    },
    {
      name: "Гантель виниловая, 2 x 3 кг",
      category: "Гантель",
      quantity: 1,
      price: 30000,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const handleQuantityChange = (index, delta) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += delta;
    if (newCartItems[index].quantity < 1) newCartItems[index].quantity = 1;
    setCartItems(newCartItems);
  };

  const handleRemoveItem = index => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div className="cart-page">
      <div className="cart">
        <h1 className="cart-title">Ваша корзина</h1>
        <button className="cart-clear" onClick={() => setCartItems([])}>
          Очистить все
        </button>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <Image src={CartItemImg1} alt="Гантель" />
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <span>{item.category}</span>
              </div>
              <div className="cart-item-quantity">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(index, -1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(index, 1)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-price">{item.price} UZS</div>
              <button
                className="cart-item-remove"
                onClick={() => handleRemoveItem(index)}
              >
                <DeleteIcon />
              </button>
            </div>
          ))}
        </div>
        <a href="#" className="cart-info-link">
          Все информация о доставке
        </a>
        <p>
          Если у вас имеется вопросы позаоните по номеру:{" "}
          <a href="tel:+998999955565">+998 (93) 241 31 61</a>
        </p>
      </div>
      <div className="order-summary">
        <h2>Итого</h2>
        <div className="order-summary-details">
          <span>Кол-во товаров: {cartItems.length}</span>
          <span>Сумма: {totalPrice} UZS</span>
        </div>
        <div className="order-summary-form">
          <label>
            Имя /Фамилия
            <input type="text" placeholder="Имя/Фамилия" required />
          </label>
          <label>
            Ваш номер
            <input type="tel" placeholder="+998 __ ___ __ __" required />
          </label>
          <label>
            Адрес доставки
            <input type="text" placeholder="Область/город/улица/дом" required />
          </label>
          <button className="location-button">
            <LocationOnIcon />
          </button>
        </div>
        <div className="order-summary-payment">
          <h3 className="text-xl">Тип оплаты</h3>
          <div className="payment-methods">
            <div className="payment-method">
              <Image src={Click} alt="Click" width={100} height={50} />
            </div>
            <div className="payment-method">
              <Image src={Payme} alt="Payme" width={100} height={50} />
            </div>
            <button className="payment-button">Через карту</button>
            <button className="payment-button">Банковский счёт</button>
          </div>
        </div>
        <button className="order-summary-buy">Купить</button>
      </div>
      <style jsx>{`
        .cart-page {
          display: flex;
          flex-direction: column;
          padding: 20px;
        }
        .cart {
          flex: 3;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .cart-title {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .cart-clear {
          color: red;
          background: none;
          border: none;
          cursor: pointer;
        }
        .cart-items {
          margin-bottom: 20px;
        }
        .cart-item {
          display: flex;
          align-items: center;
          background-color: #fff;
          border-radius: 8px;
          padding: 10px;
          margin-bottom: 10px;
        }
        .cart-item-info {
          flex: 2;
          padding: 0 10px;
        }
        .cart-item-quantity {
          display: flex;
          align-items: center;
        }
        .quantity-button {
          background-color: #ddd;
          border: 1px solid #ccc;
          border-radius: 16px;
          cursor: pointer;
          font-size: 16px;
          padding: 3px 10px;
          margin: 0 10px;
          width: 32px;
          height: 32px;
          flex-shrink: 0;
        }
        .quantity-button:hover {
          background-color: #ccc;
        }
        .cart-item-price {
          flex: 1;
          text-align: right;
        }
        .cart-item-remove {
          background: none;
          border: none;
          cursor: pointer;
          color: red;
          font-size: 20px;
        }
        .cart-info-link {
          display: block;
          margin: 20px 0;
        }
        .order-summary {
          flex: 1;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
        }
        .order-summary-details {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .order-summary-form label {
          display: block;
          margin-bottom: 10px;
        }
        .order-summary-form input {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }
        .location-button {
          display: block;
          margin: 10px auto;
          background-color: #fbd029;
          border: none;
          border-radius: 8px;
          padding: 10px;
          cursor: pointer;
        }
        .order-summary-payment {
          margin: 20px 0;
        }
        .payment-methods {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .payment-method {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          background-color: #fff;
          border-radius: 8px;
          border: 1px solid #ccc;
          cursor: pointer;
        }
        .payment-button {
          display: block;
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          cursor: pointer;
        }
        .order-summary-buy {
          display: block;
          width: 100%;
          padding: 15px;
          background-color: #fbd029;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
        }

        @media (min-width: 768px) {
          .cart-page {
            flex-direction: row;
            justify-content: space-between;
          }
          .cart {
            margin-right: 20px;
            margin-bottom: 0;
          }
          .order-summary {
            margin-left: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default CartPage;
