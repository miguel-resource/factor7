"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setIsSearching } from "@/redux/searchReducer";

export default function Header() {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const search = useSelector((state: any) => state.search);
  const dispatch = useDispatch();

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
            {/* <a href="">Inicio</a> */}
            <Link href="/" className="text-slate-200 hover:text-slate-100">
              Inicio
            </Link>
          </li>
          <li>
            {/* <a href="">Nosotros</a> */}
            <Link href="/about" className="text-slate-200 hover:text-slate-100">
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-slate-200 hover:text-slate-100"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-slate-200 hover:text-slate-100"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-slate-200 hover:text-slate-100">
              FAQ
            </Link>
          </li>
        </ul>
        {/* Social Media */}
        <div className="flex gap-4 ">
          <Link target="_blank" href="https://www.facebook.com/Factor7DP">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link target="_blank" href="https://www.instagram.com/factor7dp/">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link target="_blank" href="https://www.tiktok.com/@factor7dp">
            <i className="fab fa-tiktok"></i>{" "}
          </Link>
          <button
            onClick={() => {
              dispatch(setIsSearching(!search.isSearching));
              router.push(`/services`);
            }}
            className="ml-4"
          >
            <i className="fas fa-search text-xl "></i>
          </button>
        </div>
      </nav>

      {/*  toggle menu */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className=" block md:hidden items-center align-middle"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/*  Mobile menu */}
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col w-full h-screen bg-slate-800 absolute top-0 left-0 z-50`}
      >
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-white text-4xl absolute top-4 right-4"
        >
          <i className="fas fa-times"></i>
        </button>
        <ul className="flex flex-col gap-4 items-center justify-center h-full uppercase">
          <li>
            <Link href="/" className="text-slate-200 hover:text-slate-100">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-200 hover:text-slate-100">
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-slate-200 hover:text-slate-100"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-slate-200 hover:text-slate-100"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-slate-200 hover:text-slate-100">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
