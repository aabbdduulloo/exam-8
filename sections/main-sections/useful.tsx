import Container from "@/components/container";
import Nimadir from "@/public/images/nimadir.png";
import Image from "next/image";

const Index = () => {
  return (
    <section className="bg-[#F2F2F2] pb-[80px]">
      <Container>
        <p className="font-medium text-[32px] mb-[30px] text-center sm:text-left">
          Полезное
        </p>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[50%] h-auto lg:h-[417px] px-[20px] lg:px-[35px] py-[25px] lg:py-[38px] bg-white rounded-lg">
            <h2 className="text-[24px] lg:text-[32px] font-medium mb-2">
              Как правильно выбрать эллиптический тренажер?
            </h2>
            <p className="text-[16px] lg:text-[18px]">
              Эллиптические тренажёры популярны среди людей любого возраста и с
              разным уровнем физической подготовкb Эллиптические тренажёры
              популярны среди людей любого возраста и с разным уровнем
              физической подготовки...
            </p>
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="bg-white rounded-lg h-[200px] lg:h-[350px] mb-[15px] flex items-center justify-center">
              <Image
                src={Nimadir}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-lg h-[52px] flex items-center justify-center cursor-pointer">
              Посмотрет все
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index;
