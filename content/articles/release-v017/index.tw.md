---
title: "NocoBase 0.17：全新的 SchemaInitializer 和 SchemaSettings"
description: "NocoBase 0.17 重構了 UI Schema 設計器，引入了全新的 SchemaInitializer 和 SchemaSettings，重新組織了文檔，並進行了多項改進以提升前端開發體驗。"
---

## 新特性

為了降低開發學習成本並提供更好的前端開發體驗，我們在過去幾個月對前端核心進行了階段性重構，包括：

![nocobase-client](https://static-docs.nocobase.com/fab1903e1852480f8edce8213ac54a49.webp)

本次 v0.17 對 UI Schema 設計器相關的 SchemaInitializer 和 SchemaSettings 進行了重構。

![SchemaInitializer](https://static-docs.nocobase.com/ddeb33e3170cef3107a48edec4b07b55.webp)

![SchemaSettings](https://static-docs.nocobase.com/4afac0186699e0e49951ba84522c5754.webp)

為了解決使用者入門困難的問題，我們也重新整理了文件各章節：

* [插件開發](https://docs.nocobase.com/development)（已全面改版並發布）
* [API 參考 / 客戶端](https://client.docs.nocobase.com/core/application/application)（全新章節，已發布）
* 使用手冊（全面改版，將於未來一至兩週內發布）
* 插件列表（全新章節，包含所有現有插件的介紹、使用方式及擴展開發說明，將於未來一至兩週內發布）

## 不相容的變更

### SchemaInitializer 的變更

* 新增 `SchemaInitializerManager` 用於註冊 `SchemaInitializer`
* 新增 `useSchemaInitializerRender()` 取代原有的 `useSchemaInitializer()` `render()`
* 新增 `useSchemaInitializerItem()` 用於取得當前初始化項目的上下文
* 新增 `SchemaInitializerItemGroup` 元件，作為 `type: 'itemGroup'` 的預設元件
* 新增 `SchemaInitializerSubMenu` 元件，作為 `type: 'subMenu'` 的預設元件
* 新增 `SchemaInitializerDivider` 元件，作為 `type: 'divider'` 的預設元件
* 新增 `SchemaInitializerChildren` 元件，用於自訂渲染多個列表項目
* 新增 `SchemaInitializerChild` 元件，用於自訂渲染單個列表項目
* 變更 `SchemaInitializerContext` 的職責，用於儲存當前初始化器的上下文
* 變更 `useSchemaInitializer()` 的職責，用於取得當前初始化器的上下文
* 將 `function SchemaInitializer` 變更為 `class SchemaInitializer` 以定義初始化器
* 變更 `SchemaInitializer` 的參數
  * 新增 `name` 必要參數，作為 `x-initializer` 的值
  * 新增 `Component` 參數，用於自訂渲染按鈕。預設為 `SchemaInitializerButton`
  * 新增 `componentProps`、`style`，用於設定 `Component` 的屬性和樣式
  * 新增 `ItemsComponent` 參數，用於自訂渲染列表。預設為 `SchemaInitializerItems`
  * 新增 `itemsComponentProps`、`itemsComponentStyle`，用於設定 `ItemsComponent` 的屬性和樣式
  * 新增 `popover` 參數，用於設定是否顯示 `popover` 效果
  * 新增 `useInsert` 參數，用於當 `insert` 函數需要使用 hooks 時
  * 將 `dropdown` 參數變更為 `popoverProps`，改用 `Popover` 取代 `Dropdown`
* 變更 `SchemaInitializer` 的 `items` 參數
  * 新增 `useChildren` 函數，用於動態控制子項目
  * 新增 `componentProps` 函數，用於元件本身的屬性
  * 新增 `useComponentProps` 函數，用於動態處理元件的 props
  * 將 `key` 參數變更為 `name`，作為列表項目的唯一識別
  * 將 `visible` 參數變更為 `useVisible` 函數，用於動態控制是否顯示
  * 將 `component` 參數變更為 `Component`，用於渲染列表項目
* 將 `SchemaInitializer.Button` 變更為 `SchemaInitializerButton`，作為 SchemaInitializer 的 Component 參數預設值
* 將 `SchemaInitializer.Item` 變更為 `SchemaInitializerItem`，參數不變
* 將 `SchemaInitializer.ActionModal` 變更為 `SchemaInitializerActionModal`，參數不變
* 將 `SchemaInitializer.SwitchItem` 變更為 `SchemaInitializer.Switch`，參數不變
* 刪除 `SchemaInitializerProvider`，由 `SchemaInitializerManager` 取代
* 刪除 `SchemaInitializer.itemWrap`，不再需要包裹 `item` 元件

### SchemaSettings 的變更

* 新增 `SchemaSettingsManager` 用於註冊 `SchemaSettings`
* 新增 `useSchemaSettingsItem()`
* 新增 `useSchemaSettingsRender()`
* 新增 `x-settings` 參數，用於設定 schema settings
* 新增 `x-toolbar` 參數，用於設定 schema 工具列
* 新增 `SchemaToolbar` 元件，用於自訂 schema 工具列
* 新增 `useSchemaToolbarRender()` 取代原有的 `useDesigner()`
* 將 `function SchemaSettings` 變更為 `class SchemaSettings` 以定義設定
* 將原有的 `SchemaSettings` 變更為 `SchemaSettingsDropdown`
* 將 `SchemaSettings.Item` 變更為 `SchemaSettingsItem`
* 將 `SchemaSettings.ItemGroup` 變更為 `SchemaSettingsItemGroup`
* 將 `SchemaSettings.SubMenu` 變更為 `SchemaSettingsSubMenu`
* 將 `SchemaSettings.Divider` 變更為 `SchemaSettingsDivider`
* 將 `SchemaSettings.Remove` 變更為 `SchemaSettingsRemove`
* 將 `SchemaSettings.SelectItem` 變更為 `SchemaSettingsSelectItem`
* 將 `SchemaSettings.CascaderItem` 變更為 `SchemaSettingsCascaderItem`
* 將 `SchemaSettings.SwitchItem` 變更為 `SchemaSettingsSwitchItem`
* 將 `SchemaSettings.ModalItem` 變更為 `SchemaSettingsModalItem`
* 將 `SchemaSettings.ActionModalItem` 變更為 `SchemaSettingsActionModalItem`
* 刪除 `x-designer` 參數，已棄用，未來將移除，請改用 `x-toolbar`
* 刪除 `useDesigner()`，已棄用，未來將移除，請改用 `useSchemaToolbarRender()`

更多詳情請參閱 [NocoBase 0.17 不相容變更](https://docs.nocobase.com/welcome/release/upgrade-to/v017)
