ServerEvents.recipes(event => {
    event.recipes.create.splashing([CreateItem.of('minecraft:iron_nugget', 0.25)], 'minecraft:gravel');


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

/*
{
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "forge:plates/iron"
  },
  "loops": 5,
  "results": [
    {
      "chance": 120.0,
      "item": "northstar:circuit"
    }
  ],
  "sequence": [
{
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "northstar:unfinished_circuit"
        },
        {
          "item": "northstar:polished_amethyst"
        }
      ],
      "results": [
        {
          "item": "northstar:unfinished_circuit"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "northstar:unfinished_circuit"
        },
        {
          "item": "minecraft:copper_ingot"
        }
      ],
      "results": [
        {
          "item": "northstar:unfinished_circuit"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "northstar:unfinished_circuit"
        },
        {
          "item": "minecraft:gold_ingot"
        }
      ],
      "results": [
        {
          "item": "northstar:unfinished_circuit"
        }
      ]
    },
    {
      "type": "northstar:engraving",
      "ingredients": [
        {
          "item": "northstar:unfinished_circuit"
        }
      ],
      "results": [
        {
          "item": "northstar:unfinished_circuit"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "northstar:unfinished_circuit"
  }
}
  */