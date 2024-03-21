import { CommonWrapper } from "@/components/Common/Wrapper";
import Image from "next/image";

export default function AboutPage() {
  return (
    <CommonWrapper>
      <section className="py-28">
        <div className="flex flex-col items-center justify-center w-full mx-auto">
          <h1
            className="text-3xl font-semibold
        text-slate-700 tracking-widest lg:text-5xl"
          >
            Nostros
          </h1>

          <p className="text-slate-700 text-base lg:text-xl text-center w-8/12 lg:w-1/2 leading-extra-loose mt-10">
            Factor Siete es una empresa de publicidad e imprenta, especializada
            en la impresión de gran formato y la publicidad en general. Nuestro
            principal objetivo es ofrecer un servicio de calidad, con la máxima
            rapidez y eficacia, para que nuestros clientes puedan obtener el
            mejor resultado en sus proyectos.
          </p>

          <img
            src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About"
            className="rounded-lg mt-10 w-10/12  object-cover"
            style={{ height: "38em" }}
          />
        </div>

        {/* servicios */}
        <div className="flex flex-col items-center justify-center w-full mx-auto mt-20">
          <h1
            className="text-3xl font-semibold
        text-slate-700 tracking-widest lg:text-5xl"
          >
            Servicios
          </h1>
          <ul className="flex flex-col items-center w-10/12 justify-center  mx-auto mt-10 lg:flex-row lg:gap-10 lg:mt-20">
            <li className="text-slate-700 flex flex-col items-center justify-center w-8/12 lg:w-1/2 mt-10">
              <i className="fa fa-print text-5xl text-slate-700"></i>
              <h2 className="text-base lg:text-xl text-center w-8/12 lg:w-1/2 leading-extra-loose mt-10">
                Impresión digital y offset.
              </h2>
            </li>
            <li className="text-slate-700 flex flex-col items-center justify-center w-8/12 lg:w-1/2 mt-10">
              <i className="fa fa-paint-brush text-5xl text-slate-700"></i>
              <h2 className="text-base lg:text-xl text-center w-8/12 lg:w-1/2 leading-extra-loose mt-10">
                Diseño gráfico.
              </h2>
            </li>
            <li className="text-slate-700 flex flex-col items-center justify-center w-8/12 lg:w-1/2 mt-10">
              <i className="fa fa-bullhorn text-5xl text-slate-700"></i>
              <h2 className="text-base lg:text-xl text-center w-8/12 lg:w-1/2 leading-extra-loose mt-10">
                Publicidad.
              </h2>
            </li>
            <li className="text-slate-700 flex flex-col items-center justify-center w-8/12 lg:w-1/2 mt-10">
              <i className="fa fa-globe text-5xl text-slate-700"></i>
              <h2 className="text-base lg:text-xl text-center w-8/12 lg:w-1/2 leading-extra-loose mt-10">
                Diseño web.
              </h2>
            </li>
          </ul>
        </div>
      </section>
    </CommonWrapper>
  );
}
