## 新機能

### フィールド検証ルールの追加

必須・形式・長さ・範囲・カスタム式など、複数の検証ルールをフィールドごとに設定できるようになりました。
フォーム送信時に自動で入力データをチェックし、正確性と一貫性を保証します。
検証ルールはフィールド設定画面から柔軟に構成可能です。

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

参考: [フィールド検証](https://docs.nocobase.com/handbook/data-modeling/collection-fields/validation)

### テーブルブロックの列設定機能

テーブルブロックに列設定機能を追加。
編集モードに入らず、列の順序変更・表示切替・固定位置の設定が行え、データ表示がより柔軟で使いやすくなりました。

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### 承認の「データ保存前トリガー」モード

承認開始時にデータを保存せず、承認が完了した時点で保存される「データ保存前トリガー」モードに対応しました。

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### 承認ID変数の利用対応

承認トリガーで承認ID変数が利用可能になり、ワークフローや自動化処理の中で参照できるようになりました。
これにより、柔軟な設定やデータ追跡が可能になります。

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### 【非同期タスクマネージャ】環境変数・キューによるサービス分離対応

`WORKER_MODE` 環境変数を利用して、非同期タスクやワークフローを独立したサービスとして実行可能に。
マルチノード構成やパフォーマンス最適化に対応します。

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

参考: [サービス分離](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting)

### キューメッセージ専用イベントキューの追加

システムのメッセージ処理用に専用イベントキューを追加し、非同期タスクの処理効率と安定性を強化しました。

参考: [クラスターモード: メッセージキュー](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode#message-queue)

### 安全なシャットダウン対応

アプリケーションが SIGTERM や SIGINT シグナルを受け取った際、実行中の処理を安全に終了できるよう、シャットダウン手順を改善しました。

### プラグイン定義テーブルの表示対応

プラグインで定義されたテーブルがメインデータソース管理画面に表示され、ブロックやワークフローで直接利用できるようになりました。

![image-1pcd91.png](https://static-docs.nocobase.com/image-1pcd91.png)

## 改善点

### システムテーブルのIDをSnowflake型53ビットIDに変更

従来の自動インクリメントIDをグローバルに一意なSnowflake型IDに置き換え、識別の一貫性を確保しました。

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

### 無効化ワークフローのタスクを再開可能に

手動タスクブロックで、無効化されたワークフロー内の保留タスクも表示され、継続して処理できるようになりました。

### メールマネージャの改善

* メールデータの再同期に対応
* エディター内の画像サイズ変更が可能に
* ソフト改行に対応し、レイアウトを改善
* メールリストの動作を最適化し、操作がよりスムーズに

![20251031124117_rec_-qa39pq.gif](https://static-docs.nocobase.com/20251031124117_rec_-qa39pq.gif)

### ワークフローモジュールの最適化

ワークフローキュー実行時の検索性能を改善。
専用フィールドとインデックスの導入により、データ取得速度を向上しました。

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)
