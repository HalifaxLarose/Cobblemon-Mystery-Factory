ServerEvents.recipes(event => {
  event.custom({
    "type": "oritech:foundry",
    "fluidInput": {
      "amount": 0,
      "fluid": "minecraft:empty"
    },
    "fluidOutputs": [],
    "ingredients": [
      {
        "item": "oritech:coal_dust"
      },
      {
        "item": "oritech:iron_dust"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "oritech:steel_ingot"
      }
    ],
    "time": 30
  })
  event.custom({
    "type": "oritech:foundry",
    "fluidInput": {
      "amount": 0,
      "fluid": "minecraft:empty"
    },
    "fluidOutputs": [],
    "ingredients": [
      {
        "item": "minecraft:diamond"
      },
      {
        "item": "create:brass_ingot"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "oritech:adamant_ingot"
      }
    ],
    "time": 120
  })
})