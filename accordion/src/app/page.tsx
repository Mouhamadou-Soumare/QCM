"use client"

import Image from "next/image";
import AccordionComponent from "@/components/Accordion";

export default function Home() {
  return (
    <div className="p-6 mx-10 my-10">
    <h1 className="text-3xl font-bold mb-8" >Spider-Man Movie Sagas - Mon Accordion Accessible</h1>
    <AccordionComponent />
  </div>
  );
}
