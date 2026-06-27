---
title: "NocoBase 0.17: Nuevo SchemaInitializer y SchemaSettings"
description: "NocoBase 0.17 rediseña el diseñador de esquemas de UI con nuevos SchemaInitializer y SchemaSettings, reorganiza la documentación e introduce varias mejoras para un mejor desarrollo frontend."
---

## Nuevas Funcionalidades

Para reducir los costos de aprendizaje del desarrollo y ofrecer una mejor experiencia de desarrollo frontend, hemos realizado una reconstrucción gradual del núcleo del frontend durante los últimos meses, incluyendo:

![nocobase-client](https://static-docs.nocobase.com/fab1903e1852480f8edce8213ac54a49.webp)

En esta ocasión, v0.17 ha rediseñado el SchemaInitializer y SchemaSettings relacionados con el diseñador de esquemas UI.

![SchemaInitializer](https://static-docs.nocobase.com/ddeb33e3170cef3107a48edec4b07b55.webp)

![SchemaSettings](https://static-docs.nocobase.com/4afac0186699e0e49951ba84522c5754.webp)

Para abordar la dificultad de los usuarios al comenzar, también hemos reorganizado varias secciones de la documentación:

* [Desarrollo de Plugins](https://docs.nocobase.com/development) (completamente revisado y publicado)
* [Referencia de API / Cliente](https://client.docs.nocobase.com/core/application/application) (nueva sección, ya publicada)
* Manual de Usuario (completamente revisado, se publicará en las próximas una o dos semanas)
* Lista de Plugins (nueva sección, que incluye introducciones, uso e instrucciones de desarrollo de extensiones para todos los plugins existentes, se publicará en las próximas una o dos semanas)

## Cambios Incompatibles

### Cambios en SchemaInitializer

* Se añadió `SchemaInitializerManager` para registrar `SchemaInitializer`
* Se añadió `useSchemaInitializerRender()` para reemplazar el original `useSchemaInitializer()` `render()`
* Se añadió `useSchemaInitializerItem()` para obtener el contexto del elemento de inicialización actual
* Se añadió el componente `SchemaInitializerItemGroup` como componente predeterminado para `type: 'itemGroup'`
* Se añadió el componente `SchemaInitializerSubMenu` como componente predeterminado para `type: 'subMenu'`
* Se añadió el componente `SchemaInitializerDivider` como componente predeterminado para `type: 'divider'`
* Se añadió el componente `SchemaInitializerChildren` para renderizado personalizado de múltiples elementos de lista
* Se añadió el componente `SchemaInitializerChild` para renderizado personalizado de un solo elemento de lista
* Se cambiaron las responsabilidades de `SchemaInitializerContext` para almacenar el contexto del inicializador actual
* Se cambiaron las responsabilidades de `useSchemaInitializer()` para obtener el contexto del inicializador actual
* Se cambió `function SchemaInitializer` a `class SchemaInitializer` para definir el inicializador
* Se cambiaron los parámetros de `SchemaInitializer`
  * Se añadió el parámetro obligatorio `name` para el valor de `x-initializer`
  * Se añadió el parámetro `Component` para renderizado personalizado del botón. El valor predeterminado es `SchemaInitializerButton`.
  * Se añadieron `componentProps`, `style` para configurar las propiedades y el estilo de `Component`
  * Se añadió el parámetro `ItemsComponent` para renderizado personalizado de la lista. El valor predeterminado es `SchemaInitializerItems`.
  * Se añadieron `itemsComponentProps`, `itemsComponentStyle` para configurar las propiedades y el estilo de `ItemsComponent`
  * Se añadió el parámetro `popover` para configurar si se muestra el efecto `popover`
  * Se añadió el parámetro `useInsert` para cuando la función `insert` necesita usar hooks
  * Se cambió el parámetro `dropdown` a `popoverProps`, usando `Popover` en lugar de `Dropdown`
* Se cambiaron los parámetros de `items` para `SchemaInitializer`
  * Se añadió la función `useChildren` para controlar dinámicamente los elementos secundarios
  * Se añadió la función `componentProps` para las propiedades del componente en sí
  * Se añadió la función `useComponentProps` para procesar dinámicamente las props del componente
  * Se cambió el parámetro `key` a `name` para la identificación única de los elementos de la lista
  * Se cambió el parámetro `visible` a la función `useVisible` para controlar dinámicamente si se muestra
  * Se cambió el parámetro `component` a `Component` para renderizar elementos de la lista
* Se cambió `SchemaInitializer.Button` a `SchemaInitializerButton`, el valor predeterminado para el parámetro Component de SchemaInitializer
* Se cambió `SchemaInitializer.Item` a `SchemaInitializerItem`, con parámetros sin cambios
* Se cambió `SchemaInitializer.ActionModal` a `SchemaInitializerActionModal`, con parámetros sin cambios
* Se cambió `SchemaInitializer.SwitchItem` a `SchemaInitializer.Switch`, con parámetros sin cambios
* Se eliminó `SchemaInitializerProvider`, reemplazado por `SchemaInitializerManager`
* Se eliminó `SchemaInitializer.itemWrap`, ya no es necesario envolver el componente `item`

### Cambios en SchemaSettings

* Se añadió `SchemaSettingsManager` para registrar `SchemaSettings`
* Se añadió `useSchemaSettingsItem()`
* Se añadió `useSchemaSettingsRender()`
* Se añadió el parámetro `x-settings` para configurar los ajustes del esquema
* Se añadió el parámetro `x-toolbar` para configurar la barra de herramientas del esquema
* Se añadió el componente `SchemaToolbar` para personalizar la barra de herramientas del esquema
* Se añadió `useSchemaToolbarRender()` para reemplazar el original `useDesigner()`
* Se cambió `function SchemaSettings` a `class SchemaSettings` para definir ajustes
* Se cambió el original `SchemaSettings` a `SchemaSettingsDropdown`
* Se cambió `SchemaSettings.Item` a `SchemaSettingsItem`
* Se cambió `SchemaSettings.ItemGroup` a `SchemaSettingsItemGroup`
* Se cambió `SchemaSettings.SubMenu` a `SchemaSettingsSubMenu`
* Se cambió `SchemaSettings.Divider` a `SchemaSettingsDivider`
* Se cambió `SchemaSettings.Remove` a `SchemaSettingsRemove`
* Se cambió `SchemaSettings.SelectItem` a `SchemaSettingsSelectItem`
* Se cambió `SchemaSettings.CascaderItem` a `SchemaSettingsCascaderItem`
* Se cambió `SchemaSettings.SwitchItem` a `SchemaSettingsSwitchItem`
* Se cambió `SchemaSettings.ModalItem` a `SchemaSettingsModalItem`
* Se cambió `SchemaSettings.ActionModalItem` a `SchemaSettingsActionModalItem`
* Se eliminó el parámetro `x-designer`, obsoleto, se eliminará en el futuro, use `x-toolbar` en su lugar
* Se eliminó `useDesigner()`, obsoleto, se eliminará en el futuro, use `useSchemaToolbarRender()` en su lugar

Para más detalles, consulte [Cambios Incompatibles en NocoBase 0.17](https://docs.nocobase.com/welcome/release/upgrade-to/v017)
