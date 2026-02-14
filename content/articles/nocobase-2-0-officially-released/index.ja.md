NocoBase 2.0 は、**複雑なアプリケーションの構築とデプロイのスケーリング**に重点を置いた大型アップグレードです。本リリースでは、AI 機能、アプリケーションアーキテクチャ、データ編集体験、フロントエンドイベントフローにわたって体系的な改善を行い、V2 ページとコア機能の全面的な適応を完了しました。

## 新機能

### AI Employees

AI 機能がプラグインシステムによる拡張性を備え、コアにファーストクラスの機能として組み込まれました：

- プラグインベースの拡張性を持つコアへの統合
- LangChain 依存関係のアップグレードと最適化により、安定性とスケーラビリティを向上
- AI Employee のインタラクションフローを簡素化し、設定と利用のハードルを低減

![20260214075059](https://static-docs.nocobase.com/20260214075059.png)

**参照：** [AI Employees](https://v2.docs.nocobase.com/ai-employees)

### App Supervisor

App Supervisor プラグインは、**複数の NocoBase アプリケーションインスタンスの統合的な検出、スケジューリング、管理**を提供し、マルチアプリおよびマルチ環境のデプロイシナリオに適しています。

- アプリケーションの自動検出と一元管理
- 共有メモリメカニズムによるインスタンス間連携の改善
- 複雑なデリバリー要件に対応するマルチ環境ハイブリッドデプロイ

**共有メモリ**

![20260214075803](https://static-docs.nocobase.com/20260214075803.png)

**マルチ環境ハイブリッドデプロイ**

![20260214075815](https://static-docs.nocobase.com/20260214075815.png)

**参照：** [Multi-App Management](https://v2.docs.nocobase.com/multi-app/multi-app)

### サブテーブル（インライン編集 / ポップアップ編集）

関連データ編集における異なる複雑度のニーズに対応するため、NocoBase は 2 つのサブテーブル編集モードを提供します：

- **サブテーブル（インライン編集）**：テーブル内で関連データを直接編集でき、効率的な操作が可能。クイックデータ入力や一括更新に最適
- **サブテーブル（ポップアップ編集）**：ポップアップフォームでデータを編集。より複雑なフィールドタイプやバリデーションロジックに対応し、高度なシナリオに適用

**サブテーブル（インライン編集）**

![20260214080224](https://static-docs.nocobase.com/20260214080224.png)

**サブテーブル（ポップアップ編集）**

![20260214080233](https://static-docs.nocobase.com/20260214080233.png)

**参照：** [Sub-table (Inline Edit)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table) · [Sub-table (Popup Edit)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table-popup)

### フィールド割り当て

新しいフィールド割り当てメカニズムは、フォームデータの**初期化と書き込みロジック**を統合・強化し、明確性と一貫性を向上させます：

- フィールド割り当ての設定エントリを**統一**し、分散した設定の複雑さを低減
- フィールド割り当てロジックが**フィールドコンポーネントの種類に依存しなくなり**、データの挙動がより安定的かつ予測可能に
- **リレーションフィールドへのフィールドレベルの割り当て**をサポートし、複雑なリレーショナルデータモデリングを実現
- **デフォルト値**と**固定値**の両方の割り当てモードにより、初期化と上書きの両シナリオに対応
- 従来の「フィールドデフォルト値」は非推奨です。新しいフィールド割り当てメカニズムへの移行をお願いします

![20260214080932](https://static-docs.nocobase.com/20260214080932.png)

**参照：** フィールド割り当て（ドキュメント準備中）

### イベントフローの実行順序

イベントフローは **Event → Flow → Step** の階層に従って厳密に実行され、各レベルの前後に対応するフックがトリガーされ、きめ細かな制御と拡張が可能です。

```yml
event:
  before:
    - track_event_start
  flows:
    - name: flow1
      before:
        - track_flow_start
      steps:
        - name: step1
          before: [track_step_start]
          run: do_something
          after: [track_step_done]
      after:
        - track_flow_end
    - name: flow2
      ...
    - name: flow3
      ...
  after:
    - track_event_end
```

![20260214081527](https://static-docs.nocobase.com/20260214081527.png)

**参照：** [Event Flow](https://v2.docs.nocobase.com/interface-builder/event-flow)

## 2.0 対応済み機能

### 一括編集

![20260214083041](https://static-docs.nocobase.com/20260214083041.png)

**参照：** [Bulk Edit](https://v2.docs.nocobase.com/interface-builder/actions/types/bulk-edit)

### 複製

![20260214083146](https://static-docs.nocobase.com/20260214083146.png)

**参照：** [Duplicate](https://v2.docs.nocobase.com/interface-builder/actions/types/duplicate)

### ブロックの高さ

![20260214083319](https://static-docs.nocobase.com/20260214083319.png)

**参照：** [Block Height](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/block-height)

### テーブル行のドラッグ＆ドロップソート

![20260214085152](https://static-docs.nocobase.com/20260214085152.png)

**参照：** [Drag Sort](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/drag-sort)

### データ読み込み方式

![20260214083433](https://static-docs.nocobase.com/20260214083433.png)

**参照：** [Data Loading Method](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/data-loading-method)

### フォームでのリレーションフィールドの表示

![20260214083517](https://static-docs.nocobase.com/20260214083517.png)

**参照：** [Form](https://v2.docs.nocobase.com/interface-builder/blocks/data-blocks/form)

### ページ (V2) ローカライズ対応

V2 ページは、**ページ、ブロック、アクション、フィールド**にわたって完全なローカライズをサポートしました。

ローカライズプラグインを有効にすると、システムが未翻訳のエントリを自動的に収集し、ローカライズ管理リストに表示して一元管理できます。

JS ブロックでは、`ctx.t()` を使用して変数補間付きのローカライズテキストを取得できます：

```js
const label = ctx.t('Your name is {{name}}', {
  name: await ctx.getVar('ctx.user.nickname')
});
ctx.render(label);
```

### 承認 2.0

**参照：** [Approval](https://v2.docs.nocobase.com/workflow/nodes/approval)

### CC（カーボンコピー）2.0

**参照：** [CC](https://v2.docs.nocobase.com/workflow/nodes/cc)

## 2.0 未対応の機能

以下の機能は 2.0 ではまだ対応しておらず、今後のリリースでアップグレード予定です：


| 機能                        | 現在の代替手段               |
| --------------------------- | ---------------------------- |
| カスタムリクエスト          | ワークフローリクエストノード |
| ブラウザ印刷                | JS アクション                |
| マルチステップフォーム      | JS ブロック                  |
| ツリーフィルターブロック    | JS ブロック                  |
| カレンダーブロック          | JS ブロック                  |
| カスタム変数                | イベントフロー               |
| ガントブロック              | JS ブロック                  |
| カンバンブロック            | JS ブロック                  |
| テキストコピー              | イベントフロー               |
| カラム設定                  | JS アクション                |
| スタイル連動ルール          | イベントフロー               |
| QR コードフィールド         | JS フィールド                |
| スキャン入力                | イベントフロー               |
| NocoBase の埋め込み         | —                           |
| 中国行政区画フィールド      | —                           |
| コードフィールド            | —                           |
| パブリックフォーム          | —                           |
| ワークフロー手動ノード Todo | —                           |
| 送信成功後の処理            | イベントフロー               |
| データテンプレート          | イベントフロー               |
