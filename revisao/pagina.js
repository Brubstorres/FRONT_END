function pagina(){
    // cria o título
    const titulo = document.createElement("h2");
    titulo.textContent = "Lista de Tarefas";

    // cria o input
    const input = document.createElement("input");
    input.type = "text";
    input.id = "tarefaInput";
    input.placeholder = "Digite uma tarefa";

    // cria o botão
    const botao = document.createElement("button");
    botao.id = "btnAdicionar";
    botao.textContent = "Adicionar";

    // cria a lista
    const lista = document.createElement("ul");
    lista.id = "listaTarefas";

    // adiciona tudo no body
    document.body.appendChild(titulo);
    document.body.appendChild(input);
    document.body.appendChild(botao);
    document.body.appendChild(lista);

    // ===== sua lógica original =====
    botao.addEventListener("click", () =>{
        const novaTarefa = document.createElement("li");  
        const texto = input.value.trim();

        if(texto === ""){ 
            alert("Digite algo!");
            return;
        }

        novaTarefa.textContent = texto;
        novaTarefa.classList.add("destaque");
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase());
        novaTarefa.style.color = "#333";

        lista.appendChild(novaTarefa);

        novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo:", tarefa);
            novaTarefa.classList.remove("destaque");
            novaTarefa.classList.add("removido");
            novaTarefa.innerHTML += " (removida)";
            setTimeout(()=>{lista.removeChild(novaTarefa);}, 1000);
        });
    });
}