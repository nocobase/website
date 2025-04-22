### 🚀 機能改善

* **[ユーティリティ]** dayjs 用の期間拡張機能を追加（[#6630](https://github.com/nocobase/nocobase/pull/6630)） by @mytharcher
* **[クライアント]**
  * フィルターコンポーネントにおけるフィールド検索機能をサポート（[#6627](https://github.com/nocobase/nocobase/pull/6627)） by @mytharcher
  * `Input` と `Variable.TextArea` に `trim` API を追加（[#6624](https://github.com/nocobase/nocobase/pull/6624)） by @mytharcher
* **[エラーハンドラー]** AppError コンポーネントにおいてカスタムタイトルをサポート。（[#6409](https://github.com/nocobase/nocobase/pull/6409)） by @sheldon66
* **[IP 制限]** IP 制限メッセージの内容を更新 by @sheldon66
* **[ファイルストレージ: S3 (Pro)]** ストレージ設定においてグローバル変数をサポート by @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 条件リストが空の場合、「any」条件を持つルールが機能しない問題（[#6628](https://github.com/nocobase/nocobase/pull/6628)） by @katherinehhh
  * ツリーコレクションにおけるガントブロックのデータ問題（[#6617](https://github.com/nocobase/nocobase/pull/6617)） by @katherinehhh
  * ページをリフレッシュ後、フィルターフォームにおける関係フィールドがエラーを報告する問題（x-data-source が渡されないため）（[#6619](https://github.com/nocobase/nocobase/pull/6619)） by @zhangzhonghe
  * URL パラメータに漢字が含まれる場合の変数解析エラー（[#6618](https://github.com/nocobase/nocobase/pull/6618)） by @katherinehhh
* **[ユーザー]** ユーザープロフィールフォームのスキーマ解析に関する問題（[#6635](https://github.com/nocobase/nocobase/pull/6635)） by @2013xile
* **[モバイル]** モバイル端末において、「contains」フィルターを持つ単一選択フィールドが複数選択をサポートしない問題（[#6629](https://github.com/nocobase/nocobase/pull/6629)） by @katherinehhh
* **[アクション：レコードのエクスポート]** ページネーションを変更後にデータをエクスポートする際に、フィルターパラメータが欠落する問題（[#6633](https://github.com/nocobase/nocobase/pull/6633)） by @katherinehhh
* **[メールマネージャー]** メール管理の権限がメールリストを表示できない問題を修正 by @jiannx
* **[ファイルストレージ: S3 (Pro)]** S3 Pro ストレージ（デフォルト設定）にロゴをアップロードする際に、ユーザーにエラーを表示する問題を修正 by @mytharcher
* **[ワークフロー：承認]** マイグレーション後に `updatedAt` が変更される問題を修正 by @mytharcher
* **[マイグレーションマネージャー]** 一部の環境において、マイグレーションログの作成日時が誤って表示される問題 by @gchust
