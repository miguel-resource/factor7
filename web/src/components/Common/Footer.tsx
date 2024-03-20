export default function Footer() {
  return (
    <footer
      className="w-full bg-slate-700 py-12 px-8 text-white text-left text-sm tracking-widest
            grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-32
            "
    >
      <div className="max-w-xs">
        <h3 className="text-xl font-bold mb-8">Contacto</h3>
        <p className="mb-4">
          <i className="fas fa-phone-alt"></i> +52 951 513 3458 
        </p>
        <p className="mb-4">
          <i className="fas fa-envelope"></i>{" "}
          <a href="mailto:" className="text-white">
            factorsieted@gmail.com
          </a>
        </p>
        <p>
          {/* direction */}
          1234 Main St, Springfield, IL 62701 
        </p>
        <br />
        <p>
          Factor Siete es una empresa de publicidad e imprenta, especializada en
          la impresión de gran formato y la publicidad en general.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Empresa</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <a href="">Nosotros</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Servicios</h3>
        <ul className="flex flex-col gap-4">
          <li>Impresión de gran formato</li>
          <li>Publicidad</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Redes Sociales</h3>
        <ul className="grid grid-cols-3 gap-0 w-1/2 text-lg">
          <li>
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
