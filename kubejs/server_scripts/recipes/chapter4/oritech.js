ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "oritech:atomic_forge",
            "fluidInput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "fluidOutputs": [],
            "ingredients": [
                {
                    "item": "northstar:martian_steel"
                },
                {
                    "item": "oritech:platinum_ingot"
                },
                {
                    "item": "oritech:platinum_ingot"
                }
            ],
            "results": [
                {
                    "count": 1,
                    "id": "oritech:duratium_ingot"
                }
            ],
            "time": 200
        }
    )

    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "tag": "oritech:plating" },
            { "tag": "oritech:plating" },
            { "item": "oritech:steel_ingot" },
            { "item": "create:brass_ingot" },
        ],
        "results": [
            {
                "count": 3,
                "id": "oritech:reactor_wall"
            }
        ],
        "time": 96
    })
})