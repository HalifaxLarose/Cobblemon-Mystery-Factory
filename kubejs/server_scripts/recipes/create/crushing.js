ServerEvents.recipes(event => {
    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                "item": "create:blaze_burner"
            }
        ],
        processing_time: 150,
        results: [
            {
                "id": "minecraft:blaze_rod"
            },
            {
                "chance": 0.75,
                "id": "minecraft:blaze_rod"
            },
            {
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "chance": 0.125,
                "id": "minecraft:iron_ingot"
            }
        ]     
    })

    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                "item": "minecraft:crying_obsidian"
            }
        ],
        processing_time: 150,
        results: [
            {
                "chance": 0.125,
                "id": "minecraft:ghast_tear"
            }
        ]
    })

    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                "item": "minecraft:crying_obsidian"
            }
        ],
        processing_time: 150,
        results: [
            {
                "chance": 0.125,
                "id": "minecraft:ghast_tear"
            }
        ]
    })

    // event.custom({
    //     type: "create:crushing",
    //     ingredients: [
    //         {
    //             "item": "minecraft:ender_pearl"
    //         }
    //     ],
    //     processing_time: 90,
    //     results: [
    //         {
    //             "count": 6,
    //             "id": "oritech:enderic_compound"
    //         }
    //     ]
    // })

})