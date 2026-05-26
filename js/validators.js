/**
 * Motor encargado de la validación de las reglas de negocio.
 */
const AppValidators = {
    /**
     * Valida los rangos para el cálculo de notas y asistencia.
     * Rango notas: 10 a 70. Asistencia: 0 a 100.
     */
    validarCalificaciones(n1, n2, n3, asistencia) {
        // Validación de campos vacíos
        if (n1 === null || n2 === null || n3 === null || asistencia === null ||
            n1 === '' || n2 === '' || n3 === '' || asistencia === '') {
            return false;
        }

        // Verificación de límites numéricos 
        if (n1 < 10 || n1 > 70 || n2 < 10 || n2 > 70 || n3 < 10 || n3 > 70) {
            return false;
        }

        if (asistencia < 0 || asistencia > 100) {
            return false;
        }

        return true;
    },

    /**
     * Valida las restricciones del formulario de registro.
     */
    validarFormularioRegistro(datos) {
        const errores = { nombre: '', correo: '', password: '', passwordConfirm: '' };
        let esValido = true;

        // Regla 1: Nombre Requerido
        if (!datos.nombre) {
            errores.nombre = 'El campo nombre es requerido';
            esValido = false;
        }

        // Regla 2: Formato RFC/W3C de Correo electrónico estándar
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!datos.correo) {
            errores.correo = 'El campo correo es requerido';
            esValido = false;
        } else if (!emailPattern.test(datos.correo)) {
            errores.correo = 'Por favor ingresa un correo con formato válido';
            esValido = false;
        }

        // Regla 3: Contraseña Requerida
        if (!datos.password) {
            errores.password = 'El campo contraseña es requerido';
            esValido = false;
        }

        // Regla 4: Confirmación y coherencia de claves
        if (!datos.passwordConfirm) {
            errores.passwordConfirm = 'El campo repetir contraseña es requerido';
            esValido = false;
        } else if (datos.password !== datos.passwordConfirm) {
            errores.passwordConfirm = 'Las contraseñas no coinciden';
            esValido = false;
        }

        return { esValido, errores };
    }
};