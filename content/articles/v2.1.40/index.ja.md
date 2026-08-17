### 🚀 機能改善

* **[ブロック：ツリー]** ツリーフィルターブロックでデフォルトの並び順を設定できるようになりました。([#10339](https://github.com/nocobase/nocobase/pull/10339)) by @jiannx

### 🐛 不具合修正

* **[client-v2]**
  * UI 編集モードでフィルターフォームのデータが自動更新される問題を修正しました。([#10356](https://github.com/nocobase/nocobase/pull/10356)) by @zhangzhonghe
  * v2 フィルターフォームのツリー型リレーションフィールドで、デフォルトでカスケード選択を使用するようにしました。([#10357](https://github.com/nocobase/nocobase/pull/10357)) by @zhangzhonghe
  * モバイル端末で単一選択のリレーションフィールドにおいて、選択済みレコードを再度クリックしても選択を解除できない問題を修正しました。([#10346](https://github.com/nocobase/nocobase/pull/10346)) by @zhangzhonghe
  * フィルターフォームに中国行政区フィールドを直接追加できない問題を修正しました。([#10333](https://github.com/nocobase/nocobase/pull/10333)) by @zhangzhonghe
  * フォームフィールドの連動ルール操作で JS item が誤って一覧に表示される問題を修正しました。([#10363](https://github.com/nocobase/nocobase/pull/10363)) by @gchust
* **[ワークフロー：JSON 計算]** JSON クエリタスクで構造化された解析エラーが失われ、`[object Object]` と表示される問題を修正しました。([#10344](https://github.com/nocobase/nocobase/pull/10344)) by @mytharcher
* **[操作：レコードエクスポート]**
  * Export V2 でリレーションフィールドを調整した後、ドラッグ＆ドロップで並び替えるとページがクラッシュする問題を修正しました。([#10335](https://github.com/nocobase/nocobase/pull/10335)) by @katherinehhh
  * 複数のリレーションフィールドで絞り込んだ後にテーブルをエクスポートするとエラーが発生する問題を修正しました。([#10342](https://github.com/nocobase/nocobase/pull/10342)) by @zhangzhonghe
* **[ブロック：Kanban]** Kanban カードの詳細ドロワーを再度開いた際に、設定済みの内容が失われる問題を修正しました。([#10334](https://github.com/nocobase/nocobase/pull/10334)) by @jiannx
* **[ファイルマネージャー]** ファイルを切り替えた際に動画プレビューの内容が更新されない問題を修正しました。([#10345](https://github.com/nocobase/nocobase/pull/10345)) by @mytharcher
* **[操作：レコードインポート Pro]**
  * 非同期インポートされたレコードが現在のスペースに関連付けられない問題を修正しました。 by @jiannx
  * インポート結果の統計文言を改善し、新規作成レコード数と更新レコード数を明確に区別するようにしました。 by @mytharcher
* **[ワークフロー：承認]**
  * 承認詳細のサブテーブル列幅が申請フォームと一致しない問題を修正しました。 by @zhangzhonghe
  * Client V2 の承認関連ブロックにデータ範囲フィルターを追加しました。 by @zhangzhonghe
