---
title: "NocoBase 0.17: Novo SchemaInitializer e SchemaSettings"
description: "NocoBase 0.17 reformula o designer de esquemas de UI com novos SchemaInitializer e SchemaSettings, reorganiza a documentação e introduz várias melhorias para um melhor desenvolvimento frontend."
---

## Novas Funcionalidades

Para reduzir os custos de aprendizado de desenvolvimento e proporcionar uma melhor experiência de desenvolvimento frontend, realizamos uma reconstrução gradual do núcleo do frontend nos últimos meses, incluindo:

![nocobase-client](https://static-docs.nocobase.com/fab1903e1852480f8edce8213ac54a49.webp)

Desta vez, a v0.17 reformulou o SchemaInitializer e o SchemaSettings relacionados ao designer de esquema de UI.

![SchemaInitializer](https://static-docs.nocobase.com/ddeb33e3170cef3107a48edec4b07b55.webp)

![SchemaSettings](https://static-docs.nocobase.com/4afac0186699e0e49951ba84522c5754.webp)

Para resolver a dificuldade de iniciantes, também reorganizamos várias seções da documentação:

* [Desenvolvimento de Plugins](https://docs.nocobase.com/development) (completamente revisado e publicado)
* [Referência da API / Cliente](https://client.docs.nocobase.com/core/application/application) (nova seção, já publicada)
* Manual do Usuário (completamente revisado, será lançado nas próximas uma a duas semanas)
* Lista de Plugins (nova seção, incluindo introduções, instruções de uso e desenvolvimento de extensão para todos os plugins existentes, será lançada nas próximas uma a duas semanas)

## Mudanças Incompatíveis

### Mudanças no SchemaInitializer

* Adicionado `SchemaInitializerManager` para registrar `SchemaInitializer`
* Adicionado `useSchemaInitializerRender()` para substituir o original `useSchemaInitializer()` `render()`
* Adicionado `useSchemaInitializerItem()` para obter o contexto do item de inicialização atual
* Adicionado componente `SchemaInitializerItemGroup` como componente padrão para `type: 'itemGroup'`
* Adicionado componente `SchemaInitializerSubMenu` como componente padrão para `type: 'subMenu'`
* Adicionado componente `SchemaInitializerDivider` como componente padrão para `type: 'divider'`
* Adicionado componente `SchemaInitializerChildren` para renderização personalizada de múltiplos itens de lista
* Adicionado componente `SchemaInitializerChild` para renderização personalizada de um único item de lista
* Alteradas as responsabilidades de `SchemaInitializerContext` para armazenar o contexto do inicializador atual
* Alteradas as responsabilidades de `useSchemaInitializer()` para obter o contexto do inicializador atual
* Alterado `function SchemaInitializer` para `class SchemaInitializer` para definir inicializador
* Alterados parâmetros de `SchemaInitializer`
  * Adicionado parâmetro obrigatório `name` para o valor de `x-initializer`
  * Adicionado parâmetro `Component` para renderização personalizada do botão. Padrão é `SchemaInitializerButton`.
  * Adicionados `componentProps`, `style` para configurar as propriedades e estilo do `Component`
  * Adicionado parâmetro `ItemsComponent` para renderização personalizada da lista. Padrão é `SchemaInitializerItems`.
  * Adicionados `itemsComponentProps`, `itemsComponentStyle` para configurar as propriedades e estilo do `ItemsComponent`
  * Adicionado parâmetro `popover` para configurar se deve exibir o efeito `popover`
  * Adicionado parâmetro `useInsert` para quando a função `insert` precisar usar hooks
  * Alterado parâmetro `dropdown` para `popoverProps`, usando `Popover` em vez de `Dropdown`
* Alterados parâmetros de `items` para `SchemaInitializer`
  * Adicionada função `useChildren` para controle dinâmico de itens filhos
  * Adicionada função `componentProps` para as propriedades do próprio componente
  * Adicionada função `useComponentProps` para processamento dinâmico das props do componente
  * Alterado parâmetro `key` para `name` para identificação única dos itens da lista
  * Alterado parâmetro `visible` para função `useVisible` para controle dinâmico de exibição
  * Alterado parâmetro `component` para `Component` para renderizar itens da lista
* Alterado `SchemaInitializer.Button` para `SchemaInitializerButton`, valor padrão para o parâmetro Component do SchemaInitializer
* Alterado `SchemaInitializer.Item` para `SchemaInitializerItem`, com parâmetros inalterados
* Alterado `SchemaInitializer.ActionModal` para `SchemaInitializerActionModal`, com parâmetros inalterados
* Alterado `SchemaInitializer.SwitchItem` para `SchemaInitializer.Switch`, com parâmetros inalterados
* Excluído `SchemaInitializerProvider`, substituído por `SchemaInitializerManager`
* Excluído `SchemaInitializer.itemWrap`, não é mais necessário envolver o componente `item`

### Mudanças no SchemaSettings

* Adicionado `SchemaSettingsManager` para registrar `SchemaSettings`
* Adicionado `useSchemaSettingsItem()`
* Adicionado `useSchemaSettingsRender()`
* Adicionado parâmetro `x-settings` para configurar configurações de esquema
* Adicionado parâmetro `x-toolbar` para configurar barra de ferramentas do esquema
* Adicionado componente `SchemaToolbar` para personalizar a barra de ferramentas do esquema
* Adicionado `useSchemaToolbarRender()` para substituir o original `useDesigner()`
* Alterado `function SchemaSettings` para `class SchemaSettings` para definir configurações
* Alterado o original `SchemaSettings` para `SchemaSettingsDropdown`
* Alterado `SchemaSettings.Item` para `SchemaSettingsItem`
* Alterado `SchemaSettings.ItemGroup` para `SchemaSettingsItemGroup`
* Alterado `SchemaSettings.SubMenu` para `SchemaSettingsSubMenu`
* Alterado `SchemaSettings.Divider` para `SchemaSettingsDivider`
* Alterado `SchemaSettings.Remove` para `SchemaSettingsRemove`
* Alterado `SchemaSettings.SelectItem` para `SchemaSettingsSelectItem`
* Alterado `SchemaSettings.CascaderItem` para `SchemaSettingsCascaderItem`
* Alterado `SchemaSettings.SwitchItem` para `SchemaSettingsSwitchItem`
* Alterado `SchemaSettings.ModalItem` para `SchemaSettingsModalItem`
* Alterado `SchemaSettings.ActionModalItem` para `SchemaSettingsActionModalItem`
* Excluído parâmetro `x-designer`, obsoleto, será removido no futuro, use `x-toolbar` em vez disso
* Excluído `useDesigner()`, obsoleto, será removido no futuro, use `useSchemaToolbarRender()` em vez disso

Para mais detalhes, veja [Mudanças Incompatíveis no NocoBase 0.17](https://docs.nocobase.com/welcome/release/upgrade-to/v017)
