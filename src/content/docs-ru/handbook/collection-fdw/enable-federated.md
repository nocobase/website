# Как включить движок federated в MySQL

Модуль federated в базе данных MySQL по умолчанию не включен. Для его активации необходимо изменить конфигурацию my.cnf. Если используется версия Docker, ситуацию с расширением можно обработать через volumes:

```yml
mysql:
  image: mysql:8.1.0
  volumes:
    - ./storage/mysql-conf:/etc/mysql/conf.d
  environment:
    MYSQL_DATABASE: nocobase
    MYSQL_USER: nocobase
    MYSQL_PASSWORD: nocobase
    MYSQL_ROOT_PASSWORD: nocobase
  restart: always
  networks:
    - nocobase
```

Создайте новый файл `./storage/mysql-conf/federated.cnf`

```conf
[mysqld]
federated
```

Перезапустите mysql

```bash
docker compose up -d mysql
```

Проверьте, активирован ли federated

```sql
show engines
```

![Alt text](https://static-docs.nocobase.com/ac5d97cf902ad164e141633a41a23e46.png)