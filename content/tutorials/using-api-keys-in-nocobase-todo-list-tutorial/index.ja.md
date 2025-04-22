皆さん、こんにちは。このチュートリアルへようこそ。本ドキュメントでは、NocoBaseで[APIキー](https://docs-jp.nocobase.com/handbook/api-keys)を使用してデータを取得する方法を、To Dosの例を用いながら一歩ずつご説明します。以下の内容をよくお読みいただき、指示に従ってください。

![202503032004-todo1](https://static-docs.nocobase.com/202503032004-todo1.gif)

## 1 APIキーの概念の理解

始める前に、まずAPIキーとは何かを理解することが重要です。APIキーは、APIリクエストが認証済みのユーザーからのものであるかを確認する入場券のような役割を果たします。ウェブサイト、モバイルアプリ、またはバックエンドスクリプトを通じてNocoBaseシステムにアクセスする際、この「シークレットキー」によって、あなたの身元が迅速に確認されます。

HTTPリクエストヘッダーでは、次のような形式が使用されます:

```txt
Authorization: Bearer {API key}
```

ここで「Bearer」は、その後に続くものが認証済みのAPIキーであることを示し、システムがリクエスト送信者の権限を迅速に確認できるようにします。

実際には、APIキーは以下のようなシナリオで一般的に利用されます:

1. **クライアントサイドアプリケーションからのアクセス**: ユーザーがウェブブラウザやモバイルアプリを通じてAPIにアクセスする際、システムはAPIキーを使ってユーザーの身元を確認し、認可されたユーザーのみがデータを取得できるようにします。
2. **自動タスクの実行**: バックグラウンドでスケジュールされたタスクやスクリプトは、アップデートやログ記録の操作が安全かつ許可されたものであることを確認するためにAPIキーを利用します。
3. **開発とテスト**: 開発者は、デバッグやテストの際に実際のリクエストをシミュレートし、インターフェースが正しく応答するかを確認するためにAPIキーを使用します。

要するに、APIキーはリクエスト送信者の身元確認に役立つだけでなく、利用状況の監視、リクエスト頻度の制限、潜在的なセキュリティ脅威の防止にも寄与し、NocoBaseの安定した運用を支えます。

## 2 NocoBaseでの[APIキー](https://docs-jp.nocobase.com/handbook/api-keys)の作成方法

### 2.1 Auth: API Keysプラグインの有効化

まず、NocoBaseに組み込まれているAuth: API Keysプラグインが有効になっていることを確認してください。有効化されると、システム設定センターにAPIキー用の新しい設定ページが表示されます。

![20250301003106](https://static-docs.nocobase.com/20250301003106.png)

### 2.2 テスト用To Dosコレクションの作成

テスト目的で、次のフィールドを持つ `todos` （To Dosコレクション）という名前のコレクションを作成してください:

- `id`
- `title`
- `completed`

![20250303175632](https://static-docs.nocobase.com/20250303175632.png)

次に、以下のようなサンプルのTo Doをコレクションに追加します:

- 食事をする
- 眠る
- ゲームをする

![20250303180044](https://static-docs.nocobase.com/20250303180044.png)

### 2.3 ロールの作成と結合 (中文：创建并绑定角色)

[APIキー](https://docs-jp.nocobase.com/handbook/api-keys)はユーザーロールに紐付けられているため、システムはロールに基づいてリクエストの権限を判断します。（中文：由于 API 密钥与用户角色是绑定的，系统会根据角色判断请求的权限。）したがって、APIキーを作成する前に、ロールを新規作成し、適切な権限を割り当てる必要があります。（中文：因此，在创建 API 密钥前，我们需要先创建一个角色并分配相应权限。）テスト用として「To Dos API」（中文：待办API角色）というロールを作成し、このロールにTo Dosコレクションの全権限を割り当てることを推奨します。（中文：建议创建一个叫 “待办API角色” 的测试角色，给该角色分配待办记录表的所有权限。）

![20250303180247](https://static-docs.nocobase.com/20250303180247.png)

もし[APIキー](https://docs-jp.nocobase.com/handbook/api-keys)作成時に「To Dos API」（中文：待办系统API角色）が表示されない場合は、現在のユーザーにそのロールが割り当てられていない可能性があります。（中文：如果在创建 API 密钥时无法选择 “待办系统API角色”，可能是因为当前用户尚未拥有该角色。）その場合は、現在のユーザーにこのロールを割り当ててください:（中文：此时，请先为当前用户分配此角色：）

![20250303180638](https://static-docs.nocobase.com/20250303180638.png)

ロールを割り当てた後、ページを更新しAPIキー管理ページに移動してください。（中文：分配角色后，刷新页面，进入 API 密钥管理页面）「Add API Key」をクリックすると、「To Dos API」（中文：待办系统API角色）が表示されるはずです。（中文：你就可以看到 “待办系统API角色” 已经出现了。）

![20250303180612](https://static-docs.nocobase.com/20250303180612.png)
![20250303180936](https://static-docs.nocobase.com/20250303180936.png)

### 2.4 [APIキー](https://docs-jp.nocobase.com/handbook/api-keys)の作成と保存

送信ボタンをクリックすると、システムは[APIキー](https://docs-jp.nocobase.com/handbook/api-keys)が正常に作成されたことを示すプロンプトを表示し、キーがポップアップに表示されます。セキュリティ上の理由から、キーは再表示されないため、必ずコピーして保存してください。

![20250303181130](https://static-docs.nocobase.com/20250303181130.png)

例として、以下のようなAPIキーが発行される場合があります:

```txt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVOYW1lIjoidG9kb3MiLCJpYXQiOjE3NDA5OTY1ODAsImV4cCI6MzMyOTg1OTY1ODB9.tXF2FCAzFNgZFPXqSBbWAfEvWkQwz0-mtKnmOTZT-5M
```

### 2.5 注意事項

- [APIキー](https://docs-jp.nocobase.com/handbook/api-keys)の有効期間は、申請時に選択した期間に依存します。
- [APIキー](https://docs-jp.nocobase.com/handbook/api-keys)の生成および検証は `APP_KEY` 環境変数と密接に連携しています。これを任意に変更すると、システム内の全てのAPIキーが無効になるため、注意してください。

## 3 [APIキー](https://docs-jp.nocobase.com/handbook/api-keys)の有効性のテスト

### 3.1 [APIドキュメント](https://docs-jp.nocobase.com/handbook/api-doc)プラグインの使用

APIドキュメントプラグインを開くと、各APIのリクエストメソッド、URL、パラメータ、ヘッダー情報を確認することができます。

![20250303181522](https://static-docs.nocobase.com/20250303181522.png)
![20250303181704](https://static-docs.nocobase.com/20250303181704.png)

### 3.2 基本的なCRUD APIの理解

以下は、NocoBaseが提供する基本的なAPIの例です:

- **一覧取得（list API）：**

  ```txt
  GET {baseURL}/{collectionName}:list
  Request Header:
  - Authorization: Bearer <API key>

  ```
- **レコード作成（create API）：**

  ```txt
  POST {baseURL}/{collectionName}:create

  Request Header:
  - Authorization: Bearer <API key>

  Request Body (in JSON format), for example:
      {
          "title": "123"
      }
  ```
- **レコード更新（update API）：**

  ```txt
  POST {baseURL}/{collectionName}:update?filterByTk={id}
  Request Header:
  - Authorization: Bearer <API key>

  Request Body (in JSON format), for example:
      {
          "title": "123",
          "completed": true
      }
  ```
- **レコード削除（delete API）：**

  ```txt
  POST {baseURL}/{collectionName}:destroy?filterByTk={id}
  Request Header:
  - Authorization: Bearer <API key>
  ```

ここで、`{baseURL}`はあなたのNocoBaseシステムのURL、`{collectionName}`はコレクション名を表します。例えば、ローカルでテストする場合、アドレスが`localhost:13000`でコレクション名が`todos`なら、リクエストURLは次のようになります:

```txt
http://localhost:13000/todos:list
```

### 3.3 Postmanを使用したテスト（List APIの例）

Postmanを開き、新しいGETリクエストを作成し、上記のリクエストURLを入力してください。そして、`Authorization`ヘッダーにあなたのAPIキーを以下のように設定します:

```txt
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVOYW1lIjoidG9kb3MiLCJpYXQiOjE3NDA5OTY1ODAsImV4cCI6MzMyOTg1OTY1ODB9.tXF2FCAzFNgZFPXqSBbWAfEvWkQwz0-mtKnmOTZT-5M
```

![20250303182744](https://static-docs.nocobase.com/20250303182744.png)
リクエスト送信後、設定が正しければ次のようなレスポンスが返されるはずです:

```json
{
    "data": [
        {
            "createdAt": "2025-03-03T09:57:36.728Z",
            "updatedAt": "2025-03-03T09:57:36.728Z",
            "completed": null,
            "createdById": 1,
            "id": 1,
            "title": "eat food",
            "updatedById": 1
        }
    ],
    "meta": {
        "count": 1,
        "page": 1,
        "pageSize": 20,
        "totalPage": 1
    }
}
```

もしAPIキーが正しく認証されていない場合、次のようなエラーメッセージが表示されるかもしれません:

```json
{
    "errors": [
        {
            "message": "Your session has expired. Please sign in again.",
            "code": "INVALID_TOKEN"
        }
    ]
}
```

その場合は、ロールの権限、APIキーのバインド、およびキーの形式が正しいことを確認してください。

### 3.4 Postmanからリクエストコードをコピーする

テストが成功したら、List APIのリクエストコードをコピーすることができます。例えば、以下のcurlリクエストの例はPostmanからコピーされたものです:

```txt
curl --location 'http://localhost:13000/api/todos:list' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVOYW1lIjoidG9kb3MiLCJpYXQiOjE3NDA5OTY1ODAsImV4cCI6MzMyOTg1OTY1ODB9.tXF2FCAzFNgZFPXqSBbWAfEvWkQwz0-mtKnmOTZT-5M'
```

![20250303184912](https://static-docs.nocobase.com/20250303184912.png)
![20250303184953](https://static-docs.nocobase.com/20250303184953.png)

// Start of Selection

## 4 [iframe ブロック](https://docs-jp.nocobase.com/handbook/block-iframe)上でTo Dosを表示する

APIリクエストの効果を視覚的に示すために、シンプルな[iframe ブロック](https://docs-jp.nocobase.com/handbook/block-iframe)を使用してNocoBaseから取得したTo Dosのリストを表示することができます。以下のサンプルコードを参照してください:<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
</head>
<body>
    <h1>Todo List</h1>
    <pre id="result"></pre>

<script>
    fetch('http://localhost:13000/api/todos:list', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVOYW1lIjoidG9kb3MiLCJpYXQiOjE3NDA5OTY1ODAsImV4cCI6MzMyOTg1OTY1ODB9.tXF2FCAzFNgZFPXqSBbWAfEvWkQwz0-mtKnmOTZT-5M'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
</script>

</body>
</html>

上記のコードは、ブラウザ上にシンプルな「Todo List」を表示します。ページ読み込み時にAPIを呼び出してTo Dosを取得し、フォーマットされたJSON形式で結果を表示します.

さらに、以下のアニメーションはリクエストの動的なプロセスを示しています:

![202503031918-fetch](https://static-docs.nocobase.com/202503031918-fetch.gif)

## 5 結論

以上の手順を通じて、NocoBaseにおける[APIキー](https://docs-jp.nocobase.com/handbook/api-keys)の作成と使用方法について詳細に説明しました。プラグインの有効化、コレクションの作成、ロールの結合、APIのテスト、[iframe ブロック](https://docs-jp.nocobase.com/handbook/block-iframe)でのデータ表示の各ステップが重要です。最後に、DeepSeekの助けを借りてシンプルなTo Dosページが作成されました。必要に応じて、コードを自由に修正・拡張してください。

![202503031942-todo](https://static-docs.nocobase.com/202503031942-todo.gif)

[このサンプルページのコード](https://forum.nocobase.com/t/todo-1-0-api/3316)は、当コミュニティの投稿でもご確認いただけます。皆様からのフィードバックやご意見をお待ちしております。本ドキュメントが明確な指針となり、快適な学習とスムーズな運用の一助となれば幸いです.
