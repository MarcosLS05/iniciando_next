'use client';
import React from "react";
import { useState } from "react";
import { EXAMPLES } from "../data/data";

export default function TabExampleSection() {
    const [selected, setSelected] = useState<keyof typeof EXAMPLES | null>(null);
    const values = Object.keys(EXAMPLES) as Array<keyof typeof EXAMPLES>;

function handleClick(entrada: keyof typeof EXAMPLES) {
    setSelected(entrada);
}

    //const selected = values[Math.floor(Math.random() * values.length)];
    return (
        <section className='my-12 md:mx-12 mx-4 flex flec-col'>
            <div className='flex justify-left space-x-2'>
                {/* Aqui pongo los botones de las pestañas */}
                {values.map( v => (
                    <button key={v} className="inline-block m-2 p-3 text-slate-300 rounded-md hover:bg-slate-900 hover:text-white"
                        onClick={() => handleClick(v)}>
                            {EXAMPLES[v].title}
                            {EXAMPLES[v].description}
                    </button>
                ))}

            </div>
            {!selected && <div className="text-white">Seleccione una pestaña para mostrar su contenido</div>}
            {selected && <div className="bg-slate-600 text-slate-200 p-12 m-3">
                {/* Aqui pongo el contenido de las pestañas */}
                <h3 className="mb-10 text-lg">
                    {EXAMPLES[selected].title}
                </h3>
                <p className="mb-10">
                    {EXAMPLES[selected].description}
                </p>
            </div>
            }
        </section>
    )
    
}