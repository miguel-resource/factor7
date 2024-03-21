import Link from "next/link";

export default function Description() {
  return (
    <section className="mb-10 mt-10 text-slate-700 lg:px-0 text-center">
      <h4 className=" font-semibold text-lg mt-10 mb-10 tracking-widest lg:text-2xl">
        ¿Trabajamos juntos?
      </h4>
      <h2 className="font-semibold text-2xl mt-10 mb-10 tracking-widest lg:text-4xl">
        IMPRENTA DIGITAL Y OFFSET PARA EMPRESAS
      </h2>
      <p className="text-xs mb-10 tracking-widest lg:text-lg lg:w-9/12 mx-auto px-12">
        Ayudamos a los negocios y empresas con sus producciones gráficas
        mediante una experiencia de cliente que garantiza la calidad y el timing
        de los trabajos.
      </p>

      <div>
        <Link
          className="bg-slate-700 text-white py-2 px-8 rounded-full"
          href="/contact"
        >
          Contactar
        </Link>
        {/* <a href="/contacto">Contactar</a> */}
      </div>
    </section>
  );
}
