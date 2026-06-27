---
title: "NocoBase 0.21: Soporte de múltiples fuentes de datos para gráficos y flujos de trabajo"
description: "NocoBase 0.21 introduce soporte de múltiples fuentes de datos para gráficos y flujos de trabajo, eventos de activación de flujos de trabajo optimizados y varios tipos de campo nuevos, mejorando la flexibilidad y el rendimiento."
---

## Anuncio

![v1.0](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/img_v3_029o_3dd91ba0-bb96-4315-a273-208f06d432fg.png)

## Nuevas funciones

### Soporte de múltiples fuentes de datos para gráficos

![20240407222304](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222304.png)

[Para más información, consulte la documentación de [Visualización de datos]](https://docs.nocobase.com/handbook/data-visualization)

### Soporte de múltiples fuentes de datos para flujos de trabajo

![20240407222523](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222523.png)

[Para más información, consulte la documentación de [Flujo de trabajo]](https://docs.nocobase.com/handbook/workflow)

### Optimización de eventos de activación de flujos de trabajo

Cambios en los nombres de los activadores:

| Nombre original                | Cambiado a               |
| ------------------------------ | ------------------------ |
| Eventos de formulario, Eventos de operación | Eventos posteriores a la operación |
| Tareas programadas             | Eventos programados      |
| Interceptores de solicitudes   | Eventos previos a la operación |
| Aprobación                     | Eventos de aprobación    |

Mejoras en la configuración del modo de activación para los siguientes eventos:

#### Eventos posteriores a la acción

![20240407222652](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222652.png)

[Para más información, consulte la documentación de [Flujo de trabajo - Eventos posteriores a la acción]](https://docs.nocobase.com/handbook/workflow-custom-action-trigger)

#### Eventos previos a la acción

![20240407222834](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222834.png)

[Para más información, consulte la documentación de [Flujo de trabajo - Eventos previos a la acción]](https://docs.nocobase.com/handbook/workflow-request-interceptor)

### Plugin de marca personalizada

![20240407222949](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222949.png)

[Para más información, consulte la documentación de [Personalización de marca]](https://docs.nocobase.com/handbook/custom-brand)

### Soporte para campo nanoid

![20240407223221](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223221.png)

[Para más información, consulte la documentación de [campo nanoid]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/nano-id)

### Soporte para campo uuid

![20240407223431](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223431.png)

[Para más información, consulte la documentación de [campo uuid]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/uuid)

### Soporte para campo de marca de tiempo unix

![20240407223512](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223512.png)

[Para más información, consulte la documentación de [Campo de marca de tiempo Unix]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### El campo de tipo numérico admite configuración de formato

![20240407223736_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223736_rec_.gif)

[Para más información, consulte la documentación de [Configuración de campo / Configuración de propiedades específicas / Componente numérico]](https://docs.nocobase.com/handbook/ui/fields/field-settings/number-format)

### Soporte para despliegue en subruta

Se ha añadido la variable de entorno `APP_PUBLIC_PATH` para soportar el despliegue en subruta. Por ejemplo:

```
APP_PUBLIC_PATH=/nocobase/
```

Acceda localmente a través de la URL [http://localhost:13000/nocobase/](http://localhost:13000/nocobase/)

Ejemplo de proxy nginx:

```
server {
    listen 80;
    server_name your_domain.com;  # Reemplace your_domain.com con su dominio

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Ahora, puede acceder a través de http://your\_domain.com/nocobase/.

### Optimización del rendimiento de bloques

#### Soporte para efecto de pantalla esqueleto

Tarjetas de bloque

![20240407224956](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224956.png)

Tarjetas Kanban

![20240407224811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224811.png)

Celdas de tabla

![20240407230028](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407230028.png)

#### Procesamiento distribuido de la configuración de bloques

Anteriormente, los cambios en cualquier Schema de toda la página provocaban que toda la página se volviera a renderizar. Ahora, el Schema de cada bloque es independiente.

```
<SchemaComponent distributed schema={} />
```

El componente Grid también admite procesamiento distribuido.

```
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## Cambios incompatibles

### Varios useProps de UI Schema reemplazados por x-use-decorator-props y x-use-component-props

x-use-decorator-props y x-use-component-props no son intrusivos y son compatibles con todos los componentes.
