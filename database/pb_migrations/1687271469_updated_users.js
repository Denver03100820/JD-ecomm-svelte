migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w54r9lnpqybr21z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "trujcwl2",
    "name": "firstname",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omouvkll",
    "name": "middle",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eojivdhm",
    "name": "contact_no",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hl4sqfmp",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jor2dbrf",
    "name": "lastname",
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
  const collection = dao.findCollectionByNameOrId("w54r9lnpqybr21z")

  // remove
  collection.schema.removeField("trujcwl2")

  // remove
  collection.schema.removeField("omouvkll")

  // remove
  collection.schema.removeField("eojivdhm")

  // remove
  collection.schema.removeField("hl4sqfmp")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
