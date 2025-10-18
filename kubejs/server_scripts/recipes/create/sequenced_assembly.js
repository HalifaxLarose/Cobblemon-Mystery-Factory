ServerEvents.recipes(event => {
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
})