
let cont = 1;
let cartas = 2;

while(cont==1){
	cartas = prompt('quantas cartas vc quer utilizar?');
	if(cartas>3){
		if(cartas<15){
			if(cartas%2==0){
				cont = 0;
			}
		}		
	} 
}
//criaçção das cartas

const imagemcarta = [
	"./imagens/fiestaparrot.gif",
	"./imagens/metalparrot.gif",
	"./imagens/revertitparrot.gif",
	"./imagens/tripletsparrot.gif",
	"./imagens/unicornparrot.gif",
	"./imagens/bobrossparrot.gif",
	"./imagens/explodyparrot.gif"
];

const baralho = document.querySelector('ul');
const deck = [];
let i =0;

while(cont<(cartas/2)){
	while(i<=1){
		deck.push(
		`<li>
			<div class="cardclass" data-test='card'>
	  			<div class="front-face face">
					<img data-test="face-down-image" class="form_image" src="./imagens/back.png">
	  			</div>
	  			<div class="back-face face">
	  				<img data-test="face-up-image" src="${imagemcarta[cont]}">
	  			</div>
			</div>
  		</li>`);
		i++;
	}
	i=0;
	cont++;
}

cont=0; 

deck.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}


//escreve a array deck no codigo html.

while(cont<cartas){  
	baralho.innerHTML = baralho.innerHTML + deck[cont];
	cont++
}

//começando a jogar

let jogadas = 0;
let primeira_escolha = '';
let segunda_escolha = '';
let end = 0;

const deck_aux = document.querySelectorAll(".cardclass");

cont=0;

deck_aux.forEach((carta) => {
	carta.addEventListener("click", () => {
	  if (!carta.classList.contains("virada") && cont < 1) {
		carta.classList.add("virada");
		cont++;
		primeira_escolha = carta;
		jogadas++;
	  } else if (!carta.classList.contains("virada") && cont < 2) {
		carta.classList.add("virada");
		cont++;
		segunda_escolha = carta;
		setTimeout(compararPar,1000,primeira_escolha,segunda_escolha);
		jogadas++;
	  }
	});
})

//mudar nome da função
function compararPar(a, b) {
	if (a.querySelector('.back-face>img').src === b.querySelector('.back-face>img').src) {
	  cont = 0;
	  a = '';
	  b = '';
	  end++;
	} else if (a.querySelector('.back-face>img').src !== b.querySelector('.back-face>img').src) {
	  cont = 0;
	  a.classList.remove('virada');
	  b.classList.remove('virada');
	  a = '';
	  b = '';
	}
	if(end===cartas/2){
	  alert (`Você ganhou em ${jogadas} jogadas!`);
	}
  }

/*
while(end<cartas){
	//seleciona 1 carta
	//seleciona 2 carta
//	if(){ // se a carta1 == carta2
//		//add a finalizado as cartas
//		end +=2;
//	}
	
}
*/