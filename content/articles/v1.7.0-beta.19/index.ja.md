### 🎉 新機能

* **[クライアント]** 連携ルールの条件の左側において変数をサポートする（[#6609](https://github.com/nocobase/nocobase/pull/6609)） by @katherinehhh
* **[ワークフロー：日付計算ノード]** 書式設定のためにタイムゾーンの値を変更する `changeTimezone` 関数を追加 by @mytharcher

### 🚀 機能改善

* **[クライアント]**
  * カスタムリクエストにおいて選択されたテーブルレコードをサポートする（[#6647](https://github.com/nocobase/nocobase/pull/6647)） by @katherinehhh
  * 即時に開くシナリオに対して、遅延 API を追加（[#6681](https://github.com/nocobase/nocobase/pull/6681)） by @mytharcher

### 🐛 不具合修正

* **[データベース]** ci ビルドエラーを修正（[#6687](https://github.com/nocobase/nocobase/pull/6687)） by @aaaaaajie
* **[クライアント]**
  * 承認ノード設定において、参照されたテンプレートブロックにマウスを合わせたときに発生するエラーを修正（[#6691](https://github.com/nocobase/nocobase/pull/6691)） by @mytharcher
  * ワークフローにおけるフィールド説明の表示問題（[#6680](https://github.com/nocobase/nocobase/pull/6680)） by @katherinehhh
  * アップロードコンポーネントのロケールを修正（[#6682](https://github.com/nocobase/nocobase/pull/6682)） by @mytharcher
  * カスタム関連フィールドで、フィールドコンポーネントの設定が表示されない問題（[#6692](https://github.com/nocobase/nocobase/pull/6692)） by @katherinehhh
  * 連携ルールと旧データの互換性の問題（[#6686](https://github.com/nocobase/nocobase/pull/6686)） by @katherinehhh
  * 遅延ロードで UI コンポーネントが見つからないと、レンダリングエラーが発生する問題（[#6683](https://github.com/nocobase/nocobase/pull/6683)） by @gchust
  * HoC Input にネイティブの Password コンポーネントを追加（[#6679](https://github.com/nocobase/nocobase/pull/6679)） by @mytharcher
* **[ワークフロー：手動ノード]** 手動タスクの状態定数を修正（[#6676](https://github.com/nocobase/nocobase/pull/6676)） by @mytharcher
* **[アクション：レコードのインポート]** xlsx の日時フィールドをインポートするときのエラーを修正（[#6672](https://github.com/nocobase/nocobase/pull/6672)） by @aaaaaajie
* **[ワークフロー：カスタムアクションイベント]** テストケースを修正 by @mytharcher
* **[バックアップマネージャー]** パスワードが設定された未暗号化のバックアップを復元しようとしたときにタイムアウトエラーが発生する問題 by @gchust
