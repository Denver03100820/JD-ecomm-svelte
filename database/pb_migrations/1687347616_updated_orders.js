migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b59969mhzpo2uch")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "60ke8zco",
    "name": "user_Id",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "064tl2fp",
    "name": "product_Id",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jkgqf05s",
    "name": "payment_Method",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Cash on Delivery",
        "GCASH",
        "PAYMAYA"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b59969mhzpo2uch")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "60ke8zco",
    "name": "user_id",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "064tl2fp",
    "name": "product_id",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jkgqf05s",
    "name": "payment_method",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Cash on Delivery",
        "GCASH",
        "PAYMAYA"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
