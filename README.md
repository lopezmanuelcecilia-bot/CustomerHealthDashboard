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
4. Sugiere acciones preventivas automáticas.

---

## Lógica del Modelo

El algoritmo evalúa:

NIVEL DE SERVICIO:
- ≥ 95% → Bajo
- 90–94% → Medio
- < 90% → Alto

PUNTUALIDAD:
- ≥ 90% → Bajo
- 80–89% → Medio
- < 80% → Alto

NPS:
- 9-10 → Bajo
- 7–8 → Medio
- < 7  → Alto

QUEJAS ABIERTAS:
- 0 → Bajo
- 1–2 → Medio
- ≥ 3 → Alto

Esta matriz determina la clasificación automática de riesgo global dentro del sistema, indicando el grado de urgencia de intervención para cada cliente.

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

## Cómo Ejecutarlo

1. Clonar el repositorio.
2. Abrir el archivo `index.html` (Dashboard principal) usando tu navegador preferido (doble clic).
3. Automáticamente se generarán datos de prueba dinámicos (NPS, Quejas, Servicio, Puntualidad).
4. Dale en "Analizar" a cualquier cliente para entrar al Agente y consultar el informe predictivo y sus gráficas de compras.
5. Puedes registrar operaciones externas en `cliente.html` y observar cómo impactan en el Dashboard y en los modelos de prevención.

---
