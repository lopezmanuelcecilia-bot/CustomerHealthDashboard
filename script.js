let grafica = null;


function comprar(){

let cliente = document.getElementById("cliente").value;
let monto = parseFloat(document.getElementById("monto").value);

if(!monto){
alert("Ingresa un monto");
return;
}

clientes[cliente].compras.push(monto);

if(clientes[cliente].compras.length > 10){
clientes[cliente].compras.shift();
}

guardarDatos();

alert("Compra registrada");

document.getElementById("monto").value="";

}


function actualizarValor(cliente,campo,valor){

clientes[cliente][campo] = parseFloat(valor);

guardarDatos();

analizarClientes();

}


function analizarClientes(){

let tabla = document.getElementById("tablaClientes");

if(!tabla) return;

tabla.innerHTML="";

for(let cliente in clientes){

let data = clientes[cliente];

let compras = data.compras;

let ultima = compras[compras.length-1];

let promedio = compras.reduce((a,b)=>a+b)/compras.length;

let estado="";
let clase="";
let recomendacion="";

if(ultima < promedio*0.6 || data.nps <7 || data.quejas >2){

estado="🔴 Riesgo Alto";
clase="rojo";

recomendacion="Contactar inmediatamente al cliente, revisar servicio y resolver quejas.";

}

else if(ultima < promedio || data.servicio <85){

estado="🟡 Riesgo Medio";
clase="amarillo";

recomendacion="Realizar seguimiento preventivo y revisar indicadores.";

}

else{

estado="🟢 Cliente Saludable";
clase="verde";

recomendacion="Mantener relación comercial y explorar oportunidades.";

}

let historial = compras.join(" | ");

let fila = `
<tr class="${clase}">

<td>${cliente}</td>

<td>${historial}</td>

<td>
<input type="number" value="${data.servicio}" 
onchange="actualizarValor('${cliente}','servicio',this.value)">
</td>

<td>
<input type="number" value="${data.puntualidad}" 
onchange="actualizarValor('${cliente}','puntualidad',this.value)">
</td>

<td>
<input type="number" value="${data.nps}" 
onchange="actualizarValor('${cliente}','nps',this.value)">
</td>

<td>
<input type="number" value="${data.quejas}" 
onchange="actualizarValor('${cliente}','quejas',this.value)">
</td>

<td>${estado}</td>

<td>${recomendacion}</td>

<td>
<button onclick="mostrarGrafica('${cliente}')">
Ver
</button>
</td>

</tr>
`;

tabla.innerHTML += fila;

}

}


function mostrarGrafica(cliente){

let datos = clientes[cliente].compras;

let ctx = document.getElementById("graficaCompras").getContext("2d");

if(grafica){
grafica.destroy();
}

grafica = new Chart(ctx,{

type:'line',

data:{
labels:["1","2","3","4","5","6","7","8","9","10"],
datasets:[{
label:"Compras de "+cliente,
data:datos
}]
},

options:{
responsive:true
}

});

}