### 🚀 機能改善

* **[移行管理]** 移行チェック、移行 SQL のダウンロード、移行ログ形式、および移行実行プロセスの可視化を改善 by @cgyrock

### 🐛 不具合修正

* **[client]**
  * フィルタフォームの Field values で、カスタムフィールドの値入力欄の型が正しくない問題を修正 ([#8823](https://github.com/nocobase/nocobase/pull/8823)) by @zhangzhonghe
  * v2 フィルタフォームでフィールド並び替え後に折りたたみボタンが機能しない問題を修正 ([#8843](https://github.com/nocobase/nocobase/pull/8843)) by @zhangzhonghe
  * 参照テンプレート（v1）管理ページにフィルタボタンと更新ボタンが表示されない問題を修正。 ([#8833](https://github.com/nocobase/nocobase/pull/8833)) by @gchust
  * 権限判定の影響でサブフォーム内のサブテーブルにデータが表示されない問題を修正 ([#8846](https://github.com/nocobase/nocobase/pull/8846)) by @chenos
* **[権限管理]** collection.filterTargetKey を Model.primaryKeyField の代わりに使用するように変更 ([#8853](https://github.com/nocobase/nocobase/pull/8853)) by @chenos
* **[UI テンプレート]**
  * 参照操作パネルのブロックテンプレートでエラーが発生する問題を修正。 ([#8818](https://github.com/nocobase/nocobase/pull/8818)) by @gchust
  * 詳細ブロックをテンプレートとして保存した後、関連データが正しく読み込まれない問題を修正。 ([#8827](https://github.com/nocobase/nocobase/pull/8827)) by @gchust
* **[ワークフロー：承認]**
  * 承認者が設定された順序どおりに記録生成されない問題を修正 by @mytharcher
  * 承認処理詳細で一部ラベルが未翻訳の問題を修正 by @zhangzhonghe
* **[移行管理]**
  * コンパイルエラーを修正 by @mytharcher
  * ユーザーが入力した移行説明が失われる問題を修正し、現在時刻をデフォルトの移行説明として使用するように変更 by @cgyrock
  * 移行異常後に出力される例外オブジェクト内の SQL が大きすぎて、プロセスがフリーズしやすい問題を修正 by @cgyrock
  * クラスターモードに対応するため、一時ファイルの格納先を調整 by @mytharcher
