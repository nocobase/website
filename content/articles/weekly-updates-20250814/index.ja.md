週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.14](https://www.nocobase.com/ja/blog/v1.8.14)

*リリース日：2025-08-05*

#### 🐛 不具合修正

* **[クライアント]** 変数の生の文字列がフォームと共に送信される問題を修正（[#7337](https://github.com/nocobase/nocobase/pull/7337)）@zhangzhonghe
* **[ワークフロー：承認]** 追加および委任されたアイテムにタスクタイトルを追加 @mytharcher

### [v1.8.13](https://www.nocobase.com/ja/blog/v1.8.13)

*リリース日：2025-08-04*

#### 🎉 新機能

* **[認証: SAML 2.0]** 署名関連の設定オプションを追加 @2013xile

#### 🚀 機能改善

* **[ワークフロー: JavaScript]** キャッシュをアプリキャッシュに変更し、クラスターモードでのバグを回避 @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * アクションパネルにホバーした際にツールチップに「[object Object]」が表示される問題を修正（[#7322](https://github.com/nocobase/nocobase/pull/7322)）@katherinehhh
  * フィルターフォームで変数を使用してフィールドのデフォルト値を設定する場合、変数値が空のときに入力ボックスに元の変数文字列が表示される問題（[#7335](https://github.com/nocobase/nocobase/pull/7335)）@zhangzhonghe
* **[コレクション：ツリー]** ツリーコレクションのパス同期ロジックを修正（[#7330](https://github.com/nocobase/nocobase/pull/7330)）@ChimingLiu

### [v1.8.12](https://www.nocobase.com/ja/blog/v1.8.12)

*リリース日：2025-08-01*

#### 🎉 新機能

* **[クライアント]** Input、TextArea、URL、InputNumber コンポーネントに「自動フォーカス」オプションを追加。有効にすると、ページ初期描画時に入力フィールドに自動的にフォーカスが当たるようになります（[#7320](https://github.com/nocobase/nocobase/pull/7320)）@zhangzhonghe

#### 🐛 不具合修正

* **[クライアント]**
  * URL が null の場合のファイルプレビューアイテムを修正（[#7315](https://github.com/nocobase/nocobase/pull/7315)）@mytharcher
  * プレビュー時にローカルファイルに完全な URL を追加（[#7314](https://github.com/nocobase/nocobase/pull/7314)）@mytharcher
* **[ユーティリティ]** parseDate のタイムゾーン処理が不正確な問題（[#7318](https://github.com/nocobase/nocobase/pull/7318)）@katherinehhh
* **[未定義]** プリセットに新しいプラグインを追加（[#7319](https://github.com/nocobase/nocobase/pull/7319)）@mytharcher
* **[ファイルマネージャー]** ストレージフィールドの権限を修正（[#7316](https://github.com/nocobase/nocobase/pull/7316)）@mytharcher
* **[ワークフロー]** プロセッサ終了時の`undefined`結果を修正（[#7317](https://github.com/nocobase/nocobase/pull/7317)）@mytharcher
* **[ワークフロー：動的計算ノード]** レガシー API に起因するエラーを修正（[#7321](https://github.com/nocobase/nocobase/pull/7321)）@mytharcher
* **[ワークフロー：サブフロー]** フローが中断する問題を修正 @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.7](https://www.nocobase.com/ja/blog/v1.9.0-alpha.7)

*リリース日：2025-08-06*

#### 🐛 不具合修正

* **[メールマネージャー]** 再同期をサポート @jiannx

### [v1.9.0-alpha.6](https://www.nocobase.com/ja/blog/v1.9.0-alpha.6)

*リリース日：2025-08-06*

#### 🚀 機能改善

* **[ワークフロー]** ToDoカード内のワークフロータイトルは、対応するバージョンが無効になっても取り消し線で表示されなくなります（[#7339](https://github.com/nocobase/nocobase/pull/7339)）@mytharcher

#### 🐛 不具合修正

* **[データ可視化]** チャートフィルターブロックの日付フィールドのデフォルト値における日付変数の問題（[#7291](https://github.com/nocobase/nocobase/pull/7291)）@katherinehhh
* **[ワークフロー: CC]** ブロックを削除できない問題を修正（[#7338](https://github.com/nocobase/nocobase/pull/7338)）@mytharcher
* **[メールマネージャー]** 転送と返信を手動で区別できるように修正 @jiannx

### [v1.9.0-alpha.5](https://www.nocobase.com/ja/blog/v1.9.0-alpha.5)

*リリース日：2025-08-05*

#### 🎉 新機能

* **[クライアント]** Input、TextArea、URL、InputNumber コンポーネントに「自動フォーカス」オプションを追加。有効にすると、ページ初期描画時に入力フィールドに自動的にフォーカスが当たるようになります（[#7320](https://github.com/nocobase/nocobase/pull/7320)）@zhangzhonghe
* **[認証: SAML 2.0]** 署名関連の設定オプションを追加 @2013xile

#### 🚀 機能改善

* **[ワークフロー: JavaScript]** キャッシュをアプリキャッシュに変更し、クラスターモードでのバグを回避 @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * 変数の生の文字列がフォームと共に送信される問題を修正（[#7337](https://github.com/nocobase/nocobase/pull/7337)）@zhangzhonghe
  * アクションパネルにホバーした際にツールチップに「[object Object]」が表示される問題を修正（[#7322](https://github.com/nocobase/nocobase/pull/7322)）@katherinehhh
  * フィルターフォームで変数を使用してフィールドのデフォルト値を設定する場合、変数値が空のときに入力ボックスに元の変数文字列が表示される問題（[#7335](https://github.com/nocobase/nocobase/pull/7335)）@zhangzhonghe
* **[未定義]** プリセットに新しいプラグインを追加（[#7319](https://github.com/nocobase/nocobase/pull/7319)）@mytharcher
* **[コレクション：ツリー]** ツリーコレクションのパス同期ロジックを修正（[#7330](https://github.com/nocobase/nocobase/pull/7330)）@ChimingLiu
* **[オフィスファイルプレビューワー]** URL のみで`.docx`、`.xlsx`、`.pptx`ファイルのプレビューをサポート（[#7336](https://github.com/nocobase/nocobase/pull/7336)）@mytharcher
* **[ワークフロー：動的計算ノード]** レガシー API に起因するエラーを修正（[#7321](https://github.com/nocobase/nocobase/pull/7321)）@mytharcher
* **[ワークフロー：承認]** 追加および委任されたアイテムにタスクタイトルを追加 @mytharcher
* **[メールマネージャー]** 複数人に同じメールを送信できるようにサポート @jiannx
