---
title: "NocoBase 0.14：全新插件管理器，支援透過 UI 新增插件"
description: "NocoBase 0.14 推出全新插件管理器，可透過 UI 新增插件，支援從 npm 註冊表下載、本機上傳及 URL 下載，提升插件管理靈活性。"
---

此版本讓外掛可在正式環境中即插即用。您現在可以直接透過 UI 新增外掛，並支援從 npm 註冊表（可為私有）、本機上傳及網址下載。

## 新功能

### 全新外掛管理介面

![全新外掛管理介面](https://static-docs.nocobase.com/7d750847f55504f346d2a85968f88102.webp)

### 上傳的外掛位於 storage/plugins 目錄

storage/plugins 目錄用於上傳外掛，並以 npm 套件形式組織。

```
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /@foo/
      |- /bar/
    |- /my-nocobase-plugin-hello/
```

### 外掛更新

目前僅能更新 storage/plugins 下的外掛，如下所示：

![外掛更新](https://static-docs.nocobase.com/af75d05d6e2c04222dbfd2b7f9009daf.gif)

注意：為方便維護與升級，並避免因升級導致 storage 外掛無法使用，您可以直接將新外掛放入 storage/plugins，再執行升級操作。

## 不相容的變更

### 外掛名稱的變更

* 不再提供 PLUGIN\_PACKAGE\_PREFIX 環境變數。
* 外掛名稱與套件名稱統一，舊的外掛名稱仍可作為別名存在。

### pm.add 的改進

```
# 使用 packageName 取代 pluginName，在本機查找，找不到則報錯
pm add packageName

# 僅在提供 registry 時從遠端下載，也可指定版本
pm add packageName --registry=xx --auth-token=yy --version=zz

# 也可提供本機 zip 檔，可多次新增，並以最後一次取代
pm add /a/plugin.zip

# 遠端 zip 檔，以同名取代
pm add http://url/plugin.zip
```

### Nginx 配置變更

新增 `/static/plugins/` 位置

```
server {
    location ^~ /static/plugins/ {
        proxy_pass http://127.0.0.1:13000/static/plugins/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 600;
        proxy_send_timeout 600;
        proxy_read_timeout 600;
        send_timeout 600;
    }
}
```

更多資訊請參閱 [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf) 完整版本

## 外掛開發指南

[開發第一個外掛](https://docs.nocobase.com/development/your-fisrt-plugin)

* [ 版本發佈](https://blog.nocobase.com/tags/release)
