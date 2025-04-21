週次の製品更新ログを要約し、最新のリリースは[私たちのブログ](https://www.nocobase.com/en/blog/tags/release-notes)で確認できます。

NocoBaseは現在、`main`と`next`の2つのブランチで更新されています。

* `main`：現在までの最も安定したバージョンで、インストールをお勧めします；
* `next`：アルファ版で、未公開の新機能の一部を含んでいます。このバージョンは完全に安定していない可能性があり、新機能を事前に体験したり、互換性テストを行う開発者やテスター向けです。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.32-beta](https://www.nocobase.com/en/blog/v1.3.32-beta)

*リリース日：2024-10-13*

### 🐛 バグ修正

- **[client]** 関連フィールドが必須で、データ範囲に変数を設定した後、値を選択してもバリデーションエラーが発生する ([#5399](https://github.com/nocobase/nocobase/pull/5399)) by @katherinehhh

## [v1.3.33-beta](https://www.nocobase.com/en/blog/v1.3.33-beta)

*リリース日：2024-10-17*

### 🚀 改善

- **[Workflow]** 更新ノードのバッチモードに関連フィールドのヒントを追加する ([#5426](https://github.com/nocobase/nocobase/pull/5426)) by @mytharcher

### 🐛 バグ修正

- **[client]**

  - プロフィール編集ドロワーがサブページに隠れている問題を修正する ([#5409](https://github.com/nocobase/nocobase/pull/5409)) by @zhangzhonghe
  - ワークフローノード変数が継承されたコレクションフィールドを表示しない ([#5415](https://github.com/nocobase/nocobase/pull/5415)) by @chenos
  - テーブルフィルターブロックでフィルターデータをクリアした後、ページネーションがリセットされない ([#5411](https://github.com/nocobase/nocobase/pull/5411)) by @katherinehhh
- **[ファイルマネージャー]** ファイルテンプレートコレクション設定でのストレージの読み込み制限を20項目に削除 ([#5430](https://github.com/nocobase/nocobase/pull/5430)) by @mytharcher
- **[アクション：レコードの重複]** バルク編集ポップアップにコンテンツが表示されない問題を修正する ([#5412](https://github.com/nocobase/nocobase/pull/5412)) by @zhangzhonghe
- **[データビジュアライゼーション]** チャートフィルターブロックでデフォルト値が表示されない問題を修正する ([#5405](https://github.com/nocobase/nocobase/pull/5405)) by @zhangzhonghe

## [v1.3.34-beta](https://www.nocobase.com/en/blog/v1.3.34-beta)

*リリース日：2024-10-21*

### 🎉 新機能

- **[test]** フィルターフォーム内の関連フィールドが複数選択の設定をサポートする ([#5451](https://github.com/nocobase/nocobase/pull/5451)) by @zhangzhonghe
- **[client]** 「親オブジェクト」という変数を追加する ([#5449](https://github.com/nocobase/nocobase/pull/5449)) by @zhangzhonghe
  参考文献：[親オブジェクト](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 バグ修正

- **[client]**

  - URL検索パラメータ変数が解析されない問題を修正する ([#5454](https://github.com/nocobase/nocobase/pull/5454)) by @zhangzhonghe
  - 多層にネストされたサブテーブルでデータ範囲を持つ関連データを選択した際、データクリアバグを修正する ([#5441](https://github.com/nocobase/nocobase/pull/5441)) by @katherinehhh
  - 表の行の選択された背景色を修正する ([#5445](https://github.com/nocobase/nocobase/pull/5445)) by @mytharcher
- **[ブロック：マップ]** テーブルカラム内のマップフィールドのズームレベル設定を削除する ([#5457](https://github.com/nocobase/nocobase/pull/5457)) by @katherinehhh
- **[ファイルマネージャー]** リード・プレティフィールドでのストレージルールフックの呼び出しを修正する ([#5447](https://github.com/nocobase/nocobase/pull/5447)) by @mytharcher
- **[データソース：メイン]** コンポーネントの変更によりE2Eケースが失敗する問題を修正する ([#5437](https://github.com/nocobase/nocobase/pull/5437)) by @mytharcher

## [v1.3.35-beta](https://www.nocobase.com/en/blog/v1.3.35-beta)

*リリース日：2024-10-21*

### 🚀 改善

- **[Workflow: メーラーノード]** メーラー ノードにプレースホルダーを追加する ([#5470](https://github.com/nocobase/nocobase/pull/5470)) by @mytharcher

## [v1.3.36-beta](https://www.nocobase.com/en/blog/v1.3.36-beta)

*リリース日：2024-10-22*

### 🐛 バグ修正

- **[コレクション：ツリー]** 継承ツリーコレクションのパスコレクションが自動的に作成されない問題を修正する ([#5486](https://github.com/nocobase/nocobase/pull/5486)) by @2013xile
- **[カレンダー]** テーブルにデータがある場合にページングバーを表示する ([#5480](https://github.com/nocobase/nocobase/pull/5480)) by @katherinehhh
- **[ファイルマネージャー]** ルールフックによってファイルがアップロードできない問題を修正する ([#5460](https://github.com/nocobase/nocobase/pull/5460)) by @mytharcher
- **[コレクションフィールド：数式]** ネストされた複数レベルのサブテーブルでの数式計算における誤りを修正する ([#5469](https://github.com/nocobase/nocobase/pull/5469)) by @gu-zhichao

## [v1.3.37-beta](https://www.nocobase.com/en/blog/v1.3.37-beta)

*リリース日：2024-10-23*

### 🚀 改善

- **[client]** ボタンにワークフローをバインドする設定パネルのヒントを調整する ([#5494](https://github.com/nocobase/nocobase/pull/5494)) by @mytharcher

### 🐛 バグ修正

- **[ファイルマネージャー]** 関連ブロック内のファイルのアップロードと削除の記録に関する問題を修正する ([#5493](https://github.com/nocobase/nocobase/pull/5493)) by @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241016035453](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241016035453)

*リリース日：2024-10-16*

### 🎉 新機能

- **[sdk]** 環境変数`API_CLIENT_STORAGE_TYPE`を設定することで、クライアント情報をsessionStorageに格納できるようにする ([#5424](https://github.com/nocobase/nocobase/pull/5424)) by @2013xile
- **[コレクションフィールド：添付ファイル（URL）]** 添付ファイル（URL）フィールドを追加する by @katherinehhh

### 🚀 改善

- **[client]**

  - リモートデバッグを最適化する ([#5394](https://github.com/nocobase/nocobase/pull/5394)) by @chenos
  - アイコンのみを使用する操作ボタンの中央配置スタイルを最適化する ([#5413](https://github.com/nocobase/nocobase/pull/5413)) by @katherinehhh
  - レコードの更新後にメッセージポップアップを自動的に閉じる ([#5408](https://github.com/nocobase/nocobase/pull/5408)) by @katherinehhh
- **[Workflow: HTTPリクエストノード]** サーバー送信イベント（SSE）のサポート ([#5418](https://github.com/nocobase/nocobase/pull/5418)) by @chenos

### 🐛 バグ修正

- **[パブリックフォーム]** 公開フォームの設定をクリックした際の問題を修正する ([#5392](https://github.com/nocobase/nocobase/pull/5392)) by @katherinehhh
- **[client]**

  - デフォルト値入力ボックスに値が表示されない問題を修正する ([#5400](https://github.com/nocobase/nocobase/pull/5400)) by @zhangzhonghe
  - サブテーブルにリンクルールが設定されているにもかかわらず、関連フィールドが見つからないエラーを修正する ([#5402](https://github.com/nocobase/nocobase/pull/5402)) by @zhangzhonghe
  - サポートされていないファイルタイプのサムネイルプレビューが間違って表示される問題を修正する ([#5401](https://github.com/nocobase/nocobase/pull/5401)) by @mytharcher
- **[ローカライズ]** ローカライズプラグインの翻訳が発行後に機能しない問題を修正する ([#5416](https://github.com/nocobase/nocobase/pull/5416)) by @2013xile

## [v1.4.0-alpha.20241017164316](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241017164316)

*リリース日：2024-10-18*

### 🎉 新機能

- **[Workflow: ループノード]** ループノードの設定により多くの制御オプションを追加する ([#5342](https://github.com/nocobase/nocobase/pull/5342)) by @mytharcher
  参考文献：[ループノード](https://docs-nocobase.com/handbook/workflow-loop)
- **[Workflow]** ワークフローノード用のテスト実行ボタンを追加し、テスト機能を実装するAPIを追加する ([#5407](https://github.com/nocobase/nocobase/pull/5407)) by @mytharcher
- **[フィールドコンポーネント：マスク]** フィールドコンポーネント `mask`を追加し、フィールドデータをマスクされた文字列として表示する ([#gchust](https://github.com/nocobase/nocobase/pull/5407)) by @gchust
  参考文献：[マスク](https://docs-jp.nocobase.com/handbook/field-component-mask)

### 🚀 改善

- **[client]** テーブル列のタイトルをデフォルトにリセットできるようにする ([#5439](https://github.com/nocobase/nocobase/pull/5439)) by @katherinehhh

### 🐛 バグ修正

- **[client]** フィールドコンポーネントオプションが正しく翻訳されていない問題を修正する ([#5442](https://github.com/nocobase/nocobase/pull/5442)) by @gchust
- **[Workflow: HTTPリクエストノード]** リクエストノードのレガシーエラーメッセージを修正する ([#5443](https://github.com/nocobase/nocobase/pull/5443)) by @mytharcher

## [v1.4.0-alpha.20241023053303](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241023053303)

*リリース日：2024-10-23*

### 🚀 改善

- **[client]** サブテーブルのページネーションをサポートする ([#5450](https://github.com/nocobase/nocobase/pull/5450)) by @katherinehhh
- **[Block: Kanban]** カンバンブロックでのドラッグアンドドロップソートを有効または無効にするサポートを追加する ([#5468](https://github.com/nocobase/nocobase/pull/5468)) by @katherinehhh
- **[カレンダー]** カレンダーのスロットを選択するとポップアップが表示される ([#5483](https://github.com/nocobase/nocobase/pull/5483)) by @gu-zhichao
- **[マルチアプリケーションマネージャー]** USE_DB_SCHEMA_IN_SUBAPP環境変数をサポートする ([#5481](https://github.com/nocobase/nocobase/pull/5481)) by @chenos
- **[Workflow]** カード形式のフィールド集合コンポーネントを追加する ([#5464](https://github.com/nocobase/nocobase/pull/5464)) by @mytharcher

### 🐛 バグ修正

- **[client]** マークダウンブロックポップアップの更新後に変数が失われる問題を修正する ([#5478](https://github.com/nocobase/nocobase/pull/5478)) by @katherinehhh
- **[データビジュアライゼーション]** 外部Oracleデータソースを使用するデータビジュアライゼーションプラグインの問題を修正する、例：日付フォーマットの問題 ([#5436](https://github.com/nocobase/nocobase/pull/5436)) by @2013xile
- **[ファイルマネージャー]** ルールフックの変更によりファイルがアップロードできない問題を修正する ([#5460](https://github.com/nocobase/nocobase/pull/5460)) by @mytharcher

---

NocoBaseは、プライベートでオープンソースなノーコードプラットフォームで、完全なコントロールと無限のスケーラビリティを提供しています。これにより、チームは変化に迅速に適応し、コストを大幅に削減できます。数年の開発と大きな投資を避け、数分でNocoBaseを展開できます。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3分でNocoBaseを発見してください！

## 👇 NocoBaseを入手する

[**ホームページ**](https://www.nocobase.com/)

[**デモ**](https://demo.nocobase.com/new)

[**ドキュメント**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
