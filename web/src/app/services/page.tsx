import { CommonWrapper } from "@/components/Common/Wrapper";

export default function ServicesPage() {
  return (
    <CommonWrapper>
      <section
        className="
      flex-col
      mb-10 mt-10 text-slate-700 text-center flex px-96 align-middle justify-center
      lg:px-0 lg:text-center lg:items-center lg:justify-center lg:flex-row lg:gap-10 lg:mt-20 lg:mb-20
        "
      >
        <div className="flex flex-col mx-auto w-2/12 px-52 mb-10 :w-12/12 lg:mx-auto lg:px-0">
          <h2 className="text-4xl font-bold">Servicios</h2>
          <p className="text-lg text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            in mauris et odio convallis ultrices. In hac habitasse platea
            dictumst
          </p>
        </div>
      </section>
    </CommonWrapper>
  );
}
