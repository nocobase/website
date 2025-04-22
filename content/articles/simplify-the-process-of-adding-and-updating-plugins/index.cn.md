为了提升插件管理的体验，我们近期对插件管理器模块进行了重要更新，主要改进了插件的添加和升级流程。请注意这些功能仅在 1.4.0-alpha 及以上版本中提供。当前的 main 分支为 v1.3，若要体验这些新功能，请切换至 next 分支（v1.4）。

本次版本[v1.4.0-alpha.20240914235554](https://github.com/nocobase/nocobase/releases/tag/v1.4.0-alpha.20240914235554)更新的具体内容如下：

## 插件列表直接读取本地插件

![4f331f688f18c4c3458b2dff15a9f208.png](https://static-docs.nocobase.com/4f331f688f18c4c3458b2dff15a9f208.png)

插件列表不再从数据库插件表里读取，而是直接读取以下环境变量或目录下的所有插件：

* 环境变量
  * APPEND_PRESET_BUILT_IN_PLUGINS
  * APPEND_PRESET_LOCAL_PLUGINS
* 插件目录
  * packages/plugins：开发中的插件，必须包含插件源码
  * storage/plugins：独立插件，编译之后的插件

插件以 npm package 的形式组织，目录结构如下：

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello3/
      |- /plugin-hello4/
    |- /my-nocobase-plugin-hello3/
    |- /my-nocobase-plugin-hello4/
```

## 解压插件包

直接将插件包解压放到指定目录，插件管理器界面也会自动读取。例如：

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.3.15-beta.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

这个命令确保插件解压到 `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas`，并且不会包含 `package` 目录，正确的目录结构如下：

```bash
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.js
./plugin-auth-cas/dist/server/auth.js
./plugin-auth-cas/client.js
./plugin-auth-cas/dist/constants.js
./plugin-auth-cas/dist/externalVersion.js
./plugin-auth-cas/dist/client/index.js
./plugin-auth-cas/dist/index.js
./plugin-auth-cas/dist/server/index.js
./plugin-auth-cas/dist/server/actions/login.js
./plugin-auth-cas/dist/server/plugin.js
./plugin-auth-cas/server.js
./plugin-auth-cas/dist/server/actions/service.js
./plugin-auth-cas/dist/locale/en-US.json
./plugin-auth-cas/dist/locale/ko_KR.json
./plugin-auth-cas/package.json
./plugin-auth-cas/dist/locale/zh-CN.json
./plugin-auth-cas/README.md
./plugin-auth-cas/README.zh-CN.md
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.d.ts
./plugin-auth-cas/dist/server/auth.d.ts
./plugin-auth-cas/client.d.ts
./plugin-auth-cas/dist/constants.d.ts
./plugin-auth-cas/dist/client/index.d.ts
./plugin-auth-cas/dist/client/locale/index.d.ts
./plugin-auth-cas/dist/index.d.ts
./plugin-auth-cas/dist/server/index.d.ts
./plugin-auth-cas/dist/server/actions/login.d.ts
./plugin-auth-cas/dist/client/Options.d.ts
./plugin-auth-cas/dist/server/plugin.d.ts
./plugin-auth-cas/server.d.ts
./plugin-auth-cas/dist/server/actions/service.d.ts
./plugin-auth-cas/dist/client/SigninPage.d.ts
./plugin-auth-cas/LICENSE.txt
```

## 将插件添加和更新流程合并

界面统一通过右上角 Add & Update 按钮添加或更新

![b5a4fd82955807dc18060772c6689f84.png](https://static-docs.nocobase.com/b5a4fd82955807dc18060772c6689f84.png)

也可以使用 `pm add` 命令添加或更新，流程如下：

![f3f20d86fbe5d83676a1039367c8818e.png](https://static-docs.nocobase.com/f3f20d86fbe5d83676a1039367c8818e.png)

## 商业插件的安装流程

不需要一个一个下载了，直接配置以下环境变量即可

```Bash
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # service 平台用户名
NOCOBASE_PKG_PASSWORD=your-password   # service 平台用户密码
```

应用的安装或升级时，将自动下载并升级插件（自动识别版本）

```ts
yarn nocobase install
yarn nocobase upgrade
```

例如，升级命令日志：

```Bash
nocobase git:(main) yarn nocobase upgrade
$ nocobase upgrade
WAIT: TypeScript compiling...
$ nocobase pkg download-pro
Download success: @nocobase/plugin-custom-brand@1.3.22-beta
Download success: @nocobase/plugin-verdaccio@1.3.22-beta
Download success: @nocobase/plugin-workflow-response-message@1.3.22-beta
Download success: @nocobase/plugin-workflow-request-interceptor@1.3.22-beta
Download success: @nocobase/plugin-workflow-json-query@1.3.22-beta
Download success: @nocobase/plugin-workflow-approval@1.3.22-beta
Download success: @nocobase/plugin-telemetry-prometheus@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-postgres@1.3.22-beta
Download success: @nocobase/plugin-embed@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mysql@1.3.22-beta
Download success: @nocobase/plugin-workflow-variable@1.3.22-beta
Download success: @nocobase/plugin-collection-fdw@1.3.22-beta
Download success: @nocobase/plugin-demo-platform@1.3.22-beta
Download success: @nocobase/plugin-departments@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mariadb@1.3.22-beta
Download success: @nocobase/plugin-auth-cas@1.3.22-beta
Download success: @nocobase/plugin-auth-saml@1.3.22-beta
Download success: @nocobase/plugin-auth-oidc@1.3.22-beta
Download success: @nocobase/plugin-comments@1.3.22-beta
Download success: @nocobase/plugin-workflow-custom-action-trigger@1.3.22-beta
Download success: @nocobase/plugin-auth-ldap@1.3.22-beta
Download success: @nocobase/plugin-block-tree@1.3.22-beta
Download success: @nocobase/plugin-auth-dingtalk@1.3.22-beta
Download success: @nocobase/plugin-data-source-rest-api@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mssql@1.3.22-beta
```

内网服务器，可以先在本地环境下载好插件，然后再将 ./storage/plugins 文件夹上传到内网服务器，最后再执行 NocoBase 安装或升级命令。例如：

```bash
scp -r /nocobase1/storage/plugins user2@ip2:/nocobase2/storage/plugins

yarn nocobase install
# or
yarn nocobase upgrade
```

## 删除插件

因为插件列表不再从数据库插件表里读取，而是直接读取本地插件，删除插件等同于删除插件文件夹，也就是说删除插件文件夹即为删除插件。
