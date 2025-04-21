週ごとの製品更新ログをまとめ、最新リリースは[私たちのブログ](https://www.nocobase.com/en/blog/tags/release-notes)で確認できます。

NocoBaseは現在、`main`と`next`の2つのブランチで更新されています。

* `main`: 現時点で最も安定したバージョンで、インストールをお勧めします;
* `next`: アルファ版で、一部未リリースの新機能を含みます。このバージョンは完全には安定していない可能性があり、開発者やテスターが新機能を事前に体験したり、互換性テストを行うのに適しています。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.38-beta](https://www.nocobase.com/en/blog/v1.3.38-beta)

*リリース日: 2024-10-24*

### 🐛 バグ修正

- **[クライアント]**

  - シンプルページネーションコレクションを使用したリストブロックでのページネーションの問題 ([#5500](https://github.com/nocobase/nocobase/pull/5500)) by @katherinehhh
  - 非設定モードでは、編集フォームに現在のコレクションのみを表示します ([#5499](https://github.com/nocobase/nocobase/pull/5499)) by @katherinehhh
- **[ワークフロー: HTTPリクエストノード]** 変数テキストエリアへのコンテンツのペースト時に特別な空白が現れる問題を修正 ([#5497](https://github.com/nocobase/nocobase/pull/5497)) by @mytharcher
- **[部門]** 部門役割のもとで外部データソースの権限チェックの不具合を修正 by @2013xile

## [v1.3.39-beta](https://www.nocobase.com/en/blog/v1.3.39-beta)

*リリース日: 2024-10-24*

### 🐛 バグ修正

- **[クライアント]** ポップアップでフィルターブロックが追加できない問題を修正 ([#5502](https://github.com/nocobase/nocobase/pull/5502)) by @zhangzhonghe

## [v1.3.40-beta](https://www.nocobase.com/en/blog/v1.3.40-beta)

*リリース日: 2024-10-25*

### 🎉 新機能

- **[認証: OIDC]** SSL検証をスキップするオプションを追加 by @2013xile

### 🚀 改善

- **[クライアント]** 選択されていないフィールド用に無効の未選択チェックボックスを表示 ([#5503](https://github.com/nocobase/nocobase/pull/5503)) by @katherinehhh

### 🐛 バグ修正

- **[データベース]** 文字列演算子「含む」と「含まない」が`null`値を適切に扱わない問題を修正 ([#5509](https://github.com/nocobase/nocobase/pull/5509)) by @2013xile
- **[クライアント]** リンクルールがURLパラメータ変数を正しく評価するように修正 ([#5504](https://github.com/nocobase/nocobase/pull/5504)) by @katherinehhh
- **[ブロック: マップ]** AMapの`load`メソッドを複数回呼び出すことによって発生するいくつかのマップの誤表示の問題を修正 ([#5490](https://github.com/nocobase/nocobase/pull/5490)) by @Cyx649312038

## [v1.3.41-beta](https://www.nocobase.com/en/blog/v1.3.41-beta)

*リリース日: 2024-10-27*

### 🚀 改善

- **[アクセスコントロール]** aclにおける大規模テーブルのパフォーマンスを最適化 ([#5496](https://github.com/nocobase/nocobase/pull/5496)) by @chareice

## [v1.3.42-beta](https://www.nocobase.com/en/blog/v1.3.42-beta)

*リリース日: 2024-10-28*

### 🐛 バグ修正

- **[コレクション: ツリー]** 子供の関連を解除する際にノードパスが更新されない問題を修正 ([#5522](https://github.com/nocobase/nocobase/pull/5522)) by @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241024133132](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024133132)

*リリース日: 2024-10-24*

### 🎉 新機能

- **[クライアント]** フォームや詳細ブロックにグループを追加する機能をサポート ([#5498](https://github.com/nocobase/nocobase/pull/5498)) by @katherinehhh
- **[カレンダー]** プラグインカレンダーにデフォルトビュー設定と国際化設定を追加 ([#5487](https://github.com/nocobase/nocobase/pull/5487)) by @Cyx649312038
- **[データソース: KingbaseES]** Kingbaseデータベースをメインまたは外部データソースとして使用するサポート (pgモード) by @chareice
  参照: [データソース - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### 🚀 改善

- **[データベース]** プラグインの静的ロードロジックのサポート ([#5466](https://github.com/nocobase/nocobase/pull/5466)) by @chareice
- **[クライアント]** テーブルブロックのレンダリング性能を向上（初回レンダリング時間を約50％削減） ([#5438](https://github.com/nocobase/nocobase/pull/5438)) by @zhangzhonghe
- **[モバイル]** モバイルクライアントがフィルターフォームブロックをサポート ([#5482](https://github.com/nocobase/nocobase/pull/5482)) by @katherinehhh
- **[バックアップマネージャー]**

  - `バックアップローカルストレージファイル`のデフォルト設定をtrueに変更 by @gchust
  - 復元操作が失敗した場合はデータベースデータを元に戻す by @gchust

### 🐛 バグ修正

- **[サーバー]** アプリのafterLoadイベントがインストール後にトリガーされなかった問題 ([#5506](https://github.com/nocobase/nocobase/pull/5506)) by @chenos
- **[公開フォーム]** 公開フォームのためのACLスニペットの登録 ([#5505](https://github.com/nocobase/nocobase/pull/5505)) by @katherinehhh
- **[バックアップマネージャー]** サブアプリが異なるスキーマを使用している場合、サブアプリの復元後にメインアプリがクラッシュする問題を修正 by @gchust

## [v1.4.0-alpha.20241024151311](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024151311)

*リリース日: 2024-10-24*

### 🎉 新機能

- **[ブロック: アクションパネル]** アクションパネルブロックにタイトル設定を追加 ([#5492](https://github.com/nocobase/nocobase/pull/5492)) by @Cyx649312038

---

NocoBaseはプライベートでオープンソースのノーコードプラットフォームで、完全なコントロールと無限のスケーラビリティを提供します。チームが迅速に変化に適応し、コストを大幅に削減することを助けます。何年もの開発と多額の投資を避け、NocoBaseを数分で展開できます。

**[NocoBaseの公式サイト](https://www.nocobase.com/en)**

デモをリクエストし、体験サイトは1分以内に作成され、あなたのメールに送信されます。

**[NocoBaseのGitHub](https://github.com/nocobase/nocobase)**と**[Gitee](https://gitee.com/nocobase/nocobase)**を訪問してください。

NocoBaseのソースコードをダウンロードしてインストールできます。Dockerインストール、create-nocobase-appインストールおよびGitソースコードインストールをサポートしています。

**[公式ドキュメント](https://docs.nocobase.com/)は随時更新されています。**