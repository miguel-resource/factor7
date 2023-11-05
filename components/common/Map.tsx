const Map = () => {
  return (
    <section
      id="ubicacion"
      className="flex flex-col items-center justify-center w-full h-full py-20"
    >
      <h6 className="mb-10">
        <span className="text-4xl font-semibold tracking-widest">
          Ubicación
        </span>
      </h6>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15256.34969412012!2d-96.7155942!3d17.0683759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7223100000001%3A0x3d0425a8190a4ab9!2sFactor%20Siete%20Dise%C3%B1o%20Publicitario!5e0!3m2!1ses-419!2smx!4v1699200044589!5m2!1ses-419!2smx"
        width="600"
        height="450"
        // style="border:0;"
        style={{ border: "0", width: "80%", height: "35em" }}
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="flex flex-row items-center justify-center w-full h-full py-10">
        {/* horario */}
        <div className="flex flex-col items-center justify-center w-full h-full py-20">
          <h6 className="mb-2">
            <span className="text-xl font-semibold tracking-widest ">
              Horario
            </span>
          </h6>
          <div className="flex flex-col items-center justify-center w-full h-full py-2">
            <ul className="text-slate-600 list-disc">
              <li className="text-base font-semibold tracking-widest">
                Lun: 9:00 am - 6:00 pm
              </li>
              <li className="text-base font-semibold tracking-widest">
                Mar: 9:00 am - 6:00 pm
              </li>
              <li className="text-base font-semibold tracking-widest">
                Mie: 9:00 am - 6:00 pm
              </li>
              <li className="text-base font-semibold tracking-widest">
                Jue: 9:00 am - 6:00 pm
              </li>
              <li className="text-base font-semibold tracking-widest">
                Vie: 9:00 am - 6:00 pm
              </li>
              <li className="text-base font-semibold tracking-widest">
                Sab: 9:00 am - 2:30 pm
              </li>
              <li className="text-base font-semibold tracking-widest">
                Dom: Cerrado
              </li>
            </ul>
          </div>
        </div>

        {/* dirección */}
        <div className="flex flex-col items-center justify-center w-full h-full py-20">
          <h6 className="mb-2">
            <span className="text-xl font-semibold tracking-widest ">
              Dirección
            </span>
          </h6>
          <div className="flex flex-col items-center justify-center w-full h-full py-2">
            <p className="text-base font-base tracking-widest">
              Alianza 305A Centro 68080 Oaxaca, Oax. México
            </p>
          </div>

          <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold mt-2 py-2 px-4 rounded-full">
            Como llegar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Map;
