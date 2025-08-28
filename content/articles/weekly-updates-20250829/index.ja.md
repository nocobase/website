週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.22](https://www.nocobase.com/ja/blog/v1.8.22)

*リリース日：2025-08-27*

#### 🐛 不具合修正

* **[ワークフロー]** タスクセンターのルート設定が不正確で詳細ポップアップが表示されない問題を修正（[#7452](https://github.com/nocobase/nocobase/pull/7452)）@mytharcher

### [v1.8.21](https://www.nocobase.com/ja/blog/v1.8.21)

*リリース日：2025-08-26*

#### 🐛 不具合修正

* **[ファイルマネージャー]** ファイルコレクションの`storage`フィールド編集時に発生するエラーを修正（[#7393](https://github.com/nocobase/nocobase/pull/7393)）@mytharcher
* **[ワークフロー：並列ノード]** 「すべてのブランチを実行」モード下で、並列ブランチノードのステータス判定が不正確で早期に完了してしまう問題を修正（[#7445](https://github.com/nocobase/nocobase/pull/7445)）@mytharcher
* **[ワークフロー：承認]** 承認完了通知のカスタムテンプレートにステータス変数を追加 @mytharcher

### [v1.8.20](https://www.nocobase.com/ja/blog/v1.8.20)

*リリース日：2025-08-25*

#### 🚀 機能改善

* **[ワークフロー]** ワークフロー変数 API を調整し、追加の変数リストをプリセットする機能をサポート（[#7439](https://github.com/nocobase/nocobase/pull/7439)）@mytharcher
* **[ワークフロー：承認]**
  * カスタム通知内で承認関連の変数を使用する機能をサポート @mytharcher
  * 終了ノードが実行を終了した後、承認ステータスを更新する機能をサポート @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * 特定のシナリオで、モバイル端末のレコードピッカーポップアップでレコードを編集するとエラーが発生する問題を修正（[#7444](https://github.com/nocobase/nocobase/pull/7444)）@zhangzhonghe
  * サブテーブルの添付フィールドにおいて必須検証が機能しない問題（[#7431](https://github.com/nocobase/nocobase/pull/7431)）@katherinehhh
  * 添付ファイル URL フィールドの URL にクエリパラメータが含まれる場合、アイコンが不正に表示される問題を修正（[#7432](https://github.com/nocobase/nocobase/pull/7432)）@mytharcher
* **[データベース]**
  * アプリ内メッセージの「もっと読む」機能使用時に発生する MySQL 構文エラーを修正（[#7438](https://github.com/nocobase/nocobase/pull/7438)）@aaaaaajie
  * エクスポートされた Number フィールドの精度問題を修正（[#7421](https://github.com/nocobase/nocobase/pull/7421)）@aaaaaajie
* **[未定義（undefined）]** MySQL 外部データソースで日付フィールドのみでフィルタリングする際の問題を修正（[#7422](https://github.com/nocobase/nocobase/pull/7422)）@aaaaaajie
* **[アクション：レコードインポート]** テーブルのプライマリキーが単一行テキストの場合、インポートに失敗する問題を修正（[#7416](https://github.com/nocobase/nocobase/pull/7416)）@aaaaaajie
* **[ワークフロー]**
  * ワークフロー実行状態の自動削除オプションを完備（[#7436](https://github.com/nocobase/nocobase/pull/7436)）@mytharcher
  * ワークフロータスクにおけるモバイル端末メニュー関連の問題を修正（[#7419](https://github.com/nocobase/nocobase/pull/7419)）@mytharcher
* **[アクション：レコードインポート Pro]** xlsx ファイルのインポート時に文字列型プライマリキーを使用すると、予期しない更新結果になる問題を修正 @aaaaaajie

### [v1.8.19](https://www.nocobase.com/ja/blog/v1.8.19)

*リリース日：2025-08-22*

#### 🎉 新機能

* **[ワークフロー：承認]** 通知設定にインラインテンプレートタイプを追加 @mytharcher

#### 🚀 機能改善

* **[クライアント]** 読み取り専用モード時、Select コンポーネントで文字列で指定されたアイコンを表示する機能をサポート（[#7420](https://github.com/nocobase/nocobase/pull/7420)）@mytharcher
* **[データベース]** ACL メタクエリのパフォーマンスを最適化（[#7400](https://github.com/nocobase/nocobase/pull/7400)）@aaaaaajie
* **[モバイル]** モバイル端末のポップアップコンポーネントを最適化（[#7414](https://github.com/nocobase/nocobase/pull/7414)）@zhangzhonghe

#### 🐛 不具合修正

* **[データベース]** Postgres 外部テーブル読み取り時に、他のスキーマのビューが含まれる問題を修正（[#7410](https://github.com/nocobase/nocobase/pull/7410)）@aaaaaajie
* **[ブロック：テンプレート]** 継承されたテンプレートブロック内にメールブロックを配置した際に表示されない問題を解消（[#7430](https://github.com/nocobase/nocobase/pull/7430)）@gchust
* **[アクション：レコードインポート Pro]** インポート時の重複検出中に、関連フィールドへの割り当てを禁止 @aaaaaajie
* **[ワークフロー：承認]** 会签時にユーザーリストが空になる問題を修正 @mytharcher
* **[マイグレーションマネージャー]** リストアエラーを解消するため、マイグレーションファイル作成時に、最新 pg\_dump で生成される`\restrict`および`\unrestrict`コマンドをスキップ @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.1](https://www.nocobase.com/ja/blog/v1.9.0-beta.1)

*リリース日：2025-07-07*



## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.1](https://www.nocobase.com/ja/blog/v1.9.0-alpha.1)

*リリース日：2025-07-07*
