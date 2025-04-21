毎週の製品更新ログを要約し、最新のリリースは[当社のブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**現在のNocoBaseの更新は、`main`、`next`、および `develop`の3つのブランチが含まれます。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までに最も安定したバージョンであり、インストールを推奨します。
* `next`：ベータ版で、今後の新機能が含まれており、初期テストが行われています。既知または未知の問題が存在する可能性があります。主にテストユーザーからのフィードバックを収集し、さらなる機能の最適化を目的としています。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードが含まれており、不完全または不安定である可能性が高く、主に内部開発および迅速な反復に使用されます。製品の最先端に興味のある技術ユーザー向けですが、多くの問題や不完全な機能がある可能性があるため、プロダクション環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.3](https://www.nocobase.com/ja/blog/v1.4.3)

*リリース日： 2024-12-05*

#### 🚀 改善点

* **[テスト]** テストケースでロール名でのログインを許可 ([#5794](https://github.com/nocobase/nocobase/pull/5794)) by @mytharcher
* **[通知：アプリ内メッセージ]** アプリ内メッセージフォームとローカライズファイル内の詳細URLのタイトルを更新 ([#5742](https://github.com/nocobase/nocobase/pull/5742)) by @sheldon66

#### 🐛 バグ修正

* **[クライアント]**
  * ロールのないユーザーがログインエラーを経験し、「別のアカウントでログイン」ボタンをクリックした後、トークンがクリアされない問題を修正 ([#5790](https://github.com/nocobase/nocobase/pull/5790)) by @2013xile
  * サイレントリクエストでのリクエストヘッダーの損失 ([#5795](https://github.com/nocobase/nocobase/pull/5795)) by @chenos
  * ユーザーにロールがない場合の空白ページ問題を修正 ([#5797](https://github.com/nocobase/nocobase/pull/5797)) by @chenos
  * コンパクトテーマでサイズが小さすぎるサブテーブルのスクロールバー問題を修正 ([#5796](https://github.com/nocobase/nocobase/pull/5796)) by @katherinehhh

### [v1.4.4](https://www.nocobase.com/ja/blog/v1.4.4)

*リリース日： 2024-12-08*

#### 🐛 バグ修正

* **[クライアント]**
  * テーブルブロックで外部データソースフィールドが表示されない問題を修正 ([#5825](https://github.com/nocobase/nocobase/pull/5825)) by @katherinehhh
  * フォーム設定内の継承フィールド表示問題を修正 ([#5822](https://github.com/nocobase/nocobase/pull/5822)) by @katherinehhh
  * フィールドリストに継承フィールドが表示されず、上書きできない問題を修正 ([#5800](https://github.com/nocobase/nocobase/pull/5800)) by @katherinehhh
* **[データビジュアライゼーション]** MySQLでタイムゾーンを意識した日付フィールドのフォーマット問題を修正 ([#5829](https://github.com/nocobase/nocobase/pull/5829)) by @2013xile
* **[ワークフロー]**
  * データソース間でのトランザクションがコレクションイベントエラーを引き起こす問題を修正 ([#5818](https://github.com/nocobase/nocobase/pull/5818)) by @mytharcher
  * 日付フィールドベースのスケジュール設定で日付タイプが抜けていた問題を修正 ([#5816](https://github.com/nocobase/nocobase/pull/5816)) by @mytharcher
* **[コレクションフィールド：多対多（配列）]** 単一関係コレクションでm2m配列フィールドを更新しても効果がない問題を修正 ([#5820](https://github.com/nocobase/nocobase/pull/5820)) by @2013xile
* **[カレンダー]**
  * カレンダーで空白の日付をクリックした際のエラーを修正 ([#5803](https://github.com/nocobase/nocobase/pull/5803)) by @katherinehhh
  * 'カレンダーブロック'で開いたポップアップを閉じるとすべてのポップアップが閉じてしまう問題を修正 ([#5793](https://github.com/nocobase/nocobase/pull/5793)) by @zhangzhonghe
* **[公開フォーム]** サブアプリケーションの公開フォームでQCコードスキャンパスが間違っていた問題を修正 ([#5799](https://github.com/nocobase/nocobase/pull/5799)) by @katherinehhh

### [v1.4.5](https://www.nocobase.com/ja/blog/v1.4.5)

*リリース日： 2024-12-08*

#### 🐛 バグ修正

* **[アクセス制御]** ユーザーのロールが正しくない場合にページを更新する ([#5821](https://github.com/nocobase/nocobase/pull/5821)) by @chenos

### [v1.4.6](https://www.nocobase.com/ja/blog/v1.4.6)

*リリース日： 2024-12-08*

#### 🐛 バグ修正

* **[アクション：レコードをインポート]** 関連テーブルでのインポートデータを修正 ([#5833](https://github.com/nocobase/nocobase/pull/5833)) by @chareice
* **[アクセス制御]** ACLでフィールドを使用して関係を照会する問題を修正 ([#5832](https://github.com/nocobase/nocobase/pull/5832)) by @chareice

### [v1.4.7](https://www.nocobase.com/ja/blog/v1.4.7)

*リリース日： 2024-12-09*

#### 🐛 バグ修正

* **[モバイル]** モバイルの背景色表示の問題を修正 ([#5809](https://github.com/nocobase/nocobase/pull/5809)) by @katherinehhh

### [v1.4.8](https://www.nocobase.com/ja/blog/v1.4.8)

*リリース日： 2024-12-10*

#### 🐛 バグ修正

* **[クライアント]**
  * 関連フィールドレコードピッカーで設定されたフィルターフォームのデータテンプレート問題を修正 ([#5837](https://github.com/nocobase/nocobase/pull/5837)) by @katherinehhh
  * Markdown文字列テンプレートが関連データ（外部データソース）のデータをロードしない問題を修正 ([#5791](https://github.com/nocobase/nocobase/pull/5791)) by @katherinehhh
* **[ユーザーデータ同期]** 同期中にサポートされていないデータタイプをスキップしてエラーをスローする代わりに ([#5835](https://github.com/nocobase/nocobase/pull/5835)) by @chenzhizdt
* **[バックアップマネージャー]**
  * 大きなバックアップファイルのダウンロードウィンドウが遅くポップアップされる問題を修正 by @gchust
  * バックアップサブアプリケーションをリストアしてすべてのアプリケーションが再起動する問題を修正 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.2](https://www.nocobase.com/ja/blog/v1.5.0-beta.2)

*リリース日：2024-12-06*

#### 🚀 改善点

* **[クライアント]** useMenuSearchの再帰ロジックを最適化し、パフォーマンスを向上させる ([#5784](https://github.com/nocobase/nocobase/pull/5784)) by @katherinehhh
* **[公開フォーム]** モバイルへの適応を最適化するアクションパネルと公開フォームコンポーネント ([#5788](https://github.com/nocobase/nocobase/pull/5788)) by @katherinehhh

### [v1.5.0-beta.3](https://www.nocobase.com/ja/blog/v1.5.0-beta.3)

*リリース日：2024-12-10*

#### 🎉 新機能

* **[クライアント]** サブテーブルの追加ボタンと選択ボタンでテキスト、アイコン、タイプを設定する機能をサポート ([#5778](https://github.com/nocobase/nocobase/pull/5778)) by @katherinehhh
* **[カレンダー]** カレンダープラグインでイベントの開启モードを追加 ([#5808](https://github.com/nocobase/nocobase/pull/5808)) by @Cyx649312038

### [v1.5.0-beta.4](https://www.nocobase.com/ja/blog/v1.5.0-beta.4)

*リリース日：2024-12-11*

#### 🐛 バグ修正

* **[モバイル]** サブページの日付コンポーネントのモバイル適応を修正 ([#5859](https://github.com/nocobase/nocobase/pull/5859)) by @katherinehhh

### [v1.5.0-beta.6](https://www.nocobase.com/ja/blog/v1.5.0-beta.6)

*リリース日：2024-12-11*

#### 🚀 改善点

* **[クライアント]** テーブル行スケルトンコンポーネントを削除 ([#5751](https://github.com/nocobase/nocobase/pull/5751)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.3](https://www.nocobase.com/ja/blog/v1.6.0-alpha.3)

*リリース日：2024-12-09*

#### 🚀 改善点

* **[クライアント]** テーブルのページネーションを切り替えた際のパフォーマンスを向上させるために、テーブルからFormilyコンポーネントを削除 ([#5738](https://github.com/nocobase/nocobase/pull/5738)) by @zhangzhonghe

#### 🐛 バグ修正

* **[クライアント]**
  * サブフォームにフィールドを追加した後、フィールドが表示されない問題を修正 ([#5827](https://github.com/nocobase/nocobase/pull/5827)) by @zhangzhonghe
  * 詳細ブロックで関連フィールドの値を変更してもすぐに更新されない問題を修正 ([#5826](https://github.com/nocobase/nocobase/pull/5826)) by @zhangzhonghe
  * 「リンクを有効」を初めてオンにした際にリンクをクリックしてもポップアップが開かない問題を修正 ([#5812](https://github.com/nocobase/nocobase/pull/5812)) by @zhangzhonghe
  * ポップアップを閉じる際に複数のAPIコールを防ぐ ([#5804](https://github.com/nocobase/nocobase/pull/5804)) by @zhangzhonghe
  * モバイルログインがデスクトップページにリダイレクトする問題を修正 ([#5805](https://github.com/nocobase/nocobase/pull/5805)) by @zhangzhonghe
  * アクションボタンの配置が左揃えでない問題を修正 ([#5798](https://github.com/nocobase/nocobase/pull/5798)) by @katherinehhh
* **[ビルド]** プラグインビルド後のフロントエンドJSファイルのキャッシュが間違ってキャッシュされる問題を修正 ([#5801](https://github.com/nocobase/nocobase/pull/5801)) by @gchust

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
