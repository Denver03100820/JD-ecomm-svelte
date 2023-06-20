migrate((db) => {
  const collection = new Collection({
    "id": "w54r9lnpqybr21z",
    "created": "2023-06-20 14:29:39.814Z",
    "updated": "2023-06-20 14:29:39.814Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jor2dbrf",
        "name": "firstname",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w54r9lnpqybr21z");

  return dao.deleteCollection(collection);
})
