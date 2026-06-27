---
title: "NocoBase v1.8.0-beta.13: Soporte del campo BIT en SQL Server para fuentes de datos externas"
description: "Nota de la versión v1.8.0-beta.13"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**

  - Soporte para el campo BIT en SQL Server para fuentes de datos externas. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) por @aaaaaajie
  - Soporte para variables de agregación personalizadas ([#6916](https://github.com/nocobase/nocobase/pull/6916)) por @zhangzhonghe
    Referencia: [Variables personalizadas](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** soporte para autorización comercial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) por @jiannx
- **[Gestor de fuentes de datos]** ✨ Soporte para carga bajo demanda de colecciones desde fuentes de datos externas ([#6979](https://github.com/nocobase/nocobase/pull/6979)) por @aaaaaajie
- **[Configuración de licencia]** añadir configuración de licencia y validar licencia antes de descargar plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) por @jiannx
- **[Autenticación]** Soporte para la función "Olvidé mi contraseña" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) por @zhangzhonghe
  Referencia: [Olvidé mi contraseña](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Acción: Actualización por lotes]** Soporte para refrescar datos en otros bloques de datos después de actualizar datos en un bloque ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe
- **[Fuente de datos: SQL Server externo]**

  - Añadido soporte para el campo BIT de SQL Server en fuentes de datos externas por @aaaaaajie
  - Soporte para carga bajo demanda de colecciones desde fuentes de datos externas por @aaaaaajie
- **[Variables personalizadas]** Soporte para variables de agregación personalizadas por @zhangzhonghe
  Referencia: [Variables personalizadas](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[Gestor de correo electrónico]**

  - soporte para eliminar correo electrónico por @jiannx
  - soporte para configuración del intervalo de sincronización de correo electrónico por @jiannx
  - soporte para envío masivo por @jiannx

### 🚀 Mejoras

- **[cliente]**

  - Soporte para rellenar campos de entrada mediante escaneo de código QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) por @katherinehhh
  - Determinar si mostrar los componentes móviles según el tipo de dispositivo en lugar del ancho de página ([#6611](https://github.com/nocobase/nocobase/pull/6611)) por @zhangzhonghe
  - soporte para localización del contenido del bloque Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) por @katherinehhh
  - Determinar si mostrar el diseño móvil según el tipo de dispositivo en lugar del ancho de página ([#6600](https://github.com/nocobase/nocobase/pull/6600)) por @zhangzhonghe
- **[Gestor de tareas asíncronas]** Mejorar el rendimiento de la creación de tareas durante la exportación ([#7078](https://github.com/nocobase/nocobase/pull/7078)) por @aaaaaajie
- **[Móvil]** Adaptar el estilo de la ventana emergente de notificaciones para dispositivos móviles ([#6557](https://github.com/nocobase/nocobase/pull/6557)) por @zhangzhonghe
- **[Gestor de correo electrónico]**

  - soporte para respuesta y reenvío separados de correos electrónicos dentro del mismo asunto por @jiannx
  - implementación de esquema para envío de correo electrónico y soporte para IA por @jiannx
  - soporta el valor de envío predeterminado en ventanas emergentes, soporta búsqueda difusa de destinatarios y corrige problemas por @jiannx
  - completar la función de envío masivo por @jiannx
  - mejora funcional y corrección de problemas por @jiannx

### 🐛 Corrección de Errores

- **[cli]**

  - Ajustar la copia de la licencia al instalar el plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) por @jiannx
  - error indefinido al descargar plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) por @jiannx
- **[cliente]**

  - Después de borrar el valor de la insignia, la interfaz de usuario no se actualiza ([#7055](https://github.com/nocobase/nocobase/pull/7055)) por @zhangzhonghe
  - Error al hacer clic en el botón de filtro ([#7100](https://github.com/nocobase/nocobase/pull/7100)) por @zhangzhonghe
  - Corregir el problema donde los datos del usuario actual están vacíos ([#7016](https://github.com/nocobase/nocobase/pull/7016)) por @zhangzhonghe
  - El contenido se muestra incorrectamente en páginas abiertas a través de enlaces emergentes ([#6990](https://github.com/nocobase/nocobase/pull/6990)) por @zhangzhonghe
  - Pasar otras props al componente Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) por @sheldon66
  - La acción de guardar como plantilla fallará si contiene un campo de asociación ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust
- **[base de datos]** hacer que el operador eq para campos de cadena sea compatible con el tipo numérico ([#7062](https://github.com/nocobase/nocobase/pull/7062)) por @chenos
- **[build]** corregir el error de tiempo de ejecución del cliente en plugin-workflow-javascript, error de proceso indefinido ([#6859](https://github.com/nocobase/nocobase/pull/6859)) por @jiannx
- **[Visualización de datos]** Problema de paginación en tabla ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile
- **[Gestor de fuentes de datos]** Se corrigió un problema donde la combinación de carga bajo demanda de fuentes de datos y la configuración de prefijo de tabla causaba un error "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) por @aaaaaajie
- **[plugin-service-platform]** ajustar texto de licencia por @jiannx
- **[Variables personalizadas]** Después de borrar el valor de la insignia, la interfaz de usuario no se actualiza por @zhangzhonghe
- **[Gestor de correo electrónico]**

  - el adjunto no se muestra por @jiannx
  - error al eliminar correo electrónico por @jiannx
  - fallo al eliminar correo electrónico por @jiannx
  - la ventana emergente de configuración no se muestra por @jiannx
  - el panel de respuesta no es visible por @jiannx
  - la búsqueda difusa de destinatarios soporta campos asociados por @jiannx
  - añadir el campo "id" a mailmessagelabelsMailmessages por @jiannx
  - búsqueda difusa de correo para hacer filtros únicos por @jiannx
  - múltiples claves primarias para la tabla "mailmessagelabels_mailmessages" por @jiannx
