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
    
    event.custom({
        "type": "oritech:particle_collision",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "oritech:iron_dust"
            },
            {
                "item": "oritech:coal_dust"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "northstar:martian_steel"
            }
        ],
        "time": 500
    })

    event.custom({
        "type": "oritech:particle_collision",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "dragonsurvival:elder_dragon_heart"
            },
            {
                "tag": "minecraft:skulls"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "minecraft:dragon_head"
            }
        ],
        "time": 60*20
    })
    event.custom({
        "type": "oritech:particle_collision",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "dragonsurvival:elder_dragon_heart"
            },
            {
                "item": "dragonsurvival:elder_dragon_heart"
            }
        ],
        "results": [
            {
                "count": 4,
                "id": "minecraft:dragon_breath"
            }
        ],
        "time": 60*20
    })

    const POWERFUL_PROCESSING_TIME = 500
    event.custom({
        "type": "oritech:particle_collision",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "kubejs:enderdragon_essence"
            },
            {
                "item": "oritech:plutonium_dust"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "kubejs:powerful_enderdragon_essence"
            }
        ],
        "time": POWERFUL_PROCESSING_TIME
    })

    const ESSENCE_PER_EYE = 24
    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "kubejs:dormant_eye_of_ender"
            },
            {
                "item": "minecraft:blaze_powder"
            },
            {
                "item": "minecraft:blaze_powder"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "minecraft:ender_eye"
            }
        ],
        "time": POWERFUL_PROCESSING_TIME*ESSENCE_PER_EYE/2
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
                "item": "oritech:fluxite"
            },
            {
                "item": "create:brass_ingot"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "oritech:energite_ingot"
            }
        ],
        "time": 120
    })
})