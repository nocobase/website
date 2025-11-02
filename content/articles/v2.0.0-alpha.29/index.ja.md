### 🐛 不具合修正

* **[クライアント]**
  * 現在のフォーム内で関連フィールド変数が正しく認識されない問題を解決し、フォーム内のデータ処理精度を向上（[#7726](https://github.com/nocobase/nocobase/pull/7726)）@gchust
  * 変数解析結果が配列であり、「一対一」フィールドの値またはデフォルト値として設定された場合にエラーが発生する問題を修正。この修正により変数解析結果の処理が正確になり、システムの安定性と精度が向上（[#7735](https://github.com/nocobase/nocobase/pull/7735)）@gchust
* **[権限管理]**`resourceManager` のミドルウェア順序を修正（[#7728](https://github.com/nocobase/nocobase/pull/7728)）@2013xile
