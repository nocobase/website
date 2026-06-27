---
title: "Guía de activación de la licencia comercial de NocoBase"
description: "Una guía para activar su licencia comercial de NocoBase. Aprenda cómo activar rápida y seguramente sus funciones comerciales utilizando el nuevo método de \"ID de instancia\" y \"Clave de licencia\"."
---

## **Guía de Activación de Licencia Comercial de NocoBase**

Para mejorar la experiencia del usuario y reforzar la seguridad, hemos actualizado exhaustivamente nuestro proceso de licencias comerciales y activación. El nuevo método de autorización reemplaza el enfoque anterior de introducir nombres de usuario y contraseñas en archivos de configuración, introduciendo un mecanismo basado en "ID de Instancia" y "Clave de Licencia".

Las ventajas principales de la nueva solución incluyen:

* **Seguridad Mejorada**: Ya no es necesario almacenar la información de tu cuenta en texto plano, reduciendo el riesgo de filtración de información sensible.
* **Proceso Simplificado**: La autorización se vincula directamente a tu instancia de NocoBase, haciendo la gestión y actualización de licencias más intuitiva y conveniente.
* **Mayor Flexibilidad**: Cuando tu entorno de implementación cambie, puedes regenerar fácilmente la autorización para adaptarte rápidamente al nuevo entorno.
* **Protección de Licencia**: A través de la gestión de licencias en el backend y la monitorización del estado, puedes supervisar el uso real de tu licencia, detectar y manejar rápidamente aplicaciones no autorizadas, y prevenir el uso indebido de licencias comerciales.

Esta guía te llevará a través del proceso completo de activación de la nueva licencia comercial de NocoBase.

<image src="https://static-docs.nocobase.com/undefined20250701160935956.png" >

---

## **Guía Paso a Paso para la Activación de la Licencia**

Antes de comenzar, asegúrate de haber instalado y estar ejecutando correctamente la Edición Comunitaria de NocoBase.

### **Paso 1: Acceder a la Página de Licencia y Copiar el ID de Instancia**

1. En tu aplicación local de NocoBase, navega a la página `Configuración del Sistema` -> `Configuración de Licencia`.
2. En esta página, verás una cadena de **ID de Instancia**, que es el identificador único de tu entorno de ejecución actual. Haz clic en el icono de copiar a su derecha.

