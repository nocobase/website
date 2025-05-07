週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/en/blog/v1.6.23)

*リリース日：2025-04-23*


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.27](https://www.nocobase.com/en/blog/v1.7.0-beta.27)

*リリース日：2025-05-04*

#### 🎉 新機能

* **[クライアント]** 二次確認のタイトルと内容に変数をサポートする（[#6787](https://github.com/nocobase/nocobase/pull/6787)） by @katherinehhh
* **[テンプレート印刷]**
  * 文書テンプレートにおけるダイナミック画像とバーコードレンダリングをサポートする。by @sheldon66
  * 機能：テンプレート印刷において`{ label, value }`形式の Select オプションをサポートする。by @sheldon66
* **[ブロック：ツリー]** ツリーブロックのフィルターに連携ルールをサポートする by @katherinehhh
* **[データビジュアライゼーション: ECharts]** 棒グラフに「Y 軸反転」設定を追加する by @2013xile

#### 🚀 機能改善

* **[クライアント]** サブテーブルの追加ボタンのスタイルを最適化し、ページネーターを同行に配置する（[#6790](https://github.com/nocobase/nocobase/pull/6790)） by @katherinehhh
* **[ファイルマネージャー]** OSS のタイムアウトオプションを追加し、デフォルトを 10 分に設定する（[#6795](https://github.com/nocobase/nocobase/pull/6795)） by @mytharcher
* **[パスワードポリシー]** デフォルトのパスワード有効期限を「永遠有効」に変更する by @2013xile

#### 🐛 不具合修正

* **[データベース]**
  * テストケースを修正する（[#6811](https://github.com/nocobase/nocobase/pull/6811)） by @mytharcher
  * データ型が文字列でない場合に発生するエラーを回避する（[#6797](https://github.com/nocobase/nocobase/pull/6797)） by @mytharcher
* **[クライアント]**
  * 変数選択が非同期ロードを必要とする場合、最後に選択したメニューが失われる問題を修正する。（[#6802](https://github.com/nocobase/nocobase/pull/6802)） by @gchust
  * フィルターフォームにおいて、一対多フィールドのサブフィールドがフィルタリングオプションとして選択できない問題を修正する（[#6809](https://github.com/nocobase/nocobase/pull/6809)） by @zhangzhonghe
  * サブテーブル内のサブフォーム（ポップアップ）における連携ルールの設定問題を修正する（[#6803](https://github.com/nocobase/nocobase/pull/6803)） by @katherinehhh
  * フォームフィールドにおいて、バリデーションルールに違反したときに複数のエラーメッセージが表示される問題を修正する（[#6805](https://github.com/nocobase/nocobase/pull/6805)） by @katherinehhh
  * 関連コレクションのフィールドを表示する際に、関連フィールドがデータを送信しない問題を修正する（[#6798](https://github.com/nocobase/nocobase/pull/6798)） by @katherinehhh
  * サブテーブル内のサブフォーム（ポップアップ）の連携ルールにおいて、フィールド属性の設定が欠落する問題を修正する（[#6800](https://github.com/nocobase/nocobase/pull/6800)） by @katherinehhh
* **[認証]** 認証器名の変更を禁止する（[#6808](https://github.com/nocobase/nocobase/pull/6808)） by @2013xile
* **[アクション：カスタムリクエスト]** カスタムリクエストのレスポンスを変数に設定した際に正しく表示されない問題を修正する（[#6793](https://github.com/nocobase/nocobase/pull/6793)） by @katherinehhh

### [v1.7.0-beta.28](https://www.nocobase.com/en/blog/v1.7.0-beta.28)

*リリース日：2025-05-06*

#### 🚀 機能改善

* **[クライアント]** RichText コンポーネントが modules と formats の props をサポートするようにしました（[#6807](https://github.com/nocobase/nocobase/pull/6807)）by @jiannx

#### 🐛 不具合修正

* **[検証]** マイグレーションスクリプトの問題を修正しました（[#6820](https://github.com/nocobase/nocobase/pull/6820)）by @2013xile
* **[ワークフロー：カスタムアクションイベント]** トリガーされたワークフローアクションの連携問題を修正しました by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/ja/blog/v1.7.0-alpha.12)

*リリース日：2025-04-24*


## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供する、プライベートかつオープンソースのノーコードプラットフォームです。チームが変化に迅速に対応し、コストを大幅に削減することを可能にします。数年に及ぶ開発や多額の投資を避け、数分でNocoBaseを展開できます。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3分でNocoBaseを体験！

## 👇 NocoBaseを入手

[**ホームページ**](https://www.nocobase.com/)

[**デモ**](https://demo.nocobase.com/new)

[**ドキュメント**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
