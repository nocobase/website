週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.10](https://www.nocobase.com/ja/blog/v2.0.10)

*リリース日： 2026-03-04*

### 🐛 不具合修正

* **[AI 社員]** ナレッジベース有効化後にAI社員との対話でエラーが発生する問題を修正 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock
* **[フロントエンドフローエンジン]** SQL削除時のエラーを修正 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos
* **[権限制御]** ACLメタデータ設定時に使用されるデータベースインスタンスが正しくない問題を修正 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile
* **[ワークフロー：承認]** ノード情報がタイプフィルタリングされた後、ノード検索結果が承認画面に表示されない問題を修正 by @mytharcher

### [v2.0.9](https://www.nocobase.com/ja/blog/v2.0.9)

*リリース日： 2026-03-03*

### 🐛 不具合修正

* **[client]**
  * デフォルト値コンポーネント内でフィールドコンポーネントがレンダリングされない問題を修正 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  * メニュー切り替え時にデータブロックが更新されない問題を修正 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
* **[database]** v2バージョンにおけるフィールドのカスタム正規表現バリデーション失敗を修正 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
* **[flow-engine]** ctx.exitがユーザー定義イベントフローの実行を終了できない問題を修正 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
* **[ワークフロー：承認]** 承認提出時にリレーションデータが更新および処理されない問題を回避するため、不足していたパラメータを補完 by @mytharcher

### [v2.0.8](https://www.nocobase.com/ja/blog/v2.0.8)

*リリース日： 2026-03-01*

### 🎉 新機能

* **[AI 社員]** AI対話のユーザープロンプト編集を更新 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🐛 不具合修正

* **[server]** hashパラメータを追加することでキャッシュが更新されない問題を解決 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos
* **[AI 社員]** AIデータソース設定のレンダリング異常を修正 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock
* **[ワークフロー：カスタム操作イベント]** カスタム操作イベントがサブフローとして呼び出された際に停止する問題を修正 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher
* **[ワークフロー：承認]**
  * 承認操作においてリレーションフィールドの値をフィルタリングし、越権データ操作を回避 by @mytharcher
  * 手動で承認ワークフローを実行した際のエラーを修正 by @mytharcher
  * 追加承認および転送承認後に `dataAfter` フィールド値が欠落し、一覧読み込み時にエラーが発生する問題を修正 by @mytharcher
  * ACLに基づくappendsパラメータのフィルタリング問題を修正 by @mytharcher
  * ユーザーに関連権限がない場合、リレーションフィールドが作成または更新されるべきでない権限問題を修正 by @mytharcher

### [v2.0.7](https://www.nocobase.com/ja/blog/v2.0.7)

*リリース日： 2026-02-27*

### 🎉 新機能

* **[AI 従業員]** 複数のキーワードによる内蔵ドキュメント検索に対応し、複数ドキュメントを一括で読み込み可能に ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 機能改善

* **[client]** テーブルでサマリー行（summary）を設定できるように対応 ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos
* **[NocoBase への埋め込み]** 権限プラグインにリレーションフィールド値をフィルタリングする API を追加 ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher

### 🐛 不具合修正

* **[データ可視化]** i18n チャートプラグインのエントリおよびプレースホルダー文言を修正 ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang
* **[ワークフロー：JavaScript ノード]** Windows 環境でテストケースが正常に実行できない問題を修正 ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher
* **[AI 従業員]** AI 会話メッセージ内に 0 が表示されてしまう問題を修正 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang
* **[テンプレート印刷]** ACL API 変更への未対応により発生していたエラーを修正 by @mytharcher
* **[ワークフロー：承認]** 承認操作時にリレーションフィールドの値をフィルタリングし、不正な権限によるデータ操作を防止 by @mytharcher
* **[メール管理]** 画像 contentId の形式解析に関する問題を修正 by @jiannx

### [v2.0.6](https://www.nocobase.com/ja/blog/v2.0.6)

*リリース日： 2026-02-26*

### 🐛 不具合修正

* **[AI 社員]** MySQLデータベース使用時にAI対話でエラーが発生する問題を修正 ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.7](https://www.nocobase.com/ja/blog/v2.1.0-beta.7)

*リリース日： 2026-03-04*

### 🎉 新機能

* **[AI 社員]** AI対話のユーザープロンプト編集を更新 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🐛 不具合修正

* **[client]**
  * デフォルト値コンポーネント内でフィールドコンポーネントがレンダリングされない問題を修正 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  * メニュー切り替え時にデータブロックが更新されない問題を修正 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
* **[flow-engine]** ctx.exitがユーザー定義イベントフローの実行を終了できない問題を修正 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
* **[database]** v2バージョンにおけるフィールドのカスタム正規表現バリデーション失敗を修正 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
* **[server]** hashパラメータを追加することでキャッシュが更新されない問題を解決 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos
* **[権限制御]** ACLメタデータ設定時に使用されるデータベースインスタンスが正しくない問題を修正 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile
* **[AI 社員]**
  * ナレッジベース有効化後にAI社員との対話でエラーが発生する問題を修正 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock
  * AIデータソース設定のレンダリング異常を修正 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock
* **[フロントエンドフローエンジン]** SQL削除時のエラーを修正 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos
* **[ワークフロー：カスタム操作イベント]** カスタム操作イベントがサブフローとして呼び出された際に停止する問題を修正 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher
* **[ワークフロー：承認]**
  * ノード情報がタイプフィルタリングされた後、ノード検索結果が承認画面に表示されない問題を修正 by @mytharcher
  * 承認提出時にリレーションデータが更新および処理されない問題を回避するため、不足していたパラメータを補完 by @mytharcher
  * 手動で承認ワークフローを実行した際のエラーを修正 by @mytharcher
  * 追加承認および転送承認後に `dataAfter` フィールド値が欠落し、一覧読み込み時にエラーが発生する問題を修正 by @mytharcher
  * ユーザーに関連権限がない場合、リレーションフィールドが作成または更新されるべきでない権限問題を修正 by @mytharcher
  * 承認操作においてリレーションフィールドの値をフィルタリングし、越権データ操作を回避 by @mytharcher
  * ACLに基づくappendsパラメータのフィルタリング問題を修正 by @mytharcher

### [v2.1.0-beta.6](https://www.nocobase.com/ja/blog/v2.1.0-beta.6)

*リリース日： 2026-02-27*

### 🎉 新機能

* **[AI 従業員]** 複数キーワードによる内蔵ドキュメント検索に対応し、複数ドキュメントを一括で読み込み可能に ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 機能改善

* **[client]** テーブルでサマリー行（summary）を設定できるように対応 ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos
* **[AI 従業員]** AI 対話における user prompt 機能を更新 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang
* **[NocoBase への埋め込み]** 権限プラグインにリレーションフィールド値をフィルタリングする API を追加 ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher

### 🐛 不具合修正

* **[AI 従業員]** AI 対話メッセージ内に 0 が表示されてしまう問題を修正 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang
* **[データ可視化]** i18n チャートプラグインのエントリおよびプレースホルダー文言を修正 ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang
* **[ワークフロー：JavaScript ノード]** Windows 環境でテストケースが正常に実行できない問題を修正 ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher
* **[テンプレート印刷]** ACL API 変更への未対応により発生していたエラーを修正 by @mytharcher
* **[ワークフロー：承認]** 承認操作時にリレーションフィールドの値をフィルタリングし、不正な権限によるデータ操作を防止 by @mytharcher
* **[メール管理]** 画像 contentId の形式解析に関する問題を修正 by @jiannx

### [v2.1.0-beta.5](https://www.nocobase.com/ja/blog/v2.1.0-beta.5)

*リリース日： 2026-02-26*

### 🚀 機能改善

* **[AI 社員]** AI対話のuser prompt機能を更新 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

### 🐛 不具合修正

* **[AI 社員]** MySQLデータベース使用時にAI対話でエラーが発生する問題を修正 ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.7](https://www.nocobase.com/ja/blog/v2.1.0-alpha.7)

*リリース日： 2026-02-26*

### 🎉 新機能

* **[AI 社員]** 複数のキーワードによる組み込みドキュメントの検索をサポートし、複数のドキュメントを一度に読み取ることが可能に ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 機能改善

* **[AI 社員]** AI対話のuser prompt機能を更新 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

### 🐛 不具合修正

* **[client]** モバイル端末において、ページ遷移を実行する前にメニューを閉じるよう修正 ([#8699](https://github.com/nocobase/nocobase/pull/8699)) by @zhangzhonghe
* **[AI LLM：GigaChat]** 2.0においてGigaChatプラグインが使用できない問題を修正 ([#8707](https://github.com/nocobase/nocobase/pull/8707)) by @cgyrock
* **[AI 社員]**
  * MySQLデータベース使用時にAI対話でエラーが発生する問題を修正 ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock
  * ContentBlockオブジェクトを使用してchatGPT APIのファイル入力を統一 ([#8696](https://github.com/nocobase/nocobase/pull/8696)) by @cgyrock
  * ユーザーがAIエージェントのツール実行確認リクエストを無視して新しいメッセージを直接送信した場合に発生するAPIエラーを修正 ([#8697](https://github.com/nocobase/nocobase/pull/8697)) by @cgyrock
* **[AI: ナレッジベース]** AIナレッジベースの起動時エラーを修正 by @cgyrock
* **[メール管理]** 画像表示エラーを修正 by @jiannx
