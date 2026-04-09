let grafica = null;

/* ===============================
   REGISTRAR COMPRA
================================= */
function comprar() {
    let cliente = document.getElementById("cliente").value;
    let monto = parseFloat(document.getElementById("monto").value);

    if (!monto || monto <= 0) {
        alert("Ingresa un monto válido");
        return;
    }

    clientes[cliente].compras.push(monto);

    if (clientes[cliente].compras.length > 10) {
        clientes[cliente].compras.shift();
    }

    guardarDatos();
    alert("✅ Compra registrada correctamente");
    document.getElementById("monto").value = "";
}

/* ===============================
   ACTUALIZAR MÉTRICAS
================================= */
function actualizarValor(cliente, campo, valor) {
    clientes[cliente][campo] = parseFloat(valor);
    guardarDatos();
    analizarClientes();
}

/* ===============================
   ANALIZAR CLIENTES
================================= */
function analizarClientes() {
    let tabla = document.getElementById("tablaClientes");
    if (!tabla) return;

    tabla.innerHTML = "";

    let alto = 0;
    let saludables = 0;
    let sumaNPS = 0;
    let totalClientes = 0;

    for (let cliente in clientes) {
        let data = clientes[cliente];
        let compras = data.compras;
        let ultima = compras[compras.length - 1];
        let promedio = compras.reduce((a, b) => a + b) / compras.length;

        let score = 100;
        let estado = "";
        let clase = "";
        let recomendacion = "";

        if (ultima < promedio * 0.6) score -= 30;
        if (data.servicio < 85) score -= 20;
        if (data.puntualidad < 85) score -= 20;
        if (data.nps < 7) score -= 20;
        if (data.quejas > 2) score -= 10;

        if (score < 50) {
            estado = "Riesgo Alto";
            clase = "rojo";
            recomendacion = "Contactar inmediatamente al cliente.";
            alto++;
        } else if (score < 75) {
            estado = "Riesgo Medio";
            clase = "amarillo";
            recomendacion = "Seguimiento preventivo recomendado.";
        } else {
            estado = "Saludable";
            clase = "verde";
            recomendacion = "Mantener relación comercial.";
            saludables++;
        }

        sumaNPS += data.nps;
        totalClientes++;

        let historial = compras.slice(-5).join(" | ");

        let fila = `
        <tr class="${clase}">
            <td>${cliente}</td>

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

            <td>
                <span class="estado-dot ${clase}"></span>
                ${estado}
            </td>

            <td>${score}/100</td>

            <td>
                <button onclick="window.location.href='Analisis.html?cliente=' + encodeURIComponent('${cliente}')">
                    Analizar
                </button>
            </td>
        </tr>
        `;

        tabla.innerHTML += fila;
    }

    document.getElementById("altoRiesgo").innerText = alto;
    document.getElementById("clientesSaludables").innerText = saludables;
    document.getElementById("promedioNPS").innerText =
        (sumaNPS / totalClientes).toFixed(1);
}

/* ===============================
   MOSTRAR GRAFICA PREMIUM
================================= */
function mostrarGrafica(cliente) {
    let datos = clientes[cliente].compras;
    let ctx = document.getElementById("graficaCompras").getContext("2d");

    if (grafica) {
        grafica.destroy();
    }

    grafica = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1","2","3","4","5","6","7","8","9","10"],
            datasets: [{
                label: "Compras de " + cliente,
                data: datos,
                borderColor: "#38bdf8",
                backgroundColor: "rgba(56,189,248,0.15)",
                borderWidth: 3,
                pointBackgroundColor: "#38bdf8",
                pointBorderColor: "#ffffff",
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.35,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    labels: {
                        color: "#ffffff",
                        font: {
                            size: 14
                        }
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: "#ffffff"
                    },
                    grid: {
                        color: "rgba(255,255,255,0.08)"
                    }
                },
                y: {
                    ticks: {
                        color: "#ffffff"
                    },
                    grid: {
                        color: "rgba(255,255,255,0.08)"
                    }
                }
            }
        }
    });
}