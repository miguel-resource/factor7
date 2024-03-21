export default function SecurityPoints() {
  return (
    <section className="mb-10 bg-black bg-opacity-80 text-white text-center tracking-widest w-full">
      <div
        className="grid grid-cols-2 gap-10 text-sm py-10 mx-auto mt-10 w-8/12
            sm:grid-cols-6 sm:text-xs sm:w-11/12 lg:text-sm lg:w-10/12 xl:w-7/12  lg:gap-12 lg:py-5"
      >
        <div>
          <i className="fas fa-shield-alt fa-3x"></i>
          <h4 className="text-white text-center font-light text-md mt-10 mb-10 tracking-widest ">
            Tiempos de entrega garantizados
          </h4>
        </div>

        <div className="max-w-xs">
          <i className="fas fa-clock fa-3x"></i>
          <h4 className="text-white text-center font-light text-md mt-10 mb-10 tracking-widest ">
          Eficiencia y puntualidad
          </h4>
        </div>

        <div className="max-w-xs">
          <i className="fas fa-tree fa-3x"></i>
          <h4 className="text-white text-center font-light text-md mt-10 mb-10 tracking-widest ">
            Experiencia y calidad
          </h4>
        </div>

        <div className="max-w-xs">
          <i className="fas fa-handshake fa-3x"></i>
          <h4 className="text-white text-center font-light text-md mt-10 mb-10 tracking-widest ">
            Profesionalidad y compromiso
          </h4>
        </div>

        <div className="max-w-xs">
          <i className="fas fa-credit-card fa-3x"></i>
          <h4 className="text-white text-center font-light text-md mt-10 mb-10 tracking-widest ">
            Métodos de pago seguros y confiables
          </h4>
        </div>

        <div className="max-w-xs">
          <i className="fas fa-user-shield fa-3x"></i>
          <h4 className="text-white text-center font-light text-md mt-10 mb-10 tracking-widest ">
            Atención personalizada
          </h4>
          </div>


      </div>
    </section>
  );
}
