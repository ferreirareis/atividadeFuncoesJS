// ## Atividade 1: Alunos Aprovados

// 1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
// 2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
// 3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.


const alunos = [
    {
        nome: "Guilherme",
        nota: 8,
        turma: '3A',
    },
    {
        nome: "Vinícius",
        nota: 9,
        turma: '3A',
    },
    {
        nome: "Isabelle",
        nota: 7,
        turma: '3A',
    },
    {
        nome: "Gabriel",
        nota: 4,
        turma: '3A',
    },
]

function alunosAprovados(alunos, media){ //como parametro deve ser dado o nome da array alunos e a média
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++){
        let {nota, nome} = alunos[i];

        if (nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));