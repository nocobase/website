### 🎉 新機能

- **[ブロック：アクションパネル]** onScanSuccess コールバックを追加し、スキャン成功時に処理を実行してカメラUIを終了します。 ([#6580](https://github.com/nocobase/nocobase/pull/6580)) by @sheldon66

### 🚀 改善

- **[非同期タスクマネージャー]** Pro のインポート/エクスポートボタンを最適化しました。 ([#6531](https://github.com/nocobase/nocobase/pull/6531)) by @chenos

- **[アクション：レコードのエクスポート Pro]** Pro のインポート/エクスポートボタンを最適化しました。 by @katherinehhh

- **[マイグレーションマネージャー]** マイグレーション時に自動バックアップおよびリストアをスキップできるようにしました。 by @gchust

### 🐛 不具合修正

- **[クライアント]** 同一フォーム内の異なるサブテーブルにおける、同名のアソシエーションフィールド間の連動競合を修正しました。 ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh

- **[カレンダー]** 週間カレンダービューで境界日付にデータが表示されない問題を修正しました。 ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh

- **[アクセスコントロール]** ログイン時の現在のロール割り当てが正しくない問題を修正しました。 ([#6581](https://github.com/nocobase/nocobase/pull/6581)) by @aaaaaajie

- **[アクション：バッチ編集]** バッチ編集ボタンをクリックし、ポップアップウィンドウを設定後、再度開くとウィンドウが空白になる問題を修正しました。 ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe

- **[ブロック：マルチステップフォーム]** 他のフィールドと関連付けられている場合にフォームのリセットが無効になる不具合を修正しました。 by @jiannx

- **[ワークフロー：承認]** スキーマ変更後、承認ノードの設定が更新されず、データが同期されない問題を修正しました。 by @mytharcher