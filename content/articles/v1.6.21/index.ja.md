### 🚀 機能改善

* **[クライアント]** 即時に開くシナリオに対して、遅延 API を追加（[#6681](https://github.com/nocobase/nocobase/pull/6681)） by @mytharcher
* **[create-nocobase-app]** 一部の依存関係を最新バージョンにアップグレードする（[#6673](https://github.com/nocobase/nocobase/pull/6673)） by @chenos

### 🐛 不具合修正

* **[クライアント]**
  * 承認ノード設定において、参照されたテンプレートブロックにマウスを合わせたときに発生するエラーを修正（[#6691](https://github.com/nocobase/nocobase/pull/6691)） by @mytharcher
  * カスタム関連フィールドで、フィールドコンポーネントの設定が表示されない問題（[#6692](https://github.com/nocobase/nocobase/pull/6692)） by @katherinehhh
  * アップロードコンポーネントのロケールを修正（[#6682](https://github.com/nocobase/nocobase/pull/6682)） by @mytharcher
  * 遅延ロードで UI コンポーネントが見つからないと、レンダリングエラーが発生する問題（[#6683](https://github.com/nocobase/nocobase/pull/6683)） by @gchust
  * HoC Input にネイティブの Password コンポーネントを追加（[#6679](https://github.com/nocobase/nocobase/pull/6679)） by @mytharcher
  * 現在のコレクションのフィールド割り当てリストに継承されたフィールドが表示される問題（[#6666](https://github.com/nocobase/nocobase/pull/6666)） by @katherinehhh
* **[データベース]** ci ビルドエラーを修正（[#6687](https://github.com/nocobase/nocobase/pull/6687)） by @aaaaaajie
* **[ビルド]** プラグインがいくつかの AMD ライブラリに依存している場合、ビルド出力が正しくない問題（[#6665](https://github.com/nocobase/nocobase/pull/6665)） by @gchust
* **[アクション：レコードのインポート]** xlsx の日時フィールドをインポートするときのエラーを修正（[#6672](https://github.com/nocobase/nocobase/pull/6672)） by @aaaaaajie
* **[ワークフロー：手動ノード]** 手動タスクの状態定数を修正（[#6676](https://github.com/nocobase/nocobase/pull/6676)） by @mytharcher
* **[ブロック: iframe]** iframe ブロックがフルヘイトに設定されたときに垂直スクロールバーが表示される問題（[#6675](https://github.com/nocobase/nocobase/pull/6675)） by @katherinehhh
* **[ワークフロー：カスタムアクションイベント]** テストケースを修正 by @mytharcher
* **[バックアップマネージャー]** パスワードが設定された未暗号化のバックアップを復元しようとしたときにタイムアウトエラーが発生する問題 by @gchust
