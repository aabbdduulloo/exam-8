// "use client";

// import Image from "next/image";
// import CartIcon from "@/public/icons/u_shopping-cart-alt.svg";
// import HeartIcon from "@/public/icons/u_heart-sign.svg";
// import { useRouter } from "next/navigation";

// const Index = ({ image, title, price, content }) => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push("/basket");
//   };

//   return (
//     <div className="cursor-pointer relative w-full max-w-[292px] h-[416px] bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
//       <Image
//         className="absolute top-[14px] right-[14px] cursor-pointer w-[25px] transition-transform transform hover:scale-110 active:bg-red-500"
//         src={HeartIcon}
//         alt="heart icon"
//       />
//       {content === "Акция" ? (
//         <div className="absolute top-[10px] left-[-165px] w-[134px] h-[58px] flex items-center justify-center bg-red-600 text-white text-[16px] font-bold rotate-[-41deg] z-20">
//           Акция
//         </div>
//       ) : content === "Новый" ? (
//         <div className="absolute top-[10px] left-[-165px] w-[134px] h-[58px] flex items-center justify-center bg-purple-600 text-white text-[16px] font-bold rotate-[-41deg] z-20">
//           Новый
//         </div>
//       ) : content === "ТОП" ? (
//         <div className="absolute top-[10px] left-[-165px] w-[134px] h-[58px] flex items-center justify-center bg-green-500 text-white text-[16px] font-bold rotate-[-41deg] z-20">
//           ТОП
//         </div>
//       ) : null}
//       <div className="flex justify-center items-center mb-5 pt-5">
//         <Image src={image} alt={title} className="w-full h-auto object-cover" />
//       </div>
//       <div className="px-5">
//         <h3 className="text-[18px] md:text-[20px] font-semibold mb-2">
//           {title}
//         </h3>
//         <p className="text-[18px] md:text-[20px] font-bold text-red-500">
//           {price} <span className="text-[12px]">UZS</span>
//         </p>
//       </div>
//       <button
//         onClick={handleClick}
//         className="absolute bottom-0 bg-yellow-400 w-full py-[13px] flex items-center gap-[6px] justify-center transition-transform transform hover:scale-105"
//       >
//         <Image src={CartIcon} alt="cart icon" className="w-[20px] h-[20px]" />
//         <span className="text-[16px] md:text-[20px] font-medium">Корзина</span>
//       </button>
//     </div>
//   );
// };

// export default Index;

"use client";

import Image from "next/image";
import CartIcon from "@/public/icons/u_shopping-cart-alt.svg";
import HeartIcon from "@/public/icons/u_heart-sign.svg";
import { useRouter } from "next/navigation";

interface CardProps {
  image: string;
  title: string;
  price: number;
  content: string;
}

const Index = ({ image, title, price, content }: CardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/basket");
  };

  return (
    <div className="cursor-pointer relative w-full max-w-[292px] h-[416px] bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <Image
        className="absolute top-[14px] right-[14px] cursor-pointer w-[25px] transition-transform transform hover:scale-110"
        src={HeartIcon}
        alt="heart icon"
        width={25}
        height={25}
      />
      {content === "Акция" ? (
        <div className="absolute top-[10px] left-[-165px] w-[134px] h-[58px] flex items-center justify-center bg-red-600 text-white text-[16px] font-bold rotate-[-41deg] z-20">
          Акция
        </div>
      ) : content === "Новый" ? (
        <div className="absolute top-[10px] left-[-165px] w-[134px] h-[58px] flex items-center justify-center bg-purple-600 text-white text-[16px] font-bold rotate-[-41deg] z-20">
          Новый
        </div>
      ) : content === "ТОП" ? (
        <div className="absolute top-[10px] left-[-165px] w-[134px] h-[58px] flex items-center justify-center bg-green-500 text-white text-[16px] font-bold rotate-[-41deg] z-20">
          ТОП
        </div>
      ) : null}
      <div className="flex justify-center items-center mb-5 pt-5">
        <Image
          src={image}
          alt={title}
          className="w-full h-auto object-cover"
          width={292}
          height={416}
        />
      </div>
      <div className="px-5">
        <h3 className="text-[18px] md:text-[20px] font-semibold mb-2">
          {title}
        </h3>
        <p className="text-[18px] md:text-[20px] font-bold text-red-500">
          {price} <span className="text-[12px]">UZS</span>
        </p>
      </div>
      <button
        onClick={handleClick}
        className="absolute bottom-0 bg-yellow-400 w-full py-[13px] flex items-center gap-[6px] justify-center transition-transform transform hover:scale-105"
      >
        <Image src={CartIcon} alt="cart icon" className="w-[20px] h-[20px]" />
        <span className="text-[16px] md:text-[20px] font-medium">Корзина</span>
      </button>
    </div>
  );
};

export default Index;
