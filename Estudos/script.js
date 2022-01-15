/*let timer;

function comecar() {
    timer = setInterval(showTimer, 1000);
}

function parar() {
    clearInterval(timer);
}


function showTimer(){
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	let txt = h+':'+m+ ':' +s;	

	document.querySelector('.demo').innerHTML = txt;
}

*/

let carro = {
	modelo: 'Hilux',
	cor: 'Vermelha',
	ano: 2021,
	valor: {
	avista: '200 mil',
	prazo: '300 mil'
	}
   }

   console.log(Object.values(Object.keys(carro.valor)))