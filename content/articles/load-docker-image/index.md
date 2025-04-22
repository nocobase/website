## 1. Download the Docker image

Run the following command in your local terminal:

```bash
docker pull registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 2. Save the Docker image as a tar file

After the download is complete, run the following command to save the image as a tar file:

```bash
docker save -o nocobase-latest.tar registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 3. Upload the tar file to the server

Run the following command in your local terminal to upload `nocobase-latest.tar` to the server:

```bash
scp nocobase-latest.tar user@ip:/home/user/
```

## 4. Load the Docker image on the server

Connect to the server via SSH and load the Docker image:

```bash
ssh user@ip
docker load -i /home/user/nocobase-latest.tar
```

After completing these steps, the Docker image will be successfully imported into the internal server.
