---
title: "如何將 Docker 映像上傳至內網伺服器"
description: "本文引導用戶如何在 NocoBase 中載入 Docker 映像，以實現輕鬆的實例遷移和離線部署。"
---

## 1. 下載 Docker 映像檔

在本地終端機中執行以下指令：

```bash
docker pull registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 2. 將 Docker 映像檔儲存為 tar 檔案

下載完成後，執行以下指令將映像檔儲存為 tar 檔案：

```bash
docker save -o nocobase-latest.tar registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 3. 將 tar 檔案上傳至伺服器

在本地終端機中執行以下指令，將 `nocobase-latest.tar` 上傳至伺服器：

```bash
scp nocobase-latest.tar user@ip:/home/user/
```

## 4. 在伺服器上載入 Docker 映像檔

透過 SSH 連線至伺服器，並載入 Docker 映像檔：

```bash
ssh user@ip
docker load -i /home/user/nocobase-latest.tar
```

完成以上步驟後，Docker 映像檔即成功匯入內部伺服器。
