最近、**Vibe Coding vs. Production Reality**という氷山図が X や [Reddit](https://www.reddit.com/r/ClaudeAI/comments/1t3bk3x/vibe_coding_vs_production_reality/) で話題になりました。水面上には現在のさまざまな AI Coding ツールが並び、水面下には権限、決済、データ整合性、ログ、ロールバック、監視など、実際に本番稼働してから直面する問題が詰まっています。投稿者は、以前なら 1 週間かかっていた PoC が今では半日で作れることもある一方、Demo が動くことと、継続的に提供・保守できるシステムであることは別だと指摘しています。

![0-intro-vibe-coding-vs-production-reality-zbxzta.png](https://static-docs.nocobase.com/0-intro-vibe-coding-vs-production-reality-zbxzta.png)

企業ごとの業務フローや管理ルールは高度に個別化されています。同じリソース管理でも、注文、スケジューリング、保守、精算、例外処理のロジックはまったく異なる場合があります。AI Coding はこうしたカスタム要件の実装コストを下げますが、業務そのものが単純になるわけではありません。

たとえばレンタカー業務では、注文は作成後に完了を待つだけではありません。車両のスケジュールを占有し、引き渡し、利用、返却という流れを経ます。顧客が返却を遅らせれば、その後の予約や車両配置にも影響します。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---

このような企業向け業務システムでは、データ関係、権限、業務ルールを長期的に安定して維持する必要があります。Coding Agent に完全なゼロベースで構築させる場合、こうした共通機能も一つずつ実装・保守しなければなりません。一方、既存のアプリケーション基盤があれば、Coding Agent は具体的な業務のモデリング、実装、検証により多くの作業を集中できます。

NocoBase は **App Foundation** を中核に、データモデル、権限、ワークフロー、UI、API、実行基盤を提供します。Coding Agent はこれらの機能を使って開発とデリバリーを行い、人は業務目標の確認、案の決定、結果の受け入れ、リリース承認を担当します。

以下ではレンタカーシステムを例に、業務モデリングから始めて、Coding Agent が NocoBase 上で相互に関連する実際の業務要件を、継続して運用・改善できるアプリへどう変えていくかを見ていきます。

💡 関連記事：[在庫管理システム構築比較：Vibe Coding vs NocoBase + AI](https://www.nocobase.com/ja/blog/building-inventory-management-system-vibe-coding-vs-nocobase-ai)

## 1. Coding Agent に完全な業務モデルを作らせる

構築を始める前に、レンタカー業務の主要要件を Coding Agent に渡し、データモデル、業務プロセス、ロール権限、受け入れ基準を整理させます。

📃 関連ドキュメント：[データモデリング - NocoBase ドキュメント](https://docs.nocobase.com/ja/ai-builder/data-modeling)

たとえば：

> 車両、顧客、店舗、従業員、レンタル注文を管理する必要があります。車両には保険、整備、違反情報があり、注文は顧客、車両、レンタル期間、支払い情報に関連します。レンタル業務にはスケジューリング、引き渡し、利用、返却、点検、精算が含まれ、同時にキャンセル、返却遅延、整備、違反、未払いなどにも対応する必要があります。主要なデータ関係、業務プロセス、ロール権限、重要な受け入れ基準を整理してください。

Coding Agent はこれをもとに、システム全体の案を作成できます。

- 車両を店舗、注文、整備、保険などのデータと関連付ける。
- 注文を作成、スケジューリング、引き渡し、レンタル、返却、精算の順に進める。
- 例外ごとの処理ルールを明確にし、さらに検証可能な条件へ落とし込む。たとえば、同じ車両を同一時間帯に重複して割り当てない、整備中の車両を新しいスケジュールへ入れない、注文完了後に売掛金を正しく生成する、といった条件です。

案を確認したら、Coding Agent は NocoBase App Foundation を使って、確定した業務ルールを実行可能なアプリへ構築できます。

📃 関連ドキュメント：[Claude Code、Codex、Cursor などの Coding Agent を NocoBase に接続する方法](https://docs.nocobase.com/ja/ai/quick-start)

## 2. Coding Agent が NocoBase 上でシステムを構築する

### 2.1 業務モデルを実際の業務ページへ変換する

業務モデルはさらに各種の業務ページへ変換されます。このレンタカーシステムでは、主に次のページを用意します。

- **レンタル業務台**：引き渡し、返却、キャンセル、返却遅延、未決済を処理する。
- **車両スケジュール**：現在および将来の車両利用状況を確認する。
- **車両配車**：店舗間の車両配置を処理する。
- **期限・コンプライアンス管理**：保険、証明書、整備などの期限を管理する。
- **支払い管理**：レンタル料金、保証金、返金、売掛金を処理する。
- **運用ダッシュボード**：注文、車両、例外、経営データを確認する。

これらのページは、同じ業務データと関連関係を利用します。注文が変わると、車両状態、スケジュール、支払い、経営データも連動して更新されます。

📃 関連ドキュメント：[UI Builder - NocoBase ドキュメント](https://docs.nocobase.com/ja/ai-builder/ui-builder)

### 2.2 1 件の注文に沿って業務フロー全体を確認する

アプリ構築後は、まず 1 件の注文を使って主要フローを確認します。注文ステータスが変わったときに、車両スケジュール、車両状態、支払い記録が正しく連動して更新されるかを重点的に確認します。

注文で車両とレンタル期間が確定すると、対応する時間帯を**車両スケジュール**へ登録する必要があります。すでに注文で利用中の車両は、重複する時間帯へ再度割り当てることはできません。

![2-2-rental-orders-vxut2h.jpg](https://static-docs.nocobase.com/2-2-rental-orders-vxut2h.jpg)

![2-2-fleet-schedule-phfly8.jpg](https://static-docs.nocobase.com/2-2-fleet-schedule-phfly8.jpg)

引き渡し時間になると、担当者が**レンタル業務台**で車両の引き渡しを完了します。注文はレンタル段階へ進み、車両状態も同時に更新されます。その後の返却、キャンセル、返却遅延、未決済もこの画面から処理します。

![2-2-rental-desk-0h25wk.jpg](https://static-docs.nocobase.com/2-2-rental-desk-0h25wk.jpg)

返却時には、実際の返却時刻、走行距離、料金を記録します。返却が遅れた場合は、既定のルールに従って関連料金を計算します。車両点検完了後は、点検結果に応じて車両状態を更新します。

![2-2-vehicle-check-in-gyci2l.jpg](https://static-docs.nocobase.com/2-2-vehicle-check-in-gyci2l.jpg)

注文完了後、レンタル料金、保証金、その他費用は**支払い管理**へ入り、金額、支払い種別、支払い方法、現在の状態を記録します。

![2-2-payment-management-ykgikc.jpg](https://static-docs.nocobase.com/2-2-payment-management-ykgikc.jpg)

これで、1 件のレンタル業務が注文から精算までの一連の流れを完了します。

**注文 → スケジューリング → 引き渡し → レンタル → 返却 → 精算**

### 2.3 ワークフローで自動ルールとモジュール間連携を処理する

一部のルールは人が毎回処理する必要がなく、条件を満たしたときにワークフローで自動実行できます。

📃 関連ドキュメント：[ワークフロー管理 - NocoBase ドキュメント](https://docs.nocobase.com/ja/ai-builder/workflow)

このシステムでは、返却遅延、保険や運転免許証の期限、車両整備、注文完了後の売掛金生成、予約時刻到達後の受け取りフロー開始などのワークフローを設定しています。

![2-3-workflow-management-m1m1uv.jpg](https://static-docs.nocobase.com/2-3-workflow-management-m1m1uv.jpg)

違反処理を例にします。新しい違反記録を追加すると、システムは車両と違反発生時刻をもとに、その時点で対応するレンタル注文を検索します。該当する注文が見つかると自動で関連付け、後から実際の利用顧客と責任の所在を確認しやすくします。

このルールは次のように表せます。

**違反を追加 → 対応するレンタル注文を検索 → 一致を判定 → 注文を自動関連付け**

![2-3-violation-workflow-apraux.jpg](https://static-docs.nocobase.com/2-3-violation-workflow-apraux.jpg)

同様のリマインド、ステータス更新、モジュール間処理も、「トリガー条件 → 業務判断 → 実行アクション」という形でワークフローに設定できます。これにより、確定した業務ルールを継続的に実行できます。

### 2.4 例外、コンプライアンス、経営分析を処理する

注文が正常に流れるようになった後は、人が確認すべき問題にも明確な処理入口が必要です。

たとえば、車両の返却遅延後には対応タスクを生成し、保険、運転免許証、整備期限が近づくと**期限・コンプライアンス管理**へ入り、未回収金や延滞売掛金は**キャッシュフロー・エイジング分析**へ入ります。

![2-4-expiry-compliance-9gwqd1.jpg](https://static-docs.nocobase.com/2-4-expiry-compliance-9gwqd1.jpg)

![2-4-overdue-return-details-qss45x.jpg](https://static-docs.nocobase.com/2-4-overdue-return-details-qss45x.jpg)

![2-4-cash-flow-aging-ic9xwt.jpg](https://static-docs.nocobase.com/2-4-cash-flow-aging-ic9xwt.jpg)

こうした業務データが蓄積されると、経営分析にも利用できます。**車両別収益性分析**では、レンタル収入と整備、保険などのコストをまとめて、車両ごとの実際の収益を確認できます。

![2-4-vehicle-profitability-gnjljt.jpg](https://static-docs.nocobase.com/2-4-vehicle-profitability-gnjljt.jpg)

注文、車両、コンプライアンス、資金データも**運用ダッシュボード**に集約され、管理者が現在の未処理事項、例外、主要な経営指標を確認できます。

💡 関連記事：[NocoBase で連動型の運用ダッシュボードを構築する](https://www.nocobase.com/ja/blog/build-interactive-operations-dashboard-with-nocobase)

![2-4-car-rental-dashboard-zmch8c.jpg](https://static-docs.nocobase.com/2-4-car-rental-dashboard-zmch8c.jpg)

### 2.5 受け入れ基準に沿ってテスト・受け入れ・公開を行う

システム完成後は、1.3 で確認した受け入れ基準に沿ってそのままテストできます。車両スケジュール、状態変更、売掛金生成、例外処理などの重要ルールが想定どおりに動作するかを確認します。

Coding Agent がテストを実行し、見つかった問題を修正します。修正後は影響を受けたフローを再度検証します。重要なルールがすべて通ったら、人が受け入れを完了して公開を承認し、その後 Coding Agent が公開と実行状態の確認を行います。

📃 関連ドキュメント：[バージョン管理 - NocoBase ドキュメント](https://docs.nocobase.com/ja/ai-builder/version-control)

**Coding Agent が実装・テスト → 人が受け入れ・公開を承認 → Coding Agent が公開・実行結果を確認**

この受け入れ基準はそのまま残しておくことができます。後からシステムを変更したときにも同じチェックを再実行し、新しい機能が既存の業務ルールへ影響していないか確認できます。

## 3. システム公開後の利用と継続的な改善

システム公開後、AI は 2 つの異なる場面で使われます。

- **Coding Agent** はアプリの変更、テスト、デリバリーを引き続き担当する。
- **AI 従業員** は稼働中のシステム内で業務データを読み取り、ツールを呼び出して具体的なタスクを処理する。

両者が同じモデルを使うことはできますが、アイデンティティ、権限、作業範囲は分けて管理する必要があります。

### 3.1 AI 従業員が業務コンテキストを使って日常タスクを処理する

車両、注文、スケジュール、支払い、コンプライアンスのデータがシステムに入ると、AI 従業員は認可された範囲内でこれらの業務データを直接利用できます。

💡 関連記事：[内蔵ワークフローと AI 従業員で企業調査を自動化する - NocoBase](https://www.nocobase.com/ja/blog/automate-company-background-research-with-workflows-and-ai-employees)

たとえば、**運用ダッシュボード**では、その日に対応が必要な注文、異常のある車両、現在の売上状況などを照会できます。

![3-1-ai-assistant-operations-dashboard-dfy58k.png](https://static-docs.nocobase.com/3-1-ai-assistant-operations-dashboard-dfy58k.png)

![3-1-sales-pipeline-revenue-report-rsbbf0.png](https://static-docs.nocobase.com/3-1-sales-pipeline-revenue-report-rsbbf0.png)

**車両配車**の場面では、各店舗で利用可能な車両と現在の注文状況をもとに配車案を提示し、最終的には業務担当者が確認できます。

![3-1-dispatch-assistant-9qg1yy.png](https://static-docs.nocobase.com/3-1-dispatch-assistant-9qg1yy.png)

![3-1-dispatch-available-vehicles-0jnoz4.png](https://static-docs.nocobase.com/3-1-dispatch-available-vehicles-0jnoz4.png)

AI 従業員がどのデータを読み取れるか、どのツールを呼び出せるか、具体的な操作を実行できるかどうかは、それぞれの業務権限とツール設定によって決まります。

📃 関連ドキュメント：[AI 従業員の利用権限とデータアクセス権限を制御する方法](https://docs.nocobase.com/ja/ai-employees/permission)

### 3.2 既存システム上で継続的に改善する

システムを本番投入した後も、業務ルールは変化します。たとえば店舗の追加、価格調整、保険チェック方法の変更、新しい支払い方法の導入、経営指標の追加などです。

こうした要件は再び Coding Agent に渡し、既存のデータモデル、ページ、権限、ワークフローを直接変更できます。

たとえば「繁忙期の動的価格設定」を追加したい場合、適用条件、価格ルール、期待する結果を補足するだけです。Coding Agent は既存の車両、注文、価格構造をもとに変更案を提示し、確認後に実装・テストを行い、既存の受け入れ・公開フローに沿ってデリバリーできます。

このように、後続の改善は主に変化した業務部分を中心に進められ、すでに確認済みのデータ関係や業務ルールはそのまま維持できます。

## まとめ

AI + NocoBase の適用範囲は、大規模な企業システムだけに限られません。個人、小規模チーム、業務部門でも、社内ツール、承認アプリ、資産台帳、シンプルな運用システムなど、小さな要件から始めることができます。Coding Agent に既存のアプリケーション基盤を使わせれば、データモデル、ページ、フローを構築できます。

この記事が役に立ったら、AI Coding、企業アプリケーション、業務システム構築に関心のある方にもぜひ共有してください。

AI と NocoBase を使って同様の企業アプリを構築したい場合は、次の実例も参考にできます。

👉 [AI + NocoBase で CRM を構築](https://www.nocobase.com/ja/blog/build-production-ready-crm-with-ai-and-nocobase)

👉 [AI + NocoBase で企業 IT 運用システムを構築](https://www.nocobase.com/ja/blog/build-it-operations-system-with-ai-nocobase)



**関連記事**：

* **[ビジネス向けオープンソース AI Agent プラットフォーム 10 選：自動化から社内アプリまで ](https://www.nocobase.com/ja/blog/open-source-ai-agent-platforms-for-business)**
* **[AI と NocoBase で本番運用できるチケット管理システムを構築する方法](https://www.nocobase.com/ja/blog/build-production-ready-ticketing-system-with-ai)**
* **[在庫管理システム構築比較：純粋な AI 構築 vs NocoBase + AI](https://www.nocobase.com/ja/blog/building-inventory-management-system-vibe-coding-vs-nocobase-ai)**
* **[AI と NocoBase で 2 時間以内に企業 IT 運用システムを構築する方法](https://www.nocobase.com/ja/blog/build-it-operations-system-with-ai-nocobase)**
* **[NocoBase vs Baserow：柔軟なデータベースとエンタープライズ業務システム](https://www.nocobase.com/ja/blog/nocobase-vs-baserow)**
* **[AI と NocoBase で本番運用できる CRM を構築する方法](https://www.nocobase.com/ja/blog/build-production-ready-crm-with-ai-and-nocobase)**
* **[企業向け IT 資産管理システム構築ガイド：要件整理から導入まで](https://www.nocobase.com/ja/blog/enterprise-it-asset-management-system-guide)**
* **[プロジェクト管理と業務フローに使える Smartsheet 代替ツール 7 選](https://www.nocobase.com/ja/blog/best-smartsheet-alternatives)**
* **[複雑なリレーションモデルに適したオープンソース AI ノーコードツール 5 選](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-complex-relational-models)**
* **[AI ノーコードとは？AI 時代のノーコードプラットフォーム実用ガイド](https://www.nocobase.com/ja/blog/what-is-ai-no-code)**
* **[GitHub で注目したい 9 つのオープンソース AI ノーコードツール](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-github-9)**
* **[GitHub で注目したい14のオープンソース AI Agent ツール](https://www.nocobase.com/ja/blog/github-open-source-ai-agent-tools-16)**
* **[GitHub Stars が多い 8 つのオープンソース AI Assistant ツール](https://www.nocobase.com/ja/blog/top-open-source-ai-assistant-tools-github-stars)**
