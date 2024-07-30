"use client";
import Image from "next/image";
import React from "react";
import Gantel from "@/public/images/gantel.png";
import Gantel3 from "@/public/images/sport.png";
import Avatar from "@/public/images/Shahzod.svg";
import SimilarProduct from "@/sections/similar-products";
import { Carousel } from "antd";

const ProductDetail = () => {
  const product = {
    title: "Гантель виниловая, 2 x 3 кг",
    description:
      "В составе томатов в большом количестве содержатся сахар, клетчатка, пектины, бета-каротин, витамины.",
    price: "220 000 UZS",
    country: "Китай",
    images: [Gantel, Gantel, Gantel],
    specs: [
      { key: "Вес гантеля", value: "5кг" },
      { key: "Цвета", value: "Синий, Красный" },
    ],
    reviews: [
      {
        author: "Шахзод Анваров",
        role: "клиент",
        text: "В составе томатов в большом количестве содержатся сахар, клетчатка, пектины, бета-каротин, витамины.",
        rating: 4,
        avatar: Avatar,
      },
    ],
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 flex items-center">
        <a href="/" className="text-sm text-gray-600 hover:text-gray-800">
          Главная
        </a>
        <span className="mx-2 text-gray-600">/</span>
        <a
          href="/product"
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          Продукты
        </a>
        <span className="mx-2 text-gray-600">/</span>
        <span className="text-sm text-gray-800">{product.title}</span>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-2/3 p-4 bg-white rounded-lg shadow-lg">
          <Carousel
            autoplay
            arrows
            infinite
            autoplaySpeed={5000}
            className="w-full"
          >
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-[300px] lg:h-[488px] bg-[#fff] flex items-center justify-center overflow-hidden rounded-lg"
              >
                <Image
                  className="z-10 w-full h-full object-cover"
                  src={image}
                  alt="carousel item"
                />
              </div>
            ))}
          </Carousel>
          <div className="flex mt-4 justify-center space-x-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer border border-gray-300 hover:border-yellow-500 transition-colors duration-300 p-1"
              >
                <Image
                  src={image}
                  alt={product.title}
                  width={88}
                  height={69}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/3 lg:ml-8 mt-8 lg:mt-0">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="mb-4">{product.description}</p>
          <p className="font-semibold mt-2">В комплекте: 2 шт.</p>
          <p className="font-semibold mt-2">
            Страна производства: {product.country}
          </p>
          <p className="font-semibold mt-2 text-yellow-500">
            {product.price} / 1 шт.
          </p>
          <button className="mt-4 w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300">
            В корзину
          </button>
          <button className="mt-2 w-full px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300">
            Сравнить
          </button>
          <button className="mt-2 w-full px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300">
            Поделиться
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Описание</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="mb-4">{product.description}</p>
          {product.specs.map((spec, index) => (
            <p key={index} className="flex justify-between mb-2">
              <span className="font-semibold">{spec.key}:</span>
              <span>{spec.value}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Отзывы</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <div className="flex items-center mb-4">
              <Image
                src={review.avatar}
                alt={review.author}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
            <p className="mb-4">{review.text}</p>
            <div className="text-yellow-500">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
        <a href="#" className="text-yellow-500 font-semibold">
          Все отзывы →
        </a>
      </div>
      <SimilarProduct />
    </div>
  );
};

export default ProductDetail;
