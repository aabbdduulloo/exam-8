"use client";
import Image from "next/image";
import Container from "@/components/container";
import Boots from "@/public/images/Butsi_3.jpg";
import Boots2 from "@/public/images/Butsi_2.jpg";
import Boots3 from "@/public/images/butsi_1.webp";
import Dumbbell from "@/public/images/gantels.png";
import Bag from "@/public/images/bag.png";
import { Carousel } from "antd";
import "./style.css";

const Index = () => {
  return (
    <section className="bg-[#F2F2F2] pt-5 pb-[83px]">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full lg:w-[60%] lg:pr-4 mb-8 lg:mb-0">
            <Carousel
              autoplay
              arrows
              infinite
              autoplaySpeed={5000}
              className="w-full"
            >
              {[Boots, Boots2, Boots3].map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-[300px] lg:h-[488px] bg-[#fff] flex items-center justify-center overflow-hidden rounded-lg"
                >
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Image
                      className="z-10"
                      src={image}
                      alt="carousel item"
                      layout="intrinsic"
                    />
                  </div>
                  <div className="absolute w-[380px] h-[380px] bg-[#FF563D] top-[10%] right-[10%] rounded-full" />
                  <div className="absolute w-[445px] h-[821px] bg-[#BDD400] rotate-[25deg] top-[-10%] right-[-10%] rounded-lg" />
                  <div className="absolute top-[10%] left-[10%] z-20 text-center"></div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="w-full lg:w-[35%] flex flex-col gap-4 lg:gap-6">
            {[Dumbbell, Bag].map((image, index) => (
              <div
                key={index}
                className="relative w-full h-[237px] bg-[#fff] rounded-lg overflow-hidden"
              >
                <div className="p-[35px]">
                  <h3 className="font-medium text-[18px] mb-3">
                    Adidas champions league 2021 Final
                  </h3>
                  <div className="flex gap-1 items-end mt-[-8px]">
                    <p className="font-bold text-[20px] pt-2">
                      {index === 0 ? "160 000" : "485 000"}
                    </p>
                    <p className="font-extrabold text-[12px] text-[#FF1313] pb-1">
                      UZS
                    </p>
                  </div>
                </div>
                <Image
                  className="absolute top-[18px] right-[30px] z-10"
                  src={image}
                  alt="product"
                />
                <div className="absolute w-[165px] h-[165px] bg-[#FBD029] top-[28px] right-[15px] rounded-full" />
                <div
                  className={`absolute w-[434px] h-[58px] flex items-center justify-center text-[20px] font-bold text-[#fff] rotate-[-35deg] right-[-165px] bottom-[10px] z-20 ${
                    index === 0 ? "bg-[#FF1313]" : "bg-[#917BFF]"
                  }`}
                >
                  {index === 0 ? "Акция" : "Новый"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index;
