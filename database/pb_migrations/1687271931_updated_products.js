migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wubtjb08zr88c0z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gdfpozdp",
    "name": "product_options",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wubtjb08zr88c0z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gdfpozdp",
    "name": "prorudct_options",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
