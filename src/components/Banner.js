import React from "react";
// import image from "../../public/images";

export default function Banner() {
  return (
    <section className="h-96 bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-banner opacity-60">
        {/* <img src={image} alt="banner" /> */}
      </div>
      <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-sxl">
        <h2 className="text-6xl">Shop with us</h2>
        <p className="text-2xl">Owned by Minha Kim</p>
      </div>
    </section>
  );
}
