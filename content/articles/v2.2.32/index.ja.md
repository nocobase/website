### 🚀 機能改善

- [DingTalk] DingTalk API 呼び出しの QPS 上限を設定できるようにしました（デフォルトは 20）。また、レート制限エラーが発生した場合は、自動的にバックオフして再試行するようにしました。 by @chenzhizdt

### 🐛 不具合修正

- [client-v2] V2 のフィールド値設定で、複数選択フィールドが複数選択モードにならず、値がスカラー値として送信される問題を修正しました。送信、レコード更新、一括更新の各操作に対応しました。 ([#11112](https://github.com/nocobase/nocobase/pull/11112?utm_source=chatgpt.com)) by @hongboji
