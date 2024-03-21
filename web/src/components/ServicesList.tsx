import { useSelector } from "react-redux";
import Masonry from "react-responsive-masonry";

export const ServicesList = ({ services }: any) => {
  const search = useSelector((state: any) => state.search);
  return (
    <Masonry columnsCount={2}>
      {/* {services.map((photo: any, index: number) => (
        <a
          key={index}
          href={photo.link}
          target="_blank"
          rel="noreferrer"
          className="w-full h-full ease-in-out transition-all duration-300 group hover:scale-95 cursor-pointer"
        >
          <img
            src={photo.source}
            alt="Services"
            className="w-full h-full object-cover group-hover:brightness-50"
          />

          <p className="hidden group-hover:block group-hover:brightness-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-100 font-normal md:font-semibold text-xs md:text-lg lg:text-2xl">
            Lorem ipsum dolor sit amet elit.
          </p>
        </a>
      ))} */}
      {services
        .filter((service:any) => service.name.toLowerCase().includes(search.searchQuery.toLowerCase()))
        .map((photo: any, index: number) => (
          <a
            key={index}
            href={photo.link}
            target="_blank"
            rel="noreferrer"
            className="w-full h-full ease-in-out transition-all duration-300 group hover:scale-95 cursor-pointer"
          >
            <img
              src={photo.source}
              alt="Services"
              className="w-full h-full object-cover group-hover:brightness-50"
            />

            <p className="hidden group-hover:block group-hover:brightness-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-100 font-normal md:font-semibold text-xs md:text-lg lg:text-2xl">
              {photo.name}
            </p>
          </a>
        ))}{" "}
    </Masonry>
  );
};
