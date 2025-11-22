ServerEvents.recipes(event => {
    event.custom({
        "type": "ars_nouveau:glyph",
        "exp": 160,
        "inputs": [
            {
                "item": "minecraft:nether_star"
            },
            {
                "item": "ars_nouveau:manipulation_essence"
            },
            {
                "item": "ars_nouveau:dowsing_rod"
            },
            {
                "item": "minecraft:ender_pearl"
            }
        ],
        "output": {
            "count": 1,
            "id": "ars_elemental:glyph_homing_projectile"
        }
    })
    event.custom({
        "type": "ars_nouveau:glyph",
        "exp": 160,
        "inputs": [
            {
                "item": "minecraft:compass"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "tag": "c:rods/blaze"
            }
        ],
        "output": {
            "count": 1,
            "id": "ars_nouveau:glyph_orbit"
        }
    })
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
            {
                "item": "minecraft:observer"
            },
            {
                "item": "minecraft:spyglass"
            },
            {
                "tag": "c:storage_blocks/source"
            },
            {
                "tag": "c:gems/diamond"
            }
        ],
        "reagent": {
            "item": "minecraft:ender_pearl"
        },
        "result": {
            "count": 1,
            "id": "ars_nouveau:scryers_oculus"
        },
        "sourceCost": 0

    })
})