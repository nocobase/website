## [v1.4.0](https://github.com/nocobase/nocobase/compare/v1.3.53...v1.4.0) - 2024-12-03

## 🎉 主な新機能

### プラグインの追加および更新プロセスの簡略化

![20241201170853](https://static-docs.nocobase.com/20241201170853.png)

* プラグインリストをローカルディレクトリから直接取得するようになり、操作がさらに簡単になりました。
* プラグインの追加と更新プロセスが統合され、より便利になりました。
* インターフェースでプラグインを一括で有効化することが可能です。
* 商用プラグインのダウンロードとアップグレード手順が簡略化されました。

詳しくは、以下の資料をご覧ください：

* [リリースノート / プラグインの追加および更新プロセスの簡略化](https://www.nocobase.com/ja/blog/simplify-the-process-of-adding-and-updating-plugins)

### 通知機能

![20241201171806](https://static-docs.nocobase.com/20241201171806.png)

* **通知: アプリ内メッセージ**
  NocoBaseアプリ内でリアルタイム通知を受け取ることができます。
* **通知: メール**
  SMTPを使用してメール通知を送信する機能を提供します。
* **通知: WeCom（企業微信）**
  WeComチャンネルを通じて通知を送信します。

詳細は、こちらをご覧ください：

* [通知管理](https://docs-jp.nocobase.com/handbook/notification-manager)

### ユーザーデータ同期

![20241201172843](https://static-docs.nocobase.com/20241201172843.png)

詳しい使い方は、以下をご参照ください：

* [ユーザーデータ同期](https://docs-jp.nocobase.com/handbook/user-data-sync)

### バックアップマネージャー

![20241201170237](https://static-docs.nocobase.com/20241201170237.png)

バックアップ管理機能の詳細は、以下をご覧ください：

* [バックアップマネージャー](https://docs-jp.nocobase.com/handbook/backups)

### 公開フォーム

公開フォームを作成し、匿名ユーザーから情報を収集できるようになりました。

![20241201165614](https://static-docs.nocobase.com/20241201165614.png)

詳しくは、以下のリンクをご覧ください：

* [公開フォーム](https://docs-jp.nocobase.com/handbook/public-forms)

### データソース: KingbaseES

KingbaseESデータベースをデータソースとして使用可能です。これを主データベースまたは外部データベースとして設定できます。

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

詳細は、以下の資料をご覧ください：

* [データソース - KingbaseES](https://docs-jp.nocobase.com/handbook/data-source-kingbase)

### データソース: 外部Oracle

外部のOracleデータベースをデータソースとして使用できます。

![628abc5eb797e6b903d4b548f773a13b.png](https://static-docs.nocobase.com/628abc5eb797e6b903d4b548f773a13b.png)

詳しい手順はこちらをご確認ください：

* [データソース: 外部Oracle](https://docs-jp.nocobase.com/handbook/data-source-external-oracle)

### データテーブルフィールド: 添付ファイル（URL）

URL形式の添付ファイルをサポートする新機能を追加しました。

![e8772bec3d4b1771c1b21d087c9a4185.png](https://static-docs.nocobase.com/e8772bec3d4b1771c1b21d087c9a4185.png)

詳細な設定方法は、以下をご覧ください：

* [データテーブルフィールド: 添付ファイル（URL）](https://docs-jp.nocobase.com/handbook/field-attachment-url)

### フィールドコンポーネント: マスク

![20241201165938](https://static-docs.nocobase.com/20241201165938.png)

使用方法の詳細については、以下をご参照ください：

* [フィールドコンポーネント: マスク](https://docs-jp.nocobase.com/handbook/field-component-mask)

### ワークフロー: JavaScript

JavaScriptノードを使うことで、ワークフロー内でJavaScriptスクリプトを実行可能になりました。
スクリプト内で上流ノードからの変数を利用でき、戻り値を下流ノードで活用することも可能です。

![20241202203655](https://static-docs.nocobase.com/20241202203655.png)

詳しくはこちらをご確認ください：

* [ワークフロー - JavaScript](https://docs-jp.nocobase.com/handbook/workflow-javascript)

### データ可視化: ECharts

EChartsのサポートが追加され、ファンネルグラフやレーダーチャートなど、さまざまなグラフが使用可能になりました。ユーザーフレンドリーな設定オプションも提供されています。

![data-visualization-echarts](https://static-docs.nocobase.com/202410091022965.png)

詳しい設定方法は以下をご参照ください：

* [データ可視化: ECharts](https://docs-jp.nocobase.com/handbook/data-visualization-echarts)

### ブロック: 複数ステップフォーム

複数ステップフォームを利用することで、データ入力プロセスを段階的に進めることができます。

![a503e153e8d714b9ca56f512142aeef1.png](https://static-docs.nocobase.com/a503e153e8d714b9ca56f512142aeef1.png)

詳しくは、以下のリンクをご覧ください：

* [複数ステップフォーム](https://docs-jp.nocobase.com/handbook/block-multi-step-from)

### ブロック: アクションパネル

さまざまなクイックアクションを配置可能なアクションパネル機能が追加されました。現在以下をサポートしています：

* リンク
* QRコードスキャン
* ポップアップ
* カスタムリクエスト

グリッド形式とリスト形式のレイアウトに対応しています。

![9942e6741e99195713f9e2981b02f228.png](https://static-docs.nocobase.com/9942e6741e99195713f9e2981b02f228.png)

詳細は以下をご覧ください：

* [アクションパネル](https://docs-jp.nocobase.com/handbook/block-action-panel)
