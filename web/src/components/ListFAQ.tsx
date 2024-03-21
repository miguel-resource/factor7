import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ListFAQ = () => {
  return (
    <>
      <h1
        className="text-3xl font-semibold text-center mb-10
        text-slate-700 tracking-widest lg:text-5xl"
      >
        Preguntas frecuentes
      </h1>

      <div className="w-10/12 mx-auto flex flex-col items-center justify-center">
        <Accordion className="bg-gray-100">
          <AccordionSummary
            className="font-semibold text-slate-700 tracking-widest lg:text-lg"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>¿Qué es Factor Siete?</h2>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-200 p-4 shadow-inner">
            <p>
              Factor Siete es una empresa de publicidad e imprenta,
              especializada en la impresión de gran formato y la publicidad en
              general.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-gray-100">
          <AccordionSummary
            className="font-semibold text-slate-700 tracking-widest lg:text-lg"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h2>¿Cuánto tiempo lleva Factor Siete en el mercado?</h2>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-200 p-4 shadow-inner">
            {" "}
            <p>
              Factor Siete lleva más de 10 años en el mercado, ofreciendo
              soluciones de publicidad e impresión a empresas y particulares.
            </p>
          </AccordionDetails>
        </Accordion>

        {/* <Accordion className="bg-gray-100">
          <AccordionSummary
            className="font-semibold text-slate-700 tracking-widest lg:text-lg"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <h2>¿Qué tipo de impresión ofrece Factor Siete?</h2>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-200 p-4 shadow-inner">
            <p>
              Factor Siete ofrece impresión de gran formato, impresión digital,
              impresión offset y serigrafía.
            </p>
          </AccordionDetails>
        </Accordion> */}

        <Accordion className="bg-gray-100">
          <AccordionSummary
            className="font-semibold text-slate-700 tracking-widest lg:text-lg"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h2>¿Qué tipo de impresión ofrece Factor Siete?</h2>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-200 p-4 shadow-inner">
            {" "}
            <p>
              Factor Siete ofrece impresión de gran formato, impresión digital,
              impresión offset y serigrafía, entre otros servicios.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
