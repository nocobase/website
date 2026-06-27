---
title: "Comment télécharger une image Docker vers un serveur intranet"
description: "L'article guide les utilisateurs sur la façon de charger des images Docker dans NocoBase pour faciliter la migration d'instances et le déploiement hors ligne."
---

## 1. Télécharger l'image Docker

Exécutez la commande suivante dans votre terminal local :

```bash
docker pull registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 2. Sauvegarder l'image Docker sous forme de fichier tar

Une fois le téléchargement terminé, exécutez la commande suivante pour sauvegarder l'image sous forme de fichier tar :

```bash
docker save -o nocobase-latest.tar registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 3. Transférer le fichier tar vers le serveur

Exécutez la commande suivante dans votre terminal local pour transférer `nocobase-latest.tar` vers le serveur :

```bash
scp nocobase-latest.tar user@ip:/home/user/
```

## 4. Charger l'image Docker sur le serveur

Connectez-vous au serveur via SSH et chargez l'image Docker :

```bash
ssh user@ip
docker load -i /home/user/nocobase-latest.tar
```

Une fois ces étapes terminées, l'image Docker sera importée avec succès dans le serveur interne.
