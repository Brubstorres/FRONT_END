const carros = ["fusca", "corola", "gol", "palio", "opala"];
console.log(carros);
console.log(carros[2]);
console.log(typeof carros);

for(i = 0; i < 6; i++){
        console.log(carros[i]);
};

carros.forEach((valor) => console.log("vai corinthians"));

const numeros = [45, 4, 9, 16, 25];
const acimaDe18 = numeros.filter(valor => valor > 18);
console.log(acimaDe18);

for(i = 0; i < 6; i++){
    if (carros[i] > 18){
        console.log(carros[i]);
    }
}