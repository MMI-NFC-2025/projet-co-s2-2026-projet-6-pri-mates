/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2959768963")

  // remove field
  collection.fields.removeById("text3764023301")

  // add field
  collection.fields.addAt(2, new Field({
    "help": "",
    "hidden": false,
    "id": "select2196016565",
    "maxSelect": 3,
    "name": "jeu",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "quiz",
      "memori",
      "association"
    ]
  }))

  // update field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "select2942972832",
    "maxSelect": 3,
    "name": "difficulte",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "facile",
      "moyen",
      "difficile"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2959768963")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text3764023301",
    "max": 0,
    "min": 0,
    "name": "type_jeux",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select2196016565")

  // update field
  collection.fields.addAt(2, new Field({
    "help": "",
    "hidden": false,
    "id": "select2942972832",
    "maxSelect": 0,
    "name": "difficulte",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "facile",
      "moyen",
      "difficile"
    ]
  }))

  return app.save(collection)
})
