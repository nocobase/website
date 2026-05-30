### 🎉 新機能

- **[client-v2]** フォーム送信アクションでフィールド値の代入設定をサポートしました。 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
- **[Office File Previewer]** Office ファイルプレビュープラグインを v2（FlowEngine）版に移行しました。 ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn

### 🚀 機能改善

- **[Notification manager]** 通知管理関連プラグインを v2 版に移行しました。 ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn

### 🐛 不具合修正

- **[client]** トップナビゲーションバーの数値バッジ背景が広すぎる問題を修正しました。 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
- **[Block: Gantt]** v2 ガントチャートの shared フォルダパスを修正し、ゼブラストライプを追加しました。 ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[License settings]** ライセンス設定の client-v2 サポートを追加し、商用ライセンスロジックを client-v2 プラグイン入口に注入できるようにしました。 ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
- **[Workflow: Custom action event]** v2 ブロック操作メニューでワークフロートリガーが重複表示される問題を修正しました。 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
- **[AI employees]** 参照しているテーブルブロックが削除された後、AI ショートカットボタンのコンテキストが空のブロックになる問題を修正しました。 ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
- **[plugin-commercial]** 商用ライセンスの client-v2 コンポーネントとトップバーのライセンスステータス入口を追加しました。 by @jiannx
- **[Migration manager]** PostgreSQL のマイグレーション差分計算を修正し、子テーブルのローカル列が継承列に変わる際に誤って列削除文が生成されないようにしました。 by @hongboji
