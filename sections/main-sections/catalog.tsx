"use client"; // Add this at the top of the file

import React from "react";
import Container from "@/components/container";
import Card from "@/components/card-ui/catalog-card";
import TranajorImage from "@/public/images/tranajor.png";
import Balls from "@/public/images/balls.png";
import LittleBoot from "@/public/images/little-boot.png";
import Jacket from "@/public/images/jacket.png";
import HeadClothes from "@/public/images/headclothes.png";
import Skying from "@/public/images/skying.png";
import { useRouter } from "next/navigation"; // Correct import

const Index = () => {
  const router = useRouter();

  const productSingle = () => {
    router.push("/product");
  };
  const productSingle2 = () => {
    router.push("/balls");
  };
  const productSingle3 = () => {
    router.push("/sporty-shoes");
  };
  const productSingle4 = () => {
    router.push("/sportswear");
  };
  const productSingle5 = () => {
    router.push("/water-sports");
  };
  const productSingle6 = () => {
    router.push("/mountain-sports");
  };

  return (
    <section className="py-4">
      <Container>
        <p className="text-[32px] font-medium mb-[30px] text-center">Каталог</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div onClick={productSingle}>
            <Card title={"Тренажеры"} image={TranajorImage} bg="#D3E5F2" />
          </div>
          <div onClick={productSingle2}>
            <Card title={"Мячи"} image={Balls} bg="#E2C6BE" />
          </div>
          <div onClick={productSingle3}>
            <Card title={"Спротивные обуви"} image={LittleBoot} bg="#DADBE0" />
          </div>
          <div onClick={productSingle4}>
            <Card title={"Спортивные одежды"} image={Jacket} bg="#E2EEC0" />
          </div>
          <div onClick={productSingle5}>
            <Card title={"Водный спорт"} image={HeadClothes} bg="#C2BCE8" />
          </div>
          <div onClick={productSingle6}>
            <Card title={"Горный спорт"} image={Skying} bg="#ABA520" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index;
