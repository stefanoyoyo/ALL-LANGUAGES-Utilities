/** 
File contnente le funzioni estratte da combi.js scaricato da
htoperation_type://utenti.quipo.it/base5/combinatoria/calcombinat.htm
*/

function flow(N, K, operation_type){
		var N=parseFloat(N);
		var K=parseFloat(K);
		let result = null;
		switch (operation_type){
			case 'per1':{
				var res=fac(0,N);
				result = "P("+N+","+N+") = "+res;
				break;
			}
			case 'per2':{
				var num1=N-K;
				var num2=N;
				var res=fac(num1,num2);
				result = "D("+N+","+K+") [senza ripetizioni] = "+res;
				break;
			}
			case 'per3':{
				var res=Math.pow(N,K);
				var resstr=res.toString();
				var reslen=resstr.length;
				var ok=true;
				for(var i=0;i<reslen;i++){
					var lit=resstr.charAt(i);
					if (lit<'0'||lit>'9'){
						ok=false;
					}
				}
				result = "D("+N+","+K+") [con ripetizioni] = "+res
				break;
			}
			case 'per4':{
				if((N-1)>=K){
					var num1=N-1;
					var num2=N+K-1;
					var res1=fac(num1,num2)
					var res2=fac(0,K);
					var resstr1=res1.toString();
					var resstr2=res2.toString();
					var reslen1=resstr1.length;
					var reslen2=resstr2.length;
					var ok=true;
					for(var i=0;i<reslen1;i++){
						var lit=resstr1.charAt(i);
					}
					for(var i=0;i<reslen2;i++){
						var lit=resstr2.charAt(i);
					}
					var res=res1/res2;
					result = "C("+N+","+K+") [con ripetizioni] = "+res
				}
				else{
					var num1=K;
					var num2=N+K-1;
					var res1=fac(num1,num2);
					var res2=fac(0,(N-1));
					var resstr1=res1.toString();
					var resstr2=res2.toString();
					var reslen1=resstr1.length;
					var reslen2=resstr2.length;
					var ok=true;
					for(var i=0;i<reslen1;i++){
						var lit=resstr1.charAt(i);
					}
					for(var i=0;i<reslen2;i++){
						var lit=resstr2.charAt(i);
					}
					var res=res1/res2;
					result = "C("+N+","+K+") [con ripetizioni] = "+res
				}
				break;
			}
			case 'per5':{
				var num1=N-K;
				if(num1<0){
					var msg="La condizione per C(n,k) senza ripetizioni è k <= n.";
					ok=false;
					break;
				}
				if(num1>=K){
					var num2=N;
					var res1=fac(num1,num2)
					var res2=fac(0,K);
					var resstr1=res1.toString();
					var resstr2=res2.toString();
					var reslen1=resstr1.length;
					var reslen2=resstr2.length;
					var ok=true;
					for(var i=0;i<reslen1;i++){
						var lit=resstr1.charAt(i);
					}
					for(var i=0;i<reslen2;i++){
						var lit=resstr2.charAt(i);
						if (lit<'0'||lit>'9'){
							ok=false;
						}
					}
					var res=res1/res2;
					result = "C("+N+","+K+") [senza ripetizioni] = "+res
				}
				else{
					var num1=K;
					var num2=N;
					if(num1==num2){
						res1=1;
					}
					else{
						var res1=fac(num1,num2);
					}
					var res2=fac(0,(N-K));
					var resstr1=res1.toString();
					var resstr2=res2.toString();
					var reslen1=resstr1.length;
					var reslen2=resstr2.length;
					var ok=true;
					for(var i=0;i<reslen1;i++){
						var lit=resstr1.charAt(i);
						if (lit<'0'||lit>'9'){
							ok=false;
						}
					}
					for(var i=0;i<reslen2;i++){
						var lit=resstr2.charAt(i);
						if (lit<'0'||lit>'9'){
							ok=false;
						}
					}
					if(ok==false){
						var msg="C("+N+","+K+") [senza ripetizioni] = il risultato è troppo grande.";
					}
					else{
						var res=res1/res2;
						result = "C("+N+","+K+") [senza ripetizioni] = "+res
					}
				}
				break;
			}
		}
		return result;
}

