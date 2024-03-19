"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <header className="flex justify-between w-full p-4 bg-slate-800">
      {/*  Logo */}
      <div>
        <Image
          src="/static/logo.png"
          alt="Factor Siete"
          width={50}
          height={30}
        />
      </div>

      {/*  Navigation */}
      <nav
        className=" items-center text-slate-200 
            hidden md:flex"
      >
        <ul className="flex gap-4 mr-10">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Nosotros</a>
          </li>
          <li>
            <a href="">Servicios</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
        {/* Social Media */}
        <div className="flex gap-4 ">
          <a href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="">
            <i className="fab fa-tiktok"></i>{" "}
          </a>

          <button className="ml-4">
            <i className="fas fa-search text-xl "></i>
          </button>
        </div>
      </nav>

      {/*  toggle menu */}
      <button 
        onClick={() => setShowMenu(!showMenu)}
      className=" block md:hidden items-center align-middle">
        <i className="fas fa-bars"></i>
      </button>

      {/*  Mobile menu */}
      <div 
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col w-full h-screen bg-slate-800 absolute top-0 left-0`}
      >
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="text-white text-4xl absolute top-4 right-4"
        >
          <i className="fas fa-times"></i>
        </button>
        <ul className="flex flex-col gap-4 items-center justify-center h-full uppercase">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Nosotros</a>
          </li>
          <li>
            <a href="">Servicios</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
