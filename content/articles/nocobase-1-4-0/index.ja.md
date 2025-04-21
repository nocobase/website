## 主な新機能

### プラグインの追加および更新プロセスの簡略化

![20241201170853](https://static-docs.nocobase.com/20241201170853.png)

* プラグインリストがローカルディレクトリから直接読み取られるようになりました。
* プラグインの追加と更新プロセスを統合しました。
* インターフェースでプラグインの一括有効化が可能です。
* 商用プラグインのダウンロードおよびアップグレードプロセスが簡略化されました。

参考資料：

* [プラグインのインストールとアップグレード](https://docs-jp.nocobase.com/welcome/getting-started/plugin)
* [リリースノート / プラグインの追加および更新プロセスの簡略化](https://www.nocobase.com/ja/blog/simplify-the-process-of-adding-and-updating-plugins)

### 通知機能

![20241201171806](https://static-docs.nocobase.com/20241201171806.png)

* **アプリ内メッセージ通知**: NocoBaseアプリ内でリアルタイムのメッセージ通知を受け取ることができます。
* **メール通知**: SMTP方式でメール通知を送信します。
* **WeCom通知**: WeCom（企業微信）を通じて通知を送信します。

参考資料：

* [通知管理](https://docs-jp.nocobase.com/handbook/notification-manager)

### ユーザーデータ同期

![20241201172843](https://static-docs.nocobase.com/20241201172843.png)

詳しい手順はこちらをご覧ください：

* [ユーザーデータ同期](https://docs-jp.nocobase.com/handbook/user-data-sync)

### バックアップマネージャー

![20241201170237](https://static-docs.nocobase.com/20241201170237.png)

詳細は以下をご覧ください：

* [バックアップマネージャー](https://docs-jp.nocobase.com/handbook/backups)

### 公開フォーム

公開フォームを使用して匿名ユーザーから情報を収集することができます。

![20241201165614](https://static-docs.nocobase.com/20241201165614.png)

詳しくはこちらをご覧ください：

* [公開フォーム](https://docs-jp.nocobase.com/handbook/public-forms)

### データソース: KingbaseES

KingbaseESデータベースをデータソースとして使用できます。主データベースまたは外部データベースとして設定可能です。

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

参考資料：

* [データソース: KingbaseES](https://docs-jp.nocobase.com/handbook/data-source-kingbase)

### データソース: 外部Oracle

外部のOracleデータベースをデータソースとして利用可能です。

![701f8271f153d417e6f25c8ba74c931d.png](https://static-docs.nocobase.com/701f8271f153d417e6f25c8ba74c931d.png)

詳しくはこちらをご確認ください：

* [データソース: 外部Oracle](https://docs-jp.nocobase.com/handbook/data-source-external-oracle)

### データテーブルフィールド: 添付ファイル（URL）

URL形式の添付ファイルをサポートします。

![e8772bec3d4b1771c1b21d087c9a4185.png](https://static-docs.nocobase.com/e8772bec3d4b1771c1b21d087c9a4185.png)

詳しい設定方法は以下をご参照ください：

* [データテーブルフィールド: 添付ファイル（URL）](https://docs-jp.nocobase.com/handbook/field-attachment-url)

### フィールドコンポーネント: マスク

![20241201165938](https://static-docs.nocobase.com/20241201165938.png)

詳細はこちらをご確認ください：

* [フィールドコンポーネント: マスク](https://docs-jp.nocobase.com/handbook/field-component-mask)

### ワークフロー: JavaScript

JavaScriptノードを使用して、カスタムJavaScriptスクリプトをワークフロー内で実行可能になりました。スクリプトで上流ノードの変数を利用でき、戻り値を下流ノードで使用できます。

![20241202203655](https://static-docs.nocobase.com/20241202203655.png)

詳細はこちらをご覧ください：

* [ワークフローノード: JavaScript](https://docs-jp.nocobase.com/handbook/workflow-javascript)

### データ可視化: ECharts

EChartsのサポートが追加されました。ファンネルグラフやレーダーチャートなど、多彩なグラフが利用可能です。また、設定オプションもより使いやすくなっています。

![data-visualization-echarts](https://static-docs.nocobase.com/202410091022965.png)

詳しい情報はこちらをご覧ください：

* [データ可視化: ECharts](https://docs-jp.nocobase.com/handbook/data-visualization-echarts)

### ブロック: ステップフォーム

フォームを複数のステップに分割することで、ユーザーの入力負担を軽減します。

![a503e153e8d714b9ca56f512142aeef1.png](https://static-docs.nocobase.com/a503e153e8d714b9ca56f512142aeef1.png)

詳しくはこちらをご確認ください：

* [ブロック: ステップフォーム](https://docs-jp.nocobase.com/handbook/block-multi-step-from)

### ブロック: アクションパネル

さまざまなクイックアクションを配置できるアクションパネルが追加されました。現在以下をサポートしています：

* リンク
* QRコードスキャン
* ポップアップ
* カスタムリクエスト

グリッド形式とリスト形式のレイアウトに対応しています。

![48bd2e280aa887f3e5bd43d6c79d6b46.png](https://static-docs.nocobase.com/48bd2e280aa887f3e5bd43d6c79d6b46.png)

詳しい情報はこちらをご覧ください：

* [ブロック: アクションパネル](https://docs-jp.nocobase.com/handbook/block-action-panel)

## 削除された機能

### バックアップリストアプラグインの廃止

NocoBase v0.19以降、アプリケーションのバックアップとリストア用に `@nocobase/plugin-backup-restore` プラグインが提供されていました。しかし、以下の理由でこの機能が推奨されなくなりました：

1. データベースフィールドのデフォルト値や一意インデックスなどのメタデータをバックアップ・リストアできない。
2. データベースのビュー、ストアドプロシージャ、関数、トリガーをバックアップ・リストアできない。
3. 各プラグインのフォームで個別に `dumpRules` を設定する必要があり、追加のカスタムロジックが必要。
4. バックアップグループの設定が複雑で、理解しにくい。
5. アプリケーション層でプロセスが行われるため、アプリケーションが起動しない場合、バックアップやリストアも失敗する可能性がある。

これらの問題を考慮し、v1.4以降ではこのプラグインを廃止し、代わりに新しいバックアップソリューションを提供しています。

詳しい情報はこちらをご覧ください：

* [NocoBaseのバックアップとリストア方法](https://www.nocobase.com/ja/blog/nocobase-backup-restore)
