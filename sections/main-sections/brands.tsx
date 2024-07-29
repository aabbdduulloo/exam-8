import React from "react";
import Image from "next/image";
import Brend1 from "@/public/images/Brend1.png";
import Brend2 from "@/public/images/Brend2.png";
import Brend3 from "@/public/images/Brend3.png";
import Brend4 from "@/public/images/Brend4.png";
import Brend5 from "@/public/images/Brend5.png";

const Brands = () => {
  return (
    <div className="container mx-auto py-8 flex justify-center items-center bg-white rounded-lg shadow-lg max-w-full">
      <div className="grid grid-cols-7 gap-8 justify-center items-center">
        <div className="flex justify-center items-center animate-slideIn">
          <Image
            src={Brend1}
            alt="Puma Logo"
            width={74}
            height={74}
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center items-center animate-slideIn">
          <Image
            src={Brend2}
            alt="Under Armour Logo"
            width={74}
            height={74}
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center items-center animate-slideIn">
          <Image
            src={Brend3}
            alt="Nike Logo"
            width={74}
            height={74}
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center items-center animate-slideIn">
          <Image
            src={Brend4}
            alt="Adidas Logo"
            width={74}
            height={74}
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center items-center animate-slideIn">
          <Image
            src={Brend5}
            alt="Reebok Logo"
            width={74}
            height={74}
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center items-center animate-slideIn">
          <Image
            src={Brend1}
            alt="Puma Logo"
            width={74}
            height={74}
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center items-center animate-slideIn">
          <Image
            src={Brend3}
            alt="Under Armour Logo"
            width={74}
            height={74}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
