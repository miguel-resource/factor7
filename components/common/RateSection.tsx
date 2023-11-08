import Rating from "@mui/material/Rating";

const RateSection = () => {
  return (
    <div className="rate-section">
      <div className="rate-section__title">
        <h6 className="text-4xl tracking-widest text-center font-semibold">
          Testimonios
        </h6>
      </div>
      <div className="flex flex-col p-4 justify-center gap-10 mt-20 sm:flex-row sm:p-0">
        {[1, 2, 3].map((item) => (
          <div className="rate-section__content__rate">
            <div className="rate-section__content__rate__stars">
              <div className="rate-section__content__rate__stars__star">
                <Rating name="read-only" value={5} readOnly />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, quae.
                </p>

                <div className="text-sm text-gray-700 mt-4">
                  <p>- Nombre del usuario</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* botones para agregar una nueva o ver las demás */}
      <div className="flex flex-row justify-center mt-14 gap-10">
        <button className="border-b-2 border-slate-500 pb-2 tracking-widest">
          Agregar testimonio
        </button>
        <button
          className="btn btn-primary
            tracking-widest border-b-2 border-slate-500 pb-2
        "
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default RateSection;
