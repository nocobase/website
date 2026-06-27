---
title: "如何備份與還原 NocoBase"
description: "新版本中該如何處理備份與還原？本文將詳細介紹新的備份方案。"
---

## 背景

從 NocoBase v0.19 開始，我們推出了 `@nocobase/plugin-backup-restore` 外掛，用於應用程式的備份與還原。然而實際使用體驗並不理想，主要存在以下問題：

1. 外掛不支援備份與還原資料庫層級的中繼資料，例如預設值、唯一索引等。
2. 資料庫的檢視表、預存程序、函數、觸發器等元件無法備份或還原。
3. 每個外掛表單都需要單獨設定 `dumpRules`，外掛開發者可能需要實作自訂邏輯，否則備份與還原容易失敗。
4. 備份分組設計複雜，學習門檻高，選擇不當可能導致備份失敗或資料遺失。
5. 備份與還原過程在應用層執行，若應用程式無法啟動，備份或還原也會失敗。

經過審慎評估，從 v1.4 版本開始，我們決定棄用此外掛。那麼新版本該如何處理備份與還原呢？本文將詳細介紹新的備份方案。

## 應該備份哪些資料？

在 NocoBase 的備份與還原過程中，主要涉及以下幾類資料：

* **主資料庫資料**：支援的主資料庫類型包括 PostgreSQL、MySQL、MariaDB 及 KingbaseES。
* **外部資料庫資料**：支援的外部資料庫類型包括 PostgreSQL、MySQL、MariaDB、MSSQL、Oracle 及 KingbaseES。
* **子應用程式資料庫資料**：每個子應用程式都是一個獨立的資料庫。若使用 PostgreSQL，也可透過 schema 區分不同子應用程式。
* **儲存目錄資料**：可備份整個資料夾，或僅備份特定重要資料，例如：
  * **附件資料**：`./storage/uploads` 目錄下的檔案，即檔案管理器的本地儲存位置。
  * **外掛程式碼**：`./storage/plugins` 目錄下的外掛，包含商業外掛與第三方外掛。

## 備份與還原流程

### 1. 備份資料庫資料

不同資料庫的備份指令如下：

#### PostgreSQL

```bash
pg_dump -U [使用者名稱] -h [主機] -p [埠號] -F c -b --quote-all-identifiers -f [備份檔案路徑] [資料庫名稱]
```

#### MySQL/MariaDB

```bash
mysqldump -u [使用者名稱] -p -h [主機] -P [埠號] --databases [資料庫名稱] --replace --single-transaction --column-statistics=0 --skip-lock-tables --routines --triggers > [備份檔案路徑].sql
```

### 2. 將備份還原至目標應用程式的資料庫

不同資料庫的還原指令如下：

#### PostgreSQL

```bash
pg_restore -U [使用者名稱] -h [主機] -p [埠號] -d [資料庫名稱] --clean --if-exists --no-owner [備份檔案路徑]
```

#### MySQL/MariaDB

```bash
mysql -u [使用者名稱] -p -h [主機] -P [埠號] [資料庫名稱] < [備份檔案路徑].sql
```

### 3. 用備份儲存覆蓋目標應用程式的儲存

```bash
# 1. 將 /app2/storage/ 目錄備份至 /app2/storage-bak/
mv /app2/storage /app2/storage-bak

# 2. 將 /app1/storage/ 的所有內容複製到 /app2/storage/
cp -r /app1/storage/. /app2/storage/
```

### 4. 執行升級指令並啟動應用程式

```bash
# 升級應用程式
yarn nocobase upgrade

# 在正式環境啟動應用程式
yarn start

# 在本機開發環境啟動應用程式
yarn dev
```

注意：

* 若使用 Docker，只需重新啟動容器即可。

## 備份管理器外掛

從 NocoBase v1.4 開始，Professional 或 Enterprise 版本使用者可直接使用全新的 [備份管理器](https://docs.nocobase.com/handbook/backups) 外掛，輕鬆管理應用程式資料的備份與還原。
