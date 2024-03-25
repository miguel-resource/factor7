import Link from "next/link";
import s from "./common.module.scss";

export const Sidebar = () => {
  return (
    <section className={s.sidebar}>
      <div className={s.sidebar__logo}>
        <img src="/static/logo.png" alt="logo" />
      </div>

      <div className={s.sidebar__header}>
        <h1>Panel de Administración</h1>
      </div>
      <div className={s.sidebar__nav}>
        <ul>
          <li>
            <Link href="/admin">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/services">Servicios</Link>
          </li>
          <li>
            <Link href="/admin/main-clients">Clientes Principales</Link>
          </li>
          <li>
            <Link href="/admin/associates">Asociados</Link>
          </li>
          <li>
            <Link href="/admin/faq">FAQ</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
