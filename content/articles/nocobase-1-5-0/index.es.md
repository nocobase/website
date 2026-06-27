---
title: "NocoBase v1.5.0 Lanzamiento Oficial"
description: "Optimizaciones del núcleo, importación/exportación de datos a gran escala, gestión de correos electrónicos, impresión de plantillas y otras funciones mejoran de manera integral el rendimiento del sistema y la experiencia del usuario."
---

## Optimizaciones principales

### Habilitar enlaces en campos de texto de una sola línea

El modo de apertura admite cajón, diálogo y página.

![20250207212903](https://static-docs.nocobase.com/20250207212903.png)

### El bloque de asociación admite acciones de asociar/desasociar

Ahora puede realizar acciones de asociación y desasociación directamente en el bloque de asociación.

![20250207211837](https://static-docs.nocobase.com/20250207211837.png)

### Depuración de flujos de trabajo

Ahora puede activar flujos de trabajo directamente durante la configuración para depurarlos.

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/20250207213343_rec_.mp4" type="video/mp4">
</video>

### Interacción móvil mejorada para componentes de fecha

Experiencia de interacción mejorada para componentes relacionados con fechas en dispositivos móviles.

![0084553986f6b3de21ca62f22d09a91a.png](https://static-docs.nocobase.com/0084553986f6b3de21ca62f22d09a91a.png)

### Optimizaciones de rendimiento del frontend

* Velocidad de carga de pantalla inicial optimizada.
* Se cambió la herramienta de compilación del frontend a **rspack**.
* Se redujo el tamaño del paquete de los archivos de entrada para varios paquetes de plugins.
* Rendimiento de renderizado mejorado para tablas de datos grandes.
* Se redujo el tartamudeo durante las transiciones de menú.
* Se introdujeron métodos de carga bajo demanda con las nuevas librerías `lazy` y `useLazy`.

A continuación, una breve introducción al uso de `lazy` y `useLazy`:

```ts
import { lazy, useLazy } from '@nocobase/client';

// Exportar un solo componente:
const { RolesManagement } = lazy(() => import('./RolesManagement'), 'RolesManagement');

// Exportar múltiples componentes:
const { AuthLayout, SignInPage, SignUpPage } = lazy(() => import('./pages'), 'AuthLayout', 'SignInPage', 'SignUpPage');

// Exportar un componente por defecto:
const ThemeList = lazy(() => import('./components/ThemeList'));

// Devolver un hook:
const useReactToPrint = useLazy<typeof import('react-to-print').useReactToPrint>(
  () => import('react-to-print'),
  'useReactToPrint',
);
  
// Devolver una librería:
const parseExpression = useLazy<typeof import('cron-parser').parseExpression>(
  () => import('cron-parser'),
  'parseExpression',
);
```

---

## Nuevos plugins

### Import Pro

Admite operaciones de importación asíncronas que se ejecutan en un hilo separado. Esta funcionalidad permite la importación de grandes volúmenes de datos con un rendimiento mejorado.

![20250119221221](https://static-docs.nocobase.com/20250119221221.png)

Referencia: [Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Export Pro

Permite operaciones de exportación asíncronas que se ejecutan en un hilo separado, admitiendo exportaciones de datos a gran escala, así como exportaciones de archivos adjuntos.

![20250119221237](https://static-docs.nocobase.com/20250119221237.png)

Referencia: [Export Pro](https://docs.nocobase.com/handbook/action-export-pro)

### Impresión de plantillas

El plugin de Impresión de Plantillas le permite editar archivos de plantilla usando Word, Excel o PowerPoint (admitiendo los formatos `.docx`, `.xlsx` y `.pptx`). Al configurar marcadores de posición y estructuras lógicas dentro de la plantilla, puede generar dinámicamente archivos en formatos predeterminados como `.docx`, `.xlsx`, `.pptx` e incluso `.pdf`. Esta funcionalidad es ampliamente aplicable para crear varios documentos comerciales, incluyendo presupuestos, facturas, contratos y más.

**Características principales**

* **Soporte multi-formato**: Compatible con plantillas de Word, Excel y PowerPoint para satisfacer diversas necesidades de generación de documentos.
* **Relleno dinámico de datos**: Rellena automáticamente el contenido del documento basándose en los marcadores de posición y la lógica definidos.
* **Gestión flexible de plantillas**: Añada, edite, elimine y categorice fácilmente las plantillas para un mejor mantenimiento y uso.
* **Sintaxis de plantilla enriquecida**: Admite reemplazo básico, acceso a arrays, bucles, salida condicional y otra sintaxis de plantilla para la generación de documentos complejos.
* **Soporte de formateadores**: Proporciona salidas condicionales, formato de fechas, formato de números y más para mejorar la claridad y el profesionalismo del documento.
* **Opciones de salida eficientes**: Admite la generación directa de PDF para facilitar el intercambio y la impresión.

![20250119221258](https://static-docs.nocobase.com/20250119221258.png)

Referencia: [Impresión de plantillas](https://docs.nocobase.com/handbook/action-template-print)

### Registro de auditoría

Este plugin registra y rastrea las actividades de los usuarios, así como los historiales de operaciones de recursos dentro del sistema.

![20250119221319](https://static-docs.nocobase.com/20250119221319.png)

Referencia: [Registro de auditoría](https://docs.nocobase.com/handbook/audit-logger)

### Flujo de trabajo: Subflujo

Esta funcionalidad permite que un flujo de trabajo llame a otro proceso. Puede usar variables del flujo de trabajo actual como entrada para el subflujo, y luego usar la salida del subflujo como variables en nodos posteriores.

![20250119221334](https://static-docs.nocobase.com/20250119221334.png)

Referencia: [Flujo de trabajo: Subflujo](https://docs.nocobase.com/handbook/workflow-subflow)

### Gestor de correo electrónico

Integre sus cuentas de correo electrónico de Google o Microsoft en NocoBase para enviar, recibir, ver y gestionar correos electrónicos. Además, los correos electrónicos se pueden incrustar directamente en las páginas.

![20250119221346](https://static-docs.nocobase.com/20250119221346.png)

Referencia: [Gestor de correo electrónico](https://docs.nocobase.com/handbook/email-manager/usage-admin)

### Almacenamiento de archivos: S3 (Pro)

Admite tipos de almacenamiento de archivos compatibles con el protocolo S3, incluyendo Amazon S3, Alibaba Cloud OSS, Tencent Cloud COS, MinIO y más. Este plugin también admite la carga directa de archivos y el acceso privado.

![20250119221404](https://static-docs.nocobase.com/20250119221404.png)

Referencia: [Almacenamiento de archivos: S3(Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
