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

    // #region Cobblemon


    const TRANSITIONAL_POKEBALL_LID = 'cobblemore_lib:red_ball_lid'
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('cobblemore_lib:great_ball_lid', 1.0), // Main output, will appear in JEI as the result
        ],
        // Input:
        '#kubejs:tier_1_ball_lid',
        // Sequence:
        [
            // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
            // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
            event.recipes.create.deploying(TRANSITIONAL_POKEBALL_LID, [TRANSITIONAL_POKEBALL_LID, 'ccbr:lapis_sheet']),
            event.recipes.create.filling(TRANSITIONAL_POKEBALL_LID, [TRANSITIONAL_POKEBALL_LID, Fluid.of('kubejs:red_slurry', 25)]),
        ]
    )
        .transitionalItem(TRANSITIONAL_POKEBALL_LID) // Set the transitional item
        .loops(1) // Set the number of loops
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('cobblemore_lib:ultra_ball_lid', 1.0), // Main output, will appear in JEI as the result
        ],
        // Input:
        'cobblemore_lib:great_ball_lid',
        // Sequence:
        [
            // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
            // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
            event.recipes.create.deploying(TRANSITIONAL_POKEBALL_LID, [TRANSITIONAL_POKEBALL_LID, 'create:brass_sheet']),
            event.recipes.create.deploying(TRANSITIONAL_POKEBALL_LID, [TRANSITIONAL_POKEBALL_LID, 'oritech:carbon_fibre_strands']),
        ]
    )
        .transitionalItem(TRANSITIONAL_POKEBALL_LID) // Set the transitional item
        .loops(1) // Set the number of loops
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('cobblemore_lib:net_ball_lid', 1.0), // Main output, will appear in JEI as the result
        ],
        // Input:
        'cobblemore_lib:ultra_ball_lid',
        // Sequence:
        [
            // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
            // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
            event.recipes.create.deploying(TRANSITIONAL_POKEBALL_LID, [TRANSITIONAL_POKEBALL_LID, 'minecraft:string']),
            event.recipes.create.deploying(TRANSITIONAL_POKEBALL_LID, [TRANSITIONAL_POKEBALL_LID, 'minecraft:string']),
            event.recipes.create.deploying(TRANSITIONAL_POKEBALL_LID, [TRANSITIONAL_POKEBALL_LID, 'minecraft:string']),
        ]
    )
        .transitionalItem(TRANSITIONAL_POKEBALL_LID) // Set the transitional item
        .loops(1) // Set the number of loops
    event.recipes.create.deploying('cobblemore_lib:dive_ball_lid', ['cobblemore_lib:ultra_ball_lid', 'minecraft:prismarine_shard'])
    event.recipes.create.deploying('cobblemore_lib:dusk_ball_lid', ['cobblemore_lib:ultra_ball_lid', 'cobblemon:dusk_stone'])
    event.recipes.create.deploying('cobblemore_lib:timer_ball_lid', ['cobblemore_lib:ultra_ball_lid', 'minecraft:clock'])

    // Candy
    event.recipes.create.mixing('cobblemore_lib:candy_gem', ['dndesires:lapis_lazuli_shard', Fluid.of('create_enchantment_industry:experience', 3)]).heated()

    // #region Haunting
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