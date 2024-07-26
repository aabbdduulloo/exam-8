import React from "react";
import Image from "next/image";
import Eyes from "@/public/icons/u_eye.svg";
import Home from "@/public/icons/u_home-alt.svg";
import Tranajor from "@/public/images/nimadir.png";
import Discount from "@/sections/main-sections/discount";

const Articles = () => {
  const articles = [
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      description:
        "Эллиптические тренажеры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
      date: "27.01.2022",
      views: 250,
      icon: Eyes,
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      description:
        "Эллиптические тренажеры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
      date: "27.01.2022",
      views: 250,
      icon: Eyes,
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      description:
        "Эллиптические тренажеры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
      date: "27.01.2022",
      views: 250,
      icon: Eyes,
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      description:
        "Эллиптические тренажеры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
      date: "27.01.2022",
      views: 250,
      icon: Eyes,
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      description:
        "Эллиптические тренажеры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
      date: "27.01.2022",
      views: 250,
      icon: Eyes,
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      description:
        "Эллиптические тренажеры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
      date: "27.01.2022",
      views: 250,
      icon: Eyes,
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 flex items-center">
        <Image src={Home} alt="Home" width={16} height={16} />
        <a href="/" className="text-sm text-gray-600 ml-1">
          Главная
        </a>{" "}
        &gt; <span className="text-sm text-gray-800">Полезные информации</span>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Полезные информации
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className=" cursor-pointer p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">
              <Image
                src={Tranajor}
                alt="Article Image"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <div className="flex justify-between text-gray-600 text-sm">
              <span>{article.date}</span>
              <div className="flex items-center">
                <Image src={article.icon} alt="Views" width={16} height={16} />
                <span className="ml-1">{article.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="cursor-pointer px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300">
          Показать ещё
        </button>
      </div>
      <div className="relative top-6">
        <Discount />
      </div>
    </div>
  );
};

export default Articles;
