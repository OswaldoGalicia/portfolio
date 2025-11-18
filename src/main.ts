import './style.css'

const buttonCv = document.getElementById("cv");
const menuCv = document.getElementById("cvMenu");

buttonCv?.addEventListener('click', () => {
    menuCv?.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    // si el click NO es sobre el botón y NO es sobre el menú
    const target = e.target as Node | null;
    if (!target) return;

    // si no existe menuCv no hay nada que ocultar          si no existe buttonCv solo comprobamos el menú
    if (menuCv && buttonCv) {
        if (!buttonCv.contains(target) && !menuCv.contains(target)) {
            menuCv.classList.add('hidden');
        }
    } else if (menuCv) {
        if (!menuCv.contains(target)) {
            menuCv.classList.add('hidden');
        }
    }
});


// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
