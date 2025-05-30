週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.18](https://www.nocobase.com/en/blog/v1.6.18)

*リリース日：2025-04-11*

#### 🚀 改善

- **[client]**

  - `Variable.Input` コンポーネントにデフォルトの型フォールバック API を追加 ([#6644](https://github.com/nocobase/nocobase/pull/6644)) by @mytharcher
  - 未設定ページのプロンプトを最適化 ([#6641](https://github.com/nocobase/nocobase/pull/6641)) by @zhangzhonghe
- **[Workflow: Delay node]**

  - 遅延時間に変数を使用できるようサポート ([#6621](https://github.com/nocobase/nocobase/pull/6621)) by @mytharcher
- **[Workflow: Custom action event]**

  - ワークフロー起動ボタンにリフレッシュ設定を追加 by @mytharcher

#### 🐛 修正

- **[client]**

  - サブテーブルの説明が追加ボタンと重なって表示される問題を修正 ([#6646](https://github.com/nocobase/nocobase/pull/6646)) by @katherinehhh
  - モーダルの水平レイアウトに起因する破線下線の問題を修正 ([#6639](https://github.com/nocobase/nocobase/pull/6639)) by @katherinehhh
- **[File storage: S3(Pro)]**

  - 次の呼び出しで await が不足している問題を修正 by @jiannx
- **[Email manager]**

  - 次の呼び出しで await が不足している問題を修正 by @jiannx

### [v1.6.19](https://www.nocobase.com/en/blog/v1.6.19)

*リリース日：2025-04-14*

#### 🐛 不具合修正

* **[クライアント]**
  * プレビュー画像が隠れる問題を修正（[#6651](https://github.com/nocobase/nocobase/pull/6651)） by @zhangzhonghe
  * フォームブロックで、フィールド設定のデフォルト値が最初は元の変数文字列として表示され、その後消えてしまう問題（[#6649](https://github.com/nocobase/nocobase/pull/6649)） by @zhangzhonghe

### [v1.6.20](https://www.nocobase.com/en/blog/v1.6.20)

*リリース日：2025-04-14*

#### 🎉 新機能

* **[部署（部門）]** 部署（部門）、添付ファイルの URL、およびワークフローの応答メッセージのプラグインを無料化しました（[#6663](https://github.com/nocobase/nocobase/pull/6663)） by @chenos

#### 🐛 不具合修正

* **[クライアント]**
  * フィルターフォームに「保存されていない変更」のプロンプトが表示されるべきではない問題を修正（[#6657](https://github.com/nocobase/nocobase/pull/6657)） by @zhangzhonghe
  * 関係フィールドにおける「複数選択を許可」オプションが機能しない問題（[#6661](https://github.com/nocobase/nocobase/pull/6661)） by @katherinehhh
  * フィルターフォームで、フィルターボタンをクリックしたとき、バリデーションを通過していないフィールドがあるにもかかわらず、フィルタリングがトリガーされる問題（[#6659](https://github.com/nocobase/nocobase/pull/6659)） by @zhangzhonghe
  * グループメニューに切り替えたとき、すでにメニューで非表示にされているページにジャンプしないようにする問題（[#6654](https://github.com/nocobase/nocobase/pull/6654)） by @zhangzhonghe
* **[ファイルストレージ: S3 (Pro)]**
  * 言語を整理する by @jiannx
  * 個別の baseurl とパブリック設定を行い、S3 pro ストレージの設定のユーザーエクスペリエンスを向上させる by @jiannx
* **[マイグレーションマネージャー]** マイグレーション中に環境変数のポップアップが表示された場合、自動バックアップをスキップするオプションが無効になる問題 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.15](https://www.nocobase.com/en/blog/v1.7.0-beta.15)

*リリース日：2025-04-10*

#### 🚀 改善

- **[ワークフロー：遅延ノード]** 遅延時間に変数を使用できるようにしました ([#6621](https://github.com/nocobase/nocobase/pull/6621)) by @mytharcher

#### 🐛 バグ修正

- **[ワークフロー]** 不安全な整数IDを使用してジョブを作成する際のOOM問題を修正しました ([#6637](https://github.com/nocobase/nocobase/pull/6637)) by @mytharcher
- **[ブロック：テンプレート]** ページブロックで使用されている参照テンプレートが削除されている場合に、テンプレートとして保存できない問題を修正しました ([#6638](https://github.com/nocobase/nocobase/pull/6638)) by @gchust

### [v1.7.0-beta.16](https://www.nocobase.com/en/blog/v1.7.0-beta.16)

*リリース日：2025-04-12*

#### 🚀 機能改善

* **[クライアント]**
  * `Variable.Input` のためのデフォルトタイプのフォールバック API を追加（[#6644](https://github.com/nocobase/nocobase/pull/6644)） by @mytharcher
  * 設定されていないページのプロンプトを最適化（[#6641](https://github.com/nocobase/nocobase/pull/6641)） by @zhangzhonghe
* **[ワークフロー：カスタムアクションイベント]** トリガーワークフローボタンのリフレッシュ設定を追加 by @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * ワークフローノードの編集ドロワーのタイトルが [object Object] と表示される問題（[#6648](https://github.com/nocobase/nocobase/pull/6648)） by @katherinehhh
  * サブテーブルの説明が新規追加ボタンと重なる問題（[#6646](https://github.com/nocobase/nocobase/pull/6646)） by @katherinehhh
  * 変数入力のスタイルが正しくない問題（[#6645](https://github.com/nocobase/nocobase/pull/6645)） by @gchust
  * モーダル内の横並びのフォームレイアウトに起因する破線の下線の問題（[#6639](https://github.com/nocobase/nocobase/pull/6639)） by @katherinehhh
* **[ワークフロー]** アプリ起動時にワークフローの統計情報が読み込まれない問題を修正（[#6642](https://github.com/nocobase/nocobase/pull/6642)） by @mytharcher

### [v1.7.0-beta.17](https://www.nocobase.com/en/blog/v1.7.0-beta.17)

*リリース日：2025-04-15*

#### 🎉 新機能

* **[部署（部門）]** 部署（部門）、添付ファイルの URL、およびワークフローの応答メッセージのプラグインを無料化しました（[#6663](https://github.com/nocobase/nocobase/pull/6663)） by @chenos
* **[アクション：一括更新]** あるデータブロック内のデータを更新した後、他のデータブロック内のデータを更新する機能をサポートします（[#6591](https://github.com/nocobase/nocobase/pull/6591)） by @zhangzhonghe

#### 🚀 機能改善

* **[ワークフロー]** ワークフロータスクに固定のポップアップ URL をサポートします（[#6640](https://github.com/nocobase/nocobase/pull/6640)） by @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * グループメニューに切り替えたとき、すでにメニューで非表示にされているページにジャンプしないようにする問題（[#6654](https://github.com/nocobase/nocobase/pull/6654)） by @zhangzhonghe
  * フィルターフォームに「保存されていない変更」のプロンプトが表示されるべきではない問題（[#6657](https://github.com/nocobase/nocobase/pull/6657)） by @zhangzhonghe
  * プレビュー画像が隠れる問題を修正（[#6651](https://github.com/nocobase/nocobase/pull/6651)） by @zhangzhonghe
  * フィルターフォームで、フィルターボタンをクリックしたとき、バリデーションを通過していないフィールドがあるにもかかわらず、フィルタリングがトリガーされる問題（[#6659](https://github.com/nocobase/nocobase/pull/6659)） by @zhangzhonghe
  * 関係フィールドにおける「複数選択を許可」オプションが機能しない問題（[#6661](https://github.com/nocobase/nocobase/pull/6661)） by @katherinehhh
  * フォームブロックで、フィールド設定のデフォルト値が最初は元の変数文字列として表示され、その後消えてしまう問題（[#6649](https://github.com/nocobase/nocobase/pull/6649)） by @zhangzhonghe
* **[コレクションフィールド：添付ファイル (URL)]** パブリック URL アクセスが可能なファイルコレクションのみを許可する（[#6664](https://github.com/nocobase/nocobase/pull/6664)） by @katherinehhh
* **[ファイルストレージ: S3 (Pro)]**
  * 個別の baseurl とパブリック設定を行い、S3 pro ストレージの設定のユーザーエクスペリエンスを向上させる by @jiannx
  * 言語を整理する by @jiannx
* **[ワークフロー：承認]** タスクセンター内の承認アイテムに固定の URL をサポートする by @mytharcher
* **[マイグレーションマネージャー]** マイグレーション中に環境変数のポップアップが表示された場合、自動バックアップをスキップするオプションが無効になる問題 by @gchust

### [v1.7.0-beta.18](https://www.nocobase.com/en/blog/v1.7.0-beta.18)

*リリース日：2025-04-16*

#### 🎉 新機能

* **[コレクションフィールド：コード]** コードインターフェイスを追加 by @mytharcher

#### 🚀 機能改善

* **[create-nocobase-app]** 一部の依存関係を最新バージョンにアップグレードする（[#6673](https://github.com/nocobase/nocobase/pull/6673)） by @chenos

#### 🐛 不具合修正

* **[クライアント]**
  * 現在のコレクションのフィールド割り当てリストに継承されたフィールドが表示される問題（[#6666](https://github.com/nocobase/nocobase/pull/6666)） by @katherinehhh
  * デフォルト値を設定する際に、変数入力におけるスタイルの問題（[#6668](https://github.com/nocobase/nocobase/pull/6668)） by @katherinehhh
* **[ビルド]** プラグインがいくつかの AMD ライブラリに依存している場合、ビルド出力が正しくない問題（[#6665](https://github.com/nocobase/nocobase/pull/6665)） by @gchust
* **[ブロック: iframe]** iframe ブロックがフルヘイトに設定されたときに垂直スクロールバーが表示される問題（[#6675](https://github.com/nocobase/nocobase/pull/6675)） by @katherinehhh
* **[アクセス制御]** 役割モデルをキャッシュにシリアライズする際に発生するエラーを修正（[#6674](https://github.com/nocobase/nocobase/pull/6674)） by @mytharcher
* **[ワークフロー]** MySQL から発生するマイグレーションエラーを修正（[#6667](https://github.com/nocobase/nocobase/pull/6667)） by @mytharcher
* **[メールマネージャー]** 同期できない、件名が表示されないなどの小さな不具合を修正 by @jiannx
