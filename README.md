# Examen de Programación Front End - IPLACEX

Este es mi proyecto de examen para la asignatura de **Programación Front End**. Es una aplicación web sencilla de una sola página (SPA) donde los usuarios pueden interactuar con dos herramientas principales: una calculadora de calificaciones y un formulario de registro.

---

## ¿Qué hace este proyecto?

El sitio se divide en dos secciones que puedes cambiar desde la barra de navegación:

1. **Cálculo de Calificaciones:**
   * Permite ingresar tres notas (en rango de 10 a 70) y un porcentaje de asistencia (de 0 a 100).
   * Calcula el promedio ponderado de forma automática: Nota 1 (35%), Nota 2 (35%) y Nota 3 (30%).
   * Muestra si estás **Aprobado** (si el promedio es igual o mayor a 40 y la asistencia es de 70% o más) o **Reprobado**.
   * Incluye advertencias visuales inmediatas si ingresas valores fuera del rango permitido.

2. **Formulario de Registro:**
   * Pide ingresar nombre, correo electrónico y contraseña.
   * Valida en tiempo real que el correo tenga un formato real y que las contraseñas coincidan exactamente.
   * Los mensajes de error de color rojo aparecen y desaparecen al instante mientras escribes, sin necesidad de apretar el botón de enviar.

---

## Tecnologías que utilicé

Para armar este proyecto combiné las siguientes herramientas:

* **HTML5:** Para armar la estructura básica de la página.
* **Bootstrap 5:** Para que el diseño se vea ordenado, moderno y se adapte bien a teléfonos, tablets y computadoras.
* **CSS3:** Estilos propios para personalizar los bordes, los colores al seleccionar los recuadros y agregar una pequeña animación suave al mostrar los resultados.
* **Vue 3:** Para manejar de forma dinámica el cambio de pestañas, el cálculo matemático automático y las alertas de error al instante.
* **JavaScript estándar:** Organizado en módulos limpios para las validaciones (`validators.js`), utilidades (`utils.js`) y el arranque de la aplicación (`app.js`).

---

## ¿Cómo abrir el proyecto en tu computadora?

Al ser un proyecto web estático, no necesitas instalar nada en absoluto ni ejecutar comandos complejos:

1. Descarga o clona esta carpeta en tu computadora.
2. Haz doble clic sobre el archivo `index.html` para abrirlo directamente en tu navegador preferido (Chrome, Edge, Firefox, etc.).
