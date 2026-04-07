function revisao(){
    let nome = "Bruna";
    console.log(nome);
    if (true){
        let sobrenome = "Torres";
        console.log(sobrenome);
    }
    //console.log(sobrenome); // variavel sobrenome não existe neste contexto
    const idade = 16;
    console.log(idade);
    //idade = 16;

    const precoOriginal = 100;
    const desconto = 20;
    let precoFinal = precoOriginal - desconto;

    console.log("Preço Original: " + precoOriginal);
    console.log("Desconto: " + desconto);
    console.log("Preço Final: " + precoFinal);
}
revisao();