migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0d679swtx4zhq4r")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3hcufoj7",
    "name": "user_Id",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0d679swtx4zhq4r")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3hcufoj7",
    "name": "user_id",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
