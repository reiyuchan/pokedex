import { pokemon } from "./client";

const idGen = () => {
  let id = Math.floor(Math.random() * 898) + 1;
  return id;
};
const displayPokemon = (name: string, sprite: any) => {
  const randomPokemon = document.querySelector(".pokemon") as HTMLElement;
  const html = `<h3>${name.charAt(0).toUpperCase() + name.slice(1)}</h3>
    <img width='150px' src='${sprite}' alt='${name}' >`;
  randomPokemon.innerHTML = html;
};
const generatePokemon = () => {
  const genBtn = document.querySelector(".genbtn") as HTMLButtonElement;
  const startGen = () => {
    if (genBtn.textContent === "Start") genBtn.textContent = "Catch";
  };
  genBtn.addEventListener("click", () => {
    startGen();
    pokemon();
  });
};

export { idGen, displayPokemon, generatePokemon };
