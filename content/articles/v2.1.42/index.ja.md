### 🚀 機能改善

* **[undefined]**
  * LDAP および DingTalk のユーザーデータ同期ドキュメントを追加しました。権限設定、イベント受信モード、同期フィールド、部門責任者、トラブルシューティングについて説明しています。([#10377](https://github.com/nocobase/nocobase/pull/10377)) by @chenzhizdt
    参考：[DingTalk 同期](), [LDAP 同期]()
  * LDAP および DingTalk のユーザー同期ドキュメントを改善し、サポートされているすべての言語の翻訳を追加しました。([#10382](https://github.com/nocobase/nocobase/pull/10382)) by @chenzhizdt
    参考：[DingTalk]() / [LDAP]()

### 🐛 不具合修正

* **[ワークフロー：JavaScript ノード]** JavaScript ワークフロータスクの復旧処理で、すでに完了またはタイムアウトしたタスクが重複して実行キューに投入される問題を修正しました。([#10366](https://github.com/nocobase/nocobase/pull/10366)) by @mytharcher
* **[操作：レコードエクスポート Pro]** Export Pro プラグインを有効にした状態で複雑なフィルター条件を使用すると、エクスポート時にエラーが発生する問題を修正しました。 by @zhangzhonghe
* **[操作：レコードインポート Pro]** 非同期インポートでフィールドのインポート権限が適用されない問題を修正しました。 by @mytharcher
* **[アプリケーション監督]** 監督対象アプリケーションの作成時に発生する Kingbase データベース接続の問題を修正しました。 by @2013xile
