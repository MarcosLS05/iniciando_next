'use client';
import { on } from "events";
import React, { Children, ReactNode } from "react";

export default function TabButton({
    children,
    onclick,
    isSelected,
  }: {
    children: ReactNode;
    onclick: () => void;
    isSelected: boolean; // agregué este tipo, pero no sé si es correcto
  }) {
    function handleClick() {
      onclick(); // agregué los paréntesis para llamar a la función
    }
  
    return (
      <button
 //       key={} 
        className="inline-block m-2 p-3 text-slate-300 rounded-md hover:bg-slate-900 hover:text-white"
        onClick={handleClick}
      >
        {children} // corregí `Children` a `children`
      </button>
    );
  }