function getCharactersDispositions(N,K,res, alphabet, operation_type) 
{
	let result = null;
	switch(operation_type){
		case 'per1':{
			var ar=new Array();
			for(i=0;i<=N-1;i++){
				ar[i]=new Array();
			}
			ar=enumer1(N,K,res, alphabet);
			result = ar;
		}
		break;
		case 'per2':{
			var ar=new Array();
			for(i=0;i<=N-1;i++){
				ar[i]=new Array();
			}
			ar=enumer2(N,K,res, alphabet);
			result = ar;
		}
		break;
		case 'per3':{
			var ar=new Array();
				for(i=0;i<=K-1;i++){
				ar[i]=new Array();
			}
			ar=enumer3(N,K,res, alphabet);
			// console.log("ar: " + ar);
			result = ar;
		}
		break;
		case 'per4':{
			var ar=new Array();
			for(i=0;i<=K-1;i++){
				ar[i]=new Array();
			}
			ar=enumer4(N,K,res, alphabet);
			result = ar;
		}
		break;
		case 'per5':{
			var ar=new Array();
			for(i=0;i<=K-1;i++){
				ar[i]=new Array();
			}
			ar=enumer5(N,K,res, alphabet);
			result = ar;
		}
		break;
	}
	
	return result;
}

function enumer5(N,K,res, alphabetParam){
	var alfabet= alphabetParam != null? alphabetParam : "abcdefghijklmnopqrstuvwxyz";
	var pmut=new Array();
	for(i=0;i<=K-1;i++){
		pmut[i]=new Array();
	}
	var count=new Array();
	var main=alfabet.substring(0,N);
	for(i=0;i<=N-1;i++){
		pmut[0][i]=main.substring(i,i+1);
	}
	count[0]=N;
	var aux1="";
	var aux2=0;
	var add="";
	for(i=1;i<=(K-1);i++){
		count[i]=0;
		for(k=0;k<=(count[i-1]-1);k++){
			aux1=pmut[i-1][k].charAt(i-1);
			aux2=main.indexOf(aux1)+1;
			for(m=aux2;m<=(N-1);m++){
				add=main.substring(m,m+1);
				pmut[i][count[i]]=pmut[i-1][k]+add;
				count[i]++;
			}
		}
	}
	return pmut;
}
function enumer4(N,K,res, alphabetParam){
	var alfabet= alphabetParam != null? alphabetParam : "abcdefghijklmnopqrstuvwxyz";
	var pmut=new Array();
	for(i=0;i<=K-1;i++){
		pmut[i]=new Array();
	}
	var count=new Array();
	var main=alfabet.substring(0,N);
	for(i=0;i<=N-1;i++){
		pmut[0][i]=main.substring(i,i+1);
	}
	count[0]=N;
	var aux1="";
	var aux2=0;
	var add="";
	for(i=1;i<=(K-1);i++){
		count[i]=0;
		for(k=0;k<=(count[i-1]-1);k++){
			aux1=pmut[i-1][k].charAt(i-1);
			aux2=main.indexOf(aux1);
			for(m=aux2;m<=(N-1);m++){
				add=main.substring(m,m+1);
				pmut[i][count[i]]=pmut[i-1][k]+add;
				count[i]++;
			}
		}
	}
	return pmut;
}
function enumer3(N,K,res, alphabetParam){
	var alfabet= alphabetParam != null? alphabetParam : "abcdefghijklmnopqrstuvwxyz";
	N = alfabet.length;
	var pmut=new Array();
	for(i=0;i<=K-1;i++){
		pmut[i]=new Array();
	}
	var count=new Array();
	var main=alfabet.substring(0,N);
	for(i=0;i<=N-1;i++){
		pmut[0][i]=main.substring(i,i+1);
	}
	count[0]=N;
	for(i=1;i<=K-1;i++){
		count[i]=0;
		for(k=0;k<=N-1;k++){
			add=main.substring(k,k+1);
			for(m=0;m<=count[i-1]-1;m  ++){	
				pmut[i][count[i]]=pmut[i-1][m]+add;
				count[i]++;
			}
		}
	}
	return pmut;
}
function enumer2(N,K,res, alphabetParam){
	var alfabet= alphabetParam != null? alphabetParam : "abcdefghijklmnopqrstuvwxyz";
	var pmut=new Array();
	for(i=0;i<=N-1;i++){
		pmut[i]=new Array();
	}
	var count=new Array();
	var main=alfabet.substring(0,N);
	for(i=0;i<=N-1;i++){
			pmut[0][i]=main.substring(i,i+1);
	}
	count[0]=N;
	for(i=1;i<=K-1;i++){
		count[i]=0;
		for(k=0;k<=N-1;k++){
			add=main.substring(k,k+1);
			for(m=0;m<=count[i-1]-1;m++){
				var ok=true;
				for(q=0;q<=i-1;q++){
					if(add==pmut[i-1][m].substring(q,q+1)){
						ok=false;
						continue;
					}
				}
				if(ok==true){
					pmut[i][count[i]]=pmut[i-1][m]+add;
					count[i]++;
				}
			}
		}
	}
	return pmut
}
function enumer1(N,K,res, alphabetParam){
	var pmut=new Array();
	for(i=0;i<=N-1;i++){
		pmut[i]=new Array();
	}
	var count=new Array();
	var alfabet= alphabetParam != null? alphabetParam : "abcdefghijklmnopqrstuvwxyz";
	var main=alfabet.substring(0,N);
	var zz="";
	var x1="";
	var x2="";
	var add="";
	pmut[0][0]="a";
	count[0]=1;
	for(i=1;i<=N-1;i++){
		add=main.substring(i,i+1);
		count[i]=0;
		for(k=0;k<=(count[i-1]-1);k++){
			pmut[i][count[i]]=add+pmut[i-1][k];
			count[i]++;
			zz=pmut[i][count[i]-1];
			for(m=0;m<=(i-1);m++){
				count[i]++;
				x1=zz.substring(m,m+1);
				x2=zz.substring(m+1,m+2);
				zz=zz.replace(x2,x1);
				zz=zz.replace(x1,x2);
				pmut[i][count[i]-1]=zz;
			}
		}
	}
	return pmut
}
function fac(from,to){
	var f=from+1;
	for(i=(from+2);i<=to;i++){
		f*=i;
	}
	return f
}
function val(nr){
	var ok=true;
	if(nr.toString().length>=13){
		ok=false;
	}
	return ok;
}


