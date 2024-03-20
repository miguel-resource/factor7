import { CommonWrapper } from "@/components/Common/Wrapper";
import { Button, TextareaAutosize, TextField } from "@mui/material";

export default function ContactPage() {
  return (
    <CommonWrapper>
      <section className="
      flex-col 
      mb-10 mt-10 text-slate-700 text-center flex px-96 align-middle justify-center
      lg:px-0 lg:text-center lg:items-center lg:justify-center lg:flex-row lg:gap-10 lg:mt-20 lg:mb-20
        ">
        <form
          className="flex gap-7 flex-col mx-auto  w-2/12 px-52 mb-10 :w-12/12 lg:mx-auto lg:px-0"
          action=""
          method="post"
          style={{
            width: "48em", 
            height: "auto", 
            alignContent: "center", 
            justifyContent: "center"
          }}
        >

          <TextField
            className="w-full"
            id="outlined-basic"
            label="Nombre"
            variant="filled"
          />
          <TextField
            className="w-full"
            id="outlined-basic"
            label="Correo"
            variant="filled"
          />
          <TextareaAutosize

          className="w-full bg-slate-200 p-2 rounded-lg border-b-1 border-black"
          aria-label="minimum height" 
            minRows={3}
            about="minimum height"
        
          placeholder="Mensaje" />

          <div>
            <Button className="bg-slate-700 text-white py-2 px-8 rounded-full">
              Enviar
            </Button>
          </div>
          
        </form>

        {/*  MAP IFRAME */}
        <iframe 
        className="w-1/2 mx-auto h-96 sm:w-8/12 md:w-9/12 lg:w-full lg:mx-auto lg:px-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.0873190481193!2d-96.71816912378945!3d17.06838101191477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7223100000001%3A0x3d0425a8190a4ab9!2sFactor%20Siete%20Dise%C3%B1o%20Publicitario!5e0!3m2!1ses-419!2smx!4v1710969445040!5m2!1ses-419!2smx" width="600" height="450"  loading="lazy" ></iframe>

      </section>
    </CommonWrapper>
  );
}
