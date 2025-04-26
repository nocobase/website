**Типизация**

```typescript
interface UpdateOptions extends Omit<SequelizeUpdateOptions, 'where'> {
  values: Values;
  filter?: Filter;
  filterByTk?: TargetKey;
  whitelist?: WhiteList;
  blacklist?: BlackList;
  updateAssociationValues?: AssociationKeysToBeUpdate;
  context?: any;
}
```

**Детали**

- `values`: Объект данных для обновления записи.  
- `filter`: Указывает условие фильтрации для записей, которые нужно обновить. Подробнее о использовании `filter` можно узнать в методе [`find()`](#find).  
- `filterByTk`: Указывает условие фильтрации по TargetKey для записей, которые нужно обновить.  
- `whitelist`: Белый список полей `values`, только указанные поля будут записаны.  
- `blacklist`: Черный список полей `values`, указанные поля не будут записаны.  
- `transaction`: Объект транзакции. Если параметр транзакции не передан, метод автоматически создаст внутреннюю транзакцию.  

Необходимо передать хотя бы один из параметров: `filterByTk` или `filter`.