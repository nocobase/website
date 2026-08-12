### 🎉 新機能

* **[client-v2]** V2 フィールド値エディターに Date 変数を追加し、日付以外のフィールドもフォーマットして出力できるようにしました。 ([#10289](https://github.com/nocobase/nocobase/pull/10289)) by @katherinehhh
* **[Portal 管理]** ユーザーに Portal へのアクセス権限がない場合、アクセスできないことを示すメッセージを表示するようにしました。 ([#10275](https://github.com/nocobase/nocobase/pull/10275)) by @zhangzhonghe
* **[コーディング agent 連携]** AI Portal カードから接続手順をワンクリックでコピーし、Portal をコーディング agent に引き渡せるようにしました。 by @Albert-mah

### 🚀 機能改善

* **[undefined]**
  * JavaScript Worker のデフォルトの同時実行動作と、同時実行数の上限を設定する必要があるケースを明確にしました。 ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
    参考ドキュメント：[JavaScript ノード](https://docs.nocobase.com/cn/workflow/nodes/javascript)
  * 大規模言語モデルの選択ガイドを追加しました。評価軸を紹介し、色分けされた表で各モデルの構築結果を比較しています。 ([#10295](https://github.com/nocobase/nocobase/pull/10295)) by @Charls-Wu
    参考ドキュメント：[大規模言語モデルの選択](https://docs.nocobase.com/cn/ai-builder/ai-portal/model-selection/)
* **[cli]** `nb portal push` でコミット作成者情報が正しく設定されない問題を修正しました。 ([#10315](https://github.com/nocobase/nocobase/pull/10315)) by @gchust
* **[Portal 管理]**
  * Portal のアクセス権限チェックを効率化しました。 ([#10302](https://github.com/nocobase/nocobase/pull/10302)) by @zhangzhonghe
  * Portal のアクセス権限を直接設定できない場合、簡潔なプレースホルダーを表示するようにしました。 ([#10301](https://github.com/nocobase/nocobase/pull/10301)) by @zhangzhonghe
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードで非同期 Worker の実行をキューで処理するようにし、単一プロセス内の Worker 同時実行数を制限することで、リソース使用量のピークを抑えるようにしました。 ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher
* **[検証]** 検証設定一覧に更新ボタンを追加しました。 ([#10299](https://github.com/nocobase/nocobase/pull/10299)) by @zhangzhonghe

### 🐛 不具合修正

* **[client-v2]**
  * プラグインを有効化または無効化する際に、ローディング状態を表示するようにしました。 ([#10310](https://github.com/nocobase/nocobase/pull/10310)) by @zhangzhonghe
  * アプリケーションでコマンドを実行している間は、再試行ボタンを表示しないようにしました。 ([#10290](https://github.com/nocobase/nocobase/pull/10290)) by @zhangzhonghe
  * モバイル端末の選択リストで、キャンセルボタンの表示言語が一致しない問題を修正しました。 ([#10297](https://github.com/nocobase/nocobase/pull/10297)) by @zhangzhonghe
  * サブテーブルのリレーションフィールドに値を設定する際、親項目の変数が誤った階層を参照する問題を修正しました。 ([#10249](https://github.com/nocobase/nocobase/pull/10249)) by @gchust
  * v2 のポップアップ編集サブテーブルで、レコード追加・編集モーダル内の `Current popup` 親レコード変数が欠落する、または正しい値を取得できない問題を修正しました。 ([#10292](https://github.com/nocobase/nocobase/pull/10292)) by @katherinehhh
* **[database]** アプリケーション再起動後、マイグレーションパッケージに多対多の中間テーブルデータが含まれなくなる問題を修正しました。 ([#10306](https://github.com/nocobase/nocobase/pull/10306)) by @cgyrock
* **[data-source-manager]** データベースからフィールドを同期した後、数式フィールドが数値フィールドに変わってしまう問題を修正しました。 ([#10303](https://github.com/nocobase/nocobase/pull/10303)) by @2013xile
* **[undefined]** ローカルから Portal を作成できない問題を修正しました。 ([#10304](https://github.com/nocobase/nocobase/pull/10304)) by @gchust
* **[フロントエンドフローエンジン]**
  * フォームのフィールド値変数が正しく解決されない問題を修正しました。 ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust
  * カスタムの非 Sequelize データソースで、モーダル内のレコード変数とリレーションブロックを正しく解析できない問題を修正しました。 ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust
* **[AIワーカー]**
  * ページの読み込み中や遷移中に、AIワーカーのチャットエントリが一瞬表示される問題を修正しました。 ([#10309](https://github.com/nocobase/nocobase/pull/10309)) by @cgyrock
  * v2 フォームで、AIワーカー操作の表示・非表示を連動ルールによって制御できるようにしました。 ([#10298](https://github.com/nocobase/nocobase/pull/10298)) by @jiannx
* **[ファイルマネージャー]** クロスオリジン画像をプレビューした後、ブラウザキャッシュ内のレスポンスに CORS ヘッダーが含まれていないことで、ファイルをダウンロードできなくなる問題を修正しました。 ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
  参考ドキュメント：[ファイルプレビュー](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/file-preview/index.md) / [Alibaba Cloud OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/storage/aliyun-oss.md)
* **[操作：一括編集]** 組み込みプラグインのドキュメントを修正し、これらのプラグインがデフォルトで有効になっていることを明確にしました。 ([#10314](https://github.com/nocobase/nocobase/pull/10314)) by @hongboji
* **[Portal 管理]**
  * 旧 AI Portal でアクセス権限をチェックする際の互換性問題を修正しました。 ([#10307](https://github.com/nocobase/nocobase/pull/10307)) by @zhangzhonghe
  * Portal 名が x または v の場合に、URL が正しく生成されない問題を修正しました。 ([#10305](https://github.com/nocobase/nocobase/pull/10305)) by @zhangzhonghe
  * ロール権限設定で Portal のタイトルが誤って翻訳される問題を修正しました。 ([#10291](https://github.com/nocobase/nocobase/pull/10291)) by @zhangzhonghe
* **[バックアップ管理]** 非同期エクスポートタスクによって自動バックアップが重複して実行される問題を修正しました。 ([#10300](https://github.com/nocobase/nocobase/pull/10300)) by @gchust
* **[ワークフロー]** トリガータイプを選択する前は、ワークフローの実行モードを選択できないようにしました。 ([#10296](https://github.com/nocobase/nocobase/pull/10296)) by @Molunerfinn
* **[データソース：外部 NocoBase]** AI ワークフローから、外部 NocoBase のファイルテーブルおよび添付フィールド内のファイルを読み取れない問題を修正しました。 by @2013xile
* **[マイグレーション管理]** アプリケーション再起動後に発生する多対多の中間テーブルデータのマイグレーション問題を修正し、マイグレーションルールをシステムデータとして扱うようにしました。 by @cgyrock
* **[テンプレート印刷]** なし — 本 PR は修正対象を記録したものですが、リリース済みの動作に変更はありません。 by @hongboji
* **[ワークフロー：承認]**
  * 承認申請カードを送信した後、内容がすぐに表示されない問題を修正しました。 by @zhangzhonghe
  * V2 の承認メッセージテンプレートページについて、V1 とのレイアウトおよび操作上の差異を修正しました。 by @zhangzhonghe
