/**
 * Capa de utilidades y cálculos independientes de la interfaz.
 */
const AppUtils = {
    /**
     * Calcula el promedio según las reglas del negocio:
     * Nota 1 (35%), Nota 2 (35%), Nota 3 (30%)
     */
    calcularPromedioPonderado(n1, n2, n3) {
        const peso1 = 0.35;
        const peso2 = 0.35;
        const peso3 = 0.3;

        const resultado = (n1 * peso1) + (n2 * peso2) + (n3 * peso3);

        // Retorna con dos decimales precisos
        return Number(resultado.toFixed(2));
    }
};