/** ----------ESECUZIONE DELL'APP---------- **/
// La pagina ha il tempo di caricare
setTimeout(() => {

	const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
	const alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numbers = "0123456789";
	const characters = "+-*/.,#@[]()";
	const alphabet = alphabetLowerCase + alphabetUpperCase + numbers + characters;
	const alphlength = alphabet.length;
	
	const wordLength = 5;
	const iterateTimes = alphlength * wordLength;
	
	const num = flow(5, 3, "per3")
	console.log('num: ' + num)
	
	// Nessun alfabeto passato come parametro, funziona
	// ar=enumer3(alphlength, 2, alphlength*alphlength);
	// console.log("ARR: " + ar);
	
	// Alfabeto passato come parametro, funziona
	// ar=enumer3(alphlength, 2, alphlength*alphlength, alphabet);
	// console.log("ARR: " + ar);
	
	// const arr = getCharactersDispositions(alphlength, 4, iterateTimes, alphabet, 'per3');
	// console.log("ARR: " + arr);
	
	const prom = new Promise((resolve, reject) => {
		console.log('-----Words building started-----')
		const arr = getCharactersDispositions(alphlength, 5, iterateTimes, alphabet, 'per3');
		// console.log("ARR: " + arr);
		console.log("---DONE---");
		resolve(arr);
	});
	
	prom.then((result) => {
		// console.log('result: ' + result)
		const serial = JSON.stringify(result);
		writeToFile('5.txt', serial)
		// var b = document.getElementById('result');
		// b.innerHTML= result;
	} )



}, 1000)


function writeToFile(filename, text) {
	var fs = require('fs');
	var data = text;
	fs.writeFile(filename, data,
		// callback function that is called after writing file is done
		function(err) {     
			if (err) throw err;
			// if no error
			console.log("Data is written to file successfully.")
	});
}
