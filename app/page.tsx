import Nav from "@/sections/main-sections/nav";
import Main from "@/sections/main-sections/main";
import Catalog from "@/sections/main-sections/catalog";
import Discount from "@/sections/main-sections/discount";
import News from "@/sections/main-sections/news";
import Best from "@/sections/main-sections/best";
import Products from "@/sections/main-sections/products";
import Useful from "@/sections/main-sections/useful";
import Advantages from "@/sections/main-sections/advantages";
import Brands from "@/sections/main-sections/brands";

export default function Home() {
  return (
    <>
      <Nav />
      <Main />
      <Catalog />
      <Discount />
      <News />
      <Products />
      <Best />
      <Useful />
      <Advantages />
      <Brands />
    </>
  );
}
