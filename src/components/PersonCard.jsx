import React from "react";

export default function PersonCard(obj) {
  return (
    // <article className="rounded-xl text-white w-80 bg-color2 mt-3 mx-auto overflow-hidden">
    //   <img src={require("../img/juan.jpg")} alt="Juan Francisco" />
    //   <div className="p-7 ">
    //     <header className="text-center">
    //       <h2 className="font-bold text-2xl">Juan Villasmil</h2>
    //       <p className="text-brown ">Fontent Developer</p>
    //       <a href="#" className="text-xs opacity-75">
    //         juanvillasmil.website
    //       </a>
    //       <div className="flex gap-4 my-5 justify-between">
    //         <a className="link_button text-gray-800  bg-white text-inherit" href="#">
    //         <i class="fa-solid fa-envelope  mr-2"></i>Email
    //         </a>
    //         <a className="link_button bg-blue" href="#">
    //         <i class="fa-brands fa-linkedin mr-2"></i>Linkedin
    //         </a>
    //       </div>
    //     </header>
    //     <main>
    //       <h3 className="text-white font-bold">About</h3>
    //       <p className="text-sm mb-5 opacity-90 leading-4" >I am a simple and ordinary frontend developer who has more than 3 years of study in that area and still not get job, but I know if I continue learning and practice my success will be inevitable </p>
    //       <h3 className="text-white font-bold">Interest</h3>
    //       <p className="text-sm opacity-90  leading-4">I feel interest for the spiritual world, the physic an mental health, music, the fauna, chess, design, and coding of course jeje</p>
    //     </main>
    //   </div>
    //     <footer className="p-5 flex justify-center gap-5 bg-color3">
    //     <i class="fa-brands fa-square-twitter"></i>
    //     <i class="fa-brands fa-square-facebook"></i>
    //     <i class="fa-brands fa-square-github"></i>
    //     <i class="fa-brands fa-square-youtube"></i>
    //     </footer>
    // </article>

    <article className="w-48 mx-auto">
      <div className="relative">
        <img src={require("../img/juan.jpg")} alt="" className="rounded-2xl" />
        <p className="absolute text-sm px-3 py-1 top-3 left-3  bg-white rounded-md">SOLD  OUT</p>
      </div>
      <body className="text-sm mt-2">
        <p>5.0 <span className="opacity-50">(6)-{obj.country}</span></p>
        <p className="py-1">Life lessons with {obj.name}</p>
        <p><strong>From {obj.cost}</strong> / person</p>
      </body>
    </article>
  );
}
