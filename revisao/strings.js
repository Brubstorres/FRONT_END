let texto = "Olá, mundo!";
console.log(texto.length); // Imprime o comprimento da string
console.log(texto[0]);
console.log(texto[10]);

let nome = "bruna";
console.log(nome.split(' ').map(palavra => palavra.charAt(0).toUpperCase() +
 palavra.slice(1).toLowerCase()));

 let frase = "Aprender JavaScript é divertido!";
 console.log(frase.includes("JavaScript"));

 console.log("HTML é facil".replaceAll("HTML", "JavaScript"));

 let textoSujo = "   Olá,    mundo     !    ";
 console.log(textoSujo.trim());