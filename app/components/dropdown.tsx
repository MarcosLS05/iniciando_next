'use client';
import React from 'react';
import { useState } from 'react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
const list =[
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'properties' },
    { href: '/properties/add', label: 'properties add' },
]


export default function Dropdown() {
    const[isOpen, setIsOpen] = useState<boolean>(false)
    
    
    return (
        <div className="mx-auto md:mx-28 relative flex flex-col items-center w-[340px] bg-purple-700">
            <button
                className=' bg-purple-400 p-4 w-full flex items-center justify-between font-bold text-xl rounded-lg tracking-wider border-4 border-transparent active:hover:border-white active:text duration-300'
            >
                {menuText}
                {isOpen ? (<GoTriangleUp className='h-8'/>) : (<GoTriangleDown className='h-8'/>)}
            </button>
        </div>
    )
}