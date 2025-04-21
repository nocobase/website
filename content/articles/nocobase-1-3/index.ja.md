バージョン1.3から、NocoBaseは**main**と**next**の2つの主要なブランチを提供します。

- **main**ブランチ（ベータ版）は、バグ修正に焦点を当て、ユーザーに安定したバージョンを提供します。
- **next**ブランチ（アルファ版）には、リリースされていない新機能が含まれています。このバージョンは不安定で、開発者やテスターが新機能を早期に体験したり、互換性テストを行ったりすることを目的としています。

1.3ベータ版の新機能には以下が含まれます：

## コア

### URLを介してポップアップを開くサポート

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1d1c69d92d778fdbce569e76551b2f1c.mp4" type="video/mp4">
</video>

参考文献：

- [ポップアップ](https://docs-jp.nocobase.com/handbook/ui/pop-up)

### ページとしてポップアップを開くサポート

ポップアップ操作のために新しい「ページ」オプションが追加されました。

![4a75fb85c9ee716316b8286e5b9473c0.png](https://static-docs.nocobase.com/4a75fb85c9ee716316b8286e5b9473c0.png)

参考文献：

- [ポップアップ](https://docs-jp.nocobase.com/handbook/ui/pop-up)

### フィールドがスタイル属性の設定をサポート

![04e31b81fb3a9deb16b917431abfe695.png](https://static-docs.nocobase.com/04e31b81fb3a9deb16b917431abfe695.png)

参考文献：

- [フィールド設定 / スタイル](https://docs-jp.nocobase.com/handbook/ui/fields/field-settings/style)

### Markdownとiframe HTMLがHandlebarsテンプレートエンジンをサポート

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

参考文献：

- [Markdown Handlebarsテンプレートエンジン](https://docs-jp.nocobase.com/handbook/ui/blocks/other-blocks/markdown#handlebars)
- [Iframe HTML Handlebarsテンプレートエンジン](https://docs-jp.nocobase.com/handbook/block-iframe#handlebars)

### フィールドコンポーネントの動的設定をサポート

![20240807092556.png](https://static-docs.nocobase.com/20240807092556.png)

参考文献：

- [フィールド設定 / フィールドコンポーネント](https://docs-jp.nocobase.com/handbook/ui/fields/field-settings/field-component)
- [プラグインサンプル / 値を持つフィールドコンポーネント](https://docs-jp.nocobase.com/plugin-samples/field/value)

## プラグイン

### REST APIデータソース

![20240721171420.png](https://static-docs.nocobase.com/20240721171420.png)

参考文献：

- [データソース / REST APIデータソース](https://docs-jp.nocobase.com/handbook/data-source-rest-api)

### MSSQL外部データソース

![aac26e115213a2adbfbb5dfcf0e7ddc5.png](https://static-docs.nocobase.com/aac26e115213a2adbfbb5dfcf0e7ddc5.png)

参考文献：

- [データソース / 外部データベース / 外部MSSQL](https://docs-jp.nocobase.com/handbook/data-source-external-mssql)

### モバイルV2

![e88f4f84b47f9076d3ae518ff4d1cc15.png](https://static-docs.nocobase.com/e88f4f84b47f9076d3ae518ff4d1cc15.png)

参考文献：

- [モバイル](https://docs-jp.nocobase.com/handbook/mobile)

### 多対多（配列）

![202407051108180.png](https://static-docs.nocobase.com/202407051108180.png)

参考文献：

- [多対多（配列）](https://docs-jp.nocobase.com/handbook/field-m2m-array)

### 認証：WeCom

![202406272115805.png](https://static-docs.nocobase.com/202406272115805.png)

参考文献：

- [認証：WeCom](https://docs-jp.nocobase.com/handbook/wecom/auth)

### ワークフロー：日付計算ノード

![0975e0b188846624ec6d66f46b3f25b0.png](https://static-docs.nocobase.com/0975e0b188846624ec6d66f46b3f25b0.png)

参考文献：

- [ワークフロー：日付計算ノード](https://docs-jp.nocobase.com/handbook/workflow-date-calculation)

## 重要な変更

### 環境変数`DB_TIMEZONE`が`TZ`に変更されました

新しい`TZ`環境変数が追加され、アプリケーションのタイムゾーンを設定できるようになりました。デフォルトはオペレーティングシステムのタイムゾーンです。古い`DB_TIMEZONE`は互換性がありますが、非推奨となりました。

参考文献：

- [環境変数 / TZ](https://docs-jp.nocobase.com/welcome/getting-started/env#tz)
