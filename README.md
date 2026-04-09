# Customer Health AI Dashboard
Hackatón Bécalos Traxión Tech Challenge 2026  
Eje 2: Detección temprana de clientes en riesgo (Customer Health)

---

## Descripción del Proyecto

Este proyecto es un prototipo web que ayuda a detectar clientes corporativos en riesgo antes de que manifiesten inconformidad formal.

El sistema analiza métricas clave de clientes:
- Historial de compras
- Nivel de servicio
- Puntualidad
- NPS
- Quejas abiertas

Con base en estas variables, clasifica automáticamente el nivel de riesgo del cliente y genera recomendaciones preventivas.

---

## Problema de Negocio

Actualmente las métricas de clientes se analizan por separado, lo que provoca:
- Reacción tardía
- Gestión reactiva
- Pérdida de oportunidades de retención

Nuestro sistema convierte datos dispersos en alertas preventivas accionables.

---

## Solución Propuesta

Se desarrolló un dashboard inteligente que:

1. Detecta tendencias negativas en compras.
2. Calcula Health Score por cliente.
3. Clasifica riesgo:
   - Riesgo Alto
   - Riesgo Medio
   - Cliente Saludable
4. Sugiere acciones preventivas.

---

## Lógica del Modelo

El algoritmo evalúa:

- Caída en compras
- Servicio < 85%
- Puntualidad < 85%
- NPS < 7
- Quejas > 2

Cada factor reduce el Health Score.

Score final:
- 0–49 = Riesgo Alto
- 50–74 = Riesgo Medio
- 75–100 = Saludable

---

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Chart.js
- LocalStorage

---

## Beneficios Esperados

- Reducción de churn reactivo
- Priorización proactiva de clientes
- Mejora en NPS
- Atención preventiva más eficiente

---

## Limitaciones

- Datos simulados
- No conectado a sistemas reales
- No usa machine learning real

---

## Integrantes

[Tu nombre y equipo]

---

## Cómo Ejecutarlo

1. Abrir `cliente.html`
2. Abrir `dashboard.html`
3. Registrar compras
4. Analizar clientes en dashboard

---