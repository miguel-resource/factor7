import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FAQ } from "@/types/FAQ";
import { CircularProgress } from "@mui/material";

export const ListFAQ = (data: any) => {
  return (
    <>
      <h1
        className="text-3xl font-semibold text-center mb-10
        text-slate-700 tracking-widest lg:text-5xl"
      >
        Preguntas frecuentes
      </h1>

      <div className="w-10/12 mx-auto flex flex-col items-center justify-center">

        {data.data.length > 0 ?
          data.data.map((faq: FAQ, index: number) => (
            <Accordion key={index} className="bg-gray-100 w-12/12 md:w-8/12 lg:w-6/12 ">
              <AccordionSummary
                className="font-semibold text-slate-700 tracking-widest lg:text-lg"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2>{faq.question}</h2>
              </AccordionSummary>
              <AccordionDetails className="bg-gray-200 p-4 shadow-inner">
                <p>{faq.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))
          :
            <CircularProgress />
            
        }
      </div>
    </>
  );
};
