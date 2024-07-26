import React from "react";

const page = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 flex items-center">
        <a href="/" className="text-sm text-gray-600 ml-1">
          Главная
        </a>{" "}
        &gt; <span className="text-sm text-gray-800">Продукты</span>
      </div>
    </div>
  );
};

export default page;
