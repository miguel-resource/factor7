import Link from "next/link";
import DropDown from "./DropDown";
import { useState } from "react";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="text-slate-00 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Factor 7
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-blue-900"
              type="button"
              //   onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className="fas text-gray-800
              fa-bars"
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto justify-center">
              <li className="flex items-center justify-center text-blue-800">
                <Link
                  className="hover:text-blue-900 
                 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/#nosotros"
                  onClick={(e: any) => {
                    e.preventDefault();
                    const element = document.getElementById("nosotros");
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element?.getBoundingClientRect().top as number;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }}
                >
                  <i className="far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Quienes Somos
                </Link>
              </li>
              <li className="flex items-center justify-center text-blue-800">
                <Link
                  className="hover:text-blue-900 
                 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/#proyectos"
                  onClick={(e: any) => {
                    e.preventDefault();
                 
                    const element = document.getElementById("proyectos");
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element?.getBoundingClientRect().top as number;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });

                  }}
                >
                  <i className="far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Proyectos
                </Link>
              </li>

              <li className="flex items-center justify-center text-blue-800">
                <Link
                  className="hover:text-blue-900

                 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  // href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
                  href="/#testimonios"
                  onClick={(e: any) => {
                    e.preventDefault();
                    const element = document.getElementById("testimonios");
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element?.getBoundingClientRect().top as number;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });

                  }}
                >
                  <i className="far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Testimonios
                </Link>
              </li>
              <li className="flex items-center justify-center text-blue-800">
                <Link
                  className="hover:text-blue-900
                 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/#ubicacion"
                  onClick={(e: any) => {
                    e.preventDefault();
                    const element = document.getElementById("ubicacion");
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element?.getBoundingClientRect().top as number;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });

                  }}
                >
                  <i className="far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Ubicación
                </  Link>
              </li>
            </ul>
            <ul className=" flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">{/* <DropDown /> */}</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
