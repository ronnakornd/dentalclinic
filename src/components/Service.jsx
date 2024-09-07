import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Service() {
  return (
    <div className="w-full p-5 flex flex-col justify-center items-center">
      <h1 className="text-4xl m-5">บริการของเรา</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b border-black" >
          <AccordionTrigger  className="text-xl">ทันตกรรรมทั่วไป - อุด ขูด ถอน</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b border-black">
          <AccordionTrigger className="text-xl" >ทันตกรรมจัดฟัน เหล็ก/invisalign</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b border-black">
          <AccordionTrigger className="text-xl">ฟอกสีฟัน</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b border-black">
          <AccordionTrigger className="text-xl">วีเนียร์</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-b border-black">
          <AccordionTrigger className="text-xl">รากฟันเทียม</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-b border-black">
          <AccordionTrigger className="text-xl">รักษารากฟัน</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="border-b border-black">
          <AccordionTrigger className="text-xl">ฟันปลอม</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
}

export default Service;
