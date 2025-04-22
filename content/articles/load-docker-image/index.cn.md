## 1. 下载 Docker 镜像

在本地终端中运行以下命令：

```Bash
docker pull registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 2. 保存 Docker 镜像为 tar 文件

下载完成后，运行以下命令将镜像保存为 tar 文件：

```Bash
docker save -o nocobase-latest.tar registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 3. 将 tar 文件上传到服务器

在本地终端中运行以下命令，将 `nocobase-latest.tar` 上传到服务器：

```Bash
scp nocobase-latest.tar user@ip:/home/user/
```

### 4. 在服务器上加载 Docker 镜像

通过 SSH 连接到服务器并加载 Docker 镜像：

```Bash
ssh user@ip
docker load -i /home/user/nocobase-latest.tar
```

完成上述步骤后，Docker 镜像将被成功导入到内网服务器上，其他镜像也可以类似的方法上传到内网。
