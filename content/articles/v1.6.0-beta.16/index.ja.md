### 🎉 新機能

- **[client]** 時間フィールドがフォーマットに対応 ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh

### 🚀 改善

- **[server]** koa を 2.15.4 にアップグレード；@koa/cors を 5.0.0 にアップグレード ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile

- **[Workflow]** 後置ノードの結果を遅延読み込みして、実行記録キャンバスのパフォーマンスを向上 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher

### 🐛 修正

- **[auth]** WebSocket 認証中にトークンの更新を回避 ([#6342](https://github.com/nocobase/nocobase/pull/6342)) by @sheldon66

- **[client]**
  - カスタム favicon を設定したページで、読み込み時に一瞬 NocoBase の favicon が表示される ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
  - 関連フィールドの読み取り専用モードで、ホバー時に新規追加ボタンが表示される ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh

- **[devtools]** req.ip が undefined でない場合にのみ、X-Forwarded-For ヘッダーを設定 ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66

- **[Block: Map]** 地図フィールドの設定が欠落または表示されない ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe

- **[Mobile]** ページエラー：Cannot read properties of null (reading 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) by @zhangzhonghe

- **[Users]** ユーザー権限管理テーブルが初回読み込み時に、エラーUIが一瞬表示される ([#6324](https://github.com/nocobase/nocobase/pull/6324)) by @zhangzhonghe

- **[Block: Action panel]** アクションパネルの高さ設定が無効 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe

- **[Action: Import records Pro]** 関連ブロックのインポートボタンで、重複レコード検出用のフィールド選択ドロップダウンにデータが表示されない by @katherinehhh

- **[Action: Export records Pro]** エクスポート添付ボタンの設定から「ブロック追加」オプションを削除 by @katherinehhh

- **[Workflow: Custom action event]** カスタムアクションイベントにバインドされた旧ボタンのマイグレーションスクリプトを修正 by @mytharcher

- **[Custom brand]** カスタム favicon を設定したページで、読み込み時に一瞬 NocoBase の favicon が表示される by @zhangzhonghe

- **[Template print]** アクションテンプレート印刷プラグインとバックアップマネージャープラグインが同時に有効な場合、ローカルからの復元が失敗する by @gchust

- **[Workflow: Approval]**
  - `.toJSON()` によるエラーを修正 by @mytharcher
  - バージョン番号が原因でマイグレーションが実行されなかった問題を修正 by @mytharcher
  - 旧ブロックのマイグレーションを修正 by @mytharcher