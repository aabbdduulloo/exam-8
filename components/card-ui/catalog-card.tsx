import Image from "next/image";

const index = (props: any) => {
  return (
    <div
      className={`w-[187px] h-[247px] px-5 py-[25px] rounded-lg flex flex-col items-center justify-between cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-opacity-90`}
      style={{ backgroundColor: props.bg }}
    >
      <p className="text-[20px] text-center">{props.title}</p>
      <Image src={props.image} alt="image" className="mt-2" />
    </div>
  );
};

export default index;
