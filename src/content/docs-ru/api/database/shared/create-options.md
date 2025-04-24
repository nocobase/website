**Типизация**

```typescript
type WhiteList = string[];
type BlackList = string[];
type AssociationKeysToBeUpdate = string[];

interface CreateOptions extends SequelizeCreateOptions {
  values?: Values;
  whitelist?: WhiteList;
  blacklist?: BlackList;
  updateAssociationValues?: AssociationKeysToBeUpdate;
  context?: any;
}
```

**Детали**

- `values`: Объект данных для создания записи.  
- `whitelist`: Указывает, какие поля в объекте данных разрешены для записи. Если параметр не передан, по умолчанию разрешены все поля.  
- `blacklist`: Указывает, какие поля в объекте данных **запрещены для записи**. Если параметр не передан, по умолчанию разрешены все поля.  
- `transaction`: Объект транзакции. Если параметр транзакции не передан, метод автоматически создаст внутреннюю транзакцию.