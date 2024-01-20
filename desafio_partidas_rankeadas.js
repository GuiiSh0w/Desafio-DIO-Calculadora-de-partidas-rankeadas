//Criando a função para calcular o saldo entre vitórias e derrotas //
function calcularRank(vitorias, derrotas){
	return vitorias - derrotas
}

//Declarando as variáveis para o nível do Herói e o seu saldo de Vitórias //
let saldoVitorias = calcularRank(200, 5)
let nivelHeroi = ""

//Bloco de repetições condicionais para determinar o nível do Herói //
// com base no saldo das suas vitórias e derrotas // 
if (saldoVitorias <= 10){
	nivelHeroi = "Ferro";  
}

else if (saldoVitorias >= 11 && saldoVitorias <= 20){
	nivelHeroi = "Bronze";
}

else if (saldoVitorias >= 21 && saldoVitorias <= 50){
	nivelHeroi = "Prata";
}

else if (saldoVitorias >= 51 && saldoVitorias <= 80){
	nivelHeroi = "Ouro";
}

else if (saldoVitorias >= 81 && saldoVitorias <= 90){
	nivelHeroi = "Diamante";
}

else if (saldoVitorias >= 91 && saldoVitorias <= 100){
	nivelHeroi = "Lendário";
}

else if (saldoVitorias >= 101){
	nivelHeroi = "Imortal";
}

// Saída do código exibindo o saldo de vítorias e o nível do Herói //
console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível de um ${nivelHeroi}`)