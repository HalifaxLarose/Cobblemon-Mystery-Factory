ServerEvents.recipes(event => {
    // event.custom({
    //     type: "create:milling",
    //     ingredients: [
    //         {
    //             "item": "minecraft:ender_pearl"
    //         }
    //     ],
    //     processing_time: 120,
    //     results: [
    //         {
    //             "count": 8,
    //             "id": "oritech:enderic_compound"
    //         }
    //     ]
    // })


    // region Plating
    const STEEL = 'oritech:steel_ingot';
    // NOTE: I decided that using the mechanical crafter to automate these are more interesting than sequential assembly.
    // We have a lot of sequential assembly recipes.

    // Iron plates
    // const ironPlatingTransitional = 'kubejs:example_item';
    // event.recipes.create.sequenced_assembly(
    //     [
    //         CreateItem.of('oritech:iron_plating_block')
    //     ],
    //     'create:andesite_casing',
    //     [
    //         event.recipes.create.deploying(ironPlatingTransitional, [ironPlatingTransitional, 'create:iron_sheet']),
    //         event.recipes.create.deploying(ironPlatingTransitional, [ironPlatingTransitional, STEEL]),
    //         event.recipes.create.pressing(ironPlatingTransitional, ironPlatingTransitional),
    //     ]
    // )
    //     .transitionalItem(ironPlatingTransitional)
    //     .loops(2)
    // Note: there is no manual crafting for this item on purpose, unless I change my mind


    // Copper Plating
    // const copperPlatingTransitional = 'kubejs:example_item'
    // event.recipes.create.sequenced_assembly(
    //     [
    //         CreateItem.of('oritech:machine_plating_block')
    //     ],
    //     'create:copper_casing',
    //     [
    //         event.recipes.create.deploying(copperPlatingTransitional, [copperPlatingTransitional, STEEL]),
    //         event.recipes.create.pressing(copperPlatingTransitional, copperPlatingTransitional),
    //     ]
    // )
    //     .transitionalItem(copperPlatingTransitional)
    //     .loops(3)

    // "Brass" plating
    // const nickelPlatingTransitional = 'kubejs:example_item';
    // event.recipes.create.sequenced_assembly(
    //     [
    //         CreateItem.of('oritech:nickel_plating_block')
    //     ],
    //     'create:brass_casing',
    //     [
    //         event.recipes.create.deploying(nickelPlatingTransitional, [nickelPlatingTransitional, STEEL]),
    //         event.recipes.create.deploying(nickelPlatingTransitional, [nickelPlatingTransitional, STEEL]),
    //         event.recipes.create.pressing(nickelPlatingTransitional, nickelPlatingTransitional),
    //     ]
    // )
    //     .transitionalItem(nickelPlatingTransitional)
    //     .loops(1)

    // region oil processing
    // Carbon Gas
    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "heated",
        "ingredients": [{
            "item": "minecraft:coal",
            "amount": 3
        }],
        "results": [{
            // type: "fluid_stack",
            id: "northstar:carbon",
            amount: 1000
        }]
    })
    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "heated",
        "ingredients": [{
            "item": "northstar:moon_sand",
        }],
        "results": [{
            // type: "fluid_stack",
            id: "northstar:carbon",
            amount: 100
        }]
    })
    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "heated",
        "ingredients": [{
            "item": "northstar:venus_gravel",
        }],
        "results": [{
            // type: "fluid_stack",
            id: "northstar:carbon",
            amount: 100
        }]
    })
    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "superheated",
        "ingredients": [{
            "type": "fluid_tag",
            "fluid_tag": "c:biofuel",
            amount: 1000
        }],
        "results": [{
            // type: "fluid_stack",
            id: "northstar:carbon",
            amount: 500
        }]
    })
    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "superheated",
        "ingredients": [{
            "type": "fluid_tag",
            "fluid_tag": "c:biodiesel",
            amount: 1000
        }],
        "results": [{
            // type: "fluid_stack",
            id: "northstar:carbon",
            amount: 500
        }]
    })

    event.custom({
        type: "create:mixing",
        "ingredients": [
            {
                "item": "northstar:sodium_catalyst",
            },
            {
                "type": "fluid_stack",
                "fluid": "northstar:carbon",
                "amount": 500,
            },
            {
                "type": "fluid_stack",
                "fluid": "kubejs:kerosene",
                "amount": 500,
            },
        ],
        "results": [{
            amount: 500,
            id: "northstar:hydrocarbon"
        }],
        "heat_requirement": "superheated",
    });

    event.recipes.create.mixing(
        Item.of("createdieselgenerators:asphalt_block", 16),
        [
            'minecraft:sand',
            'minecraft:gravel',
            Fluid.of('kubejs:bitumen', 100)
        ]
    ) 

    // event.recipes.create.mixing(
    //     [
    //         Fluid.of('northstar:methane', 500),
    //         Fluid.of('kubejs:butane', 300),
    //         Fluid.of('createdieselgenerators:gasoline', 200)
    //     ],
    //     Fluid.of('kubejs:light_petroleum_gas', 1000)
    // ).heated()

    // #region Blaze Cakes
    const BLAZE_RATIOS = [
        ["northstar:methane", 50],
        ['oritech:still_sheol_fire', 100],
        ["kubejs:light_petroleum_gas", 120],
        ['kubejs:butane', 180],
        ['createdieselgenerators:gasoline', 200],
        ['oritech:still_naphtha', 220],
        ['kubejs:kerosene', 250],
        ['oritech:still_heavy_oil', 500],
        ['kubejs:heavy_residual_crude_oil', 1000],
        ['kubejs:industrial_crude_oil', 2500],
        ['createdieselgenerators:crude_oil', 4000]
    ]

    for (let blaze_ratio of BLAZE_RATIOS) {
        event.recipes.create.filling(
            'create:blaze_cake',
            [
                Fluid.of(blaze_ratio[0], blaze_ratio[1]),
                'create:blaze_cake_base'
            ]
        )
    }


    event.recipes.create.compacting(
        [Item.of('oritech:polymer_resin', 2)],
        [Fluid.of('kubejs:butane', 100), 'minecraft:sand'],
    ).heated()


    // #region Circuitry
    const processing_unit_transitional = 'northstar:unfinished_circuit'
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('oritech:processing_unit', 1.0), // Main output, will appear in JEI as the result
        ],
        // Input:
        'ccbr:integrated_circuit',
        // Sequence:
        [
            // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
            // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
            event.recipes.create.deploying(processing_unit_transitional, [processing_unit_transitional, 'create:electron_tube']),
            event.recipes.create.deploying(processing_unit_transitional, [processing_unit_transitional, 'createaddition:electrum_wire']),
            event.recipes.create.deploying(processing_unit_transitional, [processing_unit_transitional, 'createaddition:electrum_wire']),
            event.recipes.create.pressing(processing_unit_transitional, processing_unit_transitional)
        ]
    )
        .transitionalItem(processing_unit_transitional) // Set the transitional item
        .loops(1) // Set the number of loops
        
    // Northstar uses some exclusive machines so we'll have to fallback to custom events
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "oritech:plastic_sheet"
        },
        "loops": 3,
        "results": [
            {
                "id": "northstar:circuit",
                count: 1
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "northstar:unfinished_circuit"
                    },
                    [
                        {
                            "item": "oritech:processing_unit"
                        },
                    ]
                ],
                "results": [
                    {
                        "id": "northstar:unfinished_circuit"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "northstar:unfinished_circuit"
                    },
                    [
                        {
                            "item": "northstar:polished_amethyst"
                        },
                    ]
                ],
                "results": [
                    {
                        "id": "northstar:unfinished_circuit"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "northstar:unfinished_circuit"
                    },
                    [
                        {
                            "item": "createaddition:electrum_wire"
                        },
                    ]
                ],
                "results": [
                    {
                        "id": "northstar:unfinished_circuit"
                    }
                ]
            },
        ],
        "transitional_item": {
            "id": "northstar:unfinished_circuit"
        }
    })
    

})