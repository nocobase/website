---
title: "NocoBase v1.7.0 lanzado oficialmente"
description: "Gestión de permisos mejorada, rendimiento del sistema optimizado y plugins de código abierto para mejorar de manera integral la funcionalidad y la experiencia del usuario"
---

## Nueva funcionalidad

### Unión de roles

La Unión de roles es un modo de gestión de permisos. Según la configuración del sistema, los desarrolladores pueden elegir entre usar `Roles independientes`, `Permitir unión de roles` o `Permitir unión de roles` para satisfacer diferentes requisitos de permisos.

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

Referencia: [Unión de roles](https://docs.nocobase.com/handbook/acl/manual)

### Verificación y autenticación de dos factores (2FA)

La función original de código de verificación se ha actualizado a un sistema integral de gestión de verificación, que admite múltiples métodos de autenticación (como TOTP). El sistema también admite la autenticación de dos factores (2FA), que requiere un paso de verificación adicional durante el inicio de sesión, además de la contraseña, lo que mejora significativamente la seguridad de la cuenta.

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

Referencia:

* [Verificación](https://docs.nocobase.com/handbook/verification)
* [Autenticación de dos factores](https://docs.nocobase.com/handbook/two-factor-authentication)
* [Autenticador TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

### Impresión de plantillas

La impresión de plantillas ahora admite la representación dinámica de imágenes y códigos de barras.

![](https://static-docs.nocobase.com/20250414211130-2025-04-14-21-11-31.png)

Referencia: [Impresión de plantillas](https://docs-cn.nocobase.com/handbook/action-template-print#%E5%9C%A8-docx-%E6%96%87%E4%BB%B6%E4%B8%AD%E6%8F%92%E5%85%A5%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87)

### Filtro de palabras clave múltiples

El plugin de filtro de palabras clave múltiples añade potentes capacidades de filtrado de texto a la plataforma NocoBase, permitiéndole filtrar datos usando múltiples palabras clave y mejorando enormemente la flexibilidad y eficiencia de las consultas de datos.

![20250603152726_rec_-ix3j8w.gif](https://static-docs.nocobase.com/20250603152726_rec_-ix3j8w.gif)

Referencia: [Filtro de palabras clave múltiples](https://docs.nocobase.com/handbook/multi-keyword-filter)

### El filtro de fecha admite la selección de un rango de fechas relativo

Admite el filtrado por desplazamientos de tiempo personalizados (días/semanas/meses/trimestres/años) y fechas específicas, lo que permite consultas de rango de tiempo más flexibles.

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### Variables del lado izquierdo

Las variables del lado izquierdo en una condición se utilizan para definir el "objeto a evaluar" en la regla de vinculación, es decir, la condición evaluará el valor de esta variable para determinar si se debe activar el comportamiento de vinculación.

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

Referencia: [Variables del lado izquierdo](https://docs.nocobase.com/handbook/ui/linkage-rule#left-side-variables)

### Plantilla heredada

Las plantillas heredadas son ideales cuando desea que los bloques sigan las actualizaciones básicas de una plantilla pero también permitan cambios específicos. Los bloques heredan la configuración de la plantilla y pueden ampliarla o anularla. La configuración que no se modifique en el bloque se actualizará automáticamente con la plantilla.

![Interfaz principal](https://static-docs.nocobase.com/main-screen-block-templates.png)

Referencia: [Plantilla heredada](https://docs.nocobase.com/handbook/block-template#inherited-template)

### Reglas de vinculación de bloques

Las reglas de vinculación de bloques permiten a los usuarios controlar dinámicamente la visibilidad de los bloques, lo que permite gestionar la visualización de elementos a nivel de bloque.

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

Referencia: [Reglas de vinculación de bloques](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-linkage-rule)

### Después del envío exitoso

Después del envío exitoso, admite la actualización de datos en otros bloques y la navegación a páginas de detalle con parámetros.

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

Referencia: [Después del envío exitoso](https://docs.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### Gestión de categorías de flujo de trabajo

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

### Plugins de código abierto para departamento y URL de archivos adjuntos

![image-br8u55.png](https://static-docs.nocobase.com/image-br8u55.png)

## Mejoras

### Mejoras en las propiedades de las reglas de vinculación

* Los campos seleccionables ahora admiten opciones configurables
* Los campos de fecha ahora admiten el establecimiento de un rango de fechas

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

Referencia: [Reglas de vinculación de campos](https://docs.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### Importación Pro

La configuración de importación ahora admite el uso de múltiples campos para identificar de forma única los registros, así como opciones para sobrescribir o ignorar celdas en blanco durante la importación.

![20250603153457_rec_-9zfsfx.gif](https://static-docs.nocobase.com/20250603153457_rec_-9zfsfx.gif)

Referencia: [Importación Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Optimización del rendimiento para exportar XLSX

* Desbordamiento de memoria y congelación de la aplicación al exportar tablas de datos grandes
* Existe una probabilidad de datos duplicados en los datos exportados
* Optimización de consultas para datos exportados basada en índices, restricciones únicas y estrategias de indexación
* Añadir una cola de exportación concurrente y establecer el número de concurrencia a través de variables de entorno.

![20250505171706](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250505171706.png)

Referencia:

* [Exportaciones concurrentes](https://docs.nocobase.com/handbook/action-export-pro#concurrent-exports)
* [Acerca del rendimiento](https://docs.nocobase.com/handbook/action-export-pro#about-performance)

### Optimización del rendimiento para importar archivos XLSX

* Cambiar la estrategia de importación original de una sola fila a inserción por lotes
* Reconstruir el mecanismo de identificación de duplicados. Cambiar de procesamiento de una sola fila a procesamiento por lotes manteniendo la lógica de actualización y el desencadenamiento del flujo de trabajo sin cambios

Referencia: [Acerca del rendimiento](https://docs.nocobase.com/handbook/action-import-pro#about-performance)

### Eficiencia de ejecución del flujo de trabajo mejorada en un 100%

![image-ligrnm.png](https://static-docs.nocobase.com/image-ligrnm.png)
