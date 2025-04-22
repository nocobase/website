### 🎉 新機能

- **[client]** 従来のボタンアクセス制御設定に対応 ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh

- **[ワークフロー：操作後イベント]** 終了ノードで結果状態を決定できるようにサポート ([#6399](https://github.com/nocobase/nocobase/pull/6399)) by @mytharcher

- **[ワークフロー：応答メッセージ]** アクショントリガーで使用できるようにサポート by @mytharcher

### 🚀 改善

- **[ワークフロー]** ログインしていない場合の API 401 エラーを修正 ([#6412](https://github.com/nocobase/nocobase/pull/6412)) by @mytharcher

- **[ワークフロー：手動ノード]** ワークフロータスクセンターのUIを調整 ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher

- **[メール管理]** ツールバーのボタンにグローバルで統一された要素構造とスタイルを採用 by @mytharcher

- **[ワークフロー：承認]** 承認タスクのタスクセンターUIを調整 by @mytharcher

### 🐛 バグ修正

- **[client]**
  - ページをグループ内に移動できない問題を修正 ([#6413](https://github.com/nocobase/nocobase/pull/6413)) by @zhangzhonghe

  - 深い階層のメニューでアイコンが表示されない問題を修正 ([#6410](https://github.com/nocobase/nocobase/pull/6410)) by @zhangzhonghe

  - FormDrawer のテーマコンテキストの問題を修正 ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh

- **[ワークフロー：手動ノード]** ユニークキーの衝突を回避 ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher

- **[データソース管理]** 外部データソースでフィールド編集時に発生するエラーを修正 ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh

- **[ユーザー認証]** ロールを持たないユーザーはエラー情報ページへリダイレクトする ([#6408](https://github.com/nocobase/nocobase/pull/6408)) by @sheldon66

- **[ワークフロー：カスタムアクションイベント]** 「ワークフローのトリガー」ボタンに連動ルール設定が欠如している問題を修正 by @katherinehhh

- **[バックアップ管理]** バックアップ復元時に暗号化キーのデータが欠落している問題を修正 by @gchust

- **[ワークフロー：承認]** ユニークキーの衝突を回避 by @mytharcher