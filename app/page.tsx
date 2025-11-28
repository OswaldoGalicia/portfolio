
export default function Home() {
  return (
    <div>
      <div className=" mt-85 md:mt-40 xl:mt-26"></div>
      <section className="w-full absolute mt-10">
        <div className="relative w-9/10 mx-auto">
            <div className="w-full h-auto absolute top-1/2 left-0 z-10 flex justify-center items-center mt-7 ">
              <img width={580} height={580} src="/img/fotoPrincipal.webp" alt="Foto del autor" className="size-[580px] h-auto" />
            </div>
            <div className=" w-full flex flex-col justify-center items-center *:font-logo *:text-7xl *:sm:text-9xl *:tracking-widest absolute top-1/2 left-0 leading-8">
              <span className="text-white z-15">PORTAFOLIO</span>
              <span className=" text-transparent" style={{ WebkitTextStroke: '2px #efdbbf' }}>PORTAFOLIO</span>
              <span className=" text-transparent" style={{ WebkitTextStroke: '2px #efdbbf' }}>PORTAFOLIO</span>
              <span className=" text-transparent" style={{ WebkitTextStroke: '2px #efdbbf' }}>PORTAFOLIO</span>
              <span className=" text-transparent" style={{ WebkitTextStroke: '2px #efdbbf' }}>PORTAFOLIO</span>
            </div>
        </div>
        <div className="bg-[#121211] h-72 mt-140 text-white flex flex-col sm:flex-row pr-10 md:pr-0 justify-center items-end pb-20 gap-8">
            <a href="https://www.linkedin.com/in/oswaldogaliciaflores/" target="_blank" className="flex flex-row gap-3 items-center hover:bg-gray-950 px-1.5 py-0.5 rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
            Linkedin
            </a>

            <a href="https://github.com/OswaldoGalicia" target="_blank" className="flex flex-row gap-3 items-center hover:bg-gray-950 px-1.5 py-0.5 rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            GitHub
            </a>

            <a href="https://github.com/OswaldoGalicia" target="_blank" className="flex flex-row gap-3 items-center hover:bg-gray-950 px-1.5 py-0.5 rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
            WhatsApp
            </a>
        </div>
        </section>
    </div>
  );
}
