let clientes = JSON.parse(localStorage.getItem("clientes"));

if(!clientes){

clientes = {

"Empresa ABC":{
compras:[2000,1800,1600,1500,1200,1100,1000,900,850,800],
servicio:82,
puntualidad:75,
nps:6,
quejas:3
},

"Empresa Beta":{
compras:[1200,1250,1300,1280,1290,1310,1320,1340,1350,1360],
servicio:95,
puntualidad:93,
nps:9,
quejas:0
},

"Empresa Gamma":{
compras:[800,820,790,760,740,720,700,680,650,600],
servicio:88,
puntualidad:85,
nps:7,
quejas:1
},

"Empresa Delta":{
compras:[1500,1480,1470,1450,1400,1300,1250,1200,1100,1000],
servicio:80,
puntualidad:82,
nps:6,
quejas:2
},

"Empresa Omega":{
compras:[900,950,980,1000,1020,1050,1100,1120,1150,1180],
servicio:92,
puntualidad:91,
nps:8,
quejas:0
}

};

localStorage.setItem("clientes",JSON.stringify(clientes));

}

function guardarDatos(){

localStorage.setItem("clientes",JSON.stringify(clientes));

}