週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.29](https://www.nocobase.com/ja/blog/v1.8.29)

*リリース日：2025-10-15*

### 🚀 機能改善

* **[ワークフロー：承認]** コア変更に対応するため、分岐設定を再構築 by @mytharcher

### 🐛 不具合修正

* **[ワークフロー：承認]** アプリ未導入時にテーブルが存在せず、移行スクリプトでエラーが発生する問題を修正 by @mytharcher

### [v1.8.28](https://www.nocobase.com/ja/blog/v1.8.28)

*リリース日：2025-10-14*

### 🚀 機能改善

* **[クライアント]** フロントエンドで `mime` パッケージを使用し、ファイルのMIMEタイプをより正確に検出できるように改善（[#7551](https://github.com/nocobase/nocobase/pull/7551)）@mytharcher
* **[ワークフロー]**
  * 環境変数で1つのワークフロー内の最大ノード数を制限できるように対応（[#7542](https://github.com/nocobase/nocobase/pull/7542)）@mytharcher
  * ノード削除時に「分岐を保持」オプションを追加（[#7571](https://github.com/nocobase/nocobase/pull/7571)）@mytharcher
* **[ワークフロー：ループノード]** 環境変数でループノードの最大ループ回数を制限できるように対応（[#7543](https://github.com/nocobase/nocobase/pull/7543)）@mytharcher
* **[ワークフロー：承認]** カスタム承認ブロックの詳細ダイアログに印刷ボタンを追加 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 画像プレビュー時に回転とズームを同時に行うと表示が乱れる問題を修正（[#7573](https://github.com/nocobase/nocobase/pull/7573)）@mytharcher
  * AssignedFieldコンポーネントが動的プロパティを実装していなかったため、新規作成・更新ノードでファイルアップロードエラーが発生する問題を修正（[#7556](https://github.com/nocobase/nocobase/pull/7556)）@mytharcher
* **[公開フォーム]** 公開フォームでファイルフィールドのアップロードルールが正しく適用されない問題を修正（[#7553](https://github.com/nocobase/nocobase/pull/7553)）@mytharcher
* **[カレンダー]** カレンダーブロックのデータテーブルで一意識別子を設定した後、詳細データ取得時にエラーが発生する問題を修正（[#7562](https://github.com/nocobase/nocobase/pull/7562)）@katherinehhh
* **[認証：LDAP]** 非ASCII文字（UTF-8）を含むADでログインに失敗する問題を修正 @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.12](https://www.nocobase.com/ja/blog/v1.9.0-beta.12)

*リリース日：2025-10-11*

### 🐛 不具合修正

* **[サーバー]** 主キー移行スクリプトで発生していたエラーを修正（[#7568](https://github.com/nocobase/nocobase/pull/7568)）@2013xile
* **[カレンダー]** カレンダーブロックのデータテーブルで一意識別子を設定した際、詳細データの取得時にエラーが発生する問題を修正（[#7562](https://github.com/nocobase/nocobase/pull/7562)）@katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.8](https://www.nocobase.com/ja/blog/v2.0.0-alpha.8)

*リリース日：2025-10-14*

### 🎉 新機能

* **[AIスタッフ]** AIプラグインのオンライン検索機能を改善（[#7580](https://github.com/nocobase/nocobase/pull/7580)）@cgyrock

### 🚀 機能改善

* **[クライアント]** フロントエンドで `mime` パッケージを使用し、ファイルのMIMEタイプをより正確に取得できるよう改善（[#7551](https://github.com/nocobase/nocobase/pull/7551)）@mytharcher
* **[フローエンジン]**
  * ポップアップ変数をサポート（[#7583](https://github.com/nocobase/nocobase/pull/7583)）@gchust
  * コードエディタのユーザー体験を改善し、コードスニペットを追加、異なるシナリオで動的にコード補完を表示（[#7559](https://github.com/nocobase/nocobase/pull/7559)）@gchust
  * 自動フローを標準化し、“beforeRender” イベントで統一的にトリガーすることで、フローの実行の一貫性と予測可能性を向上（[#7577](https://github.com/nocobase/nocobase/pull/7577)）@gchust
* **[ワークフロー]** ノード削除時に「分岐を保持」オプションを追加（[#7571](https://github.com/nocobase/nocobase/pull/7571)）@mytharcher
* **[データ可視化]** グラフ種類を拡張し、UIと操作体験を改善（[#7581](https://github.com/nocobase/nocobase/pull/7581)）@heziqiang
* **[ワークフロー：承認]** 内核変更に対応するためブランチ設定を再構築 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 表のページ切り替え時の表示乱れを修正（[#7572](https://github.com/nocobase/nocobase/pull/7572)）@zhangzhonghe
  * `一括更新` および `更新` 操作でフィールドの割り当てができない問題を修正（[#7565](https://github.com/nocobase/nocobase/pull/7565)）@gchust
  * 画像プレビューで回転とズームを同時に行う際の表示乱れを修正（[#7573](https://github.com/nocobase/nocobase/pull/7573)）@mytharcher
* **[ワークフロー：承認]** アプリ未インストール時にテーブルが存在せず発生するマイグレーションスクリプトのエラーを修正 @mytharcher
* **[認証：LDAP]** 非ASCII文字（UTF-8）を含むADでのログイン失敗問題を修正 @2013xile

### [v2.0.0-alpha.7](https://www.nocobase.com/ja/blog/v2.0.0-alpha.7)

*リリース日：2025-10-13*

### 🎉 新機能

* **[クライアント]** 「使用中のデバイス種別」を取得できる新しい変数を追加（[#7576](https://github.com/nocobase/nocobase/pull/7576)）@zhangzhonghe

### [v2.0.0-alpha.6](https://www.nocobase.com/ja/blog/v2.0.0-alpha.6)

*リリース日：2025-10-11

### 🐛 不具合修正

* **[サーバー]** 主キー移行スクリプトで発生していたエラーを修正（[#7568](https://github.com/nocobase/nocobase/pull/7568)）@2013xile
* **[ルーティング]** ルーティング処理を新しいマルチアプリ構成に対応させる修正を実施（[#7570](https://github.com/nocobase/nocobase/pull/7570)）@jiannx
* **[AIスタッフ]** ChatGPT-4o使用時にAIスタッフモデリングツールで発生していた不具合を修正（[#7566](https://github.com/nocobase/nocobase/pull/7566)）@cgyrock
