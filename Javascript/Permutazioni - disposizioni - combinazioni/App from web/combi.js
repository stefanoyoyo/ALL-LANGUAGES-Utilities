<!--
/* author: k.ijntema*/
/* Creation date: 26-3-2007 */
function flow(tnum){
	if(form1.radio1[0].checked&&form1.text1.value!=""){
		form1.text2.value=form1.text1.value;
	}
	else{
		if(form1.radio1[0].checked&&form1.text1.value==""&&form1.text2.value!=""){
			form1.text1.value=form1.text2.value;
		}
	}
	var varn=form1.text1.value;
	var vark=form1.text2.value;
	form1.area1.value="";
	var ok=validate(varn,vark);
	if (ok==false){
		form1.area1.value="";
		form1.text1.select();
		form1.area1.value="Hai scritto: n = "+varn+"   k = "+vark+"\nn e k devono essere INTERI e POSITIVI.";
		form1.text1.focus();
	}
	else{
		for(var i=0;i<5;i++){
			if (form1.radio1[i].checked){
				var tp=form1.radio1[i].value;
			}
		}
		var varn=parseFloat(varn);
		var vark=parseFloat(vark);
		switch (tp){
			case 'per1':{
				var res=fac(0,varn);
				var ok=val(res);
				if(ok==false){
					var msg="P("+varn+","+varn+"), il risultato è troppo grande.";
					show(msg);
				}
				else{
					form1.area1.value="P("+varn+","+varn+") = "+res;
				}
				break;
			}
			case 'per2':{
				var num1=varn-vark;
				var num2=varn;
				if(num1<0){
					var msg="Una condizione per D(n,k) senza ripetizioni è: k <= n.";
					ok=false;
					show(msg);
				}
				else{
					var res=fac(num1,num2);
					var ok=val(res);
					if(ok==false){
						var msg="D("+varn+","+vark+"), il risultato è troppo grande.";
						show(msg);
					}
					else{
						form1.area1.value="D("+varn+","+vark+") [senza ripetizioni] = "+res;
					}
				}
				break;
			}
			case 'per3':{
				var res=Math.pow(varn,vark);
				var resstr=res.toString();
				var reslen=resstr.length;
				if(reslen>=13){
					var msg="D("+varn+","+vark+") [con ripetizioni] = il risultato è troppo grande.";
					ok=false;
					show(msg);
				}
				else{
					var ok=true;
					for(var i=0;i<reslen;i++){
						var lit=resstr.charAt(i);
						if (lit<'0'||lit>'9'){
							ok=false;
						}
					}
					if(ok==false){
						var msg="D("+varn+","+vark+") [con ripetizioni] = il risultato è troppo grande.";
						show(msg);
					}
					else{
						form1.area1.value="D("+varn+","+vark+") [con ripetizioni] = "+res
					}
				}
				break;
			}
			case 'per4':{
				if((varn-1)>=vark){
					var num1=varn-1;
					var num2=varn+vark-1;
					var res1=fac(num1,num2)
					var res2=fac(0,vark);
					var resstr1=res1.toString();
					var resstr2=res2.toString();
					var reslen1=resstr1.length;
					var reslen2=resstr2.length;
					if(reslen1>=13||reslen2>=13){
						var msg="C("+varn+","+vark+") [con ripetizioni] = il risultato è troppo grande.";
						ok=false;
						show(msg);
					}
					else{
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
							var msg="C("+varn+","+vark+") [con ripetizioni] = il risultato è troppo grande.";
							show(msg);
						}
						else{
							var res=res1/res2;
							form1.area1.value="C("+varn+","+vark+") [con ripetizioni] = "+res
						}
					}
				}
				else{
					var num1=vark;
					var num2=varn+vark-1;
					var res1=fac(num1,num2);
					var res2=fac(0,(varn-1));
					var resstr1=res1.toString();
					var resstr2=res2.toString();
					var reslen1=resstr1.length;
					var reslen2=resstr2.length;
					if(reslen1>=13||reslen2>=13){
						var msg="C("+varn+","+vark+") [con ripetizioni] = il risultato è troppo grande.";
						ok=false;
						show(msg);
					}
					else{
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
							var msg="C("+varn+","+vark+") [con ripetizioni] = il risultato è troppo grande.";
							show(msg);
						}
						else{
							var res=res1/res2;
							form1.area1.value="C("+varn+","+vark+") [con ripetizioni] = "+res
						}
					}
				}
				break;
			}
			case 'per5':{
				var num1=varn-vark;
				if(num1<0){
					var msg="La condizione per C(n,k) senza ripetizioni è k <= n.";
					ok=false;
					show(msg);
					break;
				}
				if(num1>=vark){
					var num2=varn;
					var res1=fac(num1,num2)
					var res2=fac(0,vark);
					var resstr1=res1.toString();
					var resstr2=res2.toString();
					var reslen1=resstr1.length;
					var reslen2=resstr2.length;
					if(reslen1>=13||reslen2>=13){
						var msg="C("+varn+","+vark+") [senza ripetizioni] = il risultato è troppo grande.";
						ok=false;
						show(msg);
					}
					else{
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
							var msg="C("+varn+","+vark+") [senza ripetizioni] = il risultato è troppo grande.";
							show(msg);
						}
						else{
							var res=res1/res2;
							form1.area1.value="C("+varn+","+vark+") [senza ripetizioni] = "+res
						}
					}
				}
				else{
					var num1=vark;
					var num2=varn;
					if(num1==num2){
						res1=1;
					}
					else{
						var res1=fac(num1,num2);
					}
					var res2=fac(0,(varn-vark));
					var resstr1=res1.toString();
					var resstr2=res2.toString();
					var reslen1=resstr1.length;
					var reslen2=resstr2.length;
					if(reslen1>=13||reslen2>=13){
						var msg="C("+varn+","+vark+") [senza ripetizioni] = il risultato è troppo grande.";
						ok=false;
						show(msg);
					}
					else{
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
							var msg="C("+varn+","+vark+") [senza ripetizioni] = il risultato è troppo grande.";
							show(msg);
						}
						else{
							var res=res1/res2;
							form1.area1.value="C("+varn+","+vark+") [senza ripetizioni] = "+res
						}
					}
				}
				break;
			}
		}
	}
	if(tnum=="enum"&&ok==true){
		switch(tp){
	 		case 'per1':{
				if(res>=10001){
					var msg="L'elenco degli aggruppamenti di questo tipo è limitato a 10000 per non allungare eccessivamente i tempi di calcolo.";
					form1.area1.value+="\n\n"+msg;
				}
				else{
					var ar=new Array();
					for(i=0;i<=varn-1;i++){
						ar[i]=new Array();
					}
					ar=enumer1(varn,vark,res);
					var shw=form1.area1.value+"\n\n";
					var xy=vark-1;
					ar[xy].sort();
					for(k=0;k<res;k++){
						shw+=ar[xy][k]+"  "
					}
					form1.area1.value=shw;
				}
			}
			break;
			case 'per2':{
				if(res>=10001||varn>=27){
					var msg="L'elenco degli aggruppamenti di questo tipo è limitato a 10000 e n<27 (lettere dell'alfabeto) per non allungare eccessivamente i tempi di calcolo."
					ok=false;
					form1.area1.value+="\n\n"+msg;
				}
				else{
					var ar=new Array();
					for(i=0;i<=varn-1;i++){
						ar[i]=new Array();
					}
					ar=enumer2(varn,vark,res);
					var shw=form1.area1.value+"\n\n";
					var xy=vark-1;
					ar[xy].sort();
					for(k=0;k<res;k++){
						shw+=ar[xy][k]+"  "
					}
					form1.area1.value=shw;
				}
			}
			break;
			case 'per3':{
				if(res>=10001||varn>=27){
					var msg="L'elenco degli aggruppamenti di questo tipo è limitato a 10000 e n<27 (lettere dell'alfabeto) per non allungare eccessivamente i tempi di calcolo.";
					ok=false;
					form1.area1.value+="\n\n"+msg;
				}
				else{
					var ar=new Array();
						for(i=0;i<=vark-1;i++){
						ar[i]=new Array();
					}
					ar=enumer3(varn,vark,res);
					var shw=form1.area1.value+"\n\n";
					var xy=vark-1;
					ar[xy].sort();
					for(k=0;k<res;k++){
						shw+=ar[xy][k]+"  "
					}
					form1.area1.value=shw;
				}
			}
			break;
			case 'per4':{
				if(res>=10001||varn>=27){
					var msg="L'elenco degli aggruppamenti di questo tipo è limitato a 10000 e n<27 (lettere dell'alfabeto) per non allungare eccessivamente i tempi di calcolo.";
					ok=false;
					form1.area1.value+="\n\n"+msg;
				}
				else{
					var ar=new Array();
					for(i=0;i<=vark-1;i++){
						ar[i]=new Array();
					}
					ar=enumer4(varn,vark,res);
					var shw=form1.area1.value+"\n\n";
					var xy=vark-1;
					ar[xy].sort();
					for(k=0;k<res;k++){
						shw+=ar[xy][k]+"  "
					}
					form1.area1.value=shw;
				}
			}
			break;
			case 'per5':{
				if(res>=10001||varn>=27){
					var msg="L'elenco degli aggruppamenti di questo tipo è limitato a 10000 e n<27 (lettere dell'alfabeto) per non allungare eccessivamente i tempi di calcolo.";
					ok=false;
					form1.area1.value+="\n\n"+msg;
				}
				else{
					var ar=new Array();
					for(i=0;i<=vark-1;i++){
						ar[i]=new Array();
					}
					ar=enumer5(varn,vark,res);
					var shw=form1.area1.value+"\n\n";
					var xy=vark-1;
					ar[xy].sort();
					for(k=0;k<res;k++){
						shw+=ar[xy][k]+"  "
					}
					form1.area1.value=shw;
				}
			}
			break;
		}
	}
}
function enumer5(varn,vark,res){
	var alfabet="abcdefghijklmnopqrstuvwxyz"
	var pmut=new Array();
	for(i=0;i<=vark-1;i++){
		pmut[i]=new Array();
	}
	var count=new Array();
	var main=alfabet.substring(0,varn);
	for(i=0;i<=varn-1;i++){
		pmut[0][i]=main.substring(i,i+1);
	}
	count[0]=varn;
	var aux1="";
	var aux2=0;
	var add="";
	for(i=1;i<=(vark-1);i++){
		count[i]=0;
		for(k=0;k<=(count[i-1]-1);k++){
			aux1=pmut[i-1][k].charAt(i-1);
			aux2=main.indexOf(aux1)+1;
			for(m=aux2;m<=(varn-1);m++){
				add=main.substring(m,m+1);
				pmut[i][count[i]]=pmut[i-1][k]+add;
				count[i]++;
			}
		}
	}
	return pmut;
}
function enumer4(varn,vark,res){
	var alfabet="abcdefghijklmnopqrstuvwxyz"
	var pmut=new Array();
	for(i=0;i<=vark-1;i++){
		pmut[i]=new Array();
	}
	var count=new Array();
	var main=alfabet.substring(0,varn);
	for(i=0;i<=varn-1;i++){
		pmut[0][i]=main.substring(i,i+1);
	}
	count[0]=varn;
	var aux1="";
	var aux2=0;
	var add="";
	for(i=1;i<=(vark-1);i++){
		count[i]=0;
		for(k=0;k<=(count[i-1]-1);k++){
			aux1=pmut[i-1][k].charAt(i-1);
			aux2=main.indexOf(aux1);
			for(m=aux2;m<=(varn-1);m++){
				add=main.substring(m,m+1);
				pmut[i][count[i]]=pmut[i-1][k]+add;
				count[i]++;
			}
		}
	}
	return pmut;
}
function enumer3(varn,vark,res){
	var alfabet="abcdefghijklmnopqrstuvwxyz"
	var pmut=new Array();
	for(i=0;i<=vark-1;i++){
		pmut[i]=new Array();
	}
	var count=new Array();
	var main=alfabet.substring(0,varn);
	for(i=0;i<=varn-1;i++){
		pmut[0][i]=main.substring(i,i+1);
	}
	count[0]=varn;
	for(i=1;i<=vark-1;i++){
		count[i]=0;
		for(k=0;k<=varn-1;k++){
			add=main.substring(k,k+1);
			for(m=0;m<=count[i-1]-1;m  ++){	
				pmut[i][count[i]]=pmut[i-1][m]+add;
				count[i]++;
			}
		}
	}
	return pmut;
}
function enumer2(varn,vark,res){
	var alfabet="abcdefghijklmnopqrstuvwxyz"
	var pmut=new Array();
	for(i=0;i<=varn-1;i++){
		pmut[i]=new Array();
	}
	var count=new Array();
	var main=alfabet.substring(0,varn);
	for(i=0;i<=varn-1;i++){
			pmut[0][i]=main.substring(i,i+1);
	}
	count[0]=varn;
	for(i=1;i<=vark-1;i++){
		count[i]=0;
		for(k=0;k<=varn-1;k++){
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
function enumer1(varn,vark,res){
	var pmut=new Array();
	for(i=0;i<=varn-1;i++){
		pmut[i]=new Array();
	}
	var count=new Array();
	var alfabet="abcdefghijklmnopqrstuvwxyz"
	var main=alfabet.substring(0,varn);
	var zz="";
	var x1="";
	var x2="";
	var add="";
	pmut[0][0]="a";
	count[0]=1;
	for(i=1;i<=varn-1;i++){
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
function show(msg){
	form1.area1.value="";
	form1.text1.select();
	form1.area1.value=msg;
	form1.text1.focus();
}
function validate(){
	var ok=true;
	var dum1=form1.text1.value;
	var dum2=dum1.toString();
	var dum3=form1.text2.value;
	var dum4=dum3.toString();
	if (dum1==0||dum2==""||dum3==0||dum4==""){
		ok=false;
	}
	for (var i=0;i<dum2.length;i++){
		var lit=dum2.charAt(i);
		if (lit<'0'||lit>'9'){
			ok=false;
		}
	}
	for (var i=0;i<dum4.length;i++){
		var lit=dum4.charAt(i);
		if (lit<'0'||lit>'9'){
			ok=false;
		}
	}
	return ok;
}
function cls(){
	form1.reset();
	form1.text1.focus();
}
// -->

