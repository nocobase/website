## 新機能

開発の学習コストを削減し、より良いフロントエンド開発体験を提供するために、私たちは過去数ヶ月にわたりフロントエンドコアの再構築を段階的に進めてきました。

![nocobase-client](https://static-docs.nocobase.com/fab1903e1852480f8edce8213ac54a49.webp)

今回は、v0.17 では UI Schema デザイナーに関連する SchemaInitializer と SchemaSettings が再構築されました。

![SchemaInitializer](https://static-docs.nocobase.com/ddeb33e3170cef3107a48edec4b07b55.webp)

![SchemaSettings](https://static-docs.nocobase.com/4afac0186699e0e49951ba84522c5754.webp)

ユーザーが始めやすくするために、私たちはドキュメントの各セクションを再整理しました。

* [プラグイン開発](https://docs.nocobase.com/development)（全面改訂済み、公開済み）
* [API リファレンス / クライアント](https://client.docs.nocobase.com/core/application/application)（新しいセクション、すでに公開）
* ユーザーマニュアル（全面改訂、今後1～2週間以内に公開予定）
* プラグイン一覧（新しいセクション、既存のすべてのプラグインの紹介、使用法、拡張開発の指示を含む、今後1～2週間以内に公開予定）

## 非互換の変更

### SchemaInitializer の変更

* `SchemaInitializer` を登録するための `SchemaInitializerManager` を追加
* 元の `useSchemaInitializer()` の `render()` を置き換えるために `useSchemaInitializerRender()` を追加
* 現在の初期化アイテムのコンテキストを取得するための `useSchemaInitializerItem()` を追加
* `type: 'itemGroup'` のデフォルトコンポーネントとして `SchemaInitializerItemGroup` コンポーネントを追加
* `type: 'subMenu'` のデフォルトコンポーネントとして `SchemaInitializerSubMenu` コンポーネントを追加
* `type: 'divider'` のデフォルトコンポーネントとして `SchemaInitializerDivider` コンポーネントを追加
* 複数のリストアイテムをカスタムレンダリングするための `SchemaInitializerChildren` コンポーネントを追加
* 単一のリストアイテムをカスタムレンダリングするための `SchemaInitializerChild` コンポーネントを追加
* 現在の初期化器のコンテキストを保存するための `SchemaInitializerContext` の責任を変更
* 現在の初期化器のコンテキストを取得するための `useSchemaInitializer()` の責任を変更
* 初期化器を定義するために `function SchemaInitializer` を `class SchemaInitializer` に変更
* `SchemaInitializer` のパラメータを変更
  * `x-initializer` の値のための必須パラメータ `name` を追加
  * カスタムレンダリングのボタンのための `Component` パラメータを追加。デフォルトは `SchemaInitializerButton`。
  * `Component` のプロパティとスタイルを設定するための `componentProps`、`style` を追加。
  * リストのカスタムレンダリングのための `ItemsComponent` パラメータを追加。デフォルトは `SchemaInitializerItems`。
  * `ItemsComponent` のプロパティとスタイルを設定するための `itemsComponentProps`、`itemsComponentStyle` を追加。
  * `popover` 効果を表示するかどうかを設定するための `popover` パラメータを追加。
  * `insert` 関数がフックを使用する必要がある場合のための `useInsert` パラメータを追加。
  * `dropdown` パラメータを `popoverProps` に変更し、`Dropdown` の代わりに `Popover` を使用。
* `SchemaInitializer` の `items` パラメータを変更
  * 子アイテムを動的に制御するための `useChildren` 関数を追加。
  * コンポーネント自身のプロパティのための `componentProps` 関数を追加。
  * コンポーネントの props を動的に処理するための `useComponentProps` 関数を追加。
  * リストアイテムの一意の識別のために `key` パラメータを `name` に変更。
  * 表示の制御を動的に行うために `visible` パラメータを `useVisible` 関数に変更。
  * リストアイテムのレンダリング用に `component` パラメータを `Component` に変更。
* `SchemaInitializer.Button` を `SchemaInitializerButton` に変更し、SchemaInitializer の Component パラメータのデフォルト値に設定。
* `SchemaInitializer.Item` を `SchemaInitializerItem` に変更し、パラメータは変更なし。
* `SchemaInitializer.ActionModal` を `SchemaInitializerActionModal` に変更し、パラメータは変更なし。
* `SchemaInitializer.SwitchItem` を `SchemaInitializer.Switch` に変更し、パラメータは変更なし。
* `SchemaInitializerProvider` を削除し、`SchemaInitializerManager` に置き換え。
* `SchemaInitializer.itemWrap` を削除し、`item` コンポーネントをラップする必要がなくなりました。

### SchemaSettings の変更

* `SchemaSettings` を登録するための `SchemaSettingsManager` を追加。
* `useSchemaSettingsItem()` を追加。
* `useSchemaSettingsRender()` を追加。
* スキーマ設定のためのパラメータ `x-settings` を追加。
* スキーマツールバーを設定するための `x-toolbar` パラメータを追加。
* スキーマツールバーをカスタマイズするための `SchemaToolbar` コンポーネントを追加。
* 元の `useDesigner()` を置き換えるために `useSchemaToolbarRender()` を追加。
* 設定を定義するために `function SchemaSettings` を `class SchemaSettings` に変更。
* 元の `SchemaSettings` を `SchemaSettingsDropdown` に変更。
* `SchemaSettings.Item` を `SchemaSettingsItem` に変更。
* `SchemaSettings.ItemGroup` を `SchemaSettingsItemGroup` に変更。
* `SchemaSettings.SubMenu` を `SchemaSettingsSubMenu` に変更。
* `SchemaSettings.Divider` を `SchemaSettingsDivider` に変更。
* `SchemaSettings.Remove` を `SchemaSettingsRemove` に変更。
* `SchemaSettings.SelectItem` を `SchemaSettingsSelectItem` に変更。
* `SchemaSettings.CascaderItem` を `SchemaSettingsCascaderItem` に変更。
* `SchemaSettings.SwitchItem` を `SchemaSettingsSwitchItem` に変更。
* `SchemaSettings.ModalItem` を `SchemaSettingsModalItem` に変更。
* `SchemaSettings.ActionModalItem` を `SchemaSettingsActionModalItem` に変更。
* 廃止された `x-designer` パラメータを削除し、将来的に削除される予定。代わりに `x-toolbar` を使用。
* 廃止された `useDesigner()` を削除し、将来的に削除される予定。代わりに `useSchemaToolbarRender()` を使用。

詳細は [NocoBase 0.17 の非互換性のある変更](https://docs.nocobase.com/welcome/release/upgrade-to/v017) を参照してください。
