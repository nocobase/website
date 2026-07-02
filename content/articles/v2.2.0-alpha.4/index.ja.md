### 🎉 新機能

* **[ブロック：コメント]**
  * コメントブロックの設定を改善しました。データ範囲、デフォルトの並び順、ドロップダウンでのページサイズ選択、最後のページへ移動するオプション、スカラー型フィールドに基づく所属フィールドの設定に対応しました。 ([#9954](https://github.com/nocobase/nocobase/pull/9954)) by @jiannx
  * コメントブロックを追加しました。 ([#9916](https://github.com/nocobase/nocobase/pull/9916)) by @jiannx
* **[AIワーカー]** AI サービスの大規模言語モデルプロバイダーとして、Mistral AI を追加しました。 ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock
* **[履歴]** レコード履歴プラグインで client v2 に対応しました。 by @jiannx

### 🚀 機能改善

* **[cli]** Nginx/Caddy のプロキシ設定を手動生成できるようにしました。これにより、Docker デプロイで Nginx を内蔵せずに実行できるようになり、プロキシと CDN に関するランタイム設定も統一されました。 ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos
* **[ワークフロー：JavaScript ノード]** v2 ワークフローのリクエストノードとメールノードの設定フィールドを調整し、レイアウトと添付ファイル変数の選択動作を旧版と一致させました。 ([#9952](https://github.com/nocobase/nocobase/pull/9952)) by @jiannx
* **[UI レイアウト]** v2 モバイルのタブバーを改善しました。タブが多い場合は横スクロールできるようになり、アイコンの重なりを防げるようになりました。 ([#9949](https://github.com/nocobase/nocobase/pull/9949)) by @katherinehhh
* **[ワークフロー：集計クエリノード]** v2 ワークフローの更新ノードと集計クエリノードにおけるフィールド選択ロジックを改善し、集計クエリノードで関連データテーブルの選択を切り替える際の異常も修正しました。 ([#9938](https://github.com/nocobase/nocobase/pull/9938)) by @katherinehhh
* **[ブロック：コメント]** 新しいコメントブロックプラグインを NocoBase のプリセットに追加し、旧コメントプラグインを非推奨としてマークしました。 ([#9936](https://github.com/nocobase/nocobase/pull/9936)) by @jiannx
* **[ログ]** client v2 ランタイムにログ設定ページを追加しました。 ([#9933](https://github.com/nocobase/nocobase/pull/9933)) by @jiannx
* **[HTTP リクエスト暗号化]** HTTP リクエスト暗号化プラグインで v2 クライアントに対応しました。v2 クライアントでも、クエリパラメータが引き続き暗号化されるようにしました。 by @jiannx
* **[ワークフロー：データベーストランザクションノード]** v2 ワークフローのデータベーストランザクションノードのレイアウトを改善し、ブランチラベルとコミットマーカーの間隔をより適切にしました。 by @katherinehhh

### 🐛 不具合修正

* **[flow-engine]** ユーザー切り替え後、ctx.auth.user の値が更新されない問題を修正しました。 ([#9964](https://github.com/nocobase/nocobase/pull/9964)) by @gchust
* **[client-v2]**
  * ワークフローを手動実行した後に新しいバージョンが自動作成される場合の遷移問題を修正しました。旧版と新版の画面のどちらでも、正しいワークフローページが開くようになりました。 ([#9955](https://github.com/nocobase/nocobase/pull/9955)) by @Molunerfinn
  * テーブルの日付時刻列で、ページ切り替えまたは更新後に、設定済みの時・分・秒の表示が失われる問題を修正しました。 ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh
  * リレーションフィールドのドロップダウン選択で、選択済みタイトルが長すぎる場合に選択ボックスの表示領域を圧迫する問題を修正しました。長すぎるテキストは省略表示されるようになりました。 ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh
  * V2 管理画面で、利用可能なサブメニューページがないグループに入ると 404 が表示される問題を修正しました。 ([#9932](https://github.com/nocobase/nocobase/pull/9932)) by @katherinehhh
* **[undefined]** 中国語以外のバージョン管理ドキュメントで、Pro 版ラベルが表示されない問題を修正しました。 ([#9944](https://github.com/nocobase/nocobase/pull/9944)) by @cgyrock
* **[AIワーカー]**
  * カスタム Base URL を空にした後、LLM プロバイダーがデフォルト Base URL にフォールバックできない問題を修正しました。 ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock
  * ワークフローの AIワーカータスクで、連続したツール呼び出しによってグラフの再帰制限に達した後、実行に失敗する問題を修正しました。 ([#9945](https://github.com/nocobase/nocobase/pull/9945)) by @cgyrock
* **[操作：カスタムリクエスト]** カスタムリクエストで、実行時オプションによって保存済みのリクエストターゲットが上書きされてしまう問題を修正しました。 ([#9904](https://github.com/nocobase/nocobase/pull/9904)) by @mytharcher
* **[モバイル版（非推奨）]** モバイルページと公開フォームが、モバイル端末でスクロールできない問題を修正しました。 ([#9898](https://github.com/nocobase/nocobase/pull/9898)) by @zhangzhonghe
* **[通知管理]** CC 設定で誤ったワークフロー変数が表示される問題を修正しました。 ([#9937](https://github.com/nocobase/nocobase/pull/9937)) by @zhangzhonghe
* **[ワークフロー]**
  * workflow キャンバスで、bundle をまたぐ場合に Context が一致しない問題を修正しました。これにより、旧版ワークフローページ内のブランチと一部の変数選択が正常に動作するようになりました。 ([#9951](https://github.com/nocobase/nocobase/pull/9951)) by @Molunerfinn
  * client v2 への移行に伴う一部の問題を修正しました。 ([#9929](https://github.com/nocobase/nocobase/pull/9929)) by @mytharcher
  * v2 ワークフローでサイト内通知の内容を設定できない問題を修正しました。 ([#9885](https://github.com/nocobase/nocobase/pull/9885)) by @zhangzhonghe
* **[データソース管理]** v2 のデータテーブルフィールド管理で、テンプレートで保護されたフィールドを削除できてしまう問題を修正しました。また、継承フィールドの表示、確認、上書きの挙動が v1 と一致しない問題も修正しました。 ([#9940](https://github.com/nocobase/nocobase/pull/9940)) by @katherinehhh
* **[ユーザー認証]** v2 サブアプリで、SSO ログイン後の遷移先アドレスが誤っている問題を修正しました。 ([#9927](https://github.com/nocobase/nocobase/pull/9927)) by @2013xile
* **[ユーザー]** 「ユーザーと権限」の新規ユーザーフォームから、デフォルトパスワードを削除しました。 ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx
* **[フロントエンドフローエンジン]** Flow Surfaces API でモバイルページを正しく作成できない問題を修正しました。 ([#9911](https://github.com/nocobase/nocobase/pull/9911)) by @gchust
* **[アプリケーションシングルサインオン]** v2 サブアプリで、App SSO ログイン後の遷移先アドレスが誤っている問題を修正しました。 by @2013xile
* **[AI: ナレッジベース]** バージョン管理とナレッジベースのドキュメント一覧で、内容が長い場合やビューポートの高さが不足している場合にレイアウトがはみ出す問題を修正しました。 by @cgyrock
* **[データソース：外部 NocoBase]** NocoBase 外部データソースで、接続設定にランタイムオブジェクトが含まれている場合に読み込みが失敗する問題を修正しました。 by @2013xile
* **[マイグレーション管理]** MySQL の非 ASCII 文字を含む内容をマイグレーションする際、文字化けが発生する可能性がある問題を修正しました。 by @2013xile
* **[履歴]** レコード履歴を有効にした後、外部 NocoBase データソースの読み込みが失敗する問題を修正しました。 by @2013xile
* **[ワークフロー：承認]**
  * CC ノード設定を開く際にエラーが発生する問題を修正しました。 by @zhangzhonghe
  * 承認ノードで Original application content ブロックを追加する際にエラーが発生する問題を修正しました。 by @zhangzhonghe
  * 承認データテーブルがブロックデータソース一覧に表示される問題を修正しました。 by @zhangzhonghe
  * client v2 への移行によって発生した問題を修正しました。 by @mytharcher
* **[アプリケーションスーパーバイザー]**
  * サブアプリのアクセスリンクで v2 パスが失われる問題を修正しました。 by @2013xile
  * Client V2 のアプリケーション監視で、Applications タブの登録エラーを修正しました。 by @2013xile
