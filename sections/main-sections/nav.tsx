import Image from "next/image";
import Container from "@/components/container";
import KatalogIcon from "@/public/icons/fi_layers.svg";
import SearchIcon from "@/public/icons/u_search.svg";
import UserIcon from "@/public/icons/u_user.svg";
import HeartIcon from "@/public/icons/u_heart-sign.svg";
import CartIcon from "@/public/icons/u_shopping-cart-alt.svg";

const Index = () => {
  return (
    <section className="py-4">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 h-[70px]">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <button className="flex items-center gap-2 bg-[#1F1D14] px-4 py-2 rounded-md transition-transform transform hover:scale-105">
              <Image src={KatalogIcon} alt="icon" />
              <span className="text-lg text-[#fff] hover:text-amber-300">
                Каталог
              </span>
            </button>
            <div className="relative flex-grow">
              <input
                className="h-[53px] bg-[#F2F2F2] pl-5 pr-12 rounded-md w-full duration-200 outline-none ring-[#1F1D14] focus:ring-1"
                type="text"
                placeholder="Поиск"
              />
              <Image
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                src={SearchIcon}
                alt="search icon"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-2">
              <button className="icon-button">
                <Image src={UserIcon} alt="user icon" />
              </button>
              <button className="icon-button">
                <Image src={HeartIcon} alt="heart icon" />
              </button>
            </div>
            <button className="flex items-center gap-2 bg-[#F2F2F2] px-4 py-2 rounded-md transition-transform transform hover:scale-105">
              <Image src={CartIcon} alt="cart icon" />
              <span className="text-lg">Корзина</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index;
