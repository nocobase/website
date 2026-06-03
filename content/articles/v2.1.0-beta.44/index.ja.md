### 🚀 機能改善

- **[Workflow: Approval]** 承認トリガーとノード設定の検証ルールを調整し、UI 関連フィールドが存在するようにしました。 by @mytharcher

### 🐛 不具合修正

- **[client]** モバイル端末で選択済みのリレーションフィールドデータが表示されない問題を修正しました。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
- **[client-v2]**

  - メニュー連動ルールの保存時にエラーが発生する問題を修正しました。([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe
  - v2 ページでブロック上部の余白が大きすぎる問題を修正しました。([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe
- **[flow-engine]** サブフォームにフィールド値を設定する際、ページが固まる問題を修正しました。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
- **[AI employees]**

  - AI プロバイダーの Base URL 検証を修正しました。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
  - AI employee ワークフローノードで発生する `ctx.get` エラーを修正しました。([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock
- **[Notification: In-app message]** アプリ内通知チャンネルのタイムスタンプフィルターにおける SQL インジェクションリスクを修正しました。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[Action: Duplicate record]** レコード複製の送信に失敗した際、ボタン状態がリセットされない問題を修正しました。([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh
- **[Calendar]** v2 ページで、設定された色フィールドに基づいてカレンダーイベントの色が表示されない問題を修正しました。([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx
- **[Flow engine]**

  - テンプレートを複製した後にブロックを変更すると、元のブロック内容に意図せず影響する可能性がある問題を修正しました。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
  - ポップアップのタブをドラッグして並び替えできない問題を修正しました。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust
