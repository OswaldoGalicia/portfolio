"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar(){
    
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    
    useEffect( () => {
        function handleClickOutside( e: MouseEvent ) {
            const target = e.target as Node;

            if( menuRef.current && buttonRef.current && !menuRef.current.contains( target )  && !buttonRef.current.contains( target ) ){
                setOpen( false );
            }
        }
        document.addEventListener( 'click', handleClickOutside );
        return () => document.removeEventListener( 'click', handleClickOutside );
    }, [] );

    return(
        <header className="backdrop-blur-2xl fixed top-0 left-0 z-100 flex flex-col justify-around items-center w-full mx-auto shadow-xl/30 py-3 xl:flex-row ">
            <div className="flex flex-row items-center justify-around gap-4 ">
                <img src="./public/img/logo.png" alt="Logo" width={80} height={80} />
                <h1 className="font-logo text-6xl text-white">Os Galicia</h1>
            </div>
        <nav className=""> 
            <ul className="flex flex-col md:flex-row justify-around items-center gap-4 font-txt text-2xl text-white *:hover:bg-orange-100 *:hover:text-black *:rounded-md *:px-4 *:py-2 *:hover:transition *:duration-300 *:ease-in">
            <li>
                <Link href="/Retos">
                {"{ Retos... }"}
                </Link>
            </li>
            <li>
                <a href="#">
                Trabajos
                </a>
            </li>
            <li>
                <button ref={buttonRef} onClick={ () => setOpen( !open )} className="flex flex-row items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                    </svg>
                    Currículum
                </button>  
                <div ref={ menuRef } className={`${ open ? "flex": "hidden"} flex-col absolute mt-2 w-48 *:p-4 gap-4 bg-red-900 border border-white text-white rounded-lg transition-all origin-top-right *:hover:bg-red-800`}>
                    <a href="/cv/GAFG_CV_2025-2.pdf" target="_blank" className="flex flex-row gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        Esp
                    </a>
                    <a href="/cv/GAFG_resume_2025-2.pdf" target="_blank" className="flex flex-row gap-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                        </svg>
                        Eng
                    </a>
                </div>
            </li>
            <li>
                <a href="#">
                Más sobre mí
                </a>
            </li>
            <li className="bg-orange-100 text-black font-semi font-txt">
                <a href="#">
                ¡Contáctame!
                </a>
            </li>
            </ul>
        </nav>
        </header>
    );
}