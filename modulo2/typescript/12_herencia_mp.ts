import { Barco, BarcoPesquero } from "./11_herencia_mp";

const barcoGenerico = new Barco("La Niña", 100);
barcoGenerico.navegar();


const miPesquero = new BarcoPesquero("El Cazador", 50, "Arrastre");
miPesquero.navegar(); 
miPesquero.pescar();  