### 🚀 機能改善

* **[create-nocobase-app]** 依存関係をアップグレードし、SQLite のサポートを削除する（[#6708](https://github.com/nocobase/nocobase/pull/6708)） by @chenos
* **[ファイルマネージャー]** ユーティリティ API を公開する（[#6705](https://github.com/nocobase/nocobase/pull/6705)） by @mytharcher
* **[ワークフロー]** 変数タイプセットに日付タイプを追加する（[#6717](https://github.com/nocobase/nocobase/pull/6717)） by @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * モバイル版の上部ナビゲーションバーのアイコンが削除しにくい問題（[#6734](https://github.com/nocobase/nocobase/pull/6734)） by @zhangzhonghe
  * 外部キーで接続した後、フィルターをクリックするとフィルター条件が空になる問題（[#6634](https://github.com/nocobase/nocobase/pull/6634)） by @zhangzhonghe
  * フィルターボタンの日付フィールドにおけるピッカーの切り替え問題（[#6695](https://github.com/nocobase/nocobase/pull/6695)） by @katherinehhh
  * 左メニューの折りたたみボタンがワークフローのポップアップウィンドウに隠れる問題（[#6733](https://github.com/nocobase/nocobase/pull/6733)） by @zhangzhonghe
  * 連携ルールを再開く際にアクションオプションの制約が欠落する問題（[#6723](https://github.com/nocobase/nocobase/pull/6723)） by @katherinehhh
  * エクスポート権限がない状態でエクスポートボタンが表示される問題（[#6689](https://github.com/nocobase/nocobase/pull/6689)） by @katherinehhh
  * 連携ルールによって隠された必須フィールドがフォームの送信に影響を与えないようにする（[#6709](https://github.com/nocobase/nocobase/pull/6709)） by @zhangzhonghe
* **[サーバー]** create - migration によって生成される appVersion が誤っている問題（[#6740](https://github.com/nocobase/nocobase/pull/6740)） by @chenos
* **[ビルド]** tar コマンドで発生するエラーを修正する（[#6722](https://github.com/nocobase/nocobase/pull/6722)） by @mytharcher
* **[ワークフロー]** サブフローでスケジュールイベントを実行する際に発生するエラーを修正する（[#6721](https://github.com/nocobase/nocobase/pull/6721)） by @mytharcher
* **[ワークフロー：カスタムアクションイベント]** 複数レコードモードでの実行をサポートする by @mytharcher
* **[ファイルストレージ: S3 (Pro)]** サーバー側のアップロード用に multer の作成ロジックを追加する by @mytharcher
