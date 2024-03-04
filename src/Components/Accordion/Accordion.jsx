import { useState } from "react"; 
import AccordionTitle from './AccordionTitle.jsx';
import AccordionBody from './AccordionBody.jsx';
import { AccData } from './acc-data.js';


function Accordion() {
    const [activeAccordion, setActiveAccordion] = useState(0);
    //const index = 0;

    function handleClick(clickedIndex) {
        setActiveAccordion(clickedIndex);
    }

    return (
        <>
            {
                AccData.map((item, index) => (
                    <div key={item.question}>
                        <AccordionTitle
                            className={
                                activeAccordion == index
                                    ? "bg-sky-500  text-white"
                                    : "text-slate-600"
                            }
                            clickedIndex={index}
                            handleClick={handleClick}
                        >
                            {item.question}
                            <span className="text-2xl w-6 text-center">
                                {activeAccordion == index ? '-' : '+'}
                            </span>
                        </AccordionTitle>
                        {activeAccordion == index && (
                            <AccordionBody AccDetail={item.answer} />
                        )}
                    </div>

                ))
            }
            
        </>
    )
}

export default Accordion;