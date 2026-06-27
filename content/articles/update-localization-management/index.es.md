---
title: "Actualización (gestión de localización): Organizar espacios de nombres de texto por módulos"
description: "Optimice su gestión de localización con los espacios de nombres de texto basados en módulos de NocoBase. Esta guía detalla el nuevo enfoque para organizar textos de traducción por módulos, eliminando problemas de deduplicación y mejorando la personalización. Conozca los cambios, los pasos de migración y el impacto en su proceso de desarrollo."
---

## Antecedentes

* El plugin de gestión de localización sincroniza textos originales colocándolos en el mismo espacio de nombres (módulo). Cuando encuentra textos idénticos en diferentes plugins, elimina duplicados y conserva la traducción encontrada en [`packages/core/client/src/locale`](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale) para su uso posterior.
* El cliente de NocoBase crea una instancia de `i18n` con la opción `fallbackNS: "client"` ([referencia](https://github.com/nocobase/nocobase/blob/8983eed3308d018a309f1d39f5c6988bbc632878/packages/core/client/src/i18n/i18n.ts#L20)). En consecuencia, durante el desarrollo de plugins, ciertos textos que ya existen en `packages/core/client/src/locale` pueden omitirse de los archivos de localización del plugin.

Sin embargo, estas dos configuraciones presentan un problema. Los mismos textos originales solo pueden asociarse con una traducción y no pueden diferir entre espacios de nombres. Por ejemplo, si un usuario crea contenido con el mismo texto que una traducción existente, como "Users" con la traducción al chino "用户", se mostrará como "用户" en el entorno "zh-CN". Esto ocurre incluso si el usuario prefiere mostrar el texto original en lugar de la traducción.

## Cambio

Los textos de traducción se categorizan según sus módulos correspondientes (menús, colecciones y campos, diferentes plugins), sin eliminación de duplicados. En la página de gestión de localización, los textos se pueden filtrar mediante un menú desplegable seleccionando el módulo correspondiente.

![Página de gestión de localización](https://static-docs.nocobase.com/148e5cf34a8a761f7d16429f1c0338f1.jpg)

## Cómo migrar

Siga el [proceso de actualización](https://docs.nocobase.com/welcome/getting-started/upgrading) normal para actualizar el sistema. Luego, cambie al entorno de idioma correspondiente y, en la página de gestión de localización, sincronice los textos de traducción haciendo clic en el botón **"Sincronizar"**.

![Cómo migrar](https://static-docs.nocobase.com/bb1c1563770b5c7bfc4f683fc8efaad9.jpg)

## Cambios disruptivos

### Los textos de traducción ya no se eliminan duplicados

Los textos duplicados entre módulos requieren traducciones separadas.

![Los textos de traducción ya no se eliminan duplicados](https://static-docs.nocobase.com/c090ade730c7d71841cef340d865615b.jpg)

### Se eliminó la opción `fallbackNS` de la instancia de `i18n`

La instancia de `i18n` del cliente ya no incluye la opción `fallbackNS: "client"`.

Para los desarrolladores de plugins, si los archivos de idioma de un plugin omiten algunos textos ya presentes en el cliente principal, es necesario complementarlos. Si aún desea reutilizar contenido de `packages/core/client/src/locale`, pase los parámetros adecuados al usarlo, por ejemplo:

```
import { useTranslation } from 'react-i18next';

export const NAMESPACE = 'localization-management';

export const useLocalTranslation = () => {
  return useTranslation([NAMESPACE, 'client'], { nsMode: 'fallback' });
};
```
