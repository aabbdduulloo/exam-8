import Container from "@/components/container";
import Card from "@/components/ui/product-card";
import Jacket from "@/public/images/big-jacket.png";
import Trinajor from "@/public/images/big-trenajor.png";
import Bag from "@/public/images/big-bag.png";
import Shoe from "@/public/images/big-shoe.png";

const Index = () => {
  return (
    <section className="py-[70px] bg-[#F2F2F2]">
      <Container>
        <p className="text-[32px] font-medium mb-[42px] text-center">Новинки</p>
        <div className="grid gap-6 px-4 sm:px-6 md:px-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          <Card
            image={Jacket}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
            content="Новый"
            className="transition-transform transform hover:scale-105"
          />
          <Card
            image={Shoe}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
            content="Новый"
            className="transition-transform transform hover:scale-105"
          />
          <Card
            image={Bag}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
            content="Новый"
            className="transition-transform transform hover:scale-105"
          />
          <Card
            image={Trinajor}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
            content="Новый"
            className="transition-transform transform hover:scale-105"
          />
        </div>
      </Container>
    </section>
  );
};

export default Index;
