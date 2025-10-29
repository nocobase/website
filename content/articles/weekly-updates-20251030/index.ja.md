週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.31](https://www.nocobase.com/ja/blog/v1.8.31)

*リリース日：2025-10-17*

### 🐛 不具合修正

* **[database]**`$in` オペレーターの値が `null` の場合に発生するエラーを修正（[#7610](https://github.com/nocobase/nocobase/pull/7610)）@mytharcher
* **[ワークフロー：承認]**
  * 承認送信後にデータベースエラーが起きた際、トランザクションが正常にロールバックされずタイムアウトする不具合を修正 @mytharcher
  * 承認フォーム送信時、一部の変数が正しく解釈されない不具合を修正 @mytharcher

### [v1.8.30](https://www.nocobase.com/ja/blog/v1.8.30)

*リリース日：2025-10-16*

### 🐛 不具合修正

* **[クライアント]** タブアイコン設定のポップアップが他の要素に隠れる問題を修正（[#7607](https://github.com/nocobase/nocobase/pull/7607)）by @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.13](https://www.nocobase.com/ja/blog/v1.9.0-beta.13)

*リリース日：2025-10-22*

### 🚀 機能改善

* **[client]** フロントエンドで `mime` パッケージを使用し、ファイルのMIMEタイプをより正確に判定できるようにしました（[#7551](https://github.com/nocobase/nocobase/pull/7551)）@mytharcher
* **[データソース：メインDB]** フィールド検証エラーのローカライズ処理を見直し、エラーハンドリング用プラグイン側で対応するよう改善しました（[#7582](https://github.com/nocobase/nocobase/pull/7582)）@2013xile
* **[ワークフロー]** ノード削除時に「ブランチを残す」オプションを追加しました（[#7571](https://github.com/nocobase/nocobase/pull/7571)）@mytharcher
* **[ワークフロー：承認]** コア変更に対応するため、分岐設定をリファクタリングしました @mytharcher

### 🐛 不具合修正

* **[client]**
  * フィルターで日付フィールドをクリアした際に発生するエラーを修正（[#7632](https://github.com/nocobase/nocobase/pull/7632)）@katherinehhh
  * 編集ダイアログでサブテーブルの初期値が反映されない問題を修正（[#7631](https://github.com/nocobase/nocobase/pull/7631)）@katherinehhh
  * 画像プレビューで回転と拡大を同時に行うと表示が崩れる問題を修正（[#7573](https://github.com/nocobase/nocobase/pull/7573)）@mytharcher
  * タブのアイコン設定ポップアップが隠れてしまう問題を修正（[#7607](https://github.com/nocobase/nocobase/pull/7607)）@zhangzhonghe
* **[database]**`$in` 演算子の値が `null` の場合に発生するエラーを修正（[#7610](https://github.com/nocobase/nocobase/pull/7610)）@mytharcher
* **[データソース：メインDB]** 逆リレーション作成後に複数ノードでメタデータが同期されない問題を修正（[#7628](https://github.com/nocobase/nocobase/pull/7628)）@mytharcher
* **[ワークフロー：承認]**
  * アプリ未インストール時にマイグレーションでテーブルが見つからず発生するエラーを修正 @mytharcher
  * hooksをスキップした際にSnowflake IDが生成されない問題を修正 @mytharcher
* **[認証：LDAP]** 非ASCII文字を含むDNでADログインに失敗する問題を修正 @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.19](https://www.nocobase.com/ja/blog/v2.0.0-alpha.19)

*リリース日：2025-10-21*

### 🐛 不具合修正

* **[client]**
  * ポップアップ内でタブを切り替えた後、二重ポップアップを開いてすべて閉じた際に、URLが正しく更新されない問題を修正しました（[#7630](https://github.com/nocobase/nocobase/pull/7630)) by @gchust
  * 編集ダイアログ内のサブテーブルでデフォルト値が反映されない問題を修正しました（[#7631](https://github.com/nocobase/nocobase/pull/7631)) by @katherinehhh
  * フィルターで日付をクリアするとエラーになる問題を修正しました（[#7632](https://github.com/nocobase/nocobase/pull/7632)) by @katherinehhh
* **[マルチアプリ管理（廃止済み）]** 旧マルチアプリ管理が無効化できない不具合を修正しました（[#7633](https://github.com/nocobase/nocobase/pull/7633)) by @jiannx

### [v2.0.0-alpha.17](https://www.nocobase.com/ja/blog/v2.0.0-alpha.17)

*リリース日：2025-10-21*

### 🎉 新機能

* **[client]** テーブル行クリックイベントに対応し、行をクリックした際に任意の処理を実行できるようになりました（[#7622](https://github.com/nocobase/nocobase/pull/7622)）@zhangzhonghe
* **[ワークフロー：承認]** 承認トリガーで申請書番号（承認ドキュメント番号）の変数が利用可能になりました @mytharcher

### 🐛 不具合修正

* **[flow-engine]** antdコンポーネントの翻訳が反映されない問題を修正（[#7621](https://github.com/nocobase/nocobase/pull/7621)）@zhangzhonghe
* **[データソース：メインDB]** 逆リレーションフィールド作成後に複数ノードでメタデータが同期されない問題を修正（[#7628](https://github.com/nocobase/nocobase/pull/7628)）@mytharcher
* **[plugin-demo-platform]** デモ環境でアプリを自動終了できるように対応 @jiannx
* **[マルチアプリ]**
  * マルチアプリのデータ移行時にhooksが発火しない問題を修正 @jiannx
  * マルチアプリのプロキシ機能でキャッシュをサポート @jiannx

### [v2.0.0-alpha.16](https://www.nocobase.com/ja/blog/v2.0.0-alpha.16)

*リリース日：2025-10-20*

### 🎉 新機能

* **[plugin-form-drafts]** フォームの下書き保存機能を追加 by @chenos

### 🐛 不具合修正

* **[flow-engine]** 引用ブロックで現在のビューに関連する変数が取得できない問題を修正（[#7620](https://github.com/nocobase/nocobase/pull/7620)）by @gchust
* **[client]** usePluginのコンテキストが未設定の場合に発生するエラーを修正（[#7627](https://github.com/nocobase/nocobase/pull/7627)）by @chenos

### [v2.0.0-alpha.15](https://www.nocobase.com/ja/blog/v2.0.0-alpha.15)

*リリース日：2025-10-20*

### 🚀 機能改善

* **[クライアント]** JSフィールドモデルがリレーションフィールドをサポート（[#7618](https://github.com/nocobase/nocobase/pull/7618)）@gchust
* **[AI エージェント]**
  * OpenAI LLM プロバイダーをリファクタリングし、Completions API と Chat Completions API をそれぞれサポートする2つの独立したプロバイダーに分割（[#7615](https://github.com/nocobase/nocobase/pull/7615)）@cgyrock
  * 新しい LLM プロバイダー Ollama を追加（[#7612](https://github.com/nocobase/nocobase/pull/7612)）@ReLaMi96

### 🐛 不具合修正

* **[ワークフロー：承認]**
  * 追加承認者を設定した後、未処理タスク数が更新されない問題を修正 @mytharcher
  * 承認送信後にデータベースエラーが発生した際、トランザクションがロールバックされずタイムアウトする問題を修正 @mytharcher

### [v2.0.0-alpha.14](https://www.nocobase.com/ja/blog/v2.0.0-alpha.14)

*リリース日：2025-10-17*

### 🚀 機能改善

* **[AI 従業員]** AI によるコード生成機能を強化（[#7614](https://github.com/nocobase/nocobase/pull/7614)）@cgyrock
* **[データソース：主データベース]** フィールド検証エラーメッセージのローカライズロジックをリファクタリングし、エラー処理プラグインで統一（[#7582](https://github.com/nocobase/nocobase/pull/7582)）@2013xile

### 🐛 不具合修正

* **[database]**
  * `runSQL` で SQL を実行する前に `search_path` を設定するよう修正（[#7611](https://github.com/nocobase/nocobase/pull/7611)）@2013xile
  * `$in` オペレーターの値が `null` の場合に発生するエラーを修正（[#7610](https://github.com/nocobase/nocobase/pull/7610)）@mytharcher
* **[クライアント]** タブのアイコン設定ポップアップが他の要素に隠れる問題を修正（[#7607](https://github.com/nocobase/nocobase/pull/7607)）@zhangzhonghe
* **[ワークフロー：承認]** 承認フォーム送信時に一部の変数が正しく解析されない問題を修正 @mytharcher

### [v2.0.0-alpha.13](https://www.nocobase.com/ja/blog/v2.0.0-alpha.13)

*リリース日：2025-10-16*

### 🎉 新機能

* **[ブロック：参照]** 実験的な「参照ブロック」プラグインを追加し、既存のブロックを参照または複製して再利用できるようになりました。（[#7584](https://github.com/nocobase/nocobase/pull/7584)）by @gchust

### 🐛 不具合修正

* **[データビジュアライゼーション]** イベント登録がタイムアウトした場合にグラフが表示されない問題を修正（[#7608](https://github.com/nocobase/nocobase/pull/7608)）by @heziqiang

### [v2.0.0-alpha.10](https://www.nocobase.com/ja/blog/v2.0.0-alpha.10)

*リリース日：2025-10-15*

### 🚀 機能改善

* **[データ可視化]** データ可視化プラグインを VI 2.0 に更新し、不具合の修正と UI の改善を実施（[#7597](https://github.com/nocobase/nocobase/pull/7597)）by @heziqiang

### 🐛 不具合修正

* **[ワークフロー：承認]** フックをスキップした際に Snowflake ID が生成されない問題を修正 by @mytharcher

### [v2.0.0-alpha.9](https://www.nocobase.com/ja/blog/v2.0.0-alpha.9)

*リリース日：2025-10-15*

### 🎉 新機能

* **[クライアント]** カスタム変数をサポート ([#7585](https://github.com/nocobase/nocobase/pull/7585)) by @zhangzhonghe

### 🚀 機能改善

* **[AIアシスタント]** モバイルレイアウトでチャットボックスに最小化ボタンを追加 ([#7595](https://github.com/nocobase/nocobase/pull/7595)) by @cgyrock

### 🐛 不具合修正

* **[サーバー]** コピー時に参照フィールドの field.targetKey 値を保持 ([#7599](https://github.com/nocobase/nocobase/pull/7599)) by @chenos
* **[AIアシスタント]** モバイルレイアウトでのダイアログ表示の不具合を修正 ([#7591](https://github.com/nocobase/nocobase/pull/7591)) by @cgyrock
