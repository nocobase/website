### 🎉 新機能

- **[WeCom]** WeCom通知チャネルを追加しました by @chenzhizdt

### 🚀 改善点

- **[client]** フィールドタイトルがクリアされた際にデフォルト値を復元します ([#5549](https://github.com/nocobase/nocobase/pull/5549)) by @katherinehhh

- **[通知管理]**
  - 通知チャネルの開発をスムーズに行うため、UserSelectおよびUserAdditionコンポーネントを追加しました ([#5553](https://github.com/nocobase/nocobase/pull/5553)) by @2013xile

  - 通知プラグインのチャネルタイプ登録のためのAPIを追加しました ([#5531](https://github.com/nocobase/nocobase/pull/5531)) by @mytharcher

  - 通知プラグインのチャネルタイプ登録の名前を調整しました ([#5532](https://github.com/nocobase/nocobase/pull/5532)) by @mytharcher

  - 登録されたすべての通知タイプを取得するためのAPIを追加しました ([#5529](https://github.com/nocobase/nocobase/pull/5529)) by @mytharcher

- **[通知：インアプリメッセージ]** インアプリメッセージのUIを改善し、いくつかのログを追加しました ([#5550](https://github.com/nocobase/nocobase/pull/5550)) by @sheldon66

### 🐛 バグ修正

- **[database]**
  - フィルター対象キーでのコレクションオプションの更新を修正しました ([#5558](https://github.com/nocobase/nocobase/pull/5558)) by @chareice

  - 複数フィルター対象キーと共に作業する際のsequelize内のprimaryKeyFieldの値を修正しました ([#5556](https://github.com/nocobase/nocobase/pull/5556)) by @chareice

- **[client]**
  - テーブルブロック内のスケルトンコンポーネントが消えない問題を修正しました ([#5548](https://github.com/nocobase/nocobase/pull/5548)) by @zhangzhonghe

  - 削除アクションやテキストの省略表示、サブテーブルの新データ表示に関する問題を修正しました ([#5523](https://github.com/nocobase/nocobase/pull/5523)) by @katherinehhh

- **[データソース管理]** 失敗した状態のデータソースを削除する際の問題を修正しました ([#5554](https://github.com/nocobase/nocobase/pull/5554)) by @chareice

- **[通知：メール]**
  - ユーザーIDによるメール通知のためのクエリを修正しました ([#5533](https://github.com/nocobase/nocobase/pull/5533)) by @mytharcher

  - ユーザーIDに基づくメール通知で件名がない問題を修正しました ([#5534](https://github.com/nocobase/nocobase/pull/5534)) by @mytharcher

  - メール通知の動的フォームの反応フィールドパスを修正しました ([#5527](https://github.com/nocobase/nocobase/pull/5527)) by @mytharcher

- **[コレクションフィールド：多対多（配列）]** 多対多（配列）フィールドの選択コンポーネントが1つのオプションしかない問題を修正しました ([#5544](https://github.com/nocobase/nocobase/pull/5544)) by @2013xile

- **[通知管理]** チャネルタイプに関する問題でページがクラッシュする問題を修正しました ([#5528](https://github.com/nocobase/nocobase/pull/5528)) by @mytharcher

- **[ワークフロー：SQLノード]** sseにより「waitForLoadState(‘networkidle’)」がタイムアウトになる問題を修正しました ([#5524](https://github.com/nocobase/nocobase/pull/5524)) by @hongboji

- **[フィールドコンポーネント：マスク]** 読み取り専用状態でコンポーネントが原文を表示できない問題を修正しました by @gchust

- **[ワークフロー：カスタムアクションイベント]** sseにより「waitForLoadState(‘networkidle’)」がタイムアウトになる問題を修正しました by @hongboji

- **[WeCom]** WeComワークベンチからアプリにアクセスした際の404 not foundの問題を修正しました by @chenzhizdt
