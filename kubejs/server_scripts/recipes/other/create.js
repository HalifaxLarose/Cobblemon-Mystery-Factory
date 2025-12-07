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
        type: "create:cutting",
        ingredients: [
            {
                "item": "minecraft:purpur_block"
            }
        ],
        processingTime: 200,
        results: [
            {
                "count": 2,
                "chance": 0.125,
                "id": "minecraft:shulker_shell"
            }
        ]
    })

    // Haunting
    const recipes = [
        {input:"minecraft:iron_ingot", output:"aether:zanite_gemstone"},
        {input:"minecraft:ancient_debris", output:"deep_aether:sterling_aercloud"},
        {input: "minecraft:ender_pearl", output:"minecraft:spider_eye"},
        {input: "minecraft:emerald", output:"deep_aether:skyjade"},
        {input: "minecraft:diamond", output:"aether:enchanted_gravitite"},
        {input: "minecraft:coal", output:"aether:ambrosium_shard"},
    ]
    recipes.forEach((item) => {
        event.custom({
            type: "create:haunting",
            ingredients: [{ "item": item.input }],
            results: [{ "id": item.output }]
        })
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