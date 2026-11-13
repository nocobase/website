### 🐛 不具合修正

* **[ワークフロー：CC]** ワークフローの CC タスクを既読または未読に変更する際、既読／未読状態とその更新時刻のみを更新し、元の受信者と関連するワークフローレコードはそのまま保持するように修正。 ([#11516](https://github.com/nocobase/nocobase/pull/11516))
* **[カスタム変数]** カスタム変数の作成、編集、削除に「設定画面を許可」権限が必要になりました。 ([#11528](https://github.com/nocobase/nocobase/pull/11528))
* **[ユーザー認証]**
  * パスワード再設定メール内のリンクでは、サブアプリケーションに紐付けられた独自ドメインを優先して使用するように変更。メールによるパスワード再設定を有効にしているメインアプリケーション、および独自ドメインを設定していないサブアプリケーションでは、アップグレード前に `APP_PUBLIC_ORIGIN` を設定してください。 ([#11496](https://github.com/nocobase/nocobase/pull/11496))
    参考ドキュメント：[メールによるパスワード再設定のドメインおよびアップグレードに関する説明](https://github.com/nocobase/nocobase/blob/f26e6b7705/docs/docs/cn/get-started/installation/env.md#app_public_origin)
  * パスワード再設定時、登録済み・未登録のどちらのメールアドレスにも同じメッセージを表示し、メールは登録済みのアドレスにのみ送信するように変更。 ([#11501](https://github.com/nocobase/nocobase/pull/11501))
* **[モバイル（廃止済み）]** v1 モバイルフォームで UnixTimestamp フィールドを送信する際、PC 版と同じ時刻形式で送信するように修正。 ([#11427](https://github.com/nocobase/nocobase/pull/11427))
* **[認証：API キー]** API キーを削除する際、現在のユーザーが削除権限を持つ API キーだけを無効化するように修正。 ([#11513](https://github.com/nocobase/nocobase/pull/11513))
