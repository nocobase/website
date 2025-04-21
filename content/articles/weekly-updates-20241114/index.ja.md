週次製品更新ログを要約し、最新のリリースは[弊社のブログ](https://www.nocobase.com/en/blog/tags/release-notes)で確認できます。

NocoBaseは現在、`main`と`next`の2つのブランチで更新されています。

* `main`：現時点で最も安定したバージョンであり、インストールを推奨します;
* `next`：アルファ版であり、一部の未リリースの新機能を含んでいます。このバージョンは完全に安定していない可能性があり、開発者やテスターが新機能を事前に体験したり、互換性テストを行うのに適しています。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.45-beta](https://www.nocobase.com/en/blog/v1.3.45-beta)

*リリース日: 2024-11-06*

### 🐛 バグ修正

- **[クライアント]** 表の関係テーブルフィールドの権限は対応する関係フィールドの権限に基づいています ([#5569](https://github.com/nocobase/nocobase/pull/5569)) by @katherinehhh
- **[アクション: レコードのエクスポート]** i18nでのエクスポートを修正 ([#5591](https://github.com/nocobase/nocobase/pull/5591)) by @chareice
- **[アクション: レコードのインポート]** 属する関係のインポートの問題を修正 ([#5417](https://github.com/nocobase/nocobase/pull/5417)) by @chareice

## [v1.3.47-beta](https://www.nocobase.com/en/blog/v1.3.47-beta)

*リリース日: 2024-11-08*

### 🚀 改善

- **[認証]** サインインとサインアップ時のエラーメッセージを最適化 ([#5612](https://github.com/nocobase/nocobase/pull/5612)) by @2013xile

### 🐛 バグ修正

- **[クライアント]**
  - 子表におけるデフォルト値の問題を修正 ([#5607](https://github.com/nocobase/nocobase/pull/5607)) by @zhangzhonghe
  - 文字列型のタイトルフィールドを持つ関係フィールドに対するあいまい検索のサポートの問題を修正 ([#5611](https://github.com/nocobase/nocobase/pull/5611)) by @katherinehhh
- **[認証]** 非パスワード認証でサインイン時にパスワードが変更できない問題を修正 ([#5609](https://github.com/nocobase/nocobase/pull/5609)) by @2013xile

## [v1.3.48-beta](https://www.nocobase.com/en/blog/v1.3.48-beta)

*リリース日: 2024-11-11*

### 🚀 改善

- **[クライアント]** メニュー項目の非表示をサポート ([#5624](https://github.com/nocobase/nocobase/pull/5624)) by @chenos
- **[サーバー]** DB_SQL_BENCHMARK 環境変数を追加 ([#5615](https://github.com/nocobase/nocobase/pull/5615)) by @chareice

### 🐛 バグ修正

- **[クライアント]** 一対多の関係としてファイルコレクションをターゲットにすることをサポート ([#5619](https://github.com/nocobase/nocobase/pull/5619)) by @mytharcher
- **[アクション: レコードのインポート]** idフィールドを介して多対多関係データがインポートできない問題を修正 ([#5623](https://github.com/nocobase/nocobase/pull/5623)) by @chareice

## [v1.3.49-beta](https://www.nocobase.com/en/blog/v1.3.49-beta)

*リリース日: 2024-11-13*

### 🚀 改善

- **[クライアント]** 一対一および多対多（配列）フィールドでファイルコレクションを使用することをサポート ([#5637](https://github.com/nocobase/nocobase/pull/5637)) by @mytharcher
- **[evaluators]** 計算ノードでFormula.jsをデフォルト評価器として使用 ([#5626](https://github.com/nocobase/nocobase/pull/5626)) by @mytharcher

### 🐛 バグ修正

- **[クライアント]** フィルターボタンのタイトルがデフォルトに戻るリセット問題を修正 ([#5635](https://github.com/nocobase/nocobase/pull/5635)) by @katherinehhh
- **[アクション: レコードのインポート]** idフィールドを介して多対多関係データがインポートできない問題を修正 ([#5623](https://github.com/nocobase/nocobase/pull/5623)) by @chareice

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.6](https://www.nocobase.com/en/blog/v1.4.0-alpha.6)

*リリース日: 2024-11-07*

### 🎉 新機能

- **[クライアント]** テーブル列を隠すための設定オプションをサポート ([#5597](https://github.com/nocobase/nocobase/pull/5597)) by @zhangzhonghe

### 🚀 改善

- **[データソースマネージャ]** テーブルカテゴリを主データソースから読み込むように調整し、グローバルから削除 ([#5602](https://github.com/nocobase/nocobase/pull/5602)) by @katherinehhh
- **[通知マネージャ]** 通知ログデータに受取人を含めるようにメッセージ構造を更新 ([#5603](https://github.com/nocobase/nocobase/pull/5603)) by @sheldon66

### 🐛 バグ修正

- **[クライアント]** 非設定モードでのテーブルのスクロールバーの問題を修正 ([#5599](https://github.com/nocobase/nocobase/pull/5599)) by @katherinehhh
- **[アクション: レコードのインポート]** 日付フィールドのインポートの問題を修正 ([#5606](https://github.com/nocobase/nocobase/pull/5606)) by @chareice

## [v1.4.0-alpha.7](https://www.nocobase.com/en/blog/v1.4.0-alpha.7)

*リリース日: 2024-11-11*

### 🎉 新機能

- **[クライアント]** 変数式コンポーネントのためのデリミタプロパティをサポート ([#5620](https://github.com/nocobase/nocobase/pull/5620)) by @mytharcher
- **[ワークフロー]** ノードを作成する際に、下位ノードを新しいブランチに移動することをサポート ([#5570](https://github.com/nocobase/nocobase/pull/5570)) by @mytharcher

### 🚀 改善

- **[クライアント]**
  - フィールドリストを最適化：関係フィールドと重複タグを削除 ([#5616](https://github.com/nocobase/nocobase/pull/5616)) by @katherinehhh
  - `Collection`クラスから`getFilterTargetKey()`をサポート ([#5617](https://github.com/nocobase/nocobase/pull/5617)) by @mytharcher
- **[データソース: 主]** collections:list APIをリファクタリングしてパフォーマンスを向上 ([#5610](https://github.com/nocobase/nocobase/pull/5610)) by @chareice
- **[通知マネージャ]** 通知チャネルマネージャUIを改善 ([#5621](https://github.com/nocobase/nocobase/pull/5621)) by @sheldon66

## [v1.4.0-alpha.8](https://www.nocobase.com/en/blog/v1.4.0-alpha.8)

*リリース日: 2024-11-11*

### 🎉 新機能

- **[WeCom]**
  - WeComブラウザでアプリケーションページを訪れる際に自動サインインをサポート by @chenzhizdt
  - 通知でMarkdownとテンプレートカードを使用できるようサポート by @chenzhizdt

---

NocoBaseはプライベートでオープンソースのノーコードプラットフォームで、完全なコントロールと無限のスケーラビリティを提供します。チームが迅速に変化に適応することを可能にし、コストを大幅に削減します。数年の開発と多大な投資を避け、数分でNocoBaseを展開しましょう。

NocoBaseを3分で発見！

## 👇 NocoBaseを手に入れよう

[**ホームページ**](https://www.nocobase.com/)

[**デモ**](https://demo.nocobase.com/new)

[**ドキュメンテーション**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)