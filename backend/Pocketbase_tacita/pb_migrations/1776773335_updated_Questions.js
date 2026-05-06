/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1812345070")

  // remove field
  collection.fields.removeById("text1605820103")

  // remove field
  collection.fields.removeById("bool1434531474")

  // add field
  collection.fields.addAt(2, new Field({
    "help": "",
    "hidden": false,
    "id": "select1605820103",
    "maxSelect": 1,
    "name": "reponse",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "On met la main devant la bouche, puis on la tend devant nous, vers le haut",
      "On met la main au niveau du front et on l'éloigne d'un geste rapide",
      "On agite la main pour faire coucou "
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1812345070")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1605820103",
    "max": 0,
    "min": 0,
    "name": "reponse",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "bool1434531474",
    "name": "bool",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // remove field
  collection.fields.removeById("select1605820103")

  return app.save(collection)
})
