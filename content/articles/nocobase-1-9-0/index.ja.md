## 新機能

### フィールド検証ルール

フィールドごとに必須、形式、長さ、範囲、カスタム式など複数の検証ルールを設定可能に。
フォーム送信時に自動で入力データを検証し、正確性と一貫性を確保します。
ルール設定はフィールド設定画面から柔軟に行えます。

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

参考：[フィールド検証](https://docs.nocobase.com/handbook/data-modeling/collection-fields/validation)

### テーブルブロックのカラム設定機能

テーブルブロックにカラム設定機能を追加。
編集モードに入らず、カラムの順序変更・表示切り替え・固定が可能になり、データの閲覧性が大幅に向上しました。

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### 承認の「データ保存前トリガー」モード

承認機能が「データ保存前トリガー」モードに対応。
承認開始時にはデータが保存されず、承認完了後に保存されるようになりました。

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### 承認ID変数の利用対応

承認トリガーで承認ID変数を参照できるようになり、ワークフローや自動処理の設定がさらに柔軟になりました。

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### 【非同期タスクマネージャー】環境変数によるサービス分離に対応

`WORKER_MODE`環境変数を使って、非同期タスクやワークフローサービスを独立稼働させる新方式を導入。
マルチノード展開や性能最適化をより容易にします。

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

参考：[サービス分離](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting)

### 新しいイベントキューを追加

システムメッセージ処理専用のイベントキューを追加し、非同期タスクの信頼性と処理効率を強化しました。

参考：[クラスターモード：メッセージキュー](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode#message-queue)

### 安全なシャットダウンに対応

アプリケーションが SIGTERM や SIGINT シグナルを受信した際、実行中の処理を安全に終了するためのシーケンスを自動実行するようになりました。

## 改善点

### システムテーブルIDを53ビットSnowflake形式に変更

自動採番だったシステムテーブルの主キーを、グローバルで一意な53ビットSnowflake形式IDに変更しました。

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

### 無効化ワークフローのタスク再開対応

無効化されたワークフロー内の保留タスクも一覧表示され、引き続き処理を進めることができます。

### メールマネージャーの強化

* メールデータの再同期に対応
* 挿入画像のサイズ変更が可能
* ソフト改行対応で整形しやすく改善
* メール一覧の動作を最適化し、操作がよりスムーズに

![20251031234300_rec_-jifryr.gif](https://static-docs.nocobase.com/20251031234300_rec_-jifryr.gif)

### ワークフローのパフォーマンス最適化

ワークフローキュー処理を高速化するため、専用フィールドとインデックスを導入し、クエリ性能を改善しました。

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)
