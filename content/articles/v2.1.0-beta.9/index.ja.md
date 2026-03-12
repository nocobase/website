### 🐛 不具合修正

* **[client]**
  * テーブルブロックの高さ設定が反映されない問題を修正 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
  * データブロックの追加時およびページ更新時に、リフレッシュが二重に発生する問題を修正。 ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
  * 外部データソースでデータブロックを接続する際に、接続可能なフィールドが表示されない問題を修正 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
* **[UI テンプレート]** 編集フォームブロックおよび詳細ブロックのテンプレートでエラーが発生する問題を修正。 ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
* **[フォーム下書き]** ポップアップを複数回開いた際に、フォーム下書きデータが失われる問題を修正。 ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
* **[ローカライズ]** ページが非編集状態のとき、未検出の文言を送信しないように修正 ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
* **[操作：レコードインポート Pro]** インポート設定で、重複判定の基準フィールドを複数選択できない問題を修正 by @jiannx
* **[メール管理]** 返信および全員返信の宛先を調整し、テーブルフィールド追加時の不具合などを修正 by @jiannx
* **[移行管理]** システムテーブルでカスタムルールを設定する際に選択できない問題を修正 by @cgyrock