![img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g](https://static-docs.nocobase.com/img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g.jpg)

### **Paso 2: Crear Aplicación en la Plataforma de Servicio y Asociar el ID de Instancia**

1. Inicia sesión en la plataforma de Servicio de NocoBase, haz clic en el botón "Añadir" en la página de gestión de "Aplicaciones".
2. En el formulario emergente, completa la información de tu aplicación y pega el `ID de Instancia` copiado en el paso anterior en el campo de entrada `ID de Instancia`, luego envía.

![20250707233019](https://static-docs.nocobase.com/20250707233019.png)

### **Paso 3: Obtener la Clave de Licencia**

1. Después de que la aplicación se haya creado correctamente, vuelve a la lista de licencias, encuentra la entrada correspondiente y haz clic en el botón "Ver Licencia" en la columna de acciones.
2. En la ventana emergente de detalles de la licencia, haz clic en el botón "Copiar" para obtener la **Clave de Licencia** que coincide con tu instancia.
   ![img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g](https://static-docs.nocobase.com/img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g.jpg)

### **Paso 4: Configurar la Clave de Licencia en NocoBase**

1. Vuelve a la página `Configuración de Licencia` de tu NocoBase local.
2. Pega la `Clave de Licencia` recién copiada en el campo de entrada `Clave de licencia` y haz clic en el botón "Enviar".
3. Después de guardar correctamente, el sistema mostrará "Clave de licencia guardada correctamente, por favor reinicie el servidor", indicando que la clave de licencia se ha configurado correctamente y está esperando el reinicio.

![img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g](https://static-docs.nocobase.com/img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g.jpg)

### **Paso 5: Completar la Activación y Descargar la Versión Comercial y los Plugins Comerciales**

Reinicia tu servicio de NocoBase para aplicar la licencia y descargar automáticamente la versión comercial y los plugins comerciales.

* **Para implementación con Docker**: Ejecuta el comando de reinicio `docker compose restart app`.
* **Para implementación con código fuente o `create-nocobase-app`**: Ejecuta el comando `yarn nocobase pkg download-pro` en el directorio raíz del proyecto.

Después de que el servicio se reinicie y los plugins se descarguen correctamente, tu licencia comercial estará activada. Si necesitas cambiar la licencia, puedes volver a entrar en la página de configuración de licencia, hacer clic en el botón "Cambiar clave" y repetir el proceso anterior.

---

## **Cómo Ver la Información de la Licencia**

Después de la activación de la licencia, puedes hacer clic en el icono de información de licencia en la esquina superior derecha de la interfaz de NocoBase en cualquier momento para ver el estado detallado de la licencia actual, incluyendo la versión de la licencia, la fecha de vencimiento, el estado de coincidencia del dominio y la lista de plugins autorizados.

![20250707234415](https://static-docs.nocobase.com/20250707234415.png)

---

## Lista de Verificación Rápida para Implementación y Licencia

Cuando encuentres problemas, puedes consultar esta lista de verificación para una solución rápida:

- [ ]  **Paso 1: Obtener el ID de Instancia**
  - [ ]  La Edición Comunitaria/Edición sin Licencia de NocoBase se está ejecutando correctamente.
  - [ ]  El `ID de Instancia` se ha copiado completamente desde la página `Configuración de licencia`.
- [ ]  **Paso 2: Generar la Clave de Licencia**
  - [ ]  Se ha creado la aplicación en la plataforma de Servicio.
  - [ ]  El `ID de Instancia` pegado al crear la aplicación es el más reciente y correcto.
  - [ ]  La `Clave de Licencia` se ha copiado completamente desde "Ver Licencia".
- [ ]  **Paso 3: Activación**
  - [ ]  La `Clave de Licencia` se ha pegado de nuevo en NocoBase y se ha guardado correctamente.
  - [ ]  **Se ha ejecutado el reinicio del contenedor o el comando `download-pro` según el método de implementación.** (¡Muchos usuarios se saltan este paso!)
- [ ]  **Verificación**
  - [ ]  La ventana emergente de información de licencia muestra el estado como "Activa".

## Preguntas Frecuentes (FAQ)

Durante la instalación o el uso, es posible que encuentres los siguientes mensajes. Sigue las soluciones correspondientes:

### 1. `License key mismatch` - La Clave de Licencia no Coincide con el Entorno

<image src="https://static-docs.nocobase.com/undefined20250701193351673.png" />

[P]¿Por qué obtengo `License key mismatch` después de la configuración?

[R]Tu entorno de ejecución puede haber cambiado, lo que ha provocado que el "`ID de Instancia`" se actualice, pero tu aplicación aún tiene la "`Clave de Licencia`" antigua.
**Solución**: Sigue estrictamente el **Paso 1** de esta guía para obtener el `ID de Instancia` más reciente desde tu **entorno actual**, luego completa el proceso posterior para generar una nueva "clave".

### 2. `Invalid license key` - La Clave de Licencia ha Expirado

<image src="https://static-docs.nocobase.com/undefined20250701193558012.png" />

[P]¿Qué significa `Invalid license key`?

[R]Tu `Clave de Licencia` puede haber expirado o haber sido marcada como inválida por la plataforma por otras razones.
**Solución**: Contáctanos o verifica el estado de tu licencia en la plataforma de servicio. Si es necesario, regenera la `Clave de Licencia` y configúrala.

### 3. `Invalid license key format` - Error de Formato de la Clave de Licencia

<image src="https://static-docs.nocobase.com/undefined20250701193148501.png" />

[P]¿Qué debo hacer con `Invalid license key format`?

[R]La `Clave de Licencia` que pegaste está incompleta o tiene un formato incorrecto, lo que impide que el sistema la analice.
**Solución**: Vuelve a la plataforma de servicio, asegúrate de haber copiado completamente la `Clave de Licencia`, luego pégala de nuevo y guárdala.

### 4. El Diálogo de Información de Licencia Aparece Forzosamente al Acceder al Sistema

<image src="https://static-docs.nocobase.com/undefined20250625164238000.png" width="400" />

[P]¿Por qué aparece siempre el diálogo de información de licencia?

[R]Esta ventana emergente generalmente indica un fallo en la verificación de la licencia. Las posibles razones incluyen:

- La `Clave de Licencia` está corrupta o no coincide con el entorno local
- La licencia ha expirado o es inválida
- La `Clave de Licencia` no coincide con la versión de los plugins comerciales que estás ejecutando

**Solución**: La solución más directa es **volver a ejecutar completamente el proceso de configuración de la licencia**: obtén el `ID de Instancia` más reciente, genera una nueva `Clave de Licencia` y establécela en el sistema local.

### 5. Problemas Relacionados con la Migración del Entorno

[P]Migré mi servidor/base de datos y los plugins comerciales dejaron de funcionar. ¿Qué debo hacer?

[R]Este es el mismo problema que el anterior. El servidor o la base de datos son información clave que constituye la "cédula de identidad (`ID de Instancia`)", y cuando cambian, el `ID de Instancia` cambia.

**Solución**: Igual que arriba, obtén el nuevo `ID de Instancia`, genera una nueva `Clave de Licencia` y reactívala. Todo el proceso es como actualizar la dirección de tu identificación después de mudarte.

### 6. El Plugin no Surte Efecto

[P]He reiniciado, ¿por qué los plugins comerciales siguen sin funcionar?

[R]Si has confirmado que la configuración de la `Clave de Licencia` es correcta, prueba la siguiente solución de problemas:

1. **Verificar Red**: Asegúrate de que tu servidor pueda acceder al repositorio npm de NocoBase.
2. **Verificar Registros**: Revisa los registros de inicio de NocoBase para detectar fallos en la descarga de plugins o errores de verificación de licencia.
3. **Ejecución Manual**: Si estás usando implementación desde el código fuente, ejecuta manualmente el comando `yarn nocobase pkg download-pro` de nuevo y observa la salida de la línea de comandos.

### 7. ¿Los plugins comerciales no aparecen después de activar en un sistema en ejecución?

**[P]** Inicié el sistema NocoBase primero y luego introduje la Clave de Licencia en la configuración. La activación fue exitosa, ¿por qué no aparecen los plugins comerciales?

**[R]** Este es un comportamiento esperado y una pregunta muy común. NocoBase está diseñado para verificar la licencia y cargar los plugins correspondientes **al iniciar el servicio**. Si completaste la activación mientras el sistema ya estaba en ejecución, necesitas **reiniciar el servicio de NocoBase** para activar la descarga y activación de los plugins comerciales.

En pocas palabras, la licencia es como un "pase" para NocoBase, pero necesita "volver a entrar por la puerta" (reiniciar) para verificar y usar este pase.

Por favor, realiza la operación de reinicio según tu método de implementación:

* **Para implementación con Docker**: Ejecuta el comando de reinicio `docker compose restart app`.
* **Para implementación con código fuente o `create-nocobase-app`**: Primero, detén el servicio en ejecución en tu terminal (generalmente presionando `Ctrl+C`), y luego ejecuta el comando de inicio de nuevo, como `yarn start`.

### 8. Comparación Entre los Métodos de Autorización Nuevo y Antiguo

[P]¿En qué se diferencia este proceso del método anterior de nombre de usuario/contraseña?

[R]El método antiguo exponía tu contraseña de cuenta directamente en el entorno, lo que no era lo suficientemente seguro. El nuevo sistema de `Clave de Licencia` tiene varios beneficios:

1. **Más Seguro**: No necesitas exponer la contraseña de tu cuenta principal, solo usas claves vinculadas a entornos específicos.
2. **Más Flexible**: Puedes generar diferentes `Claves de Licencia` para diferentes clientes o proyectos, facilitando la gestión.
3. **Más Claro**: La información de la licencia es clara de un vistazo, con todos los detalles registrados en la plataforma de Servicio.
