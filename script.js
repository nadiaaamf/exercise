let student = prompt("Qual o nome do(a) aluno(a)?")
let a1 = prompt("Qual a nota da primeira prova?")
let a2 = prompt("Qual a nota da segunda prova?")

let result = (Number(a1) + Number(a2)) / 2

let approval = result >= 7 

result = result.toFixed(2)

if (approval) {
    alert("A média do(a) aluno(a) " + student + 
 " é: " + result + " \n Parabéns, " + 
student + "! Você foi aprovado(a) no concurso!")

} else {
    alert("A média do(a) aluno(a) " + student + 
 " é: " + result + " \n Não foi dessa vez, " + 
student + "! Espero que tente novamente!")
}