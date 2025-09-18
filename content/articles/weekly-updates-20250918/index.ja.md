週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.25](https://www.nocobase.com/ja/blog/v1.8.25)

*リリース日：2025-09-17*

#### 🚀 機能改善

* **[認証（auth）]** ユーザー名に「.（ドット）」を使用する機能をサポート（[#7504](https://github.com/nocobase/nocobase/pull/7504)）@2013xile

#### 🐛 不具合修正

* **[クライアント]** ボタンアイコン設定のポップアップが覆われる / 重なる問題を修正（[#7506](https://github.com/nocobase/nocobase/pull/7506)）@zhangzhonghe
* **[テンプレート印刷]** chinaRegions（中国地域）フィールドをサポート @jiannx

### [v1.8.24](https://www.nocobase.com/ja/blog/v1.8.24)

*リリース日：2025-09-13*

#### 🎉 新機能

* **[ワークフロー：承認]** 承認プロセス内の任意のノードに戻る機能をサポート @mytharcher

#### 🚀 機能改善

* **[サーバー]** メッセージキューに標準的なシステムロガーを使用（[#7480](https://github.com/nocobase/nocobase/pull/7480)）@mytharcher
* **[クライアント]** ファイルリストから省略記号のポップオーバーを削除（[#7479](https://github.com/nocobase/nocobase/pull/7479)）@mytharcher
* **[ワークフロー]** ワークフロー準備プロセスを最適化し、事前読み込みされたノードデータの使用をサポート（[#7476](https://github.com/nocobase/nocobase/pull/7476)）@mytharcher
* **[テーマエディター]** サイドメニューの色カスタマイズ機能を追加サポート（[#7483](https://github.com/nocobase/nocobase/pull/7483)）@duannyuuu
* **[Redis キューアダプター]** Redis メッセージキューアダプターに標準的なシステムロガーを使用 @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * ポップオーバーコンポーネントが重なったり覆われたりする問題を修正（[#7491](https://github.com/nocobase/nocobase/pull/7491)）@zhangzhonghe
  * リンケージルールにおける数値フィールドの「空でない」チェックが不正確になる問題（[#7477](https://github.com/nocobase/nocobase/pull/7477)）@katherinehhh
  * パブリックフォームで読み取り専用の選択肢 / 複数選択 / 日付 / リッチテキストが依然として編集可能になる問題（[#7484](https://github.com/nocobase/nocobase/pull/7484)）@katherinehhh
* **[ワークフロー]** ワークフローログのキャッシュに関連する潜在的なエラーを修正（[#7490](https://github.com/nocobase/nocobase/pull/7490)）@mytharcher
* **[HTTP リクエスト暗号化]** リクエストパラメーターがネイティブの URLSearchParams 型をサポートしない問題を修正 @mytharcher
* **[データソース：REST API]** REST API の URL 検証ルールを修正 @katherinehhh
* **[ワークフロー：承認]** 承認完了通知内のステータステキストが翻訳されない問題を修正 @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.7](https://www.nocobase.com/ja/blog/v1.9.0-beta.7)

*リリース日：2025-09-11*


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.15](https://www.nocobase.com/ja/blog/v1.9.0-alpha.15)

*リリース日：2025-09-17*

#### 🚀 機能改善

* **[認証（auth）]** ユーザー名に「.（ドット）」を使用する機能をサポート（[#7504](https://github.com/nocobase/nocobase/pull/7504)）@2013xile
* **[サーバー]** メッセージキューに標準的なシステムロガーを使用（[#7480](https://github.com/nocobase/nocobase/pull/7480)）@mytharcher
* **[スノーフレーク ID]** 自動インクリメントの主キーを持つが一意の識別子がないシステムテーブルの ID を、53 ビットのスノーフレーク風 ID に変更（[#7465](https://github.com/nocobase/nocobase/pull/7465)）@2013xile
* **[カレンダー]** カレンダーヘッダーのロケールマッピング表示をサポート（[#7508](https://github.com/nocobase/nocobase/pull/7508)）@katherinehhh
* **[ワークフロー：手動ノード]** 無効化されたワークフロー内の保留中の手動タスクを表示および再開する機能をサポート（[#7493](https://github.com/nocobase/nocobase/pull/7493)）@mytharcher
* **[テーマエディター]** サイドメニューの色カスタマイズ機能を追加サポート（[#7483](https://github.com/nocobase/nocobase/pull/7483)）@duannyuuu
* **[Redis キューアダプター]** Redis メッセージキューアダプターに標準的なシステムロガーを使用 @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * ボタンアイコン設定のポップアップが覆われる / 重なる問題を修正（[#7506](https://github.com/nocobase/nocobase/pull/7506)）@zhangzhonghe
  * ポップオーバーコンポーネントが重なったり覆われたりする問題を修正（[#7491](https://github.com/nocobase/nocobase/pull/7491)）@zhangzhonghe
  * パブリックフォームで読み取り専用の選択肢 / 複数選択 / 日付 / リッチテキストが依然として編集可能になる問題（[#7484](https://github.com/nocobase/nocobase/pull/7484)）@katherinehhh
* **[ワークフロー]**
  * ワークフローのバックグラウンドタスクキューにおける不正なサブスクリプションロジックにより実行メッセージが誤って処理される問題を修正（[#7507](https://github.com/nocobase/nocobase/pull/7507)）@mytharcher
  * ワークフローログのキャッシュに関連する潜在的なエラーを修正（[#7490](https://github.com/nocobase/nocobase/pull/7490)）@mytharcher
* **[通知：アプリ内メッセージ]** 通知リンクの解析が不正確になる問題を修正（[#7509](https://github.com/nocobase/nocobase/pull/7509)）@mytharcher
* **[データソース：REST API]** REST API の URL 検証ルールを修正 @katherinehhh
* **[HTTP リクエスト暗号化]** リクエストパラメーターがネイティブの URLSearchParams 型をサポートしない問題を修正 @mytharcher
* **[テンプレート印刷]** chinaRegions（中国地域）フィールドをサポート @jiannx
* **[メールマネージャー]** 件名の文字化け問題を修正 @jiannx
