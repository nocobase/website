## Background

Starting from NocoBase v0.19, we introduced the `@nocobase/plugin-backup-restore` plugin for application backup and restoration. However, the actual user experience has not been ideal, with the following key issues:

1. The plugin does not support backing up and restoring database-level metadata such as default values, unique indexes, etc.
2. Database views, stored procedures, functions, triggers, and other components cannot be backed up or restored.
3. Each plugin form requires separate configuration of `dumpRules`, and plugin developers may need to implement custom logic. Without this, backup and restoration can easily fail.
4. The backup grouping design is complex and has a high learning curve. Improper selection could lead to backup failure or data loss.
5. The backup and restoration process occurs at the application layer. If the application fails to start, the backup or restoration will also fail.

After careful consideration, starting from version v1.4, we have decided to deprecate this plugin. So, how should backup and restoration be handled in the new version? This article will provide a detailed introduction to the new backup solution.

## What Data Should Be Backed Up?

In the NocoBase backup and restoration process, the following types of data are primarily involved:

* **Main Database Data**: Supported main database types include PostgreSQL, MySQL, MariaDB, and KingbaseES.
* **External Database Data**: Supported external database types include PostgreSQL, MySQL, MariaDB, MSSQL, Oracle, and KingbaseES.
* **Sub-application Database Data**: Each sub-application is an independent database. If using PostgreSQL, different sub-applications can also be differentiated by schemas.
* **Storage Directory Data**: You can back up the entire folder or only specific important data, such as:
  * **Attachment Data**: Files in the `./storage/uploads` directory, which is the local storage for the file manager.
  * **Plugin Code**: Plugins in the `./storage/plugins` directory, including commercial plugins and third-party plugins.

## Backup and Restoration Process

### 1. Backing Up Database Data

The backup commands for different databases are as follows:

#### PostgreSQL

```bash
pg_dump -U [username] -h [host] -p [port] -F c -b --quote-all-identifiers -f [backup-file-path] [database-name]
```

#### MySQL/MariaDB

```bash
mysqldump -u [username] -p -h [host] -P [port] --databases [database-name] --replace --single-transaction --column-statistics=0 --skip-lock-tables --routines --triggers > [backup-file-path].sql
```

### 2. Restoring Backup to the Target Application's Database

The restoration commands for different databases are as follows:

#### PostgreSQL

```bash
pg_restore -U [username] -h [host] -p [port] -d [database-name] --clean --if-exists --no-owner [backup-file-path]
```

#### MySQL/MariaDB

```bash
mysql -u [username] -p -h [host] -P [port] [database-name] < [backup-file-path].sql
```

### 3. Overwriting the Target Application's Storage with the Backup Storage

```bash
# 1. Backup the /app2/storage/ directory to /app2/storage-bak/
mv /app2/storage /app2/storage-bak

# 2. Copy all contents from /app1/storage/ to /app2/storage/
cp -r /app1/storage/. /app2/storage/
```

### 4. Execute the Upgrade Command and Start the Application

```bash
# Upgrade the application
yarn nocobase upgrade

# Start the application in production environment
yarn start

# Start the application in local development environment
yarn dev
```

Note:

* If you are using Docker, simply restart the container.

## Backups Manager Plugin

Starting from NocoBase v1.4, Professional or Enterprise edition users can directly use the brand-new [Backups Manager](https://docs.nocobase.com/handbook/backups) plugin to easily manage application data backup and restoration.
