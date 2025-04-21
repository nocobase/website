## 新機能

### 認証プラグイン：LDAP認証

ユーザーはLDAPサーバーの認証情報を使用してNocoBaseにログインできます。詳細については、[認証：LDAP](https://docs.nocobase.com/handbook/auth-ldap)のドキュメントを参照してください。

![](https://static-docs.nocobase.com/202405191513995.png)

### ワークフロープラグイン：カスタムアクショントリガー

CRUDアクションが要件を満たせない場合、ワークフローのカスタムアクショントリガーを使用して独自のデータ処理ロジックを構築できます。詳細については、[ワークフロー / カスタムアクショントリガー](https://docs.nocobase.com/handbook/workflow-custom-action-trigger)のドキュメントを参照してください。

![](https://static-docs.nocobase.com/202405191515770.png)

### テーブルブロックの固定列サポート

![](https://static-docs.nocobase.com/202405191512587.png)

### ポップアップウィンドウにガントチャートとカンバンを追加することをサポート

![](https://static-docs.nocobase.com/202405191512280.png)

### 詳細ブロックの連動ルールのサポート

フィールドの表示と非表示のプロパティを設定できます。

![](https://static-docs.nocobase.com/202405191513781.png)

### ワークフローHTTPリクエストノードが`application/www-x-form-urlencoded`形式のデータをサポート

![](https://static-docs.nocobase.com/202405191514472.png)

### ワークフローHTTPリクエストノードの入力ボックスが文字列テンプレートをサポート

![](https://static-docs.nocobase.com/202405191514748.png)

### 開発用のプラグインサンプル

[プラグインの例](https://docs.nocobase.com/plugin-samples)のドキュメントを確認してください。

![20240521105056](https://static-docs.nocobase.com/20240521105056.png)

## 改善点

### 「アクションの設定」インタラクションの改善

全てのアクションがドロップダウンメニューの単一リストに表示され、「アクションを有効化」と「カスタマイズ」が区別されなくなりました。

* 一度しか追加できないアクション：これらのアクションはスイッチ効果を保持します。
* 繰り返し追加可能なアクション：これらのアクションはもはやスイッチインタラクションを使用せず、何度でも追加可能です。
* 類似するアクションを統合
  * 「新規追加」と「レコードの追加」
  * 「送信」と「レコードの保存」

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### ワークフローHTTPリクエストノード結果のデータ形式を統一:

```
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

### ワークフローマニュアルの再整理

![20240521104934](https://static-docs.nocobase.com/20240521104934.png)

## 修正

### ログプラグインが現在のアプリケーションのログのみを表示

複数のアプリケーションがある場合：

* ログプラグインは現在のアプリケーションのログファイルリストのみを表示します。
* ワークフローおよびカスタムリクエストのフォルダーはアプリケーションフォルダー内に配置されます。

![20240520152448](https://static-docs.nocobase.com/20240520152448.png)

その他の主要修正内容には：

* グラフは集約データを日付フィールドでクエリする際に、クライアントのタイムゾーンで日付フィールドを変換しませんでした。[fix(data-vi): should use local timezone when formatting date #4366](https://github.com/nocobase/nocobase/pull/4366)
* ビューの更新の問題で、データベースと同期した後はビューを退出して再度入らなければなりませんでした。[fix: collection fields should be refreshed after editing sync from database #4224](https://github.com/nocobase/nocobase/pull/4224)
* ツリーテーブルブロックが子ノード追加の際にすべてのノードを折りたためませんでした。[fix: do not collapse all nodes when adding a child node in the tree table block #4289](https://github.com/nocobase/nocobase/pull/4289)
* データテーブルのタイトルフィールド設定が無効でした。[fix: collection title field setting is invalid #4358](https://github.com/nocobase/nocobase/pull/4358)
* 読取専用モードのbigintフィールドが精度を失っていました。[fix: bigint field loses precision in read pretty mode #4360](https://github.com/nocobase/nocobase/pull/4360)
* サブアプリケーションを停止した後に開いているログファイルが閉じられませんでした。[fix(logger): should close log stream after destroying app #4380](https://github.com/nocobase/nocobase/pull/4380)
* ワークフロー集約ノードの関連データモデル選択のバグ。[fix(plugin-workflow-aggregate): fix association field select #4315](https://github.com/nocobase/nocobase/pull/4315)
* ワークフローHTTPリクエストノードの同期モードでエラーを無視するオプションが無効。[fix(plugin-workflow-request): fix ignoreFail in sync mode #4334](https://github.com/nocobase/nocobase/pull/4334)
* ワークフローHTTPリクエストノードの値入力ボックスがオーバーフローしていました。[fix(plugin-workflow-request): fix value fields overflowing #4354](https://github.com/nocobase/nocobase/pull/4353)
* 特殊文字がワークフローHTTPリクエストノードをハングさせました。[fix(plugin-workflow-request): fix request hanging when invalid header value #4376](https://github.com/nocobase/nocobase/pull/4376)
* テーマエディターでmarginBlockを設定した際にフォームフィールド間隔に影響を与える問題を修正。[fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374](https://github.com/nocobase/nocobase/pull/4374)
* ページ右上の「ライセンス」オプションをクリックした際の誤ったリダイレクトを修正。[PR #4415](https://github.com/nocobase/nocobase/pull/4415)
* フィルターフォームをブロックテンプレートとして保存した際にフィールドの操作子が無効になる問題を修正。[PR #4390](https://github.com/nocobase/nocobase/pull/4390)
