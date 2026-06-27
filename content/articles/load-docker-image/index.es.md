---
title: "Cómo subir una imagen de Docker a un servidor de intranet"
description: "El artículo guía a los usuarios sobre cómo cargar imágenes de Docker en NocoBase para facilitar la migración de instancias y la implementación sin conexión."
---

## 1. Descargar la imagen de Docker

Ejecute el siguiente comando en su terminal local:

```bash
docker pull registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 2. Guardar la imagen de Docker como archivo tar

Una vez completada la descarga, ejecute el siguiente comando para guardar la imagen como archivo tar:

```bash
docker save -o nocobase-latest.tar registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 3. Subir el archivo tar al servidor

Ejecute el siguiente comando en su terminal local para subir `nocobase-latest.tar` al servidor:

```bash
scp nocobase-latest.tar user@ip:/home/user/
```

## 4. Cargar la imagen de Docker en el servidor

Conéctese al servidor mediante SSH y cargue la imagen de Docker:

```bash
ssh user@ip
docker load -i /home/user/nocobase-latest.tar
```

Una vez completados estos pasos, la imagen de Docker se habrá importado correctamente en el servidor interno.
