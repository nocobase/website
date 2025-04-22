毎週の製品更新ログを要約し、最新のリリースは[当社のブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**今週、[NocoBase 1.4.0バージョン](https://www.nocobase.com/ja/blog/nocobase-1-4-0)をリリースしました。プラグイン管理の簡素化、通知機能の強化、ユーザーデータ同期、バックアップマネージャーなど、多くの新機能と改善点をもたらします。**

**現在のNocoBaseの更新は、`main`、`next`、および `develop`の3つのブランチが含まれます。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までに最も安定したバージョンであり、インストールを推奨します。
* `next`：ベータ版で、今後の新機能が含まれており、初期テストが行われています。既知または未知の問題が存在する可能性があります。主にテストユーザーからのフィードバックを収集し、さらなる機能の最適化を目的としています。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードが含まれており、不完全または不安定である可能性が高く、主に内部開発および迅速な反復に使用されます。製品の最先端に興味のある技術ユーザー向けですが、多くの問題や不完全な機能がある可能性があるため、プロダクション環境での使用は推奨されません。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.53](https://www.nocobase.com/ja/blog/v1.3.53)

*リリース日： 2024-11-28*

### 🚀 改善点

* **[クライアント]**
  * 必須のhookをエクスポート ([#5702](https://github.com/nocobase/nocobase/pull/5702)) by @mytharcher
  * 国内地区フィールドプラグインをビルトインプラグインから削除 ([#5693](https://github.com/nocobase/nocobase/pull/5693)) by @katherinehhh
* **[ワークフロー：事前アクションイベント]** リクエストインターセプターの警告ログを削除 by @mytharcher

### 🐛 バグ修正

* **[CLI]** デーモンモードでソケットファイルが削除されない問題を修正 ([#5750](https://github.com/nocobase/nocobase/pull/5750)) by @chenos
* **[クライアント]**
  * 同じターゲットコレクションを持つ複数の関連フィールドが相互に影響する問題を修正 ([#5744](https://github.com/nocobase/nocobase/pull/5744)) by @katherinehhh
  * サブテーブル内のチェックボックスの配置問題を修正 ([#5735](https://github.com/nocobase/nocobase/pull/5735)) by @katherinehhh
  * データセレクター内の外部キーフィールド表示の問題を修正 ([#5734](https://github.com/nocobase/nocobase/pull/5734)) by @katherinehhh
  * サブテーブル内の検証メッセージを改善するフィードバックレイアウトを調整 ([#5700](https://github.com/nocobase/nocobase/pull/5700)) by @katherinehhh
* **[サーバー]** プラグインを依存順にロード ([#5706](https://github.com/nocobase/nocobase/pull/5706)) by @chenos
* **[ブロック：マップ]** Google マップズでズームレベル変更時のエラーを修正 ([#5722](https://github.com/nocobase/nocobase/pull/5722)) by @katherinehhh
* **[データソース：メイン]** ビューコレクション内のフィールド名推論を修正 ([#5729](https://github.com/nocobase/nocobase/pull/5729)) by @chareice
* **[ファイルマネージャー]** エンドポイントが空でない場合、forcePathStyle を true に設定 ([#5712](https://github.com/nocobase/nocobase/pull/5712)) by @chenos

## [v1.3.55](https://www.nocobase.com/ja/blog/v1.3.55)

*リリース日： 2024-12-03*

### 🚀 改善点

* **[クライアント]** ブロックイニシャライザーにより適切な意味を持つアイコンを使用するように変更 ([#5757](https://github.com/nocobase/nocobase/pull/5757)) by @mytharcher

### 🐛 バグ修正

* **[クライアント]**
  * アイコンの変更に基づくE2Eケースを修正 ([#5768](https://github.com/nocobase/nocobase/pull/5768)) by @mytharcher
  * データが空の時、選択フィールドが空白を表示する問題を修正 ([#5762](https://github.com/nocobase/nocobase/pull/5762)) by @katherinehhh
* **[データベース]** 外部キーなしでhasOne/belongsTo関連値を更新する問題を修正 ([#5754](https://github.com/nocobase/nocobase/pull/5754)) by @chareice
* **[データソースマネージャー]** ソースキーの表示を修正 ([#5771](https://github.com/nocobase/nocobase/pull/5771)) by @katherinehhh
* **[ワークフロー：カスタムアクションイベント]**
  * 外部データソースでカスタムアクションイベントをトリガーするすべてのロールを許可 by @mytharcher
  * デフォルトデータソースをメインとして設定する問題を修正 by @mytharcher
  * データソースが一致しない場合のエラーを修正 by @mytharcher
  * 関連でカスタムアクショントリガーがトリガーされない問題を修正 by @mytharcher

## [v1.4.1](https://www.nocobase.com/ja/blog/v1.4.1)

*リリース日： 2024-12-04*

### 🚀 改善点

* **[CLI]** pkgコマンドを最適化 ([#5785](https://github.com/nocobase/nocobase/pull/5785)) by @chenos

### 🐛 バグ修正

* **[モバイル]** モバイルでのフィルタリング操作で日付入力フィールドが不足している問題を修正 ([#5786](https://github.com/nocobase/nocobase/pull/5786)) by @katherinehhh

## [v1.4.2](https://www.nocobase.com/ja/blog/v1.4.2)

*リリース日： 2024-12-04*

### 🐛 バグ修正

* **[ワークフロー]** ワークフローテーブルで非同期ワークフロータグが消えてしまう問題を修正 ([#5787](https://github.com/nocobase/nocobase/pull/5787)) by @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.9](https://www.nocobase.com/ja/blog/v1.4.0-beta.9)

*リリース日：2024-11-28*

### 🚀 改善

* **[モバイル]** によるモバイル向けコンパクトテーマの最適化 ([#5723](https://github.com/nocobase/nocobase/pull/5723)) by @katherinehhh

### 🐛 バグ修正

* **[データビジュアライゼーション]** `context`からタイムゾーンを誤って取得する問題を修正 ([#5743](https://github.com/nocobase/nocobase/pull/5743)) by @2013xile

## [v1.4.0-beta.10](https://www.nocobase.com/ja/blog/v1.4.0-beta.10)

*リリース日：2024-11-28*

### 🚀 改善点

* **[クライアント]** `nullable` が `false` の場合、カスタムコンポーネントを使用する変数入力コンポーネントをサポート ([#5746](https://github.com/nocobase/nocobase/pull/5746)) by @mytharcher

### 🐛 バグ修正

* **[クライアント]** テーブルの列数が少なく、サイズが中程度のときのスクロールバーの問題を修正 ([#5745](https://github.com/nocobase/nocobase/pull/5745)) by @katherinehhh

## [v1.4.0-beta.11](https://www.nocobase.com/ja/blog/v1.4.0-beta.11)

*リリース日：2024-12-02*

### 🚀 改善点

* **[クライアント]** 公開フォームで添付ファイルフィールドをサポート ([#5749](https://github.com/nocobase/nocobase/pull/5749)) by @katherinehhh
* **[CLI]** プラグインを追加または削除したときプロセスを再起動 ([#5761](https://github.com/nocobase/nocobase/pull/5761)) by @chenos
* **[カレンダー]** カレンダーブロックの日付をクリックしてスケジュールを作成をサポート ([#5733](https://github.com/nocobase/nocobase/pull/5733)) by @katherinehhh

### 🐛 バグ修正

* **[クライアント]** 横向きのレイアウトのサブテーブルでフィールド幅の問題を修正 ([#5763](https://github.com/nocobase/nocobase/pull/5763)) by @katherinehhh

## [v1.5.0-beta.1](https://www.nocobase.com/ja/blog/v1.5.0-beta.1)

*リリース日：2024-12-03*

### 🐛 バグ修正

* **[クライアント]** ページ間で選択した項目がレコードピッカーに表示されない問題を修正 ([#5770](https://github.com/nocobase/nocobase/pull/5770)) by @katherinehhh
* **[モバイル]** モバイルでのフィルタリング操作で日付入力フィールドが不足している問題を修正 ([#5779](https://github.com/nocobase/nocobase/pull/5779)) by @katherinehhh
* **[ワークフロー]** ノードテストモーダルで変数が表示されない問題を修正 ([#5766](https://github.com/nocobase/nocobase/pull/5766)) by @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.6.0-alpha.2](https://www.nocobase.com/ja/blog/v1.6.0-alpha.2)

*リリース日：2024-12-03*

### 🎉 新機能

* **[クライアント]**
  * リードプリティフィールドでリンク開設ポップアップを有効化するサポート ([#5747](https://github.com/nocobase/nocobase/pull/5747)) by @katherinehhh
  * 関連ブロック内の関連付けと解除アクションをサポート ([#5695](https://github.com/nocobase/nocobase/pull/5695)) by @katherinehhh
* **[サーバー]** 監査マネージャーを追加 ([#5601](https://github.com/nocobase/nocobase/pull/5601)) by @chenzhizdt
* **[ワークフロー]** 手動でワークフローをトリガーするサポート ([#5664](https://github.com/nocobase/nocobase/pull/5664)) by @mytharcher
* **[ワークフロー：事前アクションイベント]** 手動でワークフローをトリガーするサポート by @mytharcher

### 🚀 改善点

* **[クライアント]**
  * フロントエンドコンポーネントのオンデマンドローディングを実装 ([#5647](https://github.com/nocobase/nocobase/pull/5647)) by @gchust
  * ページレンダリング性能を改善し、ページのケープアライブ機能をサポート ([#5515](https://github.com/nocobase/nocobase/pull/5515)) by @zhangzhonghe
* **[コレクションフィールド：ソート]** プラグイン説明を追加 ([#5720](https://github.com/nocobase/nocobase/pull/5720)) by @mytharcher
* **[NocoBaseの埋め込み]** ページレンダリング性能を改善 by @zhangzhonghe

### 🐛 バグ修正

* **[クライアント]**
  * 第三者データソースブロックで変数が適切に使用できない問題を修正 ([#5782](https://github.com/nocobase/nocobase/pull/5782)) by @zhangzhonghe
  * ブロックテンプレート内の関連フィールド値が空になる問題を修正。第三者データソースで変数を使用したブロックデータスコープが適切に動作しない問題を修正 ([#5777](https://github.com/nocobase/nocobase/pull/5777)) by @zhangzhonghe
  * コンポーネントの動的プロパティが遅延ローディングで動作しない問題を修正 ([#5776](https://github.com/nocobase/nocobase/pull/5776)) by @gchust
  * 開発環境でフックを動的にロードする際のReactの警告メッセージを修正 ([#5758](https://github.com/nocobase/nocobase/pull/5758)) by @gchust
* **[データビジュアライゼーション]** チャートブロックのフィルタフィールドコンポーネントがレンダリングされない問題を修正 ([#5769](https://github.com/nocobase/nocobase/pull/5769)) by @2013xile

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
