---
title: "Cómo hacer copias de seguridad y restaurar NocoBase"
description: "¿Cómo se deben manejar las copias de seguridad y la restauración en la nueva versión? Este artículo proporcionará una introducción detallada a la nueva solución de copia de seguridad."
---

## Antecedentes

A partir de NocoBase v0.19, introdujimos el plugin `@nocobase/plugin-backup-restore` para la copia de seguridad y restauración de aplicaciones. Sin embargo, la experiencia de usuario real no ha sido la ideal, presentando los siguientes problemas clave:

1. El plugin no admite la copia de seguridad y restauración de metadatos a nivel de base de datos, como valores predeterminados, índices únicos, etc.
2. Las vistas de base de datos, procedimientos almacenados, funciones, disparadores y otros componentes no se pueden respaldar ni restaurar.
3. Cada formulario de plugin requiere una configuración separada de `dumpRules`, y los desarrolladores de plugins pueden necesitar implementar lógica personalizada. Sin esto, la copia de seguridad y restauración pueden fallar fácilmente.
4. El diseño de agrupación de copias de seguridad es complejo y tiene una curva de aprendizaje alta. Una selección inadecuada podría provocar fallos en la copia de seguridad o pérdida de datos.
5. El proceso de copia de seguridad y restauración ocurre en la capa de aplicación. Si la aplicación no se inicia, la copia de seguridad o restauración también fallará.

Después de una cuidadosa consideración, a partir de la versión v1.4, hemos decidido dejar de usar este plugin. Entonces, ¿cómo se deben manejar la copia de seguridad y restauración en la nueva versión? Este artículo proporcionará una introducción detallada a la nueva solución de copia de seguridad.

## ¿Qué Datos Se Deben Respaldar?

En el proceso de copia de seguridad y restauración de NocoBase, se involucran principalmente los siguientes tipos de datos:

* **Datos de la Base de Datos Principal**: Los tipos de base de datos principal compatibles incluyen PostgreSQL, MySQL, MariaDB y KingbaseES.
* **Datos de la Base de Datos Externa**: Los tipos de base de datos externa compatibles incluyen PostgreSQL, MySQL, MariaDB, MSSQL, Oracle y KingbaseES.
* **Datos de la Base de Datos de Sub-aplicación**: Cada sub-aplicación es una base de datos independiente. Si se usa PostgreSQL, las diferentes sub-aplicaciones también se pueden diferenciar por esquemas.
* **Datos del Directorio de Almacenamiento**: Puede respaldar toda la carpeta o solo datos importantes específicos, como:
  * **Datos de Archivos Adjuntos**: Archivos en el directorio `./storage/uploads`, que es el almacenamiento local del administrador de archivos.
  * **Código del Plugin**: Plugins en el directorio `./storage/plugins`, incluidos plugins comerciales y de terceros.

## Proceso de Copia de Seguridad y Restauración

### 1. Copia de Seguridad de los Datos de la Base de Datos

Los comandos de copia de seguridad para diferentes bases de datos son los siguientes:

#### PostgreSQL

```bash
pg_dump -U [nombre_usuario] -h [host] -p [puerto] -F c -b --quote-all-identifiers -f [ruta-archivo-copia] [nombre-base-datos]
```

#### MySQL/MariaDB

```bash
mysqldump -u [nombre_usuario] -p -h [host] -P [puerto] --databases [nombre-base-datos] --replace --single-transaction --column-statistics=0 --skip-lock-tables --routines --triggers > [ruta-archivo-copia].sql
```

### 2. Restaurar la Copia de Seguridad en la Base de Datos de la Aplicación de Destino

Los comandos de restauración para diferentes bases de datos son los siguientes:

#### PostgreSQL

```bash
pg_restore -U [nombre_usuario] -h [host] -p [puerto] -d [nombre-base-datos] --clean --if-exists --no-owner [ruta-archivo-copia]
```

#### MySQL/MariaDB

```bash
mysql -u [nombre_usuario] -p -h [host] -P [puerto] [nombre-base-datos] < [ruta-archivo-copia].sql
```

### 3. Sobrescribir el Almacenamiento de la Aplicación de Destino con el Almacenamiento de la Copia de Seguridad

```bash
# 1. Hacer una copia de seguridad del directorio /app2/storage/ en /app2/storage-bak/
mv /app2/storage /app2/storage-bak

# 2. Copiar todo el contenido de /app1/storage/ a /app2/storage/
cp -r /app1/storage/. /app2/storage/
```

### 4. Ejecutar el Comando de Actualización e Iniciar la Aplicación

```bash
# Actualizar la aplicación
yarn nocobase upgrade

# Iniciar la aplicación en entorno de producción
yarn start

# Iniciar la aplicación en entorno de desarrollo local
yarn dev
```

Nota:

* Si está usando Docker, simplemente reinicie el contenedor.

## Plugin de Administrador de Copias de Seguridad

A partir de NocoBase v1.4, los usuarios de las ediciones Profesional o Empresarial pueden usar directamente el nuevo plugin [Administrador de Copias de Seguridad](https://docs.nocobase.com/handbook/backups) para gestionar fácilmente la copia de seguridad y restauración de datos de la aplicación.
