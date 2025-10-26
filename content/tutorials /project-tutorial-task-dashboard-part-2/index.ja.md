<iframe width="800" height="436" src="https://www.youtube.com/embed/TyV-9HHE4e8?si=e6zBGmmYVu4ms-4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

この章では、タスクダッシュボードの次の部分をステップバイステップでガイドします。質問がある場合は、いつでもフォーラムで相談してください。

前の章の内容を振り返りながら、この探求の旅を始めましょう！

### 10.1 前の章の解答を明らかにする

#### 10.1.1 ステータスとリンク

まず、異なるステータスのデータにナビゲーションリンクを追加して、迅速なアクセスを可能にする必要があります。各ステータスのリンク構造は以下の通りです：

（基本リンクは `http://xxxxxxx/admin/hliu6s5tp9xhliu6s5tp9x` と仮定）

##### 謎が解けました


| ステータス | リンク                                                 |
| ---------- | ------------------------------------------------------ |
| 未開始     | hliu6s5tp9xhliu6s5tp9x?task_status=Not started</br>    |
| 進行中     | hliu6s5tp9xhliu6s5tp9x?task_status=In progress</br>    |
| 審査待ち   | hliu6s5tp9xhliu6s5tp9x?task_status=To be reviewed</br> |
| 完了       | hliu6s5tp9xhliu6s5tp9x?task_status=Completed</br>      |
| キャンセル | hliu6s5tp9xhliu6s5tp9x?task_status=Cancelled</br>      |
| アーカイブ | hliu6s5tp9xhliu6s5tp9x?task_status=Archived</br>       |

#### 10.1.2 複数選択肢を追加する

