### 🎉 新機能

* **[Portal 管理]** アプリケーション単位でデフォルト Portal を設定できるようにし、Modern Client のルートエントリからデフォルト Portal へ移動するようにしました。 ([#10225](https://github.com/nocobase/nocobase/pull/10225)) by @katherinehhh
  参考ドキュメント：[デフォルト Portal の設定](https://nocobase.feishu.cn/wiki/Nkk9weM93iMhB1kF8XWcMOdlnwb)
* **[AIワーカー]** LLM サービスの CLI コマンドから設定 UI を開けるようにし、サービスの新規作成時にはプロバイダーがあらかじめ選択されるようにしました。 ([#10210](https://github.com/nocobase/nocobase/pull/10210)) by @cgyrock
* **[AI: ナレッジベース]** CLI コマンドからベクトルデータベースの作成・編集 UI を開けるようにし、新規作成時にはプロバイダーがあらかじめ選択されるようにしました。 by @cgyrock
* **[マルチスペース]** デフォルトスペースを設定できるようにし、新規作成されたユーザーが選択済みのデフォルトスペースへ自動的に参加するようにしました。 by @jiannx

### 🚀 機能改善

* **[undefined]** 多言語対応の AIワーカープラグイン開発ガイドを追加しました。Tool、Skill、組み込み AIワーカー、フロントエンド連携の定義方法と組み合わせ方を説明しています。 ([#10226](https://github.com/nocobase/nocobase/pull/10226)) by @cgyrock
  参考ドキュメント：[AIワーカープラグイン開発](https://github.com/nocobase/nocobase/blob/docs/add-custom-ai-employee-skill/docs/docs/cn/ai-employees/dev/ai-employee/index.md)
* **[Portal 管理]** Portal カードを構築方法ごとにグループ化した行ベースのレイアウトへ変更しました。設定センターのページヘッダーから横幅いっぱいに広がる白背景を削除し、スイッチ、通知バー、API ドキュメントページのデザインをニュートラルテーマに統一しました。 ([#10233](https://github.com/nocobase/nocobase/pull/10233)) by @Albert-mah
* **[AI: ナレッジベース]**
  * ベクトルデータベース一覧のカードスタイルを、他の設定テーブルと統一しました。 by @cgyrock
  * ナレッジベース詳細ページを改善し、パンくずリストとタブによるセクション分けを追加しました。また、コンテンツ領域のレスポンシブレイアウトも改善しました。 by @cgyrock

### 🐛 不具合修正

* **[server]** 旧 Admin のナレッジベース詳細 URL から Settings アプリへ強制的に移動させていた、不要になったリダイレクトを削除しました。 ([#10232](https://github.com/nocobase/nocobase/pull/10232)) by @cgyrock
* **[client-v2]**
  * 設定検索のショートカットキーを変更し、バージョン管理のショートカットキーと競合しないようにしました。 ([#10222](https://github.com/nocobase/nocobase/pull/10222)) by @zhangzhonghe
  * カンバン列からレコードをクイック作成した際、選択中のグループ値が引き継がれない問題を修正しました。 ([#10215](https://github.com/nocobase/nocobase/pull/10215)) by @jiannx
  * OAuth デバイス確認ページに、設定センターのトップナビゲーションが誤って表示される問題を修正しました。 ([#10228](https://github.com/nocobase/nocobase/pull/10228)) by @zhangzhonghe
  * 権限のないロールが設定センターへアクセスした際、案内メッセージが分かりにくく、メニューが一瞬表示される問題を修正しました。 ([#10219](https://github.com/nocobase/nocobase/pull/10219)) by @zhangzhonghe
* **[UI レイアウト]** デスクトップページを狭い画面で表示した際、誤ってモバイル向けスタイルが適用される問題を修正しました。 ([#10229](https://github.com/nocobase/nocobase/pull/10229)) by @zhangzhonghe
* **[ブロック：ガントチャート]** ガントチャートで表示幅の短いタスクバーに、レコードのカスタムカラーが適用されない問題を修正しました。 ([#10217](https://github.com/nocobase/nocobase/pull/10217)) by @jiannx
* **[AIワーカー]**
  * AI プラグインの client-v2 設定ページで、Settings ラベルが翻訳されていない問題を修正しました。 ([#10234](https://github.com/nocobase/nocobase/pull/10234)) by @cgyrock
  * 未保存の変更に関する確認モーダルのデザインが、現在のテーマと一致しない問題を修正しました。 ([#10223](https://github.com/nocobase/nocobase/pull/10223)) by @zhangzhonghe
* **[ブロック：ツリー]** Tree ブロックで検索条件に一致する業務レコードがない場合でも、プレースホルダーノードが表示される問題を修正しました。 ([#10218](https://github.com/nocobase/nocobase/pull/10218)) by @jiannx
* **[Portal 管理]** 同じ名前の Portal を作成または更新できないようにし、名前が重複した場合はローカライズ済みの競合メッセージを返すようにしました。 ([#10231](https://github.com/nocobase/nocobase/pull/10231)) by @katherinehhh
* **[AI: ナレッジベース]** ナレッジベース詳細ページのナビゲーションを修正し、Admin と Settings にあるヒットテストページの幅を統一しました。 by @cgyrock
