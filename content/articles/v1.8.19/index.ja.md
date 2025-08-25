### 🎉 新機能

* **[ワークフロー：承認]** 通知設定にインラインテンプレートタイプを追加 @mytharcher

### 🚀 機能改善

* **[クライアント]** 読み取り専用モード時、Select コンポーネントで文字列で指定されたアイコンを表示する機能をサポート（[#7420](https://github.com/nocobase/nocobase/pull/7420)）@mytharcher
* **[データベース]** ACL メタクエリのパフォーマンスを最適化（[#7400](https://github.com/nocobase/nocobase/pull/7400)）@aaaaaajie
* **[モバイル]** モバイル端末のポップアップコンポーネントを最適化（[#7414](https://github.com/nocobase/nocobase/pull/7414)）@zhangzhonghe

### 🐛 不具合修正

* **[データベース]** Postgres 外部テーブル読み取り時に、他のスキーマのビューが含まれる問題を修正（[#7410](https://github.com/nocobase/nocobase/pull/7410)）@aaaaaajie
* **[ブロック：テンプレート]** 継承されたテンプレートブロック内にメールブロックを配置した際に表示されない問題を解消（[#7430](https://github.com/nocobase/nocobase/pull/7430)）@gchust
* **[アクション：レコードインポート Pro]** インポート時の重複検出中に、関連フィールドへの割り当てを禁止 @aaaaaajie
* **[ワークフロー：承認]** 会签時にユーザーリストが空になる問題を修正 @mytharcher
* **[マイグレーションマネージャー]** リストアエラーを解消するため、マイグレーションファイル作成時に、最新 pg\_dump で生成される`\restrict`および`\unrestrict`コマンドをスキップ @2013xile
