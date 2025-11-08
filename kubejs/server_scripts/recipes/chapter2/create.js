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
                        "item": "kubejs:example_item"
                    },
                    [
                        {
                            "item": "minecraft:redstone"
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
                            "item": "minecraft:iron_nugget"
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


    // Chapter 2
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:quartz"
            },
            {
                "type": "fluid_stack",
                "amount": 125,
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