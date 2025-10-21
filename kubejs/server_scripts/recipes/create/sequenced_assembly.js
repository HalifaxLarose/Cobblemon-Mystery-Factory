ServerEvents.recipes(event => {
    // Cog custom sequence
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

    // Earlier basic integrated circuit automation
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

    // Making processing units accessible earlier
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ccbr:basic_integrated_circuit"
        },
        "loops": 1,
        "results": [
            {
                "id": "oritech:processing_unit",
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
                            "item": "createaddition:electrum_wire"
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
                            "item": "createaddition:electrum_wire"
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
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "kubejs:example_item"
                    }
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
})