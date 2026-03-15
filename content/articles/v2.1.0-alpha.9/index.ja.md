### 🎉 新機能

* **[AI 従業員]** サブテーブルのポップアップ内で AI 従業員を追加できるように対応 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
* **[AI: MCP サーバー]** MCP サーバープラグインを追加し、MCP 経由で NocoBase システムを構築し、業務フローに対応できるように改善 ([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile

### 🚀 機能改善

* **[undefined]** README.zh-CN.md を改善 ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765

### 🐛 不具合修正

* **[database]** サーバー側の日付フィールド検証の不具合を修正 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
* **[client]**
  * 外部データソースで連携データブロックを接続する際、接続可能フィールドが表示されない問題を修正 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
  * データブロック追加時およびページ更新時に、2回リフレッシュが発生する問題を修正 ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
  * 一部フィールドのデフォルト値が、ページ更新後に反映されない問題を修正 ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
  * テーブルブロックの高さが反映されない問題を修正 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
* **[ローカライズ]**
  * localizationTexts:missing インターフェースの権限エラーを修正 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
  * ページが編集モードでない場合、未検出の文言を送信しないように修正 ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
* **[フォーム下書き]** ポップアップを複数回開いた際に、フォーム下書きデータが失われる問題を修正 ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
* **[UI テンプレート]** 編集フォームブロックおよび詳細ブロックのテンプレートでエラーが発生する問題を修正 ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
* **[AI: ナレッジベース]** 使用中のベクトルライブラリに紐づくベクトルストレージが削除されないように対応 by @cgyrock
* **[操作：インポート記録 Pro]** インポート設定で重複判定フィールドを複数選択できない問題を修正 by @jiannx
* **[メール管理]** 返信および全員返信時の受信者設定を調整し、テーブルフィールド追加時の不具合などを修正 by @jiannx
* **[移行管理]** システムテーブルで再カスタマイズルールを選択できない問題を修正 by @cgyrock
