window.onload = function(){
	pantalla=document.getElementById("display");//pantalla
}
x="0";//numero pantalla
xi=1;//inicia numero en pantalla
coma=0;//punto decimal
ni=0;//numero en espera
op="no";//operacion en curso
function numero(xx){//recoge numero pulsado
	if(parseInt(x.length) < 8){
			if(x=="0" || xi==1){
				pantalla.innerHTML=xx;//muestra dato
				x=xx;//guarda numero
				if(xx=="."){//captura el punto
					pantalla.innerHTML="0.";//muestra valor con 0 a la izquierda
					x=xx;
					coma=1;
				}
			}
			else{
				if(xx=="." && coma==0){
					pantalla.innerHTML+=xx;
					x+=xx;
					coma=1;//cambia estado decimal
				}
				else if(xx=="." && coma==1){}//previene que se agreguen mas puntos
				else{
					pantalla.innerHTML+=xx;
					x+=xx
				}
				
			}
			xi=0//el numero esta iniciado y se puede ampliar
		}
	}
function operar(s){
	igual();//si hay algo pendiente lo hara primero
	ni=x//primer numero en espera
	op=s;//guarda tipo de operacion
	pantalla.innerHTML="";
	xi=1;
}
function igual(){
	if(parseInt(x.length) < 8){
	if(op=="no"){
		pantalla.innerHTML=x;
	}
	else{
		sl=ni+op+x;//operacion de dos numeros en cadena
		sol=eval(sl)//conversion de cadena
		pantalla.innerHTML=sol//solucion
		x=sol;//se guarda solucion
		op="no";//no hay nada pendidente
		xi=1;//
	}
}
}

function raiz(){
	if(parseInt(x.length) < 8){
	x=Math.sqrt(x)//opera raiz cuadrada
	pantalla.innerHTML=x;//muesta resultado
	op="no";
	xi=1;
}
}
function sign(){
	nx=Number(x);//se pasa el dato de String a numero
	nx=-nx;//se le agrega el negativo
	x=String(nx);//regresa a string
	pantalla.innerHTML=x;
	xi=1;
}
function borradoTotal(){
	if(parseInt(x.length) < 8){
	pantalla.innerHTML=0;
	x="0";
	coma=0;
	ni=0
	op="no"
}
}