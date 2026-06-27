---
title: "NocoBase v1.6.20: Haga que los complementos de Departamento, URL de archivo adjunto y mensaje de respuesta de flujo de trabajo sean gratuitos"
description: "Nota de la versión v1.6.20"
---

### 🎉 Nuevas funciones

- **[Departamentos]** Los plugins de Departamento, URL de adjunto y mensaje de respuesta de flujo de trabajo pasan a ser gratuitos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) por @chenos

### 🐛 Corrección de errores

- **[cliente]**
  - El formulario de filtro no debe mostrar el aviso de "Cambios sin guardar" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) por @zhangzhonghe

  - La opción "permitir múltiples" no funciona en campos de relación ([#6661](https://github.com/nocobase/nocobase/pull/6661)) por @katherinehhh

  - En el formulario de filtro, al hacer clic en el botón de filtro, si hay campos que no han pasado la validación, el filtrado se sigue ejecutando ([#6659](https://github.com/nocobase/nocobase/pull/6659)) por @zhangzhonghe

  - Al cambiar al menú de grupo, no se debe saltar a una página que ya ha sido ocultada en el menú ([#6654](https://github.com/nocobase/nocobase/pull/6654)) por @zhangzhonghe

- **[Almacenamiento de archivos: S3(Pro)]**
  - Organizar idioma por @jiannx

  - Configuración individual de baseurl y pública, mejora la UX de configuración de almacenamiento S3 Pro por @jiannx

- **[Gestor de migraciones]** la opción de omitir copia de seguridad automática se vuelve inválida si aparece la ventana emergente de variable de entorno durante la migración por @gchust
