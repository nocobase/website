### 🎉 新機能

* **[client-v2]** V2 フィールド値エディターに Date 変数を追加し、日付以外のフィールドもフォーマットして出力できるようにしました。 ([#10289](https://github.com/nocobase/nocobase/pull/10289)) by @katherinehhh

### 🐛 不具合修正

* **[client-v2]**
  * v2 のポップアップ編集サブテーブルで、レコード追加・編集モーダル内の `Current popup` 親レコード変数が欠落する、または正しい値を取得できない問題を修正しました。 ([#10292](https://github.com/nocobase/nocobase/pull/10292)) by @katherinehhh
  * サブテーブルのリレーションフィールドに値を設定する際、親項目の変数が誤った階層を参照する問題を修正しました。 ([#10249](https://github.com/nocobase/nocobase/pull/10249)) by @gchust
  * モバイル端末の選択リストで、キャンセルボタンの表示言語が一致しない問題を修正しました。 ([#10297](https://github.com/nocobase/nocobase/pull/10297)) by @zhangzhonghe
* **[data-source-manager]** データベースからフィールドを同期した後、数式フィールドが数値フィールドに変わってしまう問題を修正しました。 ([#10303](https://github.com/nocobase/nocobase/pull/10303)) by @2013xile
* **[database]** アプリケーション再起動後、マイグレーションパッケージに多対多の中間テーブルデータが含まれなくなる問題を修正しました。 ([#10306](https://github.com/nocobase/nocobase/pull/10306)) by @cgyrock
* **[バックアップ管理]** 非同期エクスポートタスクによって自動バックアップが重複して実行される問題を修正しました。 ([#10300](https://github.com/nocobase/nocobase/pull/10300)) by @gchust
* **[AIワーカー]** v2 フォームで、AIワーカー操作の表示・非表示を連動ルールによって制御できるようにしました。 ([#10298](https://github.com/nocobase/nocobase/pull/10298)) by @jiannx
* **[データソース：外部 NocoBase]** AI ワークフローから、外部 NocoBase のファイルテーブルおよび添付フィールド内のファイルを読み取れない問題を修正しました。 by @2013xile
* **[マイグレーション管理]** アプリケーション再起動後に発生する多対多の中間テーブルデータのマイグレーション問題を修正し、マイグレーションルールをシステムデータとして扱うようにしました。 by @cgyrock
* **[ワークフロー：承認]** 承認意見に RunJS を使用した場合、デフォルト値が反映されない問題を修正しました。 by @zhangzhonghe
* **[アプリケーションスーパーバイザー]** アプリケーション作成時、データベース名、schema、データテーブルのプレフィックスについて、英字以外の文字で始まる名前や不正な文字を含む名前を設定できてしまう問題を修正しました。 by @hongboji
