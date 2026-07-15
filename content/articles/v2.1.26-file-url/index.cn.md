## 优化内容

过去，文件 URL 与具体存储方式强绑定，不同存储引擎会生成不同格式的访问地址。

```Bash
# 本地存储
/storage/uploads/logo.png

# S3、OSS 等对象存储
https://bucket.example.com/path/logo.png

# S3 Pro（签名 URL）
https://bucket.example.com/path/logo.png?signature=...
```

这种方式会带来以下问题：

* 文件 URL 暴露底层存储信息；
* 签名 URL 存在有效期限制，不适合 Markdown、富文本等长期引用场景；
* 文件记录或存储方式变化后，原 URL 可能失效；
* 无法做鉴权判断；
* 不同存储方式的 URL 格式不统一，不利于管理和扩展。

现在，NocoBase 将文件访问地址统一为：

```Bash
/files/<app>/<dataSource>/<collection>/<id><extname>
```

例如：

```Bash
/files/main/main/images/375535904423936.png
```

其中：

* `main`：应用名（App）
* `main`：数据源名（Data Source）
* `images`：文件表（Collection）
* `375535904423936`：文件记录 ID
* `.png`：文件扩展名

访问统一地址时，如果有访问权限，会 302 重定向到最终的真实地址。这样应用无需关心文件实际存储在本地、S3、OSS 还是其他存储服务，始终使用统一、稳定的文件访问地址。

## 关于安全性

302 重定向方案不会直接暴露应用内部的文件管理逻辑，同时兼容各种存储方式，是文件访问场景中常用的实现方式。需要注意的是，302 重定向后，客户端最终仍然可以获取真实文件地址。如果业务场景要求完全隐藏真实文件地址，也可以采用文件流代理方式，由 NocoBase 读取文件内容后直接返回给客户端。文件流代理模式具有更高的地址隐藏能力，但会增加服务器带宽和性能开销。因此，NocoBase 默认采用 302 重定向方案。

## 历史数据兼容性

升级后，文件访问地址会自动变更为新的统一格式，但不同使用场景的处理方式有所区别：

* 当文件记录作为文件表数据或关系字段使用时，系统会自动生成新的统一访问地址；
* 已存在的附件 URL、Markdown 内容中保存的旧地址不会被自动修改，新增内容会使用新的统一地址；
* 旧地址通常为直接访问地址，默认不经过权限控制。迁移到统一地址后，访问会经过权限校验，因此需要根据实际业务需求配置相应权限。

## Nginx 等代理配置

如果使用反向代理（如 Nginx、Caddy 等），需要确保统一文件访问地址能够正确转发到 NocoBase 应用。

不同部署方式的处理方式如下：

### Docker 部署

Docker 部署方式已内置相关配置，无需额外处理。

### nb CLI 部署

使用 `nb proxy` 命令生成代理配置：

```Bash
# 生成 Nginx 配置
nb proxy nginx generate --env test2

# 生成 Caddy 配置
nb proxy caddy generate --env test2
```

### 旧 git 或 create-nocobase-app 部署方式

如果使用旧版部署方式，可以通过以下命令重新生成 Nginx 配置：

```TypeScript
yarn nocobase create-nginx-conf
```

生成的 nginx 配置存放在 `./storage/nocobase.conf`

### 手动配置

nginx

```Bash
location ^~ /files/ {
    proxy_pass http://127.0.0.1:13000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    add_header Cache-Control "no-cache, no-store" always;
}
```

caddy

```Plain
handle /files/* {
    reverse_proxy 127.0.0.1:13000
}
```
