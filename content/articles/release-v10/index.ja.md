## V1.0 マイルストーン

3年間の開発を経て、NocoBaseは初のメジャーバージョンアップグレードを迎え、バージョン0.xから1.0に移行しました。これは重要なマイルストーンです。

* 0.xフェーズ中：コアAPIと機能は急速に変化し、新しいバージョンが互換性のない変更をもたらす可能性がありました。
* 1.xフェーズ中：コアAPIは安定し、NocoBaseは新しいプラグインの追加、セキュリティの最適化、パフォーマンスの向上に注力し、安定性を維持します。

## 新機能

* テーマエディターは、ページおよびモーダルのパディング、ブロック間のスペーシング、ブロックの角の半径を設定できます。
* ブロックを追加する際、コレクションはフィルタリングをサポートします。
* リレーションシップレコードはソートをサポートします。
* データ可視化のインタラクティブ性が改善されました。
* モバイルデバイスでチャートブロックを追加することをサポートします。
* チャートフィルターブロックはフィールドデータの範囲を設定することをサポートします。
* より多くの変数を追加します。[詳細を見る](https://docs.nocobase.com/handbook/ui/variables)。
* 任意のコレクションのブロックをポップアップに追加することができます。
* ワークフロー：「ポストアクションイベント」は、関連ブロック内のボタンによってトリガーされます。
* ポップアップ内でデータが変更された場合、親コンテナ内のデータが自動的に更新されます。
* テーブルブロックのパフォーマンスが大幅に向上しました。
* テストカバレッジが大幅に向上しました。

## 新しいプラグイン

* フィールド：Markdown (Vditor)
  * Markdownを保存し、Vditorエディタを使用してレンダリングします。一般的なMarkdown構文をサポートし、画像や録音をアップロードできます。また、即時レンダリングが可能で、見たままの内容となります。
* コメント
  * 任意のコレクションのコメント機能を追加するためのコメントコレクションテンプレートとブロックを提供します。

## 完全な変更ログ

* feat(plugin-workflow): 同期後にリストを更新 #4177
* feat(plugin-workflow): タイトルにツールチップとしてワークフローキーを表示 #4178
* test(plugin-workflow): テストケースを追加 #4199
* chore: APIキャッシュ制御ヘッダー #4203
* feat: vditor依存関係をローカルから読み込む #4190
* test: 数値区切りテスト #4204
* fix: 数値フィールドは区切り設定をサポートするべき #4197
* fix(plugin-workflow): 経験を改善 #4195
* chore: インポート＆エクスポートの警告表現を最適化 #4196
* refactor: 外部データソースコレクションマネージャー #4193
* fix: 環境バグ #4191
* fix: 関連フィールドの空のオペレーター #4189
* chore: e2eを追加 #4184
* fix: vditorバージョン #4183
* refactor: フォームデータテンプレートロケールの改善 #4188
* test: 自動テストを追加 #4098
* chore: データソースロガーインスタンス #4181
* chore: 関係リポジトリでデータベースインスタンスを取得 #4179
* chore: 変数のためにe2eを追加 #4152
* chore: コレクションのデバッグメッセージを定義 #4176
* chore: ビューコレクションのunsupportedFields #4155
* feat: plugin-field-markdown-vditorを追加 #4065
* fix: バルクエディットフォームaclアクションエラー #4166
* fix: 関連フィールドでuuid外部キーを自動作成 #4160
* fix(plugin-fm): 混乱を招くサイズ制限ヒントを修正 #4153
* fix(users): users:updateProfileを改善 #4162
* fix(client): API URLを取得 #4161
* feat: plugin-ui-routes-storageを削除 #4140
* fix: cytoscapeのバージョンをロック #4158
* refactor: コレクションテンプレートはpresetFieldsDisabledをサポート #4159
* fix: グリッドスキーマ #4157
* clientユニットテスト #4150
* fix: 対応キーが主キーでない関連が多いを更新 #4146
* refactor: フォームデータテンプレートロケールの改善 #4148
* fix(database): 配列フィールドの列名 #4110
* test: アクションe2eテストで更新 #4147
* fix(custom-request): コンテンツタイプの設定をサポート #4144
* chore: フォームから現在のレコード変数を非推奨にする #4063
* feat(テーマ): トークンを追加 #4137
* fix(client): 警告を修正 #4143
* style: tableActionColumnスタイルを改善 #4138
* fix: actionBarスタイルを改善 #4123
* chore: 削除の競合があった場合の警告メッセージ #4141
* fix(plugin-workflow-manual): 担当者がいない場合にノードを渡すことを許可 #4139
* chore: データソースマネージャーAPI #4124
* fix(plugin-workflow-manual): 担当者解析バグを修正 #4125
* fix: コレクションで関連フィールドを読み込む #4122
* perf: すべてのSkeletonアニメーションを削除 #4113
* test: e2eを追加 #4121
* chore(data-vi): APIを調整 #4116
* fix: scheduleEventTrigger #4114
* feat(plugin-workflow): 定期的にディスパッチするためのチェッカーを追加 #4119
* feat: DataBlockInitializerのfilterOtherRecordsCollectionを追加 #4117
* refactor: CollectionFieldを最適化 #4111
* fix: sortフィールドの移行を改善 #4112
* fix: フィールドコンポーネント #4102
* fix: 関連選択が追加モードをサポート #4108
* fix: createdBy & updatedByのターゲットオプション #4109
* fix(linkage-rule): リンケージルールは空の条件をサポート #4103
* fix: SanitizedCollectionProviderを追加 #4100
* fix: treeコレクションターゲットエラー #4105
* fix: ClearCollectionFieldContextを追加 #4101
* feat: フォームブロックを改善 #4099
* chore: ソート可能オプションをsortフィールドに移行 #4011
* feat: appendsでのsortオプションをサポート #4056
* feat(data-vi): 円グラフに負の数を受け入れることを許可、T-4075を修正 #4094
* fix(data-vi): 数値が精度変換後に文字列になる #4092
* fix: URLパラメータをエンコード #4055
* test(plugin-workflow): 複製トリガーされたスケジュールワークフローのテストケースを追加 #3817
* perf(LinkageRules): ラグの問題を解決 #4090
* fix(subTable): 新しいデータを追加するオプションを表示しない #4086
* fix: 欠落したフィールド #4083
* fix: テーブル選択ページネーションエラー #4078
* fix: ブロックデータスコープを設定するとページをリセット #4081
* fix: カスタムリクエストロールリスト #4074
* fix: iso週を解析 #4068
* fix(sourceId): エラーを回避 #4077
* fix(sql-collection): フィールドを設定する際にインターフェースを選択できない #4079
* fix: ソースフィールドで読み込む #4075
* fix: 操作リンケージルールの削除がリアルタイムで効果をもたらさない #4058
* fix(core): フォーミュラ評価器のラウンドバグを修正 #4070
* test: データ読み込みモードのe2eを追加 #4069
* fix(filterForm): 重複した名前を回避 #4071
* chore: ブロックタイトルを最適化 #4040
* fix: ビューでデフォルト値を同期 #4067
* fix(defaultValue): ページをリフレッシュした後にデフォルト値が消える問題を修正 #4066
* refactor: ganttブロック #4059
* fix: サブテーブルの大きなフィールドは変数デフォルト値をサポートするべき #4062
* chore(テーマ): Compactテーマのデフォルトフォントサイズを16に設定 #4064
* test: アクションのe2eを追加 #4053
* fix(variable): 欠落した変数と無効な翻訳 #4054
* test: バックエンドユニットテストを追加 #4000
* fix: カードアイテムを改善 #4036
* chore(acl): 関連フィールドアクションを無効にする #4014
* fix(variable): データスコープ内の親レコード変数の報告エラーを修正 #4039
* test(e2e): フィールド値に対するアサーションを追加 #4034
* feat(Variable): 新しい変数を追加 #4025
* feat: プロプラグインでe2eを実行 #3890
* fix: バグ #4038
* fix: キャメルケースフィールドの配列オペレーター #4032
* fix: scopeKeyOptionsはリアルタイムで取得されるべき #4029
* fix(addText): BlockSchemaの代わりにFormItemSchemaToolbarを使用するべき #3963
* feat: データソースマネージャーにフックを一度登録する #4024
* fix: スニペット #4030
* fix: vitestの単一バグ #4031
* feat(data-vi): ユーザー体験の改善（prを参照） #4013
* test: フロントエンドユニットテストを追加 #3991
* feat: ポップアップでOthersオプションをサポート #4015
* fix(collection-manager): フィールドをオーバーライドした後にリフレッシュしない #4022
* chore: エクスポート＆インポートの警告を追加 #4027
* refactor: サードパーティデータソースはソートフィールドのグループソート編集をサポート #4023
* fix(plugin-acl): pm.acl.rolesスニペット #4026
* test: 関連名ブロックのe2eテスト #4021
* fix: API URLを取得 #4020
* fix(Sub-details): フィールド値が空のときに初期化ボタンが表示されない #4019
* fix: 初期化子はuseAassociationNameを使用する #4018
* fix(auth): サブディレクトリデプロイ時のcasログインバグ #4017
* fix(TreeTable): 子を追加するエラー #4008
* fix: アクティブフィールドを削除すると値が消えないようにするべき #4012
* fix(plugin-acl): データソースロールスニペット #4016
* fix: すべてを選択した後にバルク更新が未選択データを促す #4010
* refactor: ツリーテーブルはデフォルトで有効になっていない #4001
* feat(plugin-workflow-action-trigger): 関連アクションをトリガーすることをサポート #4007
* Update application.ts #4006
* fix: タグフィールド設定 #4009
* fix(users): 外国の電話番号の不正なチェックにより電話バリデーションを削除 #4005
* fix: 関連ブロックアクションの権限確認が失敗 #3994
* refactor: テーブルソート用のフィールドはスコープキーでソートフィールドを選択できない #3984
* fix(Form): 無効なparentRecord #3998
* fix(plugin-workflow): ロケールを調整 #3993
* fix: サブテーブルはallowSelectExistingRecord設定をサポート #4004
* fix(auth): URLを直接入力したときにサインアップページが見つからない #4002
* chore(database): フィールドがユニークで値が空文字の場合にnull値を設定 #3997
* chore(gateway): 原因メッセージでエラーを報告 #3999
* chore(error-handler): エラー原因メッセージを表示 #3996
* fix: キャメルケースのテーブル名で復元 #3995
* refactor(plugin-workflow): コメントを調整 #3990
* fix: ガントの折りたたみと展開 #3982
* fix(BulkForm): ‘変更された’に切り替えると必須であるべき #3965
* fix: アクションを移動 #3985
* refactor: ソートフィールドはdefaultValueを持つべきではない #3986
* chore: プラグインのクラス名を更新 #3981
* feat(plugin-workflow-sync): マルチアプリ共有コレクションが有効なときに同期を追加 #3969
* fix(localization): 初回の大文字のロケールが間違っている #3968
* chore: APIコメントを調整して追加 #3951
* refactor: 選択肢の設定を最適化 #3964
* fix(GridCard): 行に表示される列の数を設定 #3960
* refactor: 数値式フィールドのみがフォーマットをサポート #3962
* chore(plugin-workflow): コメントを追加 #3959
* chore: レガシー計算プラグインを削除 #3939
* fix(LinkageRules): すぐに効果があるべき #3958
* fix(Picker): 新しいデータを追加するオプションを表示すべき #3957
* fix(connect-data-blocks): ドロップダウンメニューですぐに表示されるべき #3953
* fix: 左メニューのタイトルを修正 #3956
* fix: テンプレートリストプロバイダーのバグ #3950
* refactor: nanoidとuuidの自動埋め込み #3955
* feat: uiスキーマリポジトリでgetParentJsonSchemaを追加 #3690
* fix: sequelize検証でuuidとnanoidフィールドの値を保存 #3952
* fix: throughCollectionは曖昧検索をサポート #3949
* fix: getSourceKeyByAssocation #3947
* fix(RichText): スタイルを統一 #3946
* fix(connectDataBlocks): GridへのFilterBlockProviderを追加するべき #3944
* chore: スキーマにappVersionを追加 #3936
* fix: collectionFieldInterfaceSelect #3945
* fix: テンプレートのsourceIdを修正 #3941
* fix(collection manager): コレクションマネージャーのprimarykeyとnanoidとuuidはインデックス設定をサポート #3943
* fix(plugin-formula-field): コンポーネントコンテキストを修正 #3937
* fix: nanoidの利用可能なタイプ #3942
* fix: デフォルト値を自動生成 #3940
* fix: 計算フィールドの計算エラー #3938
* fix: 計算フィールドはフォーマットをサポート #3928
* refactor: タブ初期化子の命名を統一 #3932
* fix: LightboxオーバーレイスタイルにzIndexを追加 #3934
* fix(Table): 関連フィールドの内容が表示されない問題を修正 #3930
* fix(evaluators): 配列をフラット化する #3931
* refactor: メインデータソースビューコレクションはfilterTargetKeyをサポート #3818
* fix: 計算フィールドの計算エラー #3929
* fix: ソースオプションで関連のビューコレクションを読み込む #3912
* fix: 編集フォームが変更されないときに未保存の警告が表示されないように #3920
* fix(Collapse): chinaRegionsのエラーを修正 #3925
* fix: 数値表示フォーマット #3924
* fix(defaultValue): デフォルト値を設定するときは即座に効果をもたらすべき #3923
* feat: アクションはrefreshDataBlockRequest設定をサポート #3882
* refactor: formBlockProviderとdetailBlockProvider #3898
* feat(data-vi): モバイルクライアント用にチャートを追加できるようにする #3922
* chore: APIコメントを追加 #3919
* fix: ページネーションを修正 #3921
* test(plugin-error-handler): ミドルウェア #3909
* fix: プラグインを更新 #3895
* fix: ガントブロックのページネーション #3918
* fix: source idがnull #3917
* fix(Table): ページネーションを修正 #3916
* fix: 正しいsourceIdを取得 #3897
* fix(DataScope): 保存後に即座に効果がない問題を修正 #3910
* fix: 選択フィールドオプションのinitialValue #3911
* fix: 外部リンクのクリック #3908
* fix(inputNumber): inputNumberの精度損失 #3902
* feat(plugin-workflow-action-trigger): グローバルアクションイベントを追加 #3883
* docs: APIコメントを追加 #3868
* fix: vitest設定バグ #3907
* fix: テーブル固定バグ #3901
* fix: リストデータ未定義エラー #3905
* fix: レイジーレンダーバグ #3886
* fix: ソートパラメータが欠落 #3906
* refactor: change useProps to x-use-component-props #3853
* fix(withDynamicSchemaProps): ディープマージをシャローに変更 #3899
* fix: 履歴ブロックに印刷ボタンを追加、印刷ボタンをクリックしてエラーを報告 #3900
* fix: tarバグ #3891
* chore: bigIntを文字列型として返す #3887
* feat(data-vi): チャートフィルターフィールドのデータスコープ #3894
* feat: 新規追加のメニューを調整 #3884
* fix(plugin-custom-request): 編集ボタンダイアログを修正 #3893
* fix: データスコープを設定する際にfieldNamesが欠落 #3892
* fix: 開発中にプロダクションプラグインを追加する際の依存性チェックエラー #3848
* fix: ワークフロータブが存在しない #3889
* fix: 関連フィールドはデータスコープリンクをサポート #3888
* fix: templateBlockProviderは関連フィールドの追加をサポート #3866
* chore: メインデータソースAPI #3880
* feat: vitestをカバレッジ付きで実行 #3802
* fix: 重複したメニューキーを回避 #3885
* fix(data-vi): デュアル軸チャートが異常に表示される #3881
* fix: フィルターが空のオブジェクトのときに更新を拒否 #3777
* chore: プライマリキー属性でフィールドを更新 #3852
* refactor: uuidとnanoidはデフォルト値設定をサポート #3830
* feat: テーブルパフォーマンス #3791
* fix: setFormValueChangedがundefined #3879
* fix(client): フィルターダイナミックコンポーネントの無効化を修正 #3874
* fix(plugin-workflow-parallel): ロケールを修正 #3876
* fix(formula-field): フォーミュラフィールドはフォーム値変更を設定 #3873
* fix: formBlockProviderブロック表示 #3877
* refactor(plugin-workflow): #3871に変更 #3871
* fix: カンバンカードモーダルの表示異常 #3863
* fix: filterTargetKeyはビューコレクションのみをサポート #3872


## プラグインの変更

以下のプラグインはオープンソースバージョンとして提供されていません（すでに本番環境で使用しているユーザーは、アップグレードのためにご連絡ください）：

* @nocobase/plugin-auth-cas: CASプロトコルを介してアイデンティティを認証します。
* @nocobase/plugin-auth-odic: OIDC (OpenID Connect)プロトコルを介してアイデンティティを認証します。
* @nocobase/plugin-auth-saml: SAML 2.0経由でアイデンティティを認証します。

以下のプラグインは非推奨となり、今後のバージョンで削除されます：

* @nocobase/plugin-audit-logs: 非推奨、現時点では削除せず、新バージョンではインストールされません。
* @nocobase/plugin-snapshot-field: 非推奨、現時点では削除せず、新バージョンではインストールされません。
* @nocobase/plugin-charts: @nocobase/plugin-data-visualizationを使用。
* @nocobase/plugin-excel-formula-field: @nocobase/plugin-field-formulaを使用。
* @nocobase/plugin-math-formula-field: @nocobase/plugin-field-formulaを使用。
* @nocobase/plugin-ui-routes-storage: 非推奨、フロントエンドルーティングは直接フロントエンドで拡張できます。

完全なプラグインのリストについては、[こちら](https://www.nocobase.com/plugins.html)をご覧ください。

## コードコメント

より良い開発体験を提供するため、特定のAPIにコメントを追加しました。

* `@internal`: 通常、内部実装の詳細または公に使用するために設計されていないメソッドを識別するために使用されます。これは、コード内部で使用されます。
* `@experimental`: 実験的な機能やAPIを識別するために使用されます。これらのAPIはまだ開発およびテスト段階にあり、大きな変更がある可能性があり、将来のバージョンで削除または置き換えられる可能性があります。
* `@deprecated`: コード内で古くなった、または推奨されていない機能、メソッド、またはAPIを識別するために使用されます。これらは依然として使用可能ですが、将来的に削除される可能性があり、より良い代替ソリューションが利用できる可能性があります。

## ライセンス契約

NocoBaseはAGPL-3.0と商業ライセンスの二重ライセンスです。詳細は[NocoBaseライセンス契約](https://cn.nocobase.com/agreement-cn.html)を参照してください。

## アップグレードガイド

* アップグレードする前に必ずデータベースをバックアップしてください！必ずデータベースをバックアップしてください！必ずデータベースをバックアップしてください！
* プロジェクト全体のコードもバックアップできます。

Auth: CAS、Auth: OIDC、Auth: SAMLの3つのSSOプラグインがオープンソースコードから削除されたため、アップグレードは2つのケースに分かれます。

### SSOプラグインを使用していない場合

[通常の方法](https://docs-cn.nocobase.com/welcome/getting-started/upgrading)に従って正常にアップグレードしてください。

### SSOプラグインを使用している場合

以下の手順に従ってアップグレードしてください：

#### 1. アプリケーションをアップグレード

[NocoBaseアップグレード概要](https://docs.nocobase.com/welcome/getting-started/upgrading)を参照し、NocoBaseを最新バージョンにアップグレードしてください。

以前にCAS、OIDC、SAMLプラグインを有効にしていた場合、アップグレード中に次のプロンプトが表示されます：

コマンドラインアップグレード時のターミナルプロンプト：

![20240428212151](https://static-docs.nocobase.com/20240428212151.png)

Docker版のインターフェースプロンプト：

![20240428194926](https://static-docs.nocobase.com/20240428194926.png)

#### 2. プラグインを削除するか、プラグインのバージョン1.0を取得するか？

***プラグインを削除してアップグレードを続行する場合：***

プロンプトに従ってプラグインを削除します。

```
# メインアプリケーション  
yarn pm remove cas oidc saml --force  
# サブアプリケーションの場合は、--appパラメータを追加します  
yarn pm remove cas oidc saml --force --app=sub-app1  
```

アップグレードを続行します。

```
yarn nocobase upgrade  
```

***プラグインをバージョン1.0に更新する場合***

NocoBaseチームに連絡してプラグインのバージョン1.0を取得し、アップグレードを続行します。

#### 3. CAS、OIDC、SAMLプラグインのアップグレードプロセス

この時点で、アプリケーションのインターフェースにはアクセスできなくなりますので、手動でアップグレードする必要があります。

1. [service.nocobase.com](https://service.nocobase.com/)にアカウントでログインして、最新のプラグインをダウンロードします。
2. プラグインを指定のディレクトリに解凍します。
   * CASプラグインを`./storage/plugins/@nocobase/plugin-auth-cas`に解凍。
   * OIDCプラグインを`./storage/plugins/@nocobase/plugin-auth-oidc`に解凍。
   * SAMLプラグインを`./storage/plugins/@nocobase/plugin-auth-saml`に解凍。
3. アプリケーションをアップグレードします。
   * Docker版はコンテナを再起動するだけで大丈夫です。
   * ソースコードまたはcreate-nocobase-app版の場合：
     1. 依存関係をダウンロードします `yarn install`
     2. アップグレードコマンドを実行します `yarn nocobase upgrade`
     3. アプリケーションを再起動します。## V1.0 マイルストーン
