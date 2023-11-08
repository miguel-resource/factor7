import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Icon, IconButton, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer className="relative bg-slate-200 pt-8 pb-6 mt-32">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-slate-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Mantente en contacto con nosotros
            </h4>
            <h5 className="text-lg mt-0 mb-2 text--600">
              Encuentranos en cualquiera de estas redes sociales y mantente al
              tanto de nuestras novedades.
            </h5>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
                gap: "1rem",
              }}
              className="justify-center sm:justify-start"
            >
              <IconButton
                style={{
                  backgroundColor: "white",
                  color: "#3d3d3d",
                }}
                className=" shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                style={{
                  backgroundColor: "white",
                  color: "#3d3d3d",
                }}
                className=" shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FacebookIcon />
              </IconButton>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                  Enlaces útiles
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      style={{
                        color: "#3d3d3d",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                      }}
                      href="https://www.factor7.com.mx"
                      target="_blank"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        color: "#3d3d3d",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                      }}
                      href="https://www.blogger.com"
                      target="_blank"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-slate-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-slate-500 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Factor 7{/* by{" "} */}
              {/* <a
                href="https://www.creative-tim.com?ref=nnjs-footer"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                Miguel Bermúdez
              </a> */}
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
