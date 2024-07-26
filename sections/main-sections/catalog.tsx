import Container from "@/components/container";
import Card from "@/components/card-ui/catalog-card";
import TranajorImage from "@/public/images/tranajor.png";
import Balls from "@/public/images/balls.png";
import LittleBoot from "@/public/images/little-boot.png";
import Jacket from "@/public/images/jacket.png";
import HeadClothes from "@/public/images/headclothes.png";
import Skying from "@/public/images/skying.png";

const Index = () => {
  return (
    <section className="py-4">
      <Container>
        <p className="text-[32px] font-medium mb-[30px] text-center">Каталог</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <Card title={"Тренажеры"} image={TranajorImage} bg="#D3E5F2" />
          <Card title={"Мячи"} image={Balls} bg="#E2C6BE" />
          <Card title={"Спротивные обуви"} image={LittleBoot} bg="#DADBE0" />
          <Card title={"Спортивные одежды"} image={Jacket} bg="#E2EEC0" />
          <Card title={"Водный спорт"} image={HeadClothes} bg="#C2BCE8" />
          <Card title={"Горный спорт"} image={Skying} bg="#ABA520" />
        </div>
      </Container>
    </section>
  );
};

export default Index;
