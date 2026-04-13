const pessoa = {
    nome: "Bruna",
    sobrenome: "Torres",
    idade: 16,
};

const entidade = new Map([
    ["nome", "Bruna"],
    ["sobrenome", "Torres"],
    ["idade", 16],
]);

vonsole.log(entidade.get("sobrenome"));
console.log(pessoa.sobrenome);


const professor = JSON.stringify(person);
console.log(professor);

const aluno = '{"nome": "Bruna", "sobrenome:" "Torres", "idade": 16}';
const alunoObjeto = JSON.parse(aluno);

console.log(alunoObjeto);
console.log(alunoObjeto.nome);
console.log(aluno.nome);
