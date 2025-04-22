## 1. Dockerイメージをダウンロードする

ローカルターミナルで以下のコマンドを実行します：

```bash
docker pull registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 2. Dockerイメージをtarファイルとして保存する

ダウンロードが完了したら、以下のコマンドを実行してイメージをtarファイルとして保存します：

```bash
docker save -o nocobase-latest.tar registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 3. tarファイルをサーバーにアップロードする

ローカルターミナルで以下のコマンドを実行して、`nocobase-latest.tar`をサーバーにアップロードします：

```bash
scp nocobase-latest.tar user@ip:/home/user/
```

## 4. サーバーでDockerイメージをロードする

SSHを介してサーバーに接続し、Dockerイメージをロードします：

```bash
ssh user@ip
docker load -i /home/user/nocobase-latest.tar
```

これらの手順を完了すると、Dockerイメージが内部サーバーに正常にインポートされます。