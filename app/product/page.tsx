"use client";

import React, { useState } from "react";
import Image from "next/image";
import Home from "@/public/icons/u_home-alt.svg";
import Slider from "@mui/material/Slider";
import { TextField, MenuItem, Button } from "@mui/material";
import Discount from "@/sections/main-sections/products";
import Forma from "@/public/images/forma.png";

const Products = () => {
  const initialProducts = [
    {
      title: "Буца Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
      originalPrice: null,
      badge: null,
      image: "/path/to/image1.png",
    },
    {
      title: "Буца Nike Mercurial Superfly 8 FG",
      price: "500 000 uzs",
      originalPrice: "750 000 uzs",
      badge: "Акция",
      image: "/path/to/image2.png",
    },
    {
      title: "Буца Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
      originalPrice: null,
      badge: null,
      image: "/path/to/image3.png",
    },
  ];

  const [visibleProducts, setVisibleProducts] = useState(6);

  const showMoreProducts = () => {
    setVisibleProducts(prevCount => prevCount + 3);
  };

  const [priceRange, setPriceRange] = useState([3000, 40000]);
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 flex items-center">
        <Image src={Home} alt="Home" width={16} height={16} />
        <a href="/" className="text-sm text-gray-600 ml-1">
          Главная
        </a>{" "}
        &gt; <span className="text-sm text-gray-800">Продукты</span>
      </div>
      <div className="flex">
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-lg relative bottom-6">
          <h2 className="text-xl font-bold mb-4">Фильтр</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Цена
            </label>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={3000}
              max={40000}
              step={1000}
              className="mt-2"
              color="warning"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>{priceRange[0]} uzs</span>
              <span>{priceRange[1]} uzs</span>
            </div>
          </div>
          <div className="mb-4">
            <TextField
              label="Артикул"
              variant="outlined"
              fullWidth
              size="small"
              className="mt-2"
            />
          </div>
          <div className="mb-4">
            <TextField
              select
              label="Выберите категорию"
              variant="outlined"
              fullWidth
              size="small"
              className="mt-2"
            >
              <MenuItem value="Все">Все</MenuItem>
            </TextField>
          </div>
          <div className="mb-4">
            <TextField
              select
              label="Новинка"
              variant="outlined"
              fullWidth
              size="small"
              className="mt-2"
            >
              <MenuItem value="Все">Все</MenuItem>
            </TextField>
          </div>
          <div className="mb-4">
            <TextField
              select
              label="Акция"
              variant="outlined"
              fullWidth
              size="small"
              className="mt-2"
            >
              <MenuItem value="Все">Все</MenuItem>
            </TextField>
          </div>
          <Button variant="contained" color="warning" fullWidth>
            Показать результат
          </Button>
        </div>

        <div className="w-3/4 ml-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialProducts.slice(0, visibleProducts).map((product, index) => (
              <div
                key={index}
                className="cursor-pointer p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 relative">
                  <Image
                    src={Forma}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                {product.originalPrice ? (
                  <div className="text-red-500">
                    <span className="line-through text-gray-500 mr-2">
                      {product.originalPrice}
                    </span>
                    {product.price}
                  </div>
                ) : (
                  <div>{product.price}</div>
                )}
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                  В корзину
                </button>
              </div>
            ))}
          </div>
          {visibleProducts < initialProducts.length && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={showMoreProducts}
                className="cursor-pointer px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                Показать ещё
              </button>
            </div>
          )}
        </div>
      </div>
      <Discount />
    </div>
  );
};

export default Products;
