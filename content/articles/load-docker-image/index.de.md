---
title: "So laden Sie ein Docker-Image auf einen Intranet-Server hoch"
description: "Der Artikel führt Benutzer durch das Laden von Docker-Images in NocoBase für eine einfache Instanzmigration und Offline-Bereitstellung."
---

## 1. Docker-Image herunterladen

Führen Sie den folgenden Befehl in Ihrem lokalen Terminal aus:

```bash
docker pull registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 2. Docker-Image als tar-Datei speichern

Nachdem der Download abgeschlossen ist, führen Sie den folgenden Befehl aus, um das Image als tar-Datei zu speichern:

```bash
docker save -o nocobase-latest.tar registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 3. tar-Datei auf den Server hochladen

Führen Sie den folgenden Befehl in Ihrem lokalen Terminal aus, um `nocobase-latest.tar` auf den Server hochzuladen:

```bash
scp nocobase-latest.tar user@ip:/home/user/
```

## 4. Docker-Image auf dem Server laden

Stellen Sie per SSH eine Verbindung zum Server her und laden Sie das Docker-Image:

```bash
ssh user@ip
docker load -i /home/user/nocobase-latest.tar
```

Nach Abschluss dieser Schritte wurde das Docker-Image erfolgreich in den internen Server importiert.
