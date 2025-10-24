ServerEvents.recipes(event => {
    event.custom({

        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "amount": 500,
            "fluid": "kubejs:red_slurry"
        },
        "fluidOutputs": [{
            'amount': 500,
            fluid: 'minecraft:water',
        }],
        "ingredients": [
            {
                "tag": "minecraft:sand"
            }
        ],
        "results": [
            {
                "count": 20,
                "id": "minecraft:redstone"
            }
        ],
        "time": 60

    })

})