import React from "react";
import Group from "@/public/images/Group 48097045.png";
import Image from "next/image";

const Advantages = () => {
  return (
    <div className="container mx-auto p-8 w-full lg:w-[75%] h-auto lg:h-[417px] px-[20px] lg:px-[35px] py-[25px] lg:py-[38px] bg-[#1F1D14] text-white rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">О нас</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 pl-12">
        <div className="flex flex-col items-center text-center">
          <p className="font-medium text-center mb-9">
            Интернет магазин спортивных товаров 7MARKETSPORT.UZ предлагает
            широкий <br /> ассортимент продукции с доставкой по Ташкенту,
            области и другим регионам Узбекистана.
            <br /> Ведется работа как <br /> с розничными покупателями, так и с
            оптовыми клиентами.
          </p>
          <p className="text-lg mb-7">
            Разнообразие форм оплаты заметно упрощает процесс приобретения
            товара. <br /> Действует гибкая система скидок.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={Group}
            alt="Group Image"
            layout="intrinsic"
            className="relative bottom-10 left-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
