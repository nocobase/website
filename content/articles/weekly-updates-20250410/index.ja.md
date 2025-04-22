週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.16](https://www.nocobase.com/en/blog/v1.6.16)

*リリース日：2025-04-03*

#### バグ修正

* **[クライアント]**
  * フォームフィールドにおける `x-disabled` プロパティが効果を発揮しない問題（[#6610](https://github.com/nocobase/nocobase/pull/6610)） 、修正者: @katherinehhh
  * フィールドラベルの表示において、コロンによる切り捨てを防ぐための問題修正（[#6599](https://github.com/nocobase/nocobase/pull/6599)） 、修正者: @katherinehhh
* **[データベース]** 一対多のレコードを削除する際、`filter` と `filterByTk` の両方が渡され、かつ `filter` に関連フィールドが含まれている場合、`filterByTk` が無視される問題（[#6606](https://github.com/nocobase/nocobase/pull/6606)） 、修正者: @2013xile

### [v1.6.17](https://www.nocobase.com/en/blog/v1.6.17)

*リリース日：2025-04-09*

#### 🚀 機能改善

* **[ユーティリティ]** dayjs 用の期間拡張機能を追加（[#6630](https://github.com/nocobase/nocobase/pull/6630)） by @mytharcher
* **[クライアント]**
  * フィルターコンポーネントにおけるフィールド検索機能をサポート（[#6627](https://github.com/nocobase/nocobase/pull/6627)） by @mytharcher
  * `Input` と `Variable.TextArea` に `trim` API を追加（[#6624](https://github.com/nocobase/nocobase/pull/6624)） by @mytharcher
* **[エラーハンドラー]** AppError コンポーネントにおいてカスタムタイトルをサポート。（[#6409](https://github.com/nocobase/nocobase/pull/6409)） by @sheldon66
* **[IP 制限]** IP 制限メッセージの内容を更新 by @sheldon66
* **[ファイルストレージ: S3 (Pro)]** ストレージ設定においてグローバル変数をサポート by @mytharcher

#### 🐛 不具合修正

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

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.14](https://www.nocobase.com/en/blog/v1.7.0-beta.14)

*リリース日：2025-04-09*

#### 🎉 新機能

* **[UI スキーマストレージ]** UISchema 用のローカライゼーションモジュールを追加し、スキーマのタイトルと説明に対するカスタム翻訳を可能にしました（[#6574](https://github.com/nocobase/nocobase/pull/6574)） by @chenos

#### 🚀 機能改善

* **[ユーティリティ]** dayjs 用の期間拡張機能を追加（[#6630](https://github.com/nocobase/nocobase/pull/6630)） by @mytharcher
* **[クライアント]**
  * フィルターコンポーネントにおけるフィールド検索機能をサポート（[#6627](https://github.com/nocobase/nocobase/pull/6627)） by @mytharcher
  * `Input` と `Variable.TextArea` に `trim` API を追加（[#6624](https://github.com/nocobase/nocobase/pull/6624)） by @mytharcher
* **[ワークフロー]** ジョブの保存ロジックを最適化（[#6613](https://github.com/nocobase/nocobase/pull/6613)） by @mytharcher
* **[エラーハンドラー]** AppError コンポーネントにおいてカスタムタイトルをサポート。（[#6409](https://github.com/nocobase/nocobase/pull/6409)） by @sheldon66
* **[IP 制限]** IP 制限メッセージの内容を更新 by @sheldon66
* **[ファイルストレージ: S3 (Pro)]** ストレージ設定においてグローバル変数をサポート by @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * ページをリフレッシュ後、フィルターフォームにおける関係フィールドがエラーを報告する問題（x-data-source が渡されないため）（[#6619](https://github.com/nocobase/nocobase/pull/6619)） by @zhangzhonghe
  * ツリーコレクションにおけるガントブロックのデータ問題（[#6617](https://github.com/nocobase/nocobase/pull/6617)） by @katherinehhh
  * ブロックテンプレート設定ページのタイトルとメニューの間に空白エリアがある問題（[#6625](https://github.com/nocobase/nocobase/pull/6625)） by @gchust
  * 条件リストが空の場合、「any」条件を持つルールが機能しない問題（[#6628](https://github.com/nocobase/nocobase/pull/6628)） by @katherinehhh
  * フォームフィールドにおける x-disabled プロパティが機能しない問題（[#6610](https://github.com/nocobase/nocobase/pull/6610)） by @katherinehhh
  * URL パラメータに漢字が含まれる場合の変数解析エラー（[#6618](https://github.com/nocobase/nocobase/pull/6618)） by @katherinehhh
  * コロンによるフィールドラベルの切り捨てを防ぐための表示問題（[#6599](https://github.com/nocobase/nocobase/pull/6599)） by @katherinehhh
* **[アクション：レコードのエクスポート]** ページネーションを変更後にデータをエクスポートする際に、フィルターパラメータが欠落する問題（[#6633](https://github.com/nocobase/nocobase/pull/6633)） by @katherinehhh
* **[ユーザー]** ユーザープロフィールフォームのスキーマ解析に関する問題（[#6635](https://github.com/nocobase/nocobase/pull/6635)） by @2013xile
* **[モバイル]** モバイル端末において、「contains」フィルターを持つ単一選択フィールドが複数選択をサポートしない問題（[#6629](https://github.com/nocobase/nocobase/pull/6629)） by @katherinehhh
* **[アクセス制御]** 役割のユニオン計算ロジックを修正（[#6605](https://github.com/nocobase/nocobase/pull/6605)） by @aaaaaajie
* **[ブロック：テンプレート]** テンプレートからブロックを作成した後、テンプレートとブロックから同じフィールドを修正または削除すると、レンダリングエラーが発生する問題（[#6626](https://github.com/nocobase/nocobase/pull/6626)） by @gchust
* **[メールマネージャー]**
  * 次のコールに対する await の欠落を修正 by @jiannx
  * メール管理の権限がメールリストを表示できない問題を修正 by @jiannx
* **[ファイルストレージ: S3 (Pro)]**
  * 次のコールに対する await の欠落を修正 by @jiannx
  * S3 Pro ストレージ（デフォルト設定）にロゴをアップロードする際に、ユーザーにエラーを表示する問題を修正 by @mytharcher
* **[ワークフロー：承認]** マイグレーション後に `updatedAt` が変更される問題を修正 by @mytharcher
* **[マイグレーションマネージャー]** 一部の環境において、マイグレーションログの作成日時が誤って表示される問題 by @gchust


## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供する、プライベートかつオープンソースのノーコードプラットフォームです。チームが変化に迅速に対応し、コストを大幅に削減することを可能にします。数年に及ぶ開発や多額の投資を避け、数分でNocoBaseを展開できます。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3分でNocoBaseを体験！

## 👇 NocoBaseを入手

[**ホームページ**](https://www.nocobase.com/)

[**デモ**](https://demo.nocobase.com/new)

[**ドキュメント**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
