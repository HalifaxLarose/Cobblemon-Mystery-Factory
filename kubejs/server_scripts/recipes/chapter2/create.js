ServerEvents.recipes(event => {
    // In chapter 2 because without deployers, these are useless.
    event.custom({
        type: "create:cutting",
        ingredients: [
            {
                "tag": "minecraft:planks"
            }
        ],
        processingTime: 20,
        results: [
            {
                "count": 8,
                "id": "kubejs:cog_teeth"
            }
        ]
    })
    // Case in point
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create:shaft"
        },
        "loops": 1,
        "results": [
            {
                "id": "create:cogwheel",
                count: 2
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:example_item"
                    },
                    [
                        {
                            "item": "kubejs:cog_teeth"
                        },
                    ]
                ],
                "results": [
                    {
                        "id": "kubejs:example_item"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:example_item"
                    },
                    [
                        {
                            "item": "kubejs:cog_teeth"
                        },
                    ]
                ],
                "results": [
                    {
                        "id": "kubejs:example_item"
                    }
                ]
            },
        ],
        "transitional_item": {
            "id": "kubejs:example_item"
        }
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create:shaft"
        },
        "loops": 1,
        "results": [
            {
                "id": "create:large_cogwheel",
                count: 2
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:example_item"
                    },
                    [
                        {
                            "tag": "minecraft:wooden_slabs"
                        },
                    ]
                ],
                "results": [
                    {
                        "id": "kubejs:example_item"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:example_item"
                    },
                    [
                        {
                            "item": "kubejs:cog_teeth"
                        },
                    ]
                ],
                "results": [
                    {
                        "id": "kubejs:example_item"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:example_item"
                    },
                    [
                        {
                            "item": "kubejs:cog_teeth"
                        },
                    ]
                ],
                "results": [
                    {
                        "id": "kubejs:example_item"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:example_item"
                    },
                    [
                        {
                            "item": "kubejs:cog_teeth"
                        },
                    ]
                ],
                "results": [
                    {
                        "id": "kubejs:example_item"
                    }
                ]
            },
        ],
        "transitional_item": {
            "id": "kubejs:example_item"
        }
    })

    event.custom({
        type: "create:mixing",
        "ingredients": [
            {
                "tag": "minecraft:sand",
            },
            {
                "tag": "c:dusts/quartz",
            },
        ],
        "results": [{
            count: 3,
            id: "oritech:raw_silicon"
        }],
    });

    event.custom({
        type: "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:redstone"
            },
            {
                "type": "fluid_stack",
                "fluid": "minecraft:water",
                "amount": 25,
            },
        ],
        "results": [{
            amount: 25,
            id: "kubejs:red_slurry"
        }],
    });

    // Automate basic circuits
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create:golden_sheet"
        },
        "loops": 1,
        "results": [
            {
                "id": "ccbr:basic_integrated_circuit",
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
                            "item": "minecraft:redstone"
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
                            "item": "minecraft:iron_nugget"
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

    const integrated_circuit_transitional = 'northstar:unfinished_circuit'
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('ccbr:integrated_circuit', 1.0), // Main output, will appear in JEI as the result
        ],
        // Input:
        'ccbr:basic_integrated_circuit',
        // Sequence:
        [
            // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
            // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
            event.recipes.create.deploying(integrated_circuit_transitional, [integrated_circuit_transitional, 'ccbr:lapis_sheet']),
            event.recipes.create.deploying(integrated_circuit_transitional, [integrated_circuit_transitional, 'createaddition:copper_wire']),
            event.recipes.create.pressing(integrated_circuit_transitional, integrated_circuit_transitional)
        ]
    )
    .transitionalItem(integrated_circuit_transitional) // Set the transitional item
    .loops(1) // Set the number of loops

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


    // Chapter 2
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:quartz"
            },
            {
                "type": "fluid_stack",
                "amount": 75,
                "fluid": "kubejs:red_slurry"
            }
        ],
        "results": [
            {
                "id": "create:rose_quartz"
            }
        ]
    });
})