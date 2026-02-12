### 🎉 新機能

* **[ブロック：グリッドカード]** ブロックの高さを設定できるように対応 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
* **[操作：一括編集]** 一括編集 2.0 を追加 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx

### 🚀 機能改善

* **[client]**
  * テーブル 2.0 でドラッグによる並び替えに対応 ([#8540](https://github.com/nocobase/nocobase/pull/8540)) by @jiannx
  * フィールド値の代入および既定値関連の設定をフォーム単位の設定へ再構成。 ([#8596](https://github.com/nocobase/nocobase/pull/8596)) by @chenos
* **[ローカライズ]** 不足している i18n エントリを自動生成 ([#8588](https://github.com/nocobase/nocobase/pull/8588)) by @jiannx

### 🐛 不具合修正

* **[client]**
  * フォームのリレーションフィールドコンポーネントで、タイトル項目に外部キーフィールドを使用した際にドロップダウン表示が異常になる問題を修正 ([#8619](https://github.com/nocobase/nocobase/pull/8619)) by @katherinehhh
  * 編集フォームでリレーション添付ファイルフィールドをクリアして保存しても反映されない問題を修正 ([#8616](https://github.com/nocobase/nocobase/pull/8616)) by @katherinehhh
  * 編集フォームのリレーションフィールドを編集可能から読み取り専用に切り替えた際、フィールドコンポーネントの選択肢が即時更新されない問題を修正 ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh
  * JS column コードエディターで run ボタンを押した後、テーブル列が再読み込みされない問題を修正。 ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust
  * 編集フォームのリレーションフィールドのデータセレクターで、選択済みデータを変更後に元へ戻せない問題を修正 ([#8610](https://github.com/nocobase/nocobase/pull/8610)) by @katherinehhh
* **[ファイルマネージャー]** フォーム内でファイルタイプフィールドを無効化しても選択ダイアログを開けてしまう問題を修正 ([#8617](https://github.com/nocobase/nocobase/pull/8617)) by @katherinehhh
* **[データ可視化：ECharts]** ECharts の表記誤りを修正 by @heziqiang
* **[ワークフロー：承認]**
  * 「自分の申請」の詳細ポップアップでフィールド値が消失する問題を修正 by @mytharcher
  * 保存前モードで手動実行するとエラーが発生する問題を修正 by @mytharcher
