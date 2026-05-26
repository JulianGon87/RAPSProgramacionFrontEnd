/**
 * Aplicación Principal Vue 3
 * Inicializa y gestiona el estado global de la interfaz, el cálculo de calificaciones (notas) y el registro de usuarios.
 */

const { createApp } = Vue;

createApp({
    data() {
        return {
            // Pestaña activa por defecto
            activeTab: 'calificaciones',

            // Estado y datos del formulario de calificaciones (notas)
            formCalificaciones: {
                nota1: null,
                nota2: null,
                nota3: null,
                asistencia: null,
                globalError: '',
                showResult: false,
                promedio: null,
                estado: ''
            },

            // Estado y datos del formulario de registro de usuarios
            formRegistro: {
                nombre: '',
                correo: '',
                password: '',
                passwordConfirm: '',
                errors: {
                    nombre: '',
                    correo: '',
                    password: '',
                    passwordConfirm: ''
                }
            }
        };
    },

    methods: {
        /**
         * Alterna la vista activa entre las pestañas disponibles de la barra de navegación (calificaciones y formulario).
         */
        switchTab(tab) {
            this.activeTab = tab;
        },

        /**
         * Lógica de cálculo y validación de calificaciones (notas).
         */
        handleCalificaciones() {
            const { nota1, nota2, nota3, asistencia } = this.formCalificaciones;

            // Invoca validador 
            const esValido = AppValidators.validarCalificaciones(nota1, nota2, nota3, asistencia);

            if (!esValido) {
                this.formCalificaciones.globalError = 'Por favor, ingrese valores válidos: Notas entre 10 y 70, y Asistencia entre 0 y 100.';
                this.formCalificaciones.showResult = false;
                return;
            }

            // Limpiar errores si la validación es correcta
            this.formCalificaciones.globalError = '';

            // Calcular promedio ponderado exacto
            const promedio = AppUtils.calcularPromedioPonderado(nota1, nota2, nota3);
            this.formCalificaciones.promedio = promedio;

            // Regla de aprobación: Nota >= 40 y Asistencia >= 70
            if (promedio >= 40 && asistencia >= 70) {
                this.formCalificaciones.estado = 'Aprobado';
            } else {
                this.formCalificaciones.estado = 'Reprobado';
            }

            // Muestra el contenedor de resultados de forma animada
            this.formCalificaciones.showResult = true;
        },

        /**
         * Gestiona el registro de usuarios y su validación.
         */
        handleRegistro() {
            const datos = {
                nombre: this.formRegistro.nombre,
                correo: this.formRegistro.correo,
                password: this.formRegistro.password,
                passwordConfirm: this.formRegistro.passwordConfirm
            };

            // Invoca al validador del formulario
            const { esValido, errores } = AppValidators.validarFormularioRegistro(datos);

            if (!esValido) {
                // Si hay errores, los muestra en la interfaz reactiva
                this.formRegistro.errors = errores;
                return;
            }

            // Si es válido, limpia los errores y los campos del formulario de forma síncrona
            this.formRegistro.nombre = '';
            this.formRegistro.correo = '';
            this.formRegistro.password = '';
            this.formRegistro.passwordConfirm = '';
            this.formRegistro.errors = {
                nombre: '',
                correo: '',
                password: '',
                passwordConfirm: ''
            };

            // Retrasa la alerta un instante para garantizar que el navegador pinte los campos vacíos
            setTimeout(() => {
                alert('¡El registro se ha procesado con éxito!');
            }, 100);
        },

        /**
         * Validación en tiempo real, actuando de forma interactiva a medida que el usuario escribe.
         */
        validarCampo(campo) {
            const datos = {
                nombre: this.formRegistro.nombre,
                correo: this.formRegistro.correo,
                password: this.formRegistro.password,
                passwordConfirm: this.formRegistro.passwordConfirm
            };

            // Invoca el validador del formulario para obtener errores actuales
            const { errores } = AppValidators.validarFormularioRegistro(datos);

            // Actualiza el error específico de forma reactiva
            this.formRegistro.errors[campo] = errores[campo];

            // Se re-evalúan las contraseñas para verificar coherencia
            if (campo === 'password' || campo === 'passwordConfirm') {
                this.formRegistro.errors.password = errores.password;
                this.formRegistro.errors.passwordConfirm = errores.passwordConfirm;
            }
        }
    }
}).mount('#app');