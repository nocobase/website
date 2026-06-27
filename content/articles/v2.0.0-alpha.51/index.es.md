---
title: "NocoBase v2.0.0-alpha.51: Soporte para personalizar estilos globales en el editor de temas"
description: "Nota de la versión v2.0.0-alpha.51"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - Soporte para personalizar estilos globales en el editor de temas ([#7960](https://github.com/nocobase/nocobase/pull/7960)) por @ljmiaoo

  - Soporte para establecer reglas de ordenación predeterminadas en el bloque de detalle ([#8070](https://github.com/nocobase/nocobase/pull/8070)) por @katherinehhh

  - Soporte para establecer el tipo de dato para el campo Número (opciones: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) por @chenos

- **[Campo de colección: Secuencia]** Actualizar automáticamente los campos de secuencia después de la migración de datos ([#8063](https://github.com/nocobase/nocobase/pull/8063)) por @cgyrock

### 🚀 Mejoras

- **[cliente]**
  - Corregir el salto de paginación en subtablas después de eliminar una fila y añadir soporte para reglas de validación de columnas ([#8094](https://github.com/nocobase/nocobase/pull/8094)) por @katherinehhh

  - Ajustar la visualización de campos grandes en subtablas editables ([#8078](https://github.com/nocobase/nocobase/pull/8078)) por @katherinehhh

  - Soporte para puntos suspensivos en contenido de campos JSON desbordado ([#8067](https://github.com/nocobase/nocobase/pull/8067)) por @katherinehhh

- **[motor-de-flujo]**
  - Añadir opción useCache a FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) por @zhangzhonghe

  - Añadir método `removeModelWithSubModels` para eliminar recursivamente un modelo y sus submodelos ([#8064](https://github.com/nocobase/nocobase/pull/8064)) por @zhangzhonghe

- **[Bloque: GridCard]** añadir configuración de recuento de filas a la tarjeta de cuadrícula y reemplazar pageSize con cálculo automático ([#8055](https://github.com/nocobase/nocobase/pull/8055)) por @katherinehhh

- **[Registros de auditoría]** Actualizar el campo de identificador único a `texto` para evitar el desbordamiento de longitud del identificador durante ediciones masivas por @2013xile

- **[Gestor de migraciones]** Actualizar automáticamente los campos de secuencia después de la migración de datos por @cgyrock

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió un problema por el cual los campos configurados de un bloque eliminado no se eliminaban del bloque de filtro. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) por @gchust

  - Corregir espacio extra cuando un botón está oculto en modo de no configuración ([#8092](https://github.com/nocobase/nocobase/pull/8092)) por @katherinehhh

  - Se corrigió un problema por el cual el texto del botón de restablecer en el bloque de formulario de filtro no podía modificarse. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) por @gchust

  - Se corrigió un problema por el cual la entrada de campo no admitía múltiples valores al usar los operadores $in o $notIn para filtrar campos. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) por @gchust

  - Se corrigió un problema por el cual los bloques de datos recién añadidos no aparecían automáticamente en el menú de campos del bloque de formulario de filtro. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) por @gchust

  - El menú de configuración para campos de asociación en formularios de filtro no debe mostrar la opción de creación rápida. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) por @gchust

  - Corregir problema de datos de subtabla de asociación en el bloque Lista ([#8082](https://github.com/nocobase/nocobase/pull/8082)) por @katherinehhh

  - Corregir que las reglas de validación de campos numéricos de la configuración de la colección no se aplicaban ([#8025](https://github.com/nocobase/nocobase/pull/8025)) por @katherinehhh

  - Se corrigió un problema por el cual los campos en formularios de filtro estaban restringidos por las reglas de validación del backend para los campos. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) por @gchust

  - Problema de edición rápida de campo json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) por @katherinehhh

  - Corregir problema de visualización de campos grandes en la edición de subtablas ([#8069](https://github.com/nocobase/nocobase/pull/8069)) por @katherinehhh

  - Corregir que la creación rápida lanza un error cuando allowMultiple está deshabilitado en la selección de registros de asociación ([#8034](https://github.com/nocobase/nocobase/pull/8034)) por @katherinehhh

  - Corregir que el campo json debe enviarse como un objeto ([#8057](https://github.com/nocobase/nocobase/pull/8057)) por @katherinehhh

  - Se corrigió un problema por el cual la tecla Enter no podía usarse para activar la acción de filtro. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) por @gchust

- **[motor-de-flujo]**
  - Se corrigió un problema por el cual las opciones de configuración del componente anterior permanecían visibles en el menú después de cambiar los componentes de campo. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) por @gchust

  - Mover useEffect antes del retorno condicional en FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) por @zhangzhonghe

  - Se corrigió un problema por el cual aparecían campos de asociación no soportados en los campos de operación de filtro. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) por @gchust

- **[acl]** corrección: acl.allow se ejecutaba demasiado pronto ([#8065](https://github.com/nocobase/nocobase/pull/8065)) por @chenos

- **[Gestor de archivos]**
  - Corregir visualización incorrecta de datos de subdetalle en bloques Lista y GridCard ([#8087](https://github.com/nocobase/nocobase/pull/8087)) por @katherinehhh

  - Corregir que el campo de adjunto no se mostraba correctamente en subtabla readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) por @katherinehhh

- **[Flujo de trabajo]**
  - Corregir el problema de que se lanzaba un error en el lienzo de ejecución cuando se eliminaba un nodo ([#8090](https://github.com/nocobase/nocobase/pull/8090)) por @mytharcher

  - Corregir el problema de que la página de ejecución lanzaba un error cuando los trabajos en un nodo no están definidos ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher

- **[Campo de colección: Fórmula]** Se corrigió un problema por el cual los campos de fórmula no podían añadirse al bloque de formulario de filtro. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) por @gchust

- **[Bloque: Panel de acciones]** optimizar el estilo en la disposición de Lista del bloque de panel de acciones ([#8084](https://github.com/nocobase/nocobase/pull/8084)) por @katherinehhh

- **[Empleados IA]**
  - Resolver el problema de que el nombre del rol de la fuente de datos no se compilaba ([#8076](https://github.com/nocobase/nocobase/pull/8076)) por @heziqiang

  - Se corrigió un problema por el cual algunos campos del registro actual no podían mostrarse en el componente de selección de variables. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) por @gchust

- **[Acción: Importar registros]** Los campos importados no coinciden con los campos establecidos en la configuración de ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile

- **[Control de acceso]** Añadir middleware para comprobaciones de permisos en operaciones de asociación para fuentes de datos externas ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile

- **[Flujo de trabajo: Aprobación]**
  - Corregir el problema de que no hay datos al cargar aprobaciones relacionadas con variables de ámbito ACL por @mytharcher

  - Corregir el problema de que los datos rellenados desaparecían en el formulario del asignado por @mytharcher

  - Corregir el problema de error de permiso al cargar aprobaciones relacionadas con el registro en el panel de detalle por @mytharcher

  - Corregir el problema de que el proceso es incorrecto al bifurcar con orden y contrafirma por @mytharcher

  - Corregir el problema de OOM al listar aprobaciones por @mytharcher

  - Corregir el problema de que los registros de aprobación no se incluyen en el resultado del trabajo en la rama de retorno por @mytharcher

  - Corregir el problema de que la ventana emergente del aprobador no muestra un título por @zhangzhonghe

  - Corregir el problema de error al cargar aprobación relacionada en modo de solo rol de unión por @mytharcher

- **[Gestor de correo electrónico]**
  - Manejo de datos anómalos por @jiannx

  - No sincronizar el estado programado de Gmail por @jiannx
