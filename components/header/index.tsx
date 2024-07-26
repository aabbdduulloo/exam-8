"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "@/components/container";
import LogoIcon from "@/public/icons/main-logo.svg";
import PhoneIcon from "@/public/icons/u_phone-alt.svg";
import MailIcon from "@/public/icons/fi_mail.svg";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <nav className="h-[79px] flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-x-5">
          <div
            onClick={handleClick}
            className="flex items-center leading-7 gap-[11px] cursor-pointer"
          >
            <Image src={LogoIcon} alt="logo" />
            <span className="w-[100px] font-semibold text-[24px] text-[#fff] hover:text-[#FFD700] transition duration-300">
              Sport Market
            </span>
          </div>
          <div className="hidden md:flex gap-[30px]">
            <p className="text-[#fff] cursor-pointer hover:text-[#FFD700] transition duration-300">
              Продукты
            </p>
            <p className="text-[#fff] cursor-pointer hover:text-[#FFD700] transition duration-300">
              Контакты
            </p>
            <p className="text-[#fff] cursor-pointer hover:text-[#FFD700] transition duration-300">
              Оплата и Доставка
            </p>
            <p className="text-[#fff] cursor-pointer hover:text-[#FFD700] transition duration-300">
              Новости
            </p>
            <p className="text-[#fff] cursor-pointer hover:text-[#FFD700] transition duration-300">
              О нас
            </p>
          </div>
        </div>
        <div className="hidden md:flex gap-[30px]">
          <div className="flex items-center gap-[5px]">
            <Image src={PhoneIcon} alt="phone icon" />
            <a
              href="tel:+998932413161"
              className="text-[#fff] hover:text-[#FFD700] transition duration-300"
            >
              +998 (93) 241-31-61
            </a>
          </div>
          <div className="flex items-center gap-[5px]">
            <Image src={MailIcon} alt="mail icon" />
            <a
              href="mailto:uabdullo55@gmail.com"
              className="text-[#fff] hover:text-[#FFD700] transition duration-300"
            >
              uabdullo55@gmail.com
            </a>
          </div>
        </div>
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <div
            className={`relative flex flex-col items-center justify-between w-6 h-6 cursor-pointer transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-[#000] text-[#fff] p-4">
          <div className="flex flex-col gap-[15px]">
            <p className="cursor-pointer hover:text-[#FFD700] transition duration-300">
              Продукты
            </p>
            <p className="cursor-pointer hover:text-[#FFD700] transition duration-300">
              Контакты
            </p>
            <p className="cursor-pointer hover:text-[#FFD700] transition duration-300">
              Оплата и Доставка
            </p>
            <p className="cursor-pointer hover:text-[#FFD700] transition duration-300">
              Новости
            </p>
            <p className="cursor-pointer hover:text-[#FFD700] transition duration-300">
              О нас
            </p>
            <div className="flex flex-col gap-[15px] mt-4">
              <div className="flex items-center gap-[5px]">
                <Image src={PhoneIcon} alt="phone icon" />
                <a
                  href="tel:+998932413161"
                  className="text-[#fff] hover:text-[#FFD700] transition duration-300"
                >
                  +998 (93) 241-31-61
                </a>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image src={MailIcon} alt="mail icon" />
                <a
                  href="mailto:uabdullo55@gmail.com"
                  className="text-[#fff] hover:text-[#FFD700] transition duration-300"
                >
                  uabdullo55@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Index;