1. **[カスタムフィールド](https://docs-jp.nocobase.com/handbook/data-visualization/user/filter#custom-fields)を作成：** 「アサイナー」というタイプの「マルチセレクト」フィールドを追加し、メンバーのニックネーム（またはユーザー名）で埋めて、タスクの迅速な割り当てを促進します。

![](https://static-docs.nocobase.com/20241208173834.png)

2. **レポートを設定：** 「タスクアサイナー/ニックネーム（ユーザー名）- 現在のフィルター/アサイナーを含む」としてフィルター条件を設定し、選択したアサイナーに関連するタスクを迅速に特定します。

![](https://static-docs.nocobase.com/20241208173923.png)

いくつかのフィルターテストを実施して、正常に機能することを確認してください。

![](https://static-docs.nocobase.com/Solution/202411162152471731765167.png)

---

### 10.2 ダッシュボードとユーザーを関連付ける

コンテンツは異なるユーザーに基づいて表示できます。方法は以下の通りです：

1. **「アサイナー」フィールドのデフォルト値を「現在のユーザー/ニックネーム」に設定：** これにより、システムは自動的に現在のユーザーに関連するタスクを表示し、操作効率が向上します。

![](https://static-docs.nocobase.com/Solution/202411162154021731765242.png)

![](https://static-docs.nocobase.com/20241208174104.png)

2. **ページをリフレッシュ後：** ダッシュボードは自動的に現在ログインしているユーザーに関連するデータをロードします。（関連するチャートにユーザーフィルター条件を追加することを忘れないでください。）

![](https://static-docs.nocobase.com/Solution/202411162156031731765363.png)

---

### 10.3 タスクフィルタリングの再設計

一部のユーザーはデザインの欠陥に気付くかもしれません：
テーブルブロックの「データ範囲を設定」でステータスで直接フィルタリングすると、タスクが特定のステータスに早期に制限されます。後で異なるステータスでフィルタリングしようとすると、データが空になります！

これを解決するためにフィルタリングアプローチを変更します：

1. **データフィルタリング方法を削除：** ステータスデータが特定の範囲にロックされないようにし、柔軟なフィルタリングニーズを可能にします。

![](https://static-docs.nocobase.com/20241208110747.png)

2. **フィルタリングフォームブロックでデフォルト値を設定：**

私たちが設定した[フィルターブロック](https://docs-jp.nocobase.com/handbook/ui/blocks/filter-blocks/form)を覚えていますか？

タスクテーブルフィルタリングブロックのためのフォームブロックを作成し、**ステータス**と他の必要なフィールドを設定して、URLからの変数を埋めます。（フィルタリングが必要なタスクテーブルブロックに接続されていることを確認してください。）

- ステータスフィールドのデフォルト値を`URL search params/task_status`に設定します。

![](https://static-docs.nocobase.com/20241207125145.png)

![](https://static-docs.nocobase.com/20241207125234.png)

3. **新しいフィルタリング機能をテスト：** 必要に応じてステータスフィルターを動的に切り替えます。

![](https://static-docs.nocobase.com/Solution/demoE2v1-5.gif)

- **オプション：** 各ユーザーを自分のタスクに集中させるために、「アサイナー」フィールドのデフォルト値を「現在のユーザー」に設定します。

---

### 10.4 ニュース、通知、情報のハイライト

ドキュメントライブラリを強化して、ダッシュボードに重要な情報を表示しましょう。

長期的なドキュメント管理では、資料の量が増えるにつれて多様な要求が出てくることがよくあります：

- **ニュース：** プロジェクトの更新、成果、マイルストーンを強調します。
- 一時的なお知らせ/リマインダー。

#### 10.4.1 ホット情報（ニュース）

1. **「ホット情報」フィールドを追加：** ドキュメントテーブルに「ホット情報」というチェックボックスフィールドを追加して、ドキュメントが重要なニュースかどうかをマークします。

![](https://static-docs.nocobase.com/Solution/202411162238041731767884.png)

2. **ドキュメント情報を追加して選択：** ドキュメントを選択し、編集フォームで「ホット情報」チェックボックスを有効にします。

![](https://static-docs.nocobase.com/Solution/202411162249441731768584.png)

3. **「リスト」ブロックを作成：** ダッシュボードに戻り、[「リスト」ブロック](https://docs-jp.nocobase.com/handbook/ui/blocks/data-blocks/list)を作成して、ドキュメントテーブルを表示します。

![](https://static-docs.nocobase.com/Solution/202411162251511731768711.png)

右側にドラッグし、「作成日」と「タイトル」を表示します。フィールドの幅を調整し、「タイトルを表示」を無効にします。

![](https://static-docs.nocobase.com/Solution/202411162256121731768972.png)

4. **ホット情報を表示：**

リアルタイムを反映させるために、同時に時間を表示できます。

![](https://static-docs.nocobase.com/Solution/202411162257111731769031.png)

![](https://static-docs.nocobase.com/Solution/202411162257591731769079.png)

作成日で降順に並べ替え、最新のニュースを表示します。

![](https://static-docs.nocobase.com/Solution/202411162301051731769265.png)

![](https://static-docs.nocobase.com/Solution/202411162301451731769305.png)

シンプルなホット情報セクションが準備できました。チームメンバーは重要なプロジェクトの進捗を追跡できます！

![](https://static-docs.nocobase.com/Solution/202411162303341731769414.png)

#### 10.4.2 お知らせ通知

次のステップは、簡単なお知らせ機能を作成することです。この一時的な通知は、長期間表示する必要はなく、プロジェクトの追跡も必要ありません。一時的な事柄についてのリマインダーやアラートのためだけです。

1. **[Markdownブロック](https://docs-jp.nocobase.com/handbook/ui/blocks/other-blocks/markdown)を作成：** ダッシュボードの任意のエリアにMarkdown構文を使用してお知らせコンテンツを追加します。

![](https://static-docs.nocobase.com/Solution/202411162309281731769768.png)

Markdownの実際の使用については、公式デモ、公式ドキュメント、または[「軽量ドキュメント」チュートリアル](https://www.nocobase.com/ja/tutorials)を参照できます。

簡単な例として、HTML言語に基づいて書かれた「素晴らしいお知らせ」を使用して、[Markdownブロック](https://docs-jp.nocobase.com/handbook/ui/blocks/other-blocks/markdown)のパワーを示します。

- サンプルコード：

```html
<div style="font-family: 'Arial', sans-serif; background-color: #e9f5ff; margin: 10px; padding: 10px; border: 2px solid #007bff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
    <h1 style="color: #007bff; text-align: center; font-size: 1.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">重要なお知らせ</h1>
    <p style="font-size: 0.8em; line-height: 1.2; color: #333;">親愛なる同僚の皆様：</p>
    <p style="font-size: 0.8em; line-height: 1.2;">業務効率を向上させるために、全スタッフ研修を <span style="color: red; font-weight: bold; font-size: 1.2em;">2024年11月10日</span> に実施します。</p>
    <p style="font-size: 0.8em; line-height: 1.2; font-style: italic;">ご協力ありがとうございます！</p>
    <p style="font-size: 0.8em; line-height: 1.2;">よろしくお願いします</p>
    <p style="font-size: 0.8em; line-height: 1.2;">管理チーム</p>
</div>
```

![](https://static-docs.nocobase.com/20241207110641.png)

**要約：**

### 10.5 まとめ

上記の設定手順に従って、チームメンバーが効率的にタスクを管理し、プロジェクトの進捗を監視し、タイムリーにお知らせや通知を受け取ることができるパーソナライズされたダッシュボードを成功裏に作成しました。

ステータスフィルタリングやアサイナー設定からホット情報の表示まで、これらの機能はユーザー体験を最適化し、システムの利便性と柔軟性を向上させることを目的としています。

私たちのパーソナライズされたダッシュボードが準備できたので、ぜひ探索し、ユニークなニーズに合わせて適応させてください。[次の章](https://www.nocobase.com/ja/tutorials/project-tutorial-subtasks-and-work-hours-calculation)に進みましょう！

---

さあ、探求を続け、無限の可能性を創造しましょう！途中で問題に遭遇した場合は、[NocoBaseのドキュメント](https://docs-jp.nocobase.com/)や[NocoBaseコミュニティ](https://forum.nocobase.com/)に参加してディスカッションやサポートを受けることを忘れないでください。
