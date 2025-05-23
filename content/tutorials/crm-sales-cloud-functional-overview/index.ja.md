本章では、システムを業務機能に基づいて複数のモジュールに分割しています。各モジュールの主要な機能および対応するデータ構造について詳細に記述します。本ソリューションは、ビジネスプロセスの円滑な実行を最優先すると同時に、合理的なデータ保存とシステムのスケーラビリティも考慮しています。

---

## 1. リード管理

### 機能概要

リード管理モジュールは、潜在顧客情報の取得および管理を担当します。システムはウェブサイト、電話、メールなどの各種チャネルを通じてリードを取得し、ステータス更新、フォローアップの追跡、及び備考の追加機能を提供します。リード変換プロセスにおいては、システムが自動的に重複エントリーをチェックし、適切なリードを顧客、連絡先、商談へと変換します。

### 関連データテーブル

- **リード（リードテーブル）**
  氏名、連絡先、ソース、現在のステータス、備考など、基本的なリード情報を保存します。また、各リードの作成日時および更新ログを記録し、後の分析や統計処理を支援します。

---

## 2. アカウント・連絡先管理

### 機能概要

本モジュールは、ユーザーが顧客プロファイルを構築し維持するために設計されています。企業は会社名、業種、住所、その他の重要な情報を記録するとともに、関連する連絡先（氏名、役職、電話番号、メールアドレス等）の管理が可能です。システムは顧客と連絡先の間で1対多または多対多の関係をサポートし、完全かつ同期されたデータ管理を実現します。

### 関連データテーブル

- **アカウント（顧客テーブル）**
  基本的な企業情報およびその他のビジネス関連データを含む、詳細な顧客プロファイルを保存します。
- **連絡先（連絡先テーブル）**
  顧客に紐付く個人情報を保存し、顧客テーブルとの外部キー関係を確立することでデータの一貫性を保証します。

### リード変換フローチャート

![20250225211802](https://static-docs.nocobase.com/20250225211802.png)

リードキャプチャ → リードフォローアップ（ステータス更新） → リード検証 → アカウント、連絡先、商談への変換

---

## 3. 商談管理

### 機能概要

商談管理モジュールは、リードまたは既存の顧客情報を営業機会に変換することに重点を置いています。ユーザーは、予想クローズ日、現在のステージ、見積金額、成功確率などの詳細を記録でき、システムは営業ステージの動的な管理をサポートします。さらに、商談が失注した場合には詳細な理由を記録し、将来の営業戦略の最適化に寄与します。また、本モジュールでは、1つの商談に対して複数の商品を関連付け、合計金額を自動的に計算する機能を提供します。

### 関連データテーブル

- **商談（商談テーブル）**
  各営業機会の詳細情報（クローズ日、営業ステージ、見積金額など）を記録します。
- **商談明細（商談明細テーブル）**
  商談に関連する具体的な商品情報（商品ID、数量、単価、割引等）を保存し、自動計算による金額集計をサポートします。

### 変換プロセス

商談作成 → 商談管理（ステージ更新） → 見積生成 → 顧客承認 → 受注作成 → 注文実行およびステータス更新

---

## 4. 商品及び価格表管理

### 機能概要

本モジュールは、商品情報および価格戦略の管理を担当します。システムは、商品コード、名称、説明、在庫、価格といった基本的な商品詳細を取得し、複数の価格モデルの設定をサポートします。商品と価格表を関連付けることで、異なる市場や顧客セグメント向けの柔軟な価格管理を可能にします。

### 関連データテーブル

- **商品（商品テーブル）**
  全商品の詳細情報を保存し、見積や注文作成のための基礎データを提供します。
- **価格表（価格表テーブル）**
  各種の価格モデルおよび対応する商品を管理し、ビジネスニーズに応じた動的な価格戦略の調整をサポートします。

---

## 5. 見積管理

### 機能概要

見積管理モジュールは、既存の商談から正式な見積書を生成し、有効期間、割引、税率、合計金額などの詳細を記録します。システムは内部承認プロセスを採用し、管理者が見積書を確認・調整できるようにします。各見積書には複数の商品明細が含まれ、正確な計算が保証されます。

### 関連データテーブル

- **見積（見積テーブル）**
  関連する商談、見積の有効期間、割引、税率、および全体のステータスなど、基本的な見積情報を記録します。
- **見積明細（見積明細テーブル）**
  各見積書に含まれる商品の詳細データを保存し、個別の金額および見積総額を自動計算します。

---

## 6. 受注管理

### 機能概要

受注管理モジュールは、承認済みの見積書を基に受注を作成し、受注のライフサイクル全体（作成から完了まで）を追跡します。ユーザーは注文のステータス、承認記録、物流および出荷の詳細をリアルタイムで確認し、注文実行プロセスの管理をより円滑に行えます。

### 関連データテーブル

- **受注（受注テーブル）**
  見積書に関連付けられた注文の詳細情報、注文ステータス、承認記録、出荷ステータス、及び作成日時を記録します。

---

## 7. アクティビティ管理

### 機能概要

アクティビティ管理モジュールは、営業チームの日常スケジュール管理を支援します。タスク、会議、通話などの活動内容、参加者、および関連する備考を記録し、スケジュール管理やリマインダー機能を提供することで、各活動が計画通りに進行することを保証します。

### 関連データテーブル

- **アクティビティ（活動記録テーブル）**
  タスク、会議、通話の記録を保存し、活動の種類、日付、参加者、及び関連する顧客または商談情報を記録します。

---

## 8. レポートと分析

### 機能概要

本モジュールは、多次元データ分析とグラフィカルなプレゼンテーションを活用して、企業がリアルタイムで販売実績やビジネス転換状況を把握するのに役立ちます。システムは、セールスファネル、転換率分析、及び業績レポートの生成をサポートし、経営判断のためのデータ提供を実現します。

### 注意事項

専用のレポート・分析用データテーブルは存在しませんが、本モジュールは前述の各モジュールに記録されたデータを活用し、データの集約と分析を通じてリアルタイムのフィードバックおよびトレンド予測を可能にします。

---

## 9. マーケティングキャンペーン管理（オプションモジュール）

### 機能概要

マーケティングキャンペーン管理モジュールは、補助的な機能としてマーケティング活動の計画および追跡を主に行います。システムは、キャンペーンの企画、予算策定、実行プロセス、そして実績評価を記録し、リード転換率や投資収益率（ROI）を追跡することでマーケティング施策へのデータサポートを提供します。

### 注意事項

本モジュールのデータ構造は、実際の要件に応じて拡張可能です。現状では、主にマーケティングキャンペーンの実行詳細を記録し、リード管理モジュールのデータを補完する形となっています。
