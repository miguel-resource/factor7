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
          <i className="fas fa-phone-alt"></i> 123-456-7890
        </p>
        <p className="mb-4">
          <i className="fas fa-envelope"></i>
          <a href="mailto:" className="text-white">
            test@factorsiete.com
          </a>
        </p>
        <p>
          {/* direction */}
          1234 Main St, Springfield, IL 62701
        </p>
        <p>
          Factor Siete es una empresa de publicidad e imprenta, especializada en
          la impresión de gran formato y la publicidad en general.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Empresa</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <a href="">
              <i className="fas fa-info-circle"></i> Nosotros
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-envelope"></i> Contacto
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Servicios</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <i className="fas fa-print"></i> Impresión de gran formato
          </li>
          <li>
            <i className="fas fa-ad"></i> Publicidad
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Redes Sociales</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <a href="">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
