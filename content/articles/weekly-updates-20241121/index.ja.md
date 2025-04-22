毎週の製品更新ログを要約し、最新のリリースは[当社のブログ](https://www.nocobase.com/en/blog/tags/release-notes)で確認できます。

**今週はバージョンリリースに調整を加えました。今後のバージョンアップデートには、`main`、`next`、および `develop`の3つのブランチが含まれます。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までに最も安定したバージョンであり、インストールを推奨します。
* `next`：ベータ版で、今後の新機能が含まれており、初期テストが行われています。既知または未知の問題が存在する可能性があります。主にテストユーザーからのフィードバックを収集し、さらなる機能の最適化を目的としています。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードが含まれており、不完全または不安定である可能性が高く、主に内部開発および迅速な反復に使用されます。製品の最先端に興味のある技術ユーザー向けですが、多くの問題や不完全な機能がある可能性があるため、プロダクション環境での使用は推奨されません。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.50-beta](https://www.nocobase.com/en/blog/v1.3.50-beta)

*リリース日：2024-11-14*

### 🐛 バグ修正

- **[クライアント]** 編集中にリンクルールタイトルをクリアできない問題を修正しました ([#5644](https://github.com/nocobase/nocobase/pull/5644)) by @katherinehhh
- **[コメント]** コメントブロックのデータスコープ設定が機能しない問題を修正しました by @katherinehhh

## [v1.3.51](https://www.nocobase.com/en/blog/v1.3.51)

*リリース日：2024-11-19*

### 🐛 バグ修正

- **[クライアント]**

  - 関連フィールドのコンテキストに影響されないフィールド権限チェックを修正しました ([#5672](https://github.com/nocobase/nocobase/pull/5672)) by @katherinehhh
  - リンクルールが空の値を保存すると静的空値に変更される問題を修正しました ([#5667](https://github.com/nocobase/nocobase/pull/5667)) by @katherinehhh
- **[コレクションフィールド：多対多（配列）]** 多対多（配列）フィールドを持つ関連コレクションのレコードを取得する際のエラーを修正しました ([#5661](https://github.com/nocobase/nocobase/pull/5661)) by @2013xile
- **[ブロック：ガント]** ガントブロックテンプレートが追加時にカレンダーブロックを誤って呼び出す問題を修正しました ([#5673](https://github.com/nocobase/nocobase/pull/5673)) by @katherinehhh
- **[データ可視化]** デュアル軸チャートでツールチップのデータ変換が機能しない問題を修正しました ([#5649](https://github.com/nocobase/nocobase/pull/5649)) by @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.9](https://www.nocobase.com/en/blog/v1.4.0-alpha.9)

*リリース日：2024-11-14*

### 🎉 新機能

- **[認証]** サインアップフォームのユーザー名とメールフィールドを設定できるようになりました ([#5639](https://github.com/nocobase/nocobase/pull/5639)) by @2013xile
- **[ワークフロー]** コレクションイベントでの連合キーをサポートします ([#5627](https://github.com/nocobase/nocobase/pull/5627)) by @mytharcher

### 🚀 改善

- **[クライアント]** テーブルブロック内のデフォルト列幅を100に調整しました ([#5625](https://github.com/nocobase/nocobase/pull/5625)) by @katherinehhh
- **[通知管理]** アプリ内メッセージのアイコンをベルのアイコンに更新しました ([#5638](https://github.com/nocobase/nocobase/pull/5638)) by @sheldon66
- **[ブロック：アクションパネル]** アクションパネルでのブロック高さ設定をサポートします ([#5628](https://github.com/nocobase/nocobase/pull/5628)) by @katherinehhh
- **[モバイル]** スタイル：モバイルスタイリングを最適化し、フィールド間の間隔を減少させ、フィールド表示のコンパクトさを強化しました ([#5605](https://github.com/nocobase/nocobase/pull/5605)) by @katherinehhh

### 🐛 バグ修正

- **[ビルド]** .lessファイルを含むプラグインのビルド失敗の問題を修正しました ([#5646](https://github.com/nocobase/nocobase/pull/5646)) by @gchust
- **[クライアント]** テーブルの右固定列を整列させました ([#5636](https://github.com/nocobase/nocobase/pull/5636)) by @katherinehhh
- **[ワークフロー：ループノード]** ループノードにおける条件チェックを誤って修正しました ([#5634](https://github.com/nocobase/nocobase/pull/5634)) by @mytharcher
- **[通知管理]** 通知APIでテンプレートがコンパイルされない問題を修正しました ([#5630](https://github.com/nocobase/nocobase/pull/5630)) by @mytharcher

## [v1.4.0-alpha.10](https://www.nocobase.com/en/blog/v1.4.0-alpha.10)

*リリース日：2024-11-14*

### 🚀 改善

- **[クライアント]** 一部のクライアントコアのAPIを調整し、警告を修正しました ([#5651](https://github.com/nocobase/nocobase/pull/5651)) by @mytharcher
- **[モバイル]** 特定のコンポーネントをモバイルコンポーネントに置き換えました ([#5590](https://github.com/nocobase/nocobase/pull/5590)) by @katherinehhh

## [v1.4.0-alpha.11](https://www.nocobase.com/en/blog/v1.4.0-alpha.11)

*リリース日：2024-11-15*

### 🐛 バグ修正

- **[クライアント]** アクションボタンの`openSize`プロップの修正を元に戻しました ([#5656](https://github.com/nocobase/nocobase/pull/5656)) by @mytharcher

## [v1.4.0-alpha.12](https://www.nocobase.com/en/blog/v1.4.0-alpha.12)

*リリース日：2024-11-16*

### 🐛 バグ修正

- **[クライアント]**

  - ファイルまたはプロパティがnullの場合のファイルタイプマッチングの修正 ([#5659](https://github.com/nocobase/nocobase/pull/5659)) by @mytharcher
  - サブテーブル内のデータを削除後、ページネーションのカウントが更新されない問題を修正しました ([#5648](https://github.com/nocobase/nocobase/pull/5648)) by @katherinehhh
- **[ワークフロー]** 条件を追加した後にノードが消える問題を修正しました ([#5658](https://github.com/nocobase/nocobase/pull/5658)) by @mytharcher
- **[モバイル]** 関連フィールドで長いテキストをタイトルフィールドとして使用する際のスタイル問題を修正しました ([#5655](https://github.com/nocobase/nocobase/pull/5655)) by @katherinehhh
- **[ワークフロー：カスタムアクションイベント]** 外部データソースでの添付URLフィールド使用時のエラーを修正しました by @katherinehhh

## [v1.4.0-alpha.13](https://www.nocobase.com/en/blog/v1.4.0-alpha.13)

*リリース日：2024-11-16*

### 🐛 バグ修正

- **[モバイル]** モバイル設定モードでselectにデスクトップコンポーネントを使用し、datePickerにおいて変数をデフォルト値として使用した際のエラーを修正しました ([#5662](https://github.com/nocobase/nocobase/pull/5662)) by @katherinehhh

## [v1.4.0-alpha.14](https://www.nocobase.com/en/blog/v1.4.0-alpha.14)

*リリース日：2024-11-17*

### 🐛 バグ修正

- **[モバイル]** フィールドの割り当てをサポートし、変数値を0として扱うことを修正しました ([#5663](https://github.com/nocobase/nocobase/pull/5663)) by @katherinehhh

## [v1.4.0-alpha.16](https://www.nocobase.com/en/blog/v1.4.0-alpha.16)

*リリース日：2024-11-18*

### 🐛 バグ修正

- **[ビルド]** システム内にすでにビルドされたプラグインが存在する場合にyarn devがエラーを報告する問題を修正しました ([#5671](https://github.com/nocobase/nocobase/pull/5671)) by @gchust
- **[モバイル]** サブテーブルがデータの選択のみを許可するように設定された際のスタイル問題を修正しました ([#5670](https://github.com/nocobase/nocobase/pull/5670)) by @katherinehhh

## [v1.4.0-alpha.17](https://www.nocobase.com/en/blog/v1.4.0-alpha.17)

*リリース日：2024-11-19*

### 🚀 改善

- **[ワークフロー]** クライアントでシステム変数の登録をサポートします ([#5676](https://github.com/nocobase/nocobase/pull/5676)) by @mytharcher

### 🐛 バグ修正

- **[クライアント]** フィールド権限チェックが関連フィールドのコンテキストに影響されない問題を修正しました ([#5672](https://github.com/nocobase/nocobase/pull/5672)) by @katherinehhh
- **[ブロック：ガント]** ガントブロックテンプレートが追加時にカレンダーブロックを誤って呼び出す問題を修正しました ([#5673](https://github.com/nocobase/nocobase/pull/5673)) by @katherinehhh
- **[カレンダー]** カレンダーブロックでのタイムゾーンあり・なしの日付フィールドの選択肢が欠落する問題を修正しました ([#5674](https://github.com/nocobase/nocobase/pull/5674)) by @katherinehhh

## [v1.4.0-beta.1](https://www.nocobase.com/en/blog/v1.4.0-beta.1)

*リリース日：2024-11-19*

### 🚀 改善

- **[モバイル]** コンポーネント`Tabs.TabPane`の動的プロパティ`hidden`をサポートし、レンダリングを制御します ([#5687](https://github.com/nocobase/nocobase/pull/5687)) by @zhangzhonghe

### 🐛 バグ修正

- **[クライアント]**
  - フィルターボタンの演算子を切り替えた際に日付入力値がクリアされる問題を修正しました ([#5684](https://github.com/nocobase/nocobase/pull/5684)) by @katherinehhh
  - リンクルール条件で日付変数が機能しない問題を修正しました ([#5675](https://github.com/nocobase/nocobase/pull/5675)) by @katherinehhh

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.1](https://www.nocobase.com/en/blog/v1.5.0-alpha.1)

*リリース日：2024-11-19*

### 🎉 新機能

- **[Redis pub sub adapter]** Redis同期アダプタープラグインを追加しました by @mytharcher

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**