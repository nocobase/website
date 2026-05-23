### 🎉 新機能

* **[cli]**`backup create` と `backup restore` コマンドを追加しました。([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
* **[バックアップマネージャー]** バックアップマネージャープラグインをオープンソース化しました。([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos
* **[テーマエディター]** テーマエディターが v2 画面に対応しました。([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
* **[二要素認証 (2FA)]** 新クライアントで TOTP と二段階認証の紐づけ、検証、設定ができるようになりました。 by @Molunerfinn

### 🚀 機能改善

* **[cli]**`env auth` フローを改善しました。([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
* **[flow-engine]** v2 のフィールド設定メニューでフィールドを検索できるようになりました。([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
* **[client]** 操作ボタンの表示設定を改善しました。([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
* **[undefined]**
  * 依存関係の変更に対する Pull Request セキュリティチェックを追加しました。([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
  * 依存関係の変更に対する Pull Request セキュリティチェックを追加しました by @zhangzhonghe
  * 依存関係の変更に対する Pull Request セキュリティチェックを追加しました by @zhangzhonghe
* **[検証]** 「検証」プラグインに v2 クライアントを追加しました。管理設定ページ、ユーザーセンター入口、SMS 認証コードフォームなどに対応しています。([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
* **[ユーザー認証]** カスタムブランド設定が v2 クライアントで正常に反映されるようになりました。([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
* **[ブロック：マップ]** マッププラグインに v2 クライアント対応を追加しました。([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
* **[カスタムブランド]** カスタムブランド設定が v2 クライアントに対応しました by @zhangzhonghe
* **[AI：ナレッジベース]** AI ナレッジベースのベクターストレージを変更できるようにしました by @cgyrock
* **[ワークフロー：承認]** ワークフローキャンバスの新しいノード API に対応するため、承認ノードに `async` タイプ識別子を追加しました by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 開発モードで、ビルド済みの storage プラグインがローカルソースプラグインの名前付きエクスポートに依存している場合に、読み込みに失敗する問題を修正しました。([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  * v2 ブロックで編集モードを終了した後、縮小後の幅が失われる問題を修正しました。([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
  * v2 の関係フィールドがデータ範囲によって連動している場合に、依存する関係フィールドを変更しても選択済みの値がクリアされない問題を修正しました。([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  * サブフォーム内の JS Field メニュー状態が正しく表示されない問題を修正しました。([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
* **[client-v2]** dnd-kit の依存関係登録が一致しない問題を修正しました。([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
* **[flow-engine]** 外部データソースのフィールドを複数選択フィールドとして設定した後、v2 フォームで複数選択できない問題を修正しました。([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
* **[ブロック：iframe]** iframe ブロックの高さを設定した後、内容がブロック全体に広がらない問題を修正しました。([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
* **[操作：レコードのエクスポート]** データテーブルに関係フィールドが多い場合、エクスポートボタンのフィールド設定をクリックした際に応答が遅くなる問題を修正しました。([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
* **[AI 従業員]**
  * AI 従業員が読み取り専用ナレッジベースを使用するとエラーが発生する問題を修正しました。([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
  * AI 従業員が読み取り専用ナレッジベースを使用するとエラーが発生する問題を修正しました。([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
  * ツール呼び出しのストリーミングイベントが分割された場合に、AI ツール呼び出しカードがすぐに表示されない問題を修正しました。([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
* **[ローカリゼーション]** AI 翻訳タスクで、内蔵語句の参考翻訳の値を取得する際の問題を修正しました。([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
* **[操作：一括更新]** 一括更新プラグインで更新に失敗した後、読み込み状態がリセットされない問題を修正しました。([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
* **[ワークフロー]** ワークフローを手動実行する際の読み込み状態を追加しました。([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
* **[マイグレーション管理]** OceanBase 使用時にマイグレーションファイルを作成できない問題を修正しました by @2013xile
* **[ファイルストレージ：S3 (Pro)]** S3 Pro のエンドポイント処理ロジックを修正し、サーバー側アップロードと URL プレビューで bucket サブドメインが重複して連結されないようにしました。 by @mytharcher
* **[ワークフロー：承認]** 同一承認タスクで承認担当者の転送を同時に行う際、承認レコードのインデックスが重複する問題を修正しました。 by @mytharcher
