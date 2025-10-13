ServerEvents.recipes(event => {
  event.custom({
    "type": "oritech:assembler",
    "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
    },
    "fluidOutputs": [],
    "ingredients": [
    {
        "item": "create:brass_ingot"
    },
    {
        "item": "create:iron_sheet"
    },
    {
        "item": "createaddition:copper_spool"
    },
    {
        "item": "createaddition:copper_spool"
    }
    ],
    "results": [
    {
        "count": 2,
        "id": "oritech:motor"
    }
    ],
    "time": 48
  })
})