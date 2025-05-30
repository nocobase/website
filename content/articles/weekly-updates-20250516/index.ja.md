週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.28](https://www.nocobase.com/en/blog/v1.6.28)

*リリース日：2025-05-09*

#### 🐛 不具合修正

* **[データベース]** テキストフィールドの値によりインポートが失敗する問題を修正しました。([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie
* **[クライアント]** 非表示に設定したフィールドが依然として表示される問題を修正しました。([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe
* **[アクション：レコードのエクスポート]** 長いテキストをエクスポートする際のエラーを修正しました。([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie
* **[ワークフロー：アクション後イベント]** Handlebars テンプレート内でユーザーアクション変数にアクセスできない問題を修正しました。([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher
* **[ブロック：アクションパネル]** ダークモードでアクションパネルの色が正しく表示されない問題を修正しました。([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe
* **[アクション：レコードのエクスポート Pro]** 長いテキストをエクスポートする際のエラーを修正しました。by @aaaaaajie

### [v1.6.29](https://www.nocobase.com/en/blog/v1.6.29)

*リリース日：2025-05-13*

#### 🚀 機能改善

* **[ワークフロー]** 複数の下書きを修正できるようにする（[#6851](https://github.com/nocobase/nocobase/pull/6851)）by @mytharcher

#### 🐛 不具合修正

* **[アクション：レコードのエクスポート]** ネストされた関連付けと添付ファイルの URL における空の値のエクスポートを修正する（[#6845](https://github.com/nocobase/nocobase/pull/6845)）by @aaaaaajie
* **[ワークフロー：手動ノード]** タスクにおける統計数のカウントエラーを修正する（[#6783](https://github.com/nocobase/nocobase/pull/6783)）by @mytharcher
* **[ワークフロー：テストキット]** 必須のプリセットプラグインによるテストケースの失敗を修正する（[#6839](https://github.com/nocobase/nocobase/pull/6839)）by @mytharcher
* **[データ可視化]** ネストされた多対多フィールドをフィルタリングする際のエラーを修正する（[#6855](https://github.com/nocobase/nocobase/pull/6855)）by @2013xile
* **[ワークフロー：サブフロー]** 未定義のトリガーによるページクラッシュを修正する by @mytharcher
* **[ファイルストレージ: S3 (Pro)]** アクセス URL の有効期限が無効な問題を修正する by @jiannx
* **[ワークフロー：承認]** タスクにおける統計数のカウントエラーを修正する by @mytharcher

### [v1.6.30](https://www.nocobase.com/en/blog/v1.6.30)

*リリース日：2025-05-15*

#### 🚀 機能改善

* **[クライアント]** 既読ステータス画像により多くの組み込みサイズ設定を追加する（[#6868](https://github.com/nocobase/nocobase/pull/6868)）by @katherinehhh

#### 🐛 不具合修正

* **[ファイルマネージャー]**
  * 型定義を修正する（[#6873](https://github.com/nocobase/nocobase/pull/6873)）by @mytharcher
  * 外部キーの権限がない場合のファイルレコード作成を修正する（[#6863](https://github.com/nocobase/nocobase/pull/6863)）by @mytharcher
* **[アクション：レコードのエクスポート]** インポート / エクスポートフィールド設定でフィールドを削除する際のパフォーマンスを改善する（[#6861](https://github.com/nocobase/nocobase/pull/6861)）by @katherinehhh
* **[データ可視化]** ブロックレベルのアクションからトリガーされるポップアップに追加した際にチャートブロックが表示されない問題を修正する（[#6864](https://github.com/nocobase/nocobase/pull/6864)）by @2013xile
* **[アクション：レコードのエクスポート Pro]** インポート / エクスポート Pro のフィールド設定でフィールドを削除する際のパフォーマンスを改善する by @katherinehhh
* **[ファイルストレージ: S3 (Pro)]** コレクションフィールドを使用してストレージを特定するように変更する by @mytharcher
* **[バックアップマネージャー]** ビルド時の型エラーを修正する by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.31](https://www.nocobase.com/en/blog/v1.7.0-beta.31)

*リリース日：2025-05-15*

#### 🎉 新機能

* **[クライアント]** アクション連携ルールに「現在のフォーム」変数のサポートを追加 ([#6810](https://github.com/nocobase/nocobase/pull/6810)) @katherinehhh
* **[未定義]** インポートプラグインのログを追加 @aaaaaajie
* **[アクション：レコードのインポート]** インポートプラグインのログを追加 ([#6841](https://github.com/nocobase/nocobase/pull/6841)) @aaaaaajie

#### 🚀 機能改善

* **[クライアント]** 読み取り状態の画像により多くのビルトインサイズ設定を追加 ([#6868](https://github.com/nocobase/nocobase/pull/6868)) @katherinehhh
* **[コレクションフィールド：添付ファイル (URL)]** 読み取り状態の添付 URL フィールドにビルトインサイズを追加 ([#6871](https://github.com/nocobase/nocobase/pull/6871)) @katherinehhh
* **[ワークフロー]** 複数の下書きを修正可能にする ([#6851](https://github.com/nocobase/nocobase/pull/6851)) @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * 詳細ブロック内のボタン連携の問題 ([#6867](https://github.com/nocobase/nocobase/pull/6867)) @katherinehhh
  * 連携ルールで演算子が変更された際に右辺の値をクリア ([#6862](https://github.com/nocobase/nocobase/pull/6862)) @katherinehhh
  * 連携条件における日付変数の演算子評価エラー ([#6825](https://github.com/nocobase/nocobase/pull/6825)) @katherinehhh
  * 連携ルールで演算子を切り替えた際に演算子が表示されない問題 ([#6857](https://github.com/nocobase/nocobase/pull/6857)) @katherinehhh
  * 二次確認の {{title}} データとの変数パースの互換性問題 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) @katherinehhh
  * 連携ルールの値コンポーネントのスタイル改善 ([#6836](https://github.com/nocobase/nocobase/pull/6836)) @katherinehhh
  * 非表示フィールドが表示される問題 ([#6844](https://github.com/nocobase/nocobase/pull/6844)) @zhangzhonghe
* **[データベース]** テキストフィールドの値によるインポート失敗の修正 ([#6699](https://github.com/nocobase/nocobase/pull/6699)) @aaaaaajie
* **[データ可視化]**
  * ブロックレベルアクションでトリガーされたポップアップにチャートブロックが表示されない問題 ([#6864](https://github.com/nocobase/nocobase/pull/6864)) @2013xile
  * ネストされた m2m フィールドのフィルタリング時のエラー修正 ([#6855](https://github.com/nocobase/nocobase/pull/6855)) @2013xile
* **[アクション：レコードのエクスポート]**
  * インポート / エクスポートフィールド設定でフィールドを削除する際のパフォーマンス改善 ([#6861](https://github.com/nocobase/nocobase/pull/6861)) @katherinehhh
  * ネスト関連付けと添付 URL の空値エクスポートの修正 ([#6845](https://github.com/nocobase/nocobase/pull/6845)) @aaaaaajie
  * 長文のエクスポートエラーの修正 ([#6713](https://github.com/nocobase/nocobase/pull/6713)) @aaaaaajie
* **[ファイルマネージャー]** 外部キーの許可がない状態でファイルレコードを作成する問題の修正 ([#6863](https://github.com/nocobase/nocobase/pull/6863)) @mytharcher
* **[ワークフロー]** タスクセンターでポップアップリンクを直接開いた際のバックナビゲーション不動作の修正 ([#6853](https://github.com/nocobase/nocobase/pull/6853)) @mytharcher
* **[アクション：レコードの複製]** 複製データの編集時に最初の入力クリックでモーダルが閉じる問題 ([#6848](https://github.com/nocobase/nocobase/pull/6848)) @katherinehhh
* **[ブロック：テンプレート]** 継承テンプレートとして保存後、ポップアップを開いた際のエラー ([#6840](https://github.com/nocobase/nocobase/pull/6840)) @gchust
* **[ワークフロー：テストキット]** 必須のプリセットプラグインによるテストケース失敗の修正 ([#6839](https://github.com/nocobase/nocobase/pull/6839)) @mytharcher
* **[ワークフロー：後続アクションイベント]** Handlebars テンプレート内でユーザーアクション変数がアクセス不可な問題 ([#6837](https://github.com/nocobase/nocobase/pull/6837)) @mytharcher
* **[ワークフロー：手動ノード]** タスクの統計数カウントエラーの修正 ([#6783](https://github.com/nocobase/nocobase/pull/6783)) @mytharcher
* **[ブロック：アクションパネル]** ダークモードでのアクションパネルの色の不整合修正 ([#6842](https://github.com/nocobase/nocobase/pull/6842)) @zhangzhonghe
* **[アクション：レコードのエクスポート Pro]**
  * インポート / エクスポート Pro のフィールド設定でフィールドを削除する際のパフォーマンス改善 @katherinehhh
  * 長文のエクスポートエラーの修正 @aaaaaajie
* **[ワークフロー：サブフロー]** 未定義のトリガーによるページクラッシュの修正 @mytharcher
* **[テンプレート印刷]**
  * フォーマッタが見つからない問題の修正 @sheldon66
* **[ファイルストレージ: S3 (Pro)]**
  * コレクションフィールドを使用したストレージの位置指定方法の変更 @mytharcher
  * アクセス URL の有効期限が無効な問題の修正 @jiannx
* **[ワークフロー：承認]** タスクの統計数カウントエラーの修正 @mytharcher
