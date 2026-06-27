---
title: "Atualização (gerenciamento de localização): Organize namespaces de texto por módulos"
description: "Otimize seu gerenciamento de localização com namespaces de texto baseados em módulos do NocoBase. Este guia detalha a nova abordagem para organizar textos de tradução por módulos, eliminando problemas de desduplicação e melhorando a personalização. Saiba mais sobre as mudanças, etapas de migração e impacto no seu processo de desenvolvimento."
---

## Contexto

* O plugin de gerenciamento de localização sincroniza textos originais colocando-os no mesmo namespace (módulo). Ao encontrar textos idênticos em plugins diferentes, ele remove duplicatas e preserva a tradução encontrada em [`packages/core/client/src/locale`](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale) para uso posterior.
* O cliente NocoBase cria uma instância `i18n` com a opção `fallbackNS: "client"` ([referência](https://github.com/nocobase/nocobase/blob/8983eed3308d018a309f1d39f5c6988bbc632878/packages/core/client/src/i18n/i18n.ts#L20)). Consequentemente, durante o desenvolvimento de plugins, certos textos que já existem em `packages/core/client/src/locale` podem ser omitidos dos arquivos de localidade do plugin.

Essas duas configurações, no entanto, apresentam um problema. Os mesmos textos originais só podem ser associados a uma tradução e não podem diferir entre namespaces. Por exemplo, se um usuário criar conteúdo com o mesmo texto de uma tradução existente, como "Users" com a tradução em chinês "用户", ele será exibido como "用户" no ambiente "zh-CN". Isso acontece mesmo que o usuário prefira mostrar o texto original em vez da tradução.

## Mudança

Os textos de tradução são categorizados com base em seus módulos correspondentes (menus, coleções e campos, plugins diferentes), sem desduplicação. Na página de gerenciamento de localização, os textos podem ser filtrados usando um menu suspenso, selecionando o módulo correspondente.

![página de gerenciamento de localização](https://static-docs.nocobase.com/148e5cf34a8a761f7d16429f1c0338f1.jpg)

## Como migrar

Siga o [processo de atualização](https://docs.nocobase.com/welcome/getting-started/upgrading) normal para atualizar o sistema. Em seguida, mude para o ambiente de idioma correspondente e, na página de gerenciamento de localização, sincronize os textos de tradução clicando no botão **"Sincronizar"**.

![Como migrar](https://static-docs.nocobase.com/bb1c1563770b5c7bfc4f683fc8efaad9.jpg)

## Mudanças significativas

### Textos de tradução não são mais desduplicados

Textos duplicados entre módulos exigem traduções separadas.

![Textos de tradução não são mais desduplicados](https://static-docs.nocobase.com/c090ade730c7d71841cef340d865615b.jpg)

### Opção `fallbackNS` removida da instância `i18n`

A instância `i18n` do cliente não inclui mais a opção `fallbackNS: "client"`.

Para desenvolvedores de plugins, se os arquivos de idioma de um plugin omitirem alguns textos já presentes no cliente principal, é necessário complementá-los. Se você ainda quiser reutilizar conteúdo de `packages/core/client/src/locale`, passe os parâmetros apropriados ao usá-lo, por exemplo:

```
import { useTranslation } from 'react-i18next';

export const NAMESPACE = 'localization-management';

export const useLocalTranslation = () => {
  return useTranslation([NAMESPACE, 'client'], { nsMode: 'fallback' });
};
```
