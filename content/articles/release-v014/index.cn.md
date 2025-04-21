v0.14 实现了生产环境下插件的即插即用，可以直接通过界面添加插件，支持从 npm registry（可以是私有的）下载、本地上传、URL 下载。

## 新特性

### 全新的插件管理器界面

![全新的插件管理器界面](https://static-docs.nocobase.com/7d750847f55504f346d2a85968f88102.webp)

### 上传的插件位于 storage/plugins 目录

提供 storage/plugins 目录用于上传即插即用的插件，目录以 npm packages 的方式组织

```
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

### 插件的更新

目前仅 storage/plugins 下的插件才有更新操作，如图：

![插件的更新](https://static-docs.nocobase.com/af75d05d6e2c04222dbfd2b7f9009daf.gif)

备注：为了便于维护和升级，避免因为升级导致 storage 插件不可用，也可以直接将新插件放到 storage/plugins 目录下，再执行升级操作

## 不兼容的变化

### 插件目录变更

开发中的插件统一都放到 packages/plugins 目录下，以 npm packages 的方式组织

```
|- /packages/
- |- /plugins/acl/
+ |- /plugins/@nocobase/plugin-acl/
- |- /samples/hello/
+ |- /plugins/@nocobase/plugin-sample-hello/
```

全新的目录结构为

```
# 开发中的插件
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/

# 通过界面添加的插件
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

### 插件名的变化

* 不再提供 PLUGIN\_PACKAGE\_PREFIX 环境变量
* 插件名和包名统一，旧的插件名仍然可以以别名的形式存在

### pm add 的改进

变更情况

```
- pm add sample-hello
+ pm add @nocobase/plugin-sample-hello
```

pm add 参数说明

```
# 用 packageName 代替 pluginName，从本地查找，找不到报错
pm add packageName

# 只有提供了 registry 时，才从远程下载，也可以指定版本
pm add packageName --registry=xx --auth-token=yy --version=zz

# 也可以提供本地压缩包，多次 add 用最后的替换
pm add /a/plugin.zip

# 远程压缩包，同名直接替换
pm add http://url/plugin.zip
```

### Nginx 配置的变化

新增 `/static/plugins/` location

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

更多查看完整版的 [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf)

## 插件开发指南

[编写第一个插件](https://docs-cn.nocobase.com/development/your-fisrt-plugin)
