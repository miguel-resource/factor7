import Link from "next/link";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
const MainSection = () => {
  return (
    <section
      id="nosotros"
      className="header relative pt-16 items-center flex h-screen max-h-860-px"
    >
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-blueGray-600">
              Factor Siete Diseño Publicitario
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              {/* DESCRIPCION SENCILLA DE EMPRESA */}
              Somos una empresa de comunicación gráfica publicitaria e
              impresión, dedicada a proponer, crear y aplicar soluciones
              creativas y eficaces en las áreas de: Diseño Gráfico, Diseño Web,
              Imagen Corporativa, Impresión Gran Formato, Offset y Serigrafía.
            </p>
            <div className="mt-12">
              <Link
                href="https://www.google.com"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-600 uppercase text-sm shadow hover:shadow-lg"
                target="_blank"
              >
                <InsertInvitationIcon className="mr-2" /> Agendar Cita
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        src="/img/pattern_nextjs.png"
        alt="..."
      />
    </section>
  );
};

export default MainSection;